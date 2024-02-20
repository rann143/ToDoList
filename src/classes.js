class Project {
 constructor(name) {
    this.name = name;
    this.taskList = [];
 }

 addTask(task) {
    this.taskList.push(task);
 }

 deleteTask(thisTask) {
    this.taskList = this.taskList.filter((task) => task !== thisTask);
 }

 logTasks() {
    console.log(this.taskList);
 }

}

class Task {
    constructor(name, description, date, priority){
        this.name = name;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.complete = false;
    }

}

function createTask(name, description, date, priority) {
    let task = new Task(name, description, date, priority); 
    return task;
}

function createProject(name) {
    let project = new Project(name);
    return project;
}

export {Project, Task, createTask, createProject};