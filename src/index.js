import { Project, ProjectManager } from './project.js';
import { ToDoItem } from './todos.js';
import { createHomePage } from './screendisplay.js';

console.log("Big Dawgs STAY barkin");
//WORKING ON ADDING TODOITEM FUNCTIONALITY

const container = document.querySelector('#container');
container.appendChild(createHomePage());
const projectManage = ProjectManager();
const projectArray = projectManage.getMyProjects();

const addButtonForNewProject = () => {

    const projectListDiv = document.querySelector('#proj-list-div');
    const newProject = projectArray[projectArray.length - 1];

    
        const projBtn = document.createElement('button');
        projBtn.classList.add('project-button');
        projBtn.textContent = `${newProject.title}`;
        projBtn.setAttribute('data-projid', projectArray.indexOf(projectArray[projectArray.length - 1]));

        // this project listener clears the expanded project section and displays selected
        // project details
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

    
        
        });

        //This project listener will get the currently selected project Object from the project array
        projBtn.addEventListener('click', event => {

            const thisProject = projectArray[projBtn.dataset.projid];
            console.log(thisProject);


            // ************************
            const currentProjectDiv = document.querySelector('#current-proj-div');

            thisProject.toDos.forEach((todo) => {
                const toDoBtn = document.createElement('button');
                toDoBtn.classList.add('todo-button');
                toDoBtn.textContent = `${todo.title}`

                toDoBtn.addEventListener('click', event => {
                    console.log(todo);
                })

                currentProjectDiv.appendChild(toDoBtn);
            })

            return currentProjectDiv;
            // **********************

        })

        projectListDiv.appendChild(projBtn);


    return projectListDiv;

}

function addEventListenerToProjectSubmitButton() {
    const submitNewProjBtn = document.querySelector("#submit-new-proj-btn");
    const dialog = document.querySelector("#project-dialog");
    submitNewProjBtn.addEventListener('click', event => {
        event.preventDefault();
        //Add new project
        const titleInput = document.querySelector('#title-input');
        const newProject = new Project(titleInput.value);
        projectArray.push(newProject);
        addButtonForNewProject();
        titleInput.value = "";
        
        dialog.close();

    })
}

const createAddNewProjectButton = () => {

    const projectListDiv = document.querySelector('#proj-list-div');
    const dialog = document.querySelector("#project-dialog");

    const newProjectBtn = document.createElement('button');
    newProjectBtn.setAttribute('id', 'new-proj-button');
    newProjectBtn.textContent = "+ New Project";

    addEventListenerToProjectSubmitButton();
    
    newProjectBtn.addEventListener('click', event => {
        dialog.showModal();
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

function addNewToDo(title, descr, dueDate, priority, notes, completed) {

    //WORK ON THIS

    const titleInput = document.querySelector('#todo-title-input');
    const descrInput = document.querySelector('#todo-descr-input');
    const dateInput = document.querySelector('#todo-date-input');
    const priorityInput = document.querySelector('#todo-priority-input');
    const notesInput = document.querySelector('#todo-notes-input');
    const completedInput = document.querySelector('#todo-completed-input');

    title = titleInput.value;
    descr = descrInput.value;
    dueDate = dateInput.value;
    priority = priorityInput.value;
    notes = notesInput.value;
    completed = completedInput.value; //Just set as text input for now

    titleInput.value = "";
    descrInput.value = "";
    dateInput.value = "";
    priorityInput.value = "";
    notesInput.value = "";
    completedInput.value = "";

    

    const newToDo = new ToDoItem(title, descr, dueDate, priority, notes, completed);

    return newToDo;

    //now add this ToDoItem to the respective project



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
        //Get current Project & Add new todo
        addNewToDo();
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
            // homeProj.toDos.forEach((todo) => {
            // const toDoBtn = document.createElement('button');
            // toDoBtn.classList.add('todo-button');
            // toDoBtn.textContent = `${todo.title}`

            // toDoBtn.addEventListener('click', event => {
            //     console.log(todo);
            //     })

            // currentProjectDiv.appendChild(toDoBtn);
            // })

            
    
        
        });

        projBtn.addEventListener('click', event => {

            const thisProject = projectArray[projBtn.dataset.projid];
            console.log(thisProject);
// new
const currentProjectDiv = document.querySelector('#current-proj-div');

            thisProject.toDos.forEach((todo) => {
                const toDoBtn = document.createElement('button');
                toDoBtn.classList.add('todo-button');
                toDoBtn.textContent = `${todo.title}`

                toDoBtn.addEventListener('click', event => {
                    console.log(todo);
                })

                currentProjectDiv.appendChild(toDoBtn);
            })

            return currentProjectDiv;

        })

        projectListDiv.appendChild(projBtn);
// new

    })

    displayProjectTodos();

    return projectListDiv;

})();

// loadDefaultProject();
















