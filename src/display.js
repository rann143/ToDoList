import "./style.css";
import { Project, Task } from "./classes.js";
import { projectDependencies, projManager } from "./functions.js";
import { ManageModals } from "./modals.js";

const display = (function displayContent() {

    //Get Overall Container
    const container = document.querySelector('#container');

    //Create Project List Div
    const projectListDiv = document.createElement("div");
    projectListDiv.classList.add("project-list-div");

    // Create and add Title to Project List
    const projectListTitle = document.createElement('h2');
    projectListTitle.textContent = "Projects";
    projectListDiv.appendChild(projectListTitle);

    //Container for Task List & Title of Container
    const taskContainer = document.createElement('div');
    taskContainer.classList.add("task-container");
    
    //Add title to Task Container
    const taskListTitle = document.createElement('h2');
    taskListTitle.textContent = "Tasks";
    taskListTitle.classList.add('task-list-title');
    taskContainer.appendChild(taskListTitle);

    //Add Task List to Task Container
    const taskListDiv = document.createElement('div');
    taskListDiv.classList.add('task-list-div');
    taskContainer.appendChild(taskListDiv);

    //ManageModals
    const modalManager = ManageModals();

    //Close Button on Modals
    const closeBtns = document.querySelectorAll('.btn-close');
    closeBtns.forEach(button => {
        button.addEventListener('click', modalManager.closeModal);
    })


    const createNewProjectButton = () => {

        const newProjectButton = document.createElement('button');
        newProjectButton.classList.add("new-proj-button");
        newProjectButton.textContent = "Add New Project";
        newProjectButton.addEventListener('click', modalManager.openProjectModal);

        projectListDiv.appendChild(newProjectButton);

    }

    const createNewTaskButton = () => {
        const newTaskButton = document.createElement('button');
        newTaskButton.classList.add('new-task-button');
        newTaskButton.textContent = "Add New Task";
        newTaskButton.addEventListener('click', modalManager.openTaskModal);

        taskContainer.appendChild(newTaskButton);
    }


    const displayProject = (project) => {

            const projectBtn = document.createElement('button');
            
            projectBtn.textContent = project.name;
            projectBtn.classList.add("project-button");

            projectListDiv.appendChild(projectBtn);

    };

    const projectTitleInput = document.querySelector('#proj-title-input');
    const addNewProjectToScreen = () => {
        if (projectTitleInput.value !== "") {
            let projectName = projectTitleInput.value
            projectTitleInput.value = "";
            let newProject = projManager.createProject(projectName);
            displayProject(newProject);
            projManager.showProjects();
        } else return;
    }
    // ******************************************************************
    // ^NEW PROJECT BUTTONS ARE NOT BEING ADDED TO THE projBtns NODELIST IN index.js
    // ******************************************************************


    const displayTask = (task) => {

            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task-div');
            taskDiv.textContent = `${task.name} ${task.description} ${task.date} ${task.priority}`;
            taskListDiv.appendChild(taskDiv);

    }

    

    const taskTitleInput = document.querySelector('#task-title-input');
    const taskDescrInput = document.querySelector('#task-descr-input');
    const taskDateInput = document.querySelector('#task-date-input');
    const taskPriorityInput = document.querySelector('#task-priority-input');
    const addNewTaskToScreen = (project) => { 
        let taskName = taskTitleInput.value;
        let taskDescr = taskDescrInput.value;
        let taskDate = taskDateInput.value;
        let taskPriority = taskPriorityInput.value;

        taskTitleInput.value = "";
        taskDescrInput.value = "";
        taskDateInput.value = "";
        taskPriorityInput.value = "";
        //FIGURING OUT HOW AND WHERE TO DEFINE CURRENTPROJECT
        let newTask = projManager.getProject(project).createTask(taskName, taskDescr, taskDate, taskPriority);
        console.log(newTask);

        projManager.getProject(project).addTask(newTask);

        displayTask(newTask);

    }

    container.appendChild(projectListDiv);
    container.appendChild(taskContainer);

    return {

        
        createNewProjectButton,
        createNewTaskButton,
        displayProject,
        displayTask,
        addNewProjectToScreen,
        addNewTaskToScreen,

    }

})();

export { display };