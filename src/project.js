import { ToDoManager } from "./todos.js"; 



function Project(title, toDos) {

    this.title = title;
    this.toDos = toDos;


}

function ProjectManager() {

    const myProjects = [];
    

    const addProject = (title, toDos) => {

        const newProject = new Project(title, toDos);

        myProjects.push(newProject);

    }

    const getMyProjects = () => myProjects;

    // ToDoManager().createNewToDoItem("Big Dawg", "Biggest", "tmo", "high", "notes", true);
    // ToDoManager().createNewToDoItem("Little Dawg", "Littlest", "next week", "low", "notes", false);
    // ToDoManager().createNewToDoItem("Mid Dawg", "Middest", "wheneva", "med", "notes", false);

    addProject("My First Project", ToDoManager().getToDos());
    addProject("My Second Project", ToDoManager().getToDos());

    return {
        addProject,
        getMyProjects
    }

}



export { ProjectManager };