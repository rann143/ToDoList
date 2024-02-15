import { ProjectManager } from './project.js';
import { ToDoManager } from './todos.js';
import { createHomePage,
        addProjectToList,
        displayProjectTodos, 
        createAddNewProjectButton,
        createAddNewToDoButton,
        } from './screendisplay.js';

console.log("Big Dawgs STAY barkin");

const container = document.querySelector('#container');
container.appendChild(createHomePage());

console.log(ToDoManager().getToDos());

console.log(ProjectManager().getMyProjects());

createAddNewProjectButton();
addProjectToList();
createAddNewToDoButton();
displayProjectTodos();

// Functionality where if I click a project button in the list of projects,
// the display of the current project div changes to that respective project
// and shows it's to-dos

const projBtns = document.querySelectorAll('.project-button');
const currentProjectDiv = document.querySelector('#current-proj-div');


// put this in screendisplay.js
function clearProjDivChildren() {

    while (currentProjectDiv.firstChild) {
        currentProjectDiv.removeChild(currentProjectDiv.lastChild);
    }

}

projBtns.forEach((btn) => {

    btn.addEventListener('click', event => {

        // remove contents to make space for clicked on project
        clearProjDivChildren();

        // display title of clicked on project
        const projTitle = document.createElement('h2');
        projTitle.textContent = `${btn.textContent}`;
        currentProjectDiv.appendChild(projTitle);

        //display todo list for that project
        

    
    });

})











