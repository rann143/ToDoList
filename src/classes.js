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

editTask(taskName, newName, newDescription, newDate, newPriority){
    this.deleteTask(taskName);
    this.createTask(newName, newDescription, newDate, newPriority);
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

function getProject(projectName) {
    let thisProject = projectDependencies.projects.filter(project => project.name == projectName);
    let selectedProject = thisProject[0];
    return selectedProject;
    
}

function changeProjectName(projectName, newName) {
    return getProject(projectName).name = newName;
}

function deleteProject(projectName) {

    if (projectName !== projectDependencies.defaultProject.name) {
        projectDependencies.projects = projectDependencies.projects.filter(project => 
            project.name !== projectName);
    } else {
        alert("Can't remove Default Project");
    }
}

export {Project, Task, createProject, deleteProject, getProject, changeProjectName, projectDependencies};