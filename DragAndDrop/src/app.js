var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Validator
import { allPass } from "ramda";
import { isBiggerThan, isLongerThan, isRequired, isShorterThan, isSmallerThan, } from "../validator/runners";
function validate(validatableInput) {
    const result = allPass([
        isRequired,
        isLongerThan,
        isShorterThan,
        isBiggerThan,
        isSmallerThan,
    ])(validatableInput);
    console.log(result);
    return result;
}
// Autobinder
function autobind(_, _2, propDesc) {
    return {
        configurable: propDesc.configurable,
        enumerable: propDesc.enumerable,
        get() {
            return propDesc.value.bind(this);
        },
    };
}
class ProjectInput {
    projectList;
    templateElement;
    hostElement;
    element;
    titleInputElement;
    descriptionInputElement;
    peopleInputElement;
    submitBtnElement;
    constructor(projectList) {
        this.projectList = projectList;
        // TODO: HTML template tag?
        // TODO: Document Fragment의 content?
        // DocumentFragment는 경량화 된 DOM. Insert를 하지 않았다면 Dom에 mount되지 않았기 때문에 조작을 해도 reflow, rendering이 일어나지 않음.
        // 따라서 여러차례 변경이 생기는 DOM 조작이 있고 DocumentFragment에서 조립해서 DOM에 Insert 하는 것이 성능에 이점이 있음
        this.templateElement = (document.getElementById("project-input"));
        this.hostElement = document.getElementById("app");
        this.attachFormElement();
    }
    attachFormElement() {
        this.element = this.templateElement.content
            .firstElementChild;
        this.element.id = "user-input";
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
        this.initInputElements();
    }
    initInputElements() {
        this.titleInputElement = document.querySelector("#title");
        this.descriptionInputElement = document.querySelector("#description");
        this.peopleInputElement = document.querySelector("#people");
        this.submitBtnElement = document.querySelector("button");
        this.element.addEventListener("submit", this.submit);
    }
    submit(e) {
        e.preventDefault();
        const userInput = this.gatherUserInput();
        console.log(userInput);
        // this.projectList.addProject(userInput);
    }
    gatherUserInput() {
        const titleInput = this.titleInputElement.value;
        const descriptionInput = this.titleInputElement.value;
        const peopleInput = this.titleInputElement.value;
        if (validate({ value: titleInput, minLength: 2, required: true }) &&
            validate({ value: descriptionInput, minLength: 5, required: true }) &&
            validate({ value: peopleInput, minLength: 2, required: true, max: 5 }))
            return [titleInput, descriptionInput, peopleInput];
    }
}
__decorate([
    autobind
], ProjectInput.prototype, "submit", null);
class ProjectList {
    projectList = [];
    addProject(project) {
        //
        this.projectList.push(project);
    }
    removeProject() {
        //
    }
}
const projectList = new ProjectList();
const projectInput = new ProjectInput(projectList);
