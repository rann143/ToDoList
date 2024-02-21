import { longFormatters } from "date-fns";
import { Project, Task, } from "./classes.js"
import {projectDependencies, projManager } from "./functions.js";
import { display } from "./display.js"; 

display.createNewProjectButton();


projManager.createProject("Groceries for Feb");
projManager.createProject("Shopping for Feb");
projManager.createProject("Activities for Feb");

console.log("create passion fruit");
projManager.createProject("Buy Passion Fruit");

projectDependencies.projects.forEach(project => console.log(project));

console.log("create and add task");
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

projManager.createProject("Fishing");

projManager.getProject("Fishing").createTask("Bait Time",
"Get Worms & Nightcrawlers",
"2/25/24",
"Low");

projManager.changeProjectName("Fishing", "Fishing Trip");

projManager.getProject("Fishing Trip").createTask("Buy Clothes",
"Get Waders",
"2/29/24",
"high");

projManager.getProject("Fishing Trip").editTask("Buy Clothes", 
"Go to Dick's Sporting Goods",
"Get some Water Pants",
"2/28/24",
"med");

projManager.showProjects();

projManager.showProjectTaskList("Groceries for Feb");

projManager.getProject("Groceries for Feb").createTask("Buy Turmeric", "Need this for tea", "3/1/24", "high");

projManager.showProjectTaskList("Groceries for Feb");
projManager.showProjectTasksNames("Groceries for Feb");

projManager.showProjects();
projManager.showProjectsNames();




display.showProjectList();

//Event Listeners for Project Buttons
const projectBtns = document.querySelectorAll(".project-button");
const taskListDiv = document.querySelector('.task-list-div');

projectBtns.forEach(button => {

    button.addEventListener('click', (e) => { 
        e.preventDefault();
        projManager.showProjectTaskList(projManager.getProject(button.textContent).name)
    });

})

projectBtns.forEach(button => {

    button.addEventListener('click', (e) => { 
        e.preventDefault();
        taskListDiv.replaceChildren();
        projManager.getProject(button.textContent).taskList.forEach((task) => {
            display.displayTask(task);
        })
    });

})



//Event Listener for Add New Project Button



