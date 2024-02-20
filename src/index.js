import { longFormatters } from "date-fns";
import { Project, Task, } from "./classes.js"
import {projectDependencies, projManager } from "./functions.js";

function logProjects() {
    projectDependencies.projects.forEach(project => console.log(project));
}


projManager.createProject("Groceries for Feb");
projManager.createProject("Shopping for Feb");
projManager.createProject("Activities for Feb");
projectDependencies.projects.forEach(project => console.log(project));

projManager.deleteProject("Activities for Feb");
console.log("delete project");
projectDependencies.projects.forEach(project => console.log(project));

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
logProjects();

console.log("delete task from project");

projectDependencies.projects[1].deleteTask("Get Milk");

logProjects();

projManager.createProject("Fishing");

projManager.getProject("Fishing").createTask("Bait Time",
"Get Worms & Nightcrawlers",
"2/25/24",
"Low");
console.log(projManager.getProject('Fishing').taskList);

console.log('change project name');

projManager.changeProjectName("Fishing", "Fishing Trip");

projManager.getProject("Fishing Trip").createTask("Buy Clothes",
"Get Waders",
"2/29/24",
"high");

console.log(projManager.getProject("Fishing Trip").taskList);
console.log("test editing task");

projManager.getProject("Fishing Trip").editTask("Buy Clothes", 
"Go to Dick's Sporting Goods",
"Get some Water Pants",
"2/28/24",
"med");

console.log(projectDependencies.projects[projectDependencies.projects.length - 1]);






