import {Project, Task} from "./classes.js";
import { saveToStorage } from "./storage.js";

const projectDependencies = (function() {
    const defaultProject = new Project("Default");
    const projects = [defaultProject];
    let currentProject = projects[0];

    return {
        defaultProject,
        projects,
        currentProject
    }
})();

const projManager = (function ProjectManager() {


    const createProject = (name) => {
        let newProject = new Project(name);
        projectDependencies.projects.push(newProject);
        saveToStorage();
        return newProject;
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

        return projectDependencies.projects;
    }

    const showProjects = () => {
        console.log(projectDependencies.projects);
    }

    const showProjectsNames = () => {
        projectDependencies.projects.forEach(project => console.log(project.name));
    }

    const showProjectTaskList = (projectName) => {
        console.log(getProject(projectName).taskList);
    }

    return {
        createProject,
        getProject,
        changeProjectName,
        deleteProject,
        showProjects,
        showProjectsNames,
        showProjectTaskList,
    }

})();

export {projectDependencies, projManager}




