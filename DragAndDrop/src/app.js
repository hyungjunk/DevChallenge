var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { autobind } from "./utils/autobind";
import { Project, ProjectStatus, State, } from "./types/index";
import simpleworld from "./simple";
console.log(simpleworld);
// State Manager
class ProjectState extends State {
    _projects;
    static instance;
    constructor(_projects = []) {
        super();
        this._projects = _projects;
    }
    static getInstance() {
        if (ProjectState.instance) {
            return ProjectState.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addProject(projectProps) {
        const [title, description, people] = projectProps;
        const project = new Project(Math.random().toString(), title, description, people, ProjectStatus.ACTIVE);
        this._projects.push(project);
        this.runListeners();
    }
    moveProject(projectId, status) {
        const project = this.projects.find((project) => project.id === projectId);
        if (project && project.status !== status) {
            project.status = status;
            this.runListeners();
        }
    }
    runListeners() {
        this.listeners.forEach((listener) => listener(this.projects.slice()));
    }
    get projects() {
        return this._projects;
    }
}
const projectState = ProjectState.getInstance();
class Component {
    templateElement;
    hostElement;
    element;
    constructor(templateId, hostElementId, insertAtFirst, newElementId) {
        this.templateElement = (document.getElementById(templateId));
        // DocumentFragment는 경량화 된 DOM. Insert를 하지 않았다면 Dom에 mount되지 않았기 때문에 조작을 해도 reflow, rendering이 일어나지 않음.
        // 따라서 여러차례 변경이 생기는 DOM 조작이 있고 DocumentFragment에서 조립해서 DOM에 Insert 하는 것이 성능에 이점이 있다.
        this.hostElement = document.getElementById(hostElementId);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId;
        }
        // TODO: 어째서 이 method가 먼저 실행되는데도 ProjectItem에서 this.element수정한 내용이 반영되어있는가?
        this.attach(insertAtFirst);
    }
    attach(insertAtBeginning) {
        this.hostElement.insertAdjacentElement(insertAtBeginning ? "afterbegin" : "beforeend", this.element);
    }
}
class ProjectItem extends Component {
    project;
    get persons() {
        const suffix = this.project.people > 1 ? "people assigned" : "person assigned";
        return `${this.project.people} ${suffix}`;
    }
    constructor(project, hostId) {
        super("single-project", hostId, false, project.id);
        this.project = project;
        this.configure();
        this.renderContent();
    }
    configure() {
        this.element.addEventListener("dragstart", this.dragStartHandler);
        this.element.addEventListener("dragend", this.dragEndHandler);
    }
    renderContent() {
        this.element.querySelector("h2").textContent = this.project.title;
        this.element.querySelector("h3").textContent = this.persons;
        this.element.querySelector("p").textContent = this.project.description;
    }
    dragStartHandler(event) {
        event.dataTransfer.setData("text/plain", this.project.id);
        event.dataTransfer.effectAllowed = "move";
    }
    dragEndHandler(event) {
        console.log("dragend");
    }
}
__decorate([
    autobind
], ProjectItem.prototype, "dragStartHandler", null);
__decorate([
    autobind
], ProjectItem.prototype, "dragEndHandler", null);
class ProjectInput extends Component {
    titleInputElement;
    descriptionInputElement;
    peopleInputElement;
    submitBtnElement;
    constructor() {
        super("project-input", "app", true, "user-input");
        this.configure();
        this.renderContent();
    }
    configure() {
        this.titleInputElement = document.querySelector("#title");
        this.descriptionInputElement = document.querySelector("#description");
        this.peopleInputElement = document.querySelector("#people");
        this.submitBtnElement = document.querySelector("button");
        this.element.addEventListener("submit", this.submit);
    }
    renderContent() { }
    submit(e) {
        e.preventDefault();
        const userInput = this.gatherUserInput();
        if (userInput) {
            projectState.addProject(userInput);
            this.clearInput();
            return;
        }
        alert("Check your input");
    }
    clearInput() {
        [
            this.titleInputElement,
            this.descriptionInputElement,
            this.peopleInputElement,
        ].forEach((el) => {
            el.value = "";
        });
    }
    gatherUserInput() {
        const titleInput = this.titleInputElement.value;
        const descriptionInput = this.descriptionInputElement.value;
        const peopleInput = this.peopleInputElement.value;
        // if (
        //   validate({ value: titleInput, minLength: 2, required: true }) &&
        //   validate({ value: descriptionInput, minLength: 5, required: true }) &&
        //   validate({ value: peopleInput, required: true, max: 5 })
        // )
        return [titleInput, descriptionInput, +peopleInput];
    }
}
__decorate([
    autobind
], ProjectInput.prototype, "submit", null);
class ProjectList extends Component {
    type;
    assignedProjects = [];
    constructor(type) {
        super("project-list", "app", false, `${type}-projects`);
        this.type = type;
        this.configure();
        this.renderContent();
    }
    configure() {
        this.element.addEventListener("dragover", this.dragOverHandler);
        this.element.addEventListener("dragleave", this.dragLeaveHandler);
        this.element.addEventListener("drop", this.dropHandler);
        projectState.addListener((projects) => {
            this.assignedProjects = projects.filter((project) => {
                if (this.type === ProjectStatus.ACTIVE) {
                    return project.status === ProjectStatus.ACTIVE;
                }
                return project.status === ProjectStatus.FINISHED;
            });
            this.renderProjects();
        });
    }
    renderContent() {
        this.element.querySelector("ul").id = `${this.type}-projects-list`;
        this.element.querySelector("h2").innerText =
            `${this.type}-projects`.toUpperCase();
    }
    renderProjects() {
        this.clearRenderedProjects();
        for (const projectItem of this.assignedProjects) {
            new ProjectItem(projectItem, `${this.element.id}-list`);
        }
    }
    /*
      dom에서 이미 렌더링 된 li 요소를 비교하는 것보다 이게 더 빠르다.
     */
    clearRenderedProjects() {
        const listEl = (document.getElementById(`${this.type}-projects-list`));
        listEl.innerHTML = "";
    }
    // TODO
    // @debounce
    dragOverHandler(event) {
        if (event.dataTransfer?.types[0] === "text/plain") {
            // drop event는 drag event를 prevent default 해야 trigger 됨
            event.preventDefault();
            const listEl = this.element.querySelector("ul");
            listEl.classList.add("droppable");
        }
    }
    dragLeaveHandler(event) {
        const listEl = this.element.querySelector("ul");
        listEl.classList.remove("droppable");
    }
    dropHandler(event) {
        const projectId = event.dataTransfer.getData("text/plain");
        projectState.moveProject(projectId, this.type);
    }
}
__decorate([
    autobind
], ProjectList.prototype, "dragOverHandler", null);
__decorate([
    autobind
], ProjectList.prototype, "dragLeaveHandler", null);
__decorate([
    autobind
], ProjectList.prototype, "dropHandler", null);
new ProjectInput();
new ProjectList(ProjectStatus.ACTIVE);
new ProjectList(ProjectStatus.FINISHED);
