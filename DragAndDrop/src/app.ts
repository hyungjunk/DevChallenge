import { autobind } from "./utils/autobind";
import {
  Draggable,
  DragTarget,
  Project,
  ProjectStatus,
  State,
} from "./types/index";

// State Manager
class ProjectState extends State<Project> {
  private static instance: ProjectState;
  private constructor(private _projects: Project[] = []) {
    super();
  }

  static getInstance() {
    if (ProjectState.instance) {
      return ProjectState.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(projectProps: [string, string, number]) {
    const [title, description, people] = projectProps;
    const project = new Project(
      Math.random().toString(),
      title,
      description,
      people,
      ProjectStatus.ACTIVE
    );
    this._projects.push(project);
    this.runListeners();
  }

  moveProject(projectId: string, status: ProjectStatus) {
    const project = this.projects.find((project) => project.id === projectId);
    if (project && project.status !== status) {
      project.status = status;
      this.runListeners();
    }
  }

  private runListeners() {
    this.listeners.forEach((listener) => listener(this.projects.slice()));
  }

  get projects() {
    return this._projects;
  }
}

const projectState = ProjectState.getInstance();

abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtFirst: boolean,
    newElementId?: string
  ) {
    this.templateElement = <HTMLTemplateElement>(
      document.getElementById(templateId)
    );

    // DocumentFragment는 경량화 된 DOM. Insert를 하지 않았다면 Dom에 mount되지 않았기 때문에 조작을 해도 reflow, rendering이 일어나지 않음.
    // 따라서 여러차례 변경이 생기는 DOM 조작이 있고 DocumentFragment에서 조립해서 DOM에 Insert 하는 것이 성능에 이점이 있다.
    this.hostElement = <T>document.getElementById(hostElementId);
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = <U>importedNode.firstElementChild;
    if (newElementId) {
      this.element.id = newElementId;
    }

    // TODO: 어째서 이 method가 먼저 실행되는데도 ProjectItem에서 this.element수정한 내용이 반영되어있는가?
    this.attach(insertAtFirst);
  }

  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? "afterbegin" : "beforeend",
      this.element
    );
  }

  abstract configure(): void;
  abstract renderContent(): void;
}

class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable
{
  get persons() {
    const suffix =
      this.project.people > 1 ? "people assigned" : "person assigned";
    return `${this.project.people} ${suffix}`;
  }

  constructor(private project: Project, hostId: string) {
    super("single-project", hostId, false, project.id);
    this.configure();
    this.renderContent();
  }

  configure() {
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }

  renderContent() {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.persons;
    this.element.querySelector("p")!.textContent = this.project.description;
  }

  @autobind
  dragStartHandler(event: DragEvent): void {
    event.dataTransfer!.setData("text/plain", this.project.id);
    event.dataTransfer!.effectAllowed = "move";
  }

  @autobind
  dragEndHandler(event: DragEvent): void {
    console.log("dragend");
  }
}

class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement?: HTMLInputElement;
  descriptionInputElement?: HTMLInputElement;
  peopleInputElement?: HTMLInputElement;
  submitBtnElement?: HTMLButtonElement;

  constructor() {
    super("project-input", "app", true, "user-input");
    this.configure();
    this.renderContent();
  }

  configure() {
    this.titleInputElement = document.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = document.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = document.querySelector(
      "#people"
    ) as HTMLInputElement;
    this.submitBtnElement = document.querySelector(
      "button"
    ) as HTMLButtonElement;
    this.element!.addEventListener("submit", this.submit);
  }

  renderContent() {}

  @autobind
  submit(e: Event): void {
    e.preventDefault();
    const userInput = this.gatherUserInput();
    if (userInput) {
      projectState.addProject(userInput);
      this.clearInput();
      return;
    }
    alert("Check your input");
  }

  private clearInput() {
    [
      this.titleInputElement!,
      this.descriptionInputElement!,
      this.peopleInputElement!,
    ].forEach((el: HTMLInputElement) => {
      el.value = "";
    });
  }

  private gatherUserInput(): [string, string, number] | void {
    const titleInput = this.titleInputElement!.value;
    const descriptionInput = this.descriptionInputElement!.value;
    const peopleInput = this.peopleInputElement!.value;
    // if (
    //   validate({ value: titleInput, minLength: 2, required: true }) &&
    //   validate({ value: descriptionInput, minLength: 5, required: true }) &&
    //   validate({ value: peopleInput, required: true, max: 5 })
    // )
    return [titleInput, descriptionInput, +peopleInput];
  }
}

class ProjectList
  extends Component<HTMLDivElement, HTMLDivElement>
  implements DragTarget
{
  assignedProjects: Project[] = [];

  constructor(private type: ProjectStatus) {
    super("project-list", "app", false, `${type}-projects`);
    this.configure();
    this.renderContent();
  }

  configure() {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);
    this.element.addEventListener("drop", this.dropHandler);

    projectState.addListener((projects: Project[]) => {
      this.assignedProjects = projects.filter((project: Project) => {
        if (this.type === ProjectStatus.ACTIVE) {
          return project.status === ProjectStatus.ACTIVE;
        }
        return project.status === ProjectStatus.FINISHED;
      });
      this.renderProjects();
    });
  }

  renderContent() {
    this.element!.querySelector("ul")!.id = `${this.type}-projects-list`;
    this.element!.querySelector("h2")!.innerText =
      `${this.type}-projects`.toUpperCase();
  }

  private renderProjects() {
    this.clearRenderedProjects();
    for (const projectItem of this.assignedProjects) {
      new ProjectItem(projectItem, `${this.element.id}-list`);
    }
  }

  /*
    dom에서 이미 렌더링 된 li 요소를 비교하는 것보다 이게 더 빠르다.
   */
  private clearRenderedProjects() {
    const listEl = <HTMLUListElement>(
      document.getElementById(`${this.type}-projects-list`)!
    );
    listEl.innerHTML = "";
  }
  // TODO
  // @debounce
  @autobind
  dragOverHandler(event: DragEvent): void {
    if (event.dataTransfer?.types[0] === "text/plain") {
      // drop event는 drag event를 prevent default 해야 trigger 됨
      event.preventDefault();
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.add("droppable");
    }
  }

  @autobind
  dragLeaveHandler(event: DragEvent): void {
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable");
  }

  @autobind
  dropHandler(event: DragEvent): void {
    const projectId = event.dataTransfer!.getData("text/plain");
    projectState.moveProject(projectId, this.type);
  }
}

new ProjectInput();
new ProjectList(ProjectStatus.ACTIVE);
new ProjectList(ProjectStatus.FINISHED);
