import { ToDoManager } from "./todos";
import { ProjectManager } from "./project"; 


function ScreenController() {

    const createHomePage = () => {

        const projectsListTitle = document.createElement('h2');
        const currentProjectTitle = document.createElement('h3');

        projectsListTitle.textContent = "Projects";
        currentProjectTitle = "This Project"; //placeholder for now



    }

    return {
        createHomePage,
    }

}

export { ScreenController };