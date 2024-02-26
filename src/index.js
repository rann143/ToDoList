import { longFormatters } from "date-fns";
import { Project, Task, } from "./classes.js";
import {projectDependencies, projManager } from "./functions.js";
import { ManageModals } from "./modals.js";
import { display } from "./display.js"; 
import { saveToStorage, loadInfoFromStorage } from "./storage.js";

loadInfoFromStorage();


display.createNewProjectButton();
display.createNewTaskButton();
projManager.getProject(projectDependencies.currentProject.name).taskList.forEach((task) => {
    display.createTaskDiv(task);
    display.createTaskDeleteButton(task);
})


//CREATING PLACEHOLDER PROJECTS FOR VISUALS & PRACTICE
// projManager.createProject("Groceries for Feb");
// projManager.createProject("Fishing Trip");

// projectDependencies.projects[1].createTask(
//     "Get Bread",
//     "Sourdough for Grilled Cheesies",
//     "2/22/24",
//     "Medium"
// )
// projectDependencies.projects[1].addTask(

//     projectDependencies.projects[1].createTask(
//             "Get Milk",
//             "Whole Milk for Tomato Soup",
//             "2/22/24",
//             "Medium")

// );
// projManager.getProject("Groceries for Feb").addTask(

//     projManager.getProject("Groceries for Feb").createTask("Buy Turmeric", 
//                         "Need this for tea", 
//                         "3/1/24", 
//                         "high")
                        
//                         );

// projManager.getProject("Fishing Trip").addTask(

//     projManager.getProject("Fishing Trip").createTask("Bait Time",
//                         "Get Worms & Nightcrawlers",
//                         "2/25/24",
//                         "Low")
//             );

// projManager.getProject("Fishing Trip").addTask(
            
//     projManager.getProject("Fishing Trip").createTask("Buy Clothes",
//                         "Get Waders",
//                         "2/29/24",
//                         "high")
//             );

// projManager.getProject("Fishing Trip").editTask("Buy Clothes", 
//                         "Go to Dick's Sporting Goods",
//                         "Get some Water Pants",
//                         "2/28/24",
//                         "med");

//DISPLAYING Pre-made Projects
projectDependencies.projects.forEach((project) => {
    display.createProjectButton(project);
})

for (let i=1; i<projectDependencies.projects.length; i++) {
    display.createProjectDeleteButton(projectDependencies.projects[i])
}

//Event Listeners for Modal Submit Buttons
const projectSubmitBtn = document.querySelector('#proj-sub-btn');
projectSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    display.addNewProjectToScreen();
    ManageModals().closeModal();
})

const taskSubmitBtn = document.querySelector('#task-sub-btn');
taskSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(projectDependencies.currentProject.name);
    display.addNewTaskToScreen(projectDependencies.currentProject.name);
    ManageModals().closeModal();
})


