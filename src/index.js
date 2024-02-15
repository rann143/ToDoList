import { Project, ProjectManager } from './project.js';
import { ToDoManager } from './todos.js';
import { createHomePage,
        addProjectToList,
        // displayProjectTodos, 
        createAddNewProjectButton,
        // createAddNewToDoButton,
        } from './screendisplay.js';

console.log("Big Dawgs STAY barkin");

const container = document.querySelector('#container');
container.appendChild(createHomePage());



const projectManage = ProjectManager();
const projectArray = projectManage.getMyProjects();

console.log(projectManage.getMyProjects());



const sickoProj = new Project("Sicko Mode Project");
projectArray.push(sickoProj);
console.log(projectArray);

sickoProj.createNewToDoItem("Oil Change");
console.log(projectArray);

const bigBoyProject = new Project("Big Boy Responsibilites");
bigBoyProject.createNewToDoItem("Fix Sink");
bigBoyProject.createNewToDoItem("Cook Dinner");
projectArray.push(bigBoyProject);



createAddNewProjectButton();
addProjectToList();
//createAddNewToDoButton();
//displayProjectTodos();

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

        // create add new todo button
        createAddNewToDoButton();

        //display todo list for that project


    
    });

})











