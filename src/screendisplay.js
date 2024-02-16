import { ToDoManager } from "./todos";
import { Project, ProjectManager } from "./project"; 
import { sub } from "date-fns";

const projArray = ProjectManager().getMyProjects();

const createHomePage = () => {

    const homeContainer = document.createElement('div');
    homeContainer.setAttribute('id', 'home-container');

    const projectListDiv = document.createElement('div');
    const projectsListTitle = document.createElement('h2');
    projectListDiv.setAttribute('id', 'proj-list-div');
    projectsListTitle.setAttribute('id', 'proj-list-title');
        
    const currentProjectDiv = document.createElement('div');
    // const currentProjectHeader = document.createElement('div');
    // const currentProjectBody = document.createElement('div');
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



// const displayProjectTodos = () => {

//     const currentProjectDiv = document.querySelector('#current-proj-div');

//     const toDo = ToDoManager()

//     const todoArray = toDo.getToDos();

//     todoArray.forEach((todo) => {
//         const toDoBtn = document.createElement('button');
//         toDoBtn.classList.add('todo-button');
//         toDoBtn.textContent = `${todo.title}`

//         toDoBtn.addEventListener('click', event => {
//             console.log(todo);
//         })

//         currentProjectDiv.appendChild(toDoBtn);
//     })

//     return currentProjectDiv;

// }

// const createAddNewToDoButton = () => {

//     const currentProjectDiv = document.querySelector('#current-proj-div');

//     const dialog = document.querySelector("dialog");

//     const newToDoBtn = document.createElement('button');
//     newToDoBtn.setAttribute('id', 'new-todo-button');
//     newToDoBtn.textContent = "+ New To-Do";

//     newToDoBtn.addEventListener('click', event => {
//         dialog.showModal();
//     })

//     const submitNewToDoBtn = document.querySelector("#submit-new-todo-btn");
//     submitNewToDoBtn.addEventListener('click', event => {
//         event.preventDefault();
//         //Add new project
//         //ProjectManager().addProject();
//         dialog.close();

//     })

//     currentProjectDiv.appendChild(newToDoBtn);

//     return currentProjectDiv;

// }




 export { 
     createHomePage,
 }

