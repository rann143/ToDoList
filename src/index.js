import { longFormatters } from "date-fns";
import { Project, Task, } from "./classes.js";
import {projectDependencies, projManager } from "./functions.js";
import { ManageModals } from "./modals.js";
import { display } from "./display.js"; 

display.createNewProjectButton();
display.createNewTaskButton();


//CREATING PLACEHOLDER PROJECTS FOR VISUALS & PRACTICE
projManager.createProject("Groceries for Feb");
projManager.createProject("Fishing Trip");

projectDependencies.projects[1].createTask(
    "Get Bread",
    "Sourdough for Grilled Cheesies",
    "2/22/24",
    "Medium"
)
projectDependencies.projects[1].createTask(
    "Get Milk",
    "Whole Milk for Tomato Soup",
    "2/22/24",
    "Medium"
)
projManager.getProject("Groceries for Feb")
            .createTask("Buy Turmeric", 
                        "Need this for tea", 
                        "3/1/24", 
                        "high");

projManager.getProject("Fishing Trip")
            .createTask("Bait Time",
                        "Get Worms & Nightcrawlers",
                        "2/25/24",
                        "Low");

projManager.getProject("Fishing Trip")
            .createTask("Buy Clothes",
                        "Get Waders",
                        "2/29/24",
                        "high");

projManager.getProject("Fishing Trip")
            .editTask("Buy Clothes", 
                        "Go to Dick's Sporting Goods",
                        "Get some Water Pants",
                        "2/28/24",
                        "med");







//DISPLAYING BELOW

projectDependencies.projects.forEach((project) => {
    display.displayProject(project);
})

//Event Listeners for Project Buttons
const projectBtns = document.querySelectorAll(".project-button");
const taskListDiv = document.querySelector('.task-list-div');
const newProjectButton = document.querySelector("new-proj-button");


projectBtns.forEach(button => {

    button.addEventListener('click', (e) => { 
        e.preventDefault();
        taskListDiv.replaceChildren();
        //currentProject = projManager.getProject(button.textContent);
        projManager.getProject(button.textContent).taskList.forEach((task) => {
            display.displayTask(task);
        })
        projManager.showProjectTaskList(projManager.getProject(button.textContent).name)
        console.log(projectBtns);
        //console.log(currentProject);
    });

})

const projectSubmitBtn = document.querySelector('#proj-sub-btn');
projectSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    display.addNewProjectToScreen();
    ManageModals().closeModal();
})


//UNCOMMENT ONCE addNewTaskToScreen(); IS FINISHED
// const taskSubmitBtn = document.querySelector('#task-sub-btn');
// taskSubmitBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     //FIGURING OUT HOW AND WHERE TO DEFINE CURRENTPROJECT
//     display.addNewTaskToScreen(currentProject);
//     ManageModals().closeModal();
// })


