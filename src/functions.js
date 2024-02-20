import {Project, Task} from "./classes.js";

const projectDependencies = (function() {
    const defaultProject = new Project("Default");
    const projects = [defaultProject];

    return {
        defaultProject,
        projects,
    }
})();

const projManager = (function ProjectManager() {

    const createProject = (name) => {
        let newProject = new Project(name);
        projectDependencies.projects.push(newProject);
        //return newProject;
        return projectDependencies.projects;
    }

    const getProject = (projectName) => {
        let thisProject = projectDependencies.projects.filter(project => project.name == projectName);
        let selectedProject = thisProject[0];
        return selectedProject;
    
    }

    const changeProjectName = (projectName, newName) => {
        return getProject(projectName).name = newName;
    }

    const deleteProject = (projectName) => {

        if (projectName !== projectDependencies.defaultProject.name) {
            projectDependencies.projects = projectDependencies.projects.filter(project => 
                project.name !== projectName);
        } else {
            alert("Can't remove Default Project");
        }
    }

    return {
        createProject,
        getProject,
        changeProjectName,
        deleteProject
    }

})();

export {projectDependencies, projManager}







// What functions do I want?

// Edit Task

// Create a Task, add it to current project $
    // When I create a Task, it gets added to currentProject.taskList






// Create a new task $
// Create a List of Tasks (a project) $
// Create new projects $
// Create a folder of projects $
// Delete tasks $
// Delete projects $


