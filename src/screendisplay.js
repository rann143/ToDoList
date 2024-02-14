import { ToDoManager } from "./todos";
import { ProjectManager } from "./project"; 


function ScreenController() {

    const createHomePage = () => {

        const homeTitle = document.createElement('h1');
        const projectsListTitle = document.createElement('h2');
        const currentProjectTitle = document.createElement('h3');

        homeTitle.textContent = "The Grand List of To Dos";
        projectsListTitle.textContent = "Projects";
        currentProjectTitle = "This Project"; //placeholder for now



    }

    return {
        createHomePage,
    }

}

export { ScreenController };