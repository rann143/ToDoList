import { Project, ProjectManager } from './project.js';
import { ToDoItem } from './todos.js';
import { createHomePage,
        //addProjectToList,
        // displayProjectTodos, 
        //createAddNewProjectButton,
        // createAddNewToDoButton,
        } from './screendisplay.js';

console.log("Big Dawgs STAY barkin");

const container = document.querySelector('#container');
container.appendChild(createHomePage());


const projectManage = ProjectManager();
const projectArray = projectManage.getMyProjects();


const createAddNewProjectButton = () => {

    const projectListDiv = document.querySelector('#proj-list-div');

    const dialog = document.querySelector("dialog");

    const newProjectBtn = document.createElement('button');
    newProjectBtn.setAttribute('id', 'new-proj-button');
    newProjectBtn.textContent = "+ New Project";

    const titleInput = document.querySelector('#title-input');
    
    newProjectBtn.addEventListener('click', event => {
        dialog.showModal();
    })

    const submitNewProjBtn = document.querySelector("#submit-new-proj-btn");
    submitNewProjBtn.addEventListener('click', event => {
        event.preventDefault();
        //Add new project
        const newProject = new Project(titleInput.value);
        projectArray.push(newProject);
        addProjectToList();
        titleInput.value = "";
        
        dialog.close();

    })

    projectListDiv.appendChild(newProjectBtn);

    return projectListDiv;

}

createAddNewProjectButton();

function clearProjDivChildren() {
    const currentProjectDiv = document.querySelector('#current-proj-div');

    while (currentProjectDiv.firstChild) {
        currentProjectDiv.removeChild(currentProjectDiv.lastChild);
    }

}

function createAddNewToDoButton() {

    const currentProjectDiv = document.querySelector('#current-proj-div');

    const toDoDialog = document.querySelector("#todo-dialog");

    const newToDoBtn = document.createElement('button');
    newToDoBtn.setAttribute('id', 'new-todo-button');
    newToDoBtn.textContent = "+ New To-Do";

    newToDoBtn.addEventListener('click', event => {
        toDoDialog.showModal();
    })

    //This is breaking the button - won't show up.
    const submitNewToDoBtn = document.querySelector("#submit-new-todo-btn");
    submitNewToDoBtn.addEventListener('click', event => {
        //event.preventDefault();
        //Add new project
        //ProjectManager().addProject();
        toDoDialog.close();

    })

    currentProjectDiv.appendChild(newToDoBtn);

    return currentProjectDiv;


}

createAddNewToDoButton();

const displayProjectTodos = () => {

    const currentProjectDiv = document.querySelector('#current-proj-div');
    // Need to fix this below
    let newProject = projectArray[projectArray.length - 1];

    newProject.toDos.forEach((todo) => {
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

const addProjectToList = () => {

    const projectListDiv = document.querySelector('#proj-list-div');
    const newProject = projectArray[projectArray.length - 1];

    
        const projBtn = document.createElement('button');
        projBtn.classList.add('project-button');
        projBtn.textContent = `${newProject.title}`;
        projBtn.setAttribute('data-projid', projectArray.indexOf(projectArray[projectArray.length - 1]));

        projBtn.addEventListener('click', event => {

            const currentProjectDiv = document.querySelector('#current-proj-div');

            // remove contents to make space for clicked on project
            clearProjDivChildren()
            // display title of clicked on project
            const projTitle = document.createElement('h2');
            projTitle.textContent = `${newProject.title}`;
            currentProjectDiv.appendChild(projTitle);
    
            // create add new todo button
            createAddNewToDoButton();

            //display todo list for that project
            displayProjectTodos();
    
        
        });

        projectListDiv.appendChild(projBtn);


    return projectListDiv;

}

//This is for helping see the DOM, this projects don't have IDs
//Remove when done
const defaultProject = (function loadDefaultProject() {

    const homeProj = new Project("Home");

    homeProj.createNewToDoItem("Oil Change");
    homeProj.createNewToDoItem("Fix Sink");

    projectArray.push(homeProj);
    console.log(projectArray);

    const projectListDiv = document.querySelector('#proj-list-div');

    projectArray.forEach((proj) => {

        const projBtn = document.createElement('button');
        projBtn.classList.add('project-button');
        projBtn.textContent = `${proj.title}`;
        projBtn.setAttribute('data-projid', projectArray.indexOf(projectArray[projectArray.length - 1]));

        projBtn.addEventListener('click', event => {

            const currentProjectDiv = document.querySelector('#current-proj-div');

            // remove contents to make space for clicked on project
            while (currentProjectDiv.firstChild) {
                currentProjectDiv.removeChild(currentProjectDiv.lastChild);
            }
            // display title of clicked on project
            const projTitle = document.createElement('h2');
            projTitle.textContent = `${proj.title}`;
            currentProjectDiv.appendChild(projTitle);
    
            // create add new todo button
            createAddNewToDoButton();
    
            //display todo list for that project
            //displayProjectTodos();
            // Need to fix this below
            

            homeProj.toDos.forEach((todo) => {
            const toDoBtn = document.createElement('button');
            toDoBtn.classList.add('todo-button');
            toDoBtn.textContent = `${todo.title}`

            toDoBtn.addEventListener('click', event => {
                console.log(todo);
                })

            currentProjectDiv.appendChild(toDoBtn);
            })
    
        
        });

        projectListDiv.appendChild(projBtn);

    })

    displayProjectTodos();

    return projectListDiv;

})();

// loadDefaultProject();




// Functionality where if I click a project button in the list of projects,
// the display of the current project div changes to that respective project
// and shows it's to-dos












