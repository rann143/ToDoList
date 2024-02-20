class Project {
 constructor(name) {
    this.name = name;
    this.taskList = [];
 }

 addTask(task) {
    this.taskList.push(task);
 }

 createTask(name, description, date, priority) {
    let task = new Task(name, description, date, priority);
    this.taskList.push(task); 
}

 deleteTask(thisTask) {
    this.taskList = this.taskList.filter((task) => task.name !== thisTask);
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

const projectDependencies = (function() {
    const defaultProject = new Project("Default");
    const projects = [defaultProject];

    return {
        defaultProject,
        projects,
    }
})();

function createProject(name) {
    let newProject = new Project(name);
    projectDependencies.projects.push(newProject);
    //return newProject;
    return projectDependencies.projects;
}

function getProject(project) {
    
}

function deleteProject(projectName) {

    if (projectName !== projectDependencies.defaultProject.name) {
        projectDependencies.projects = projectDependencies.projects.filter(project => 
            project.name !== projectName);
    } else {
        alert("Can't remove Default Project");
    }
}

export {Project, Task, createProject, deleteProject, projectDependencies};