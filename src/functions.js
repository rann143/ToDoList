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

    // let currentProject = projManager.getProject("Default");

    // const getCurrentProject = () => currentProject;


    const createProject = (name) => {
        let newProject = new Project(name);
        projectDependencies.projects.push(newProject);
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
        //getCurrentProject,
    }

})();

export {projectDependencies, projManager}




