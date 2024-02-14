import { ToDoManager } from "./todos"; 


const projects = (function ProjectManager() {

    const myProjects = [];

    const newProject = (title) => {

        this.title = title;



    }

    return {
        newProject,
    }

})();