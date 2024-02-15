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

// Functionality where if click a project button in the list of projects,
// the display of the current project div changes to that respective project
// and shows it's to-dos







