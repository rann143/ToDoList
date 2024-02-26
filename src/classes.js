
class Project {
    constructor(name) {
        this.name = name;
        this.taskList = [];
        this.id = Math.random().toString().split(".").join("");
    }

    addTask(task) {
        this.taskList.push(task);
    }

    createTask(name, description, date, priority) {
        let task = new Task(name, description, date, priority);
        return task;
        //this.taskList.push(task); 
    }

    editTask(taskName, newName, newDescription, newDate, newPriority){
        this.deleteTask(taskName);
        this.addTask(this.createTask(newName, newDescription, newDate, newPriority));
    }

    deleteTask(thisTask) {
        this.taskList = this.taskList.filter((task) => task.name !== thisTask);
    }

    logTasks() {
        console.log(this.taskList);
    }

}

class Task {
    constructor(name, description, date, priority){
        this.name = name;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.complete = false;
        this.id = Math.random().toString().split(".").join("");
    }

}

export { Project, Task,  };