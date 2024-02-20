import { Project, Task, projectDependencies, createProject, deleteProject,  } from "./classes.js";

function logProjects() {
    projectDependencies.projects.forEach(project => console.log(project));
}

createProject("Groceries for Feb");
createProject("Shopping for Feb");
createProject("Activities for Feb");
projectDependencies.projects.forEach(project => console.log(project));

deleteProject("Activities for Feb");
console.log("delete project");
projectDependencies.projects.forEach(project => console.log(project));

console.log("create passion fruit");
createProject("Buy Passion Fruit");

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





