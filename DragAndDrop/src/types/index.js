export var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["ACTIVE"] = "active";
    ProjectStatus["FINISHED"] = "finished";
})(ProjectStatus || (ProjectStatus = {}));
export class Project {
    id;
    title;
    description;
    people;
    status;
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}
export class State {
    listeners = [];
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
}
