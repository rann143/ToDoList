import { ToDoItem, ToDoManager } from "./todos.js"; 



function Project(title, toDos) {

    this.title = title;
    this.toDos = [];

    this.createNewToDoItem = function(title, descr, dueDate, priority, notes, completed) {
        const newToDo = new ToDoItem(title, descr, dueDate, priority, notes, completed);
        this.toDos.push(newToDo);
    }

    

}

function ProjectManager() {

    const myProjects = [];
    

    const addProject = (title, toDos) => {

        const newProject = new Project(title, toDos);

        myProjects.push(newProject);


    }

    const getMyProjects = () => myProjects;


    

    const project1 = addProject("My First Project");
    const project2 = addProject("My Second Project");

    return {
        addProject,
        getMyProjects
    }

}



export { Project, ProjectManager };