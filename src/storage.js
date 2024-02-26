import { projectDependencies, projManager } from "./functions";
import { Project, Task } from "./classes.js";


function saveToStorage() {
    localStorage.setItem("projects", JSON.stringify(projectDependencies.projects));
}

function loadInfoFromStorage() {
    if (!localStorage.getItem("projects")) {
        projectDependencies.projects = [];
        projManager.createProject("Default");
        saveToStorage();
    }   

    projectDependencies.projects = JSON.parse(localStorage.getItem("projects"));
    projectDependencies.projects.forEach(project => { 
        project.addTask = function(task) {
            this.taskList.push(task);
        }

        project.createTask = function(name, description, date, priority) {
            let task = new Task(name, description, date, priority);
            return task;
        }

        project.deleteTask = function(thisTask) {
            this.taskList = this.taskList.filter((task) => task.name !== thisTask);
        }
    })

}


export { saveToStorage, loadInfoFromStorage };