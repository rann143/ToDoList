import { ToDoManager } from "./todos";
import { ProjectManager } from "./project"; 
import { sub } from "date-fns";


const createHomePage = () => {

    const homeContainer = document.createElement('div');
    homeContainer.setAttribute('id', 'home-container');

    const projectListDiv = document.createElement('div');
    const projectsListTitle = document.createElement('h2');
    projectListDiv.setAttribute('id', 'proj-list-div');
    projectsListTitle.setAttribute('id', 'proj-list-title');
        
    const currentProjectDiv = document.createElement('div');
    const currentProjectTitle = document.createElement('h2');
    currentProjectDiv.setAttribute('id', 'current-proj-div');
    currentProjectTitle.setAttribute('id', 'current-proj-title');
        
    projectsListTitle.textContent = "My Projects";
    currentProjectTitle.textContent = "Home"; //placeholder for now

    projectListDiv.appendChild(projectsListTitle);
    currentProjectDiv.appendChild(currentProjectTitle);

    homeContainer.appendChild(projectListDiv);
    homeContainer.appendChild(currentProjectDiv);

    return homeContainer;

}

const addProjectToList = () => {

    const projectListDiv = document.querySelector('#proj-list-div');

    const project = ProjectManager();

    const projArray = project.getMyProjects();

    projArray.forEach((proj) => {

        const projBtn = document.createElement('button');
        projBtn.classList.add('project-button');
        projBtn.textContent = `${proj.title}`
        projectListDiv.appendChild(projBtn);

    })

    return projectListDiv;

}

const createAddNewProjectButton = () => {

    const projectListDiv = document.querySelector('#proj-list-div');

    const dialog = document.querySelector("dialog");

    const newProjectBtn = document.createElement('button');
    newProjectBtn.setAttribute('id', 'new-proj-button');
    newProjectBtn.textContent = "+ New Project";

    newProjectBtn.addEventListener('click', event => {
        dialog.showModal();
    })

    const submitNewProjBtn = document.querySelector("#submit-new-proj-btn");
    submitNewProjBtn.addEventListener('click', event => {
        event.preventDefault();
        //Add new project
        //ProjectManager().addProject();
        dialog.close();

    })

    projectListDiv.appendChild(newProjectBtn);

    return projectListDiv;

}

const displayProjectTodos = () => {

    const currentProjectDiv = document.querySelector('#current-proj-div');

    const toDo = ToDoManager()

    const todoArray = toDo.getToDos();

    todoArray.forEach((todo) => {
        const toDoBtn = document.createElement('button');
        toDoBtn.classList.add('todo-button');
        toDoBtn.textContent = `${todo.title}`

        toDoBtn.addEventListener('click', event => {
            console.log(todo);
        })

        currentProjectDiv.appendChild(toDoBtn);
    })

    return currentProjectDiv;

}

const createAddNewToDoButton = () => {

    const currentProjectDiv = document.querySelector('#current-proj-div');

    const dialog = document.querySelector("dialog");

    const newToDoBtn = document.createElement('button');
    newToDoBtn.setAttribute('id', 'new-todo-button');
    newToDoBtn.textContent = "+ New To-Do";

    newToDoBtn.addEventListener('click', event => {
        dialog.showModal();
    })

    const submitNewToDoBtn = document.querySelector("#submit-new-todo-btn");
    submitNewToDoBtn.addEventListener('click', event => {
        event.preventDefault();
        //Add new project
        //ProjectManager().addProject();
        dialog.close();

    })

    currentProjectDiv.appendChild(newToDoBtn);

    return currentProjectDiv;

}




export { 
    createHomePage,
    addProjectToList,
    createAddNewProjectButton,
    createAddNewToDoButton,
    displayProjectTodos,
 };