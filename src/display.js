import "./style.css";
import { Project, Task } from "./classes.js";
import { projectDependencies, projManager } from "./functions.js";

const display = (function displayContent() {

    const container = document.querySelector('#container');

    const projectListDiv = document.createElement("div");
    projectListDiv.classList.add("project-list-div");

    const projectListTitle = document.createElement('h2');
    projectListTitle.textContent = "Projects";
    projectListDiv.appendChild(projectListTitle);

    const taskContainer = document.createElement('div');
    taskContainer.classList.add("task-container");
    
    const taskListTitle = document.createElement('h2');
    taskListTitle.textContent = "Tasks";
    taskListTitle.classList.add('task-list-title');
    taskContainer.appendChild(taskListTitle);

    const showProjectList = () => {

        projectDependencies.projects.forEach((project) => {
            const projectBtn = document.createElement('button');
            
            projectBtn.textContent = project.name;
            projectBtn.classList.add("project-button");

            // projectBtn.addEventListener('click', (e) => {
            //     projManager.showProjectTaskList(project.name);
            // });

            projectListDiv.appendChild(projectBtn);
        })

    };

    const createNewProjectButton = () => {

        const newProjectButton = document.createElement('button');
        newProjectButton.classList.add("new-proj-button");
        newProjectButton.textContent = "Add New Project";

        projectListDiv.appendChild(newProjectButton);
        //newProjectButton.addEventListener('click', )

    }

    const showTasks = () => {
        
        

    }

    container.appendChild(projectListDiv);
    container.appendChild(taskContainer);

    return {

        showProjectList,
        createNewProjectButton

    }

})();

export { display };