import { Project, Task, createTask, createProject } from "./classes.js";


const projectDependencies = (function() {
    const defaultProject = createProject("Default");
    const projects = [defaultProject];

    return {
        defaultProject,
        projects
    }
})();

projectDependencies.projects.push(createProject("Groceries for Feb"));
projectDependencies.projects.forEach(project => console.log(project));

