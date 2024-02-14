import { ProjectManager } from './project.js';
import { ToDoManager } from './todos.js';
import { createHomePage,
        addProjectToList,
        createThisProjectSection, 
        createAddNewProjectButton,
        } from './screendisplay.js';

console.log("Big Dawgs STAY barkin");

const container = document.querySelector('#container');
container.appendChild(createHomePage());

console.log(ToDoManager().getToDos());

console.log(ProjectManager().getMyProjects());

createAddNewProjectButton();
addProjectToList();






