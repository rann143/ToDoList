import { ToDoManager } from "./todos";
import { ProjectManager } from "./project"; 


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
    currentProjectTitle.textContent = "This Project"; //placeholder for now

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

    projectListDiv.appendChild(newProjectBtn);

    return projectListDiv;

}

const createThisProjectSection = () => {

    const currentProjectDiv = document.querySelector('#current-proj-div');

}




export { 
    createHomePage,
    addProjectToList,
    createAddNewProjectButton,
    createThisProjectSection,
 };