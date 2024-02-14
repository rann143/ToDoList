function ToDoItem(title, descr, dueDate, priority, notes, completed) {
    this.title = title;
    this.descr = descr;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.completed = false;
}

ToDoItem.prototype.toggleCompletedStatus = function() {
    if (this.completed === false) {
                this.completed = true;
            } else if (this.completed === true) {
                this.completed = false;
            }
}

function ToDoManager() {

    const myToDos = [];

    const createNewToDoItem = () => {
        const newToDo = new ToDoItem(title, descr, dueDate, priority, notes, completed);
        myToDos.push(newToDo);
        console.log(myToDos);

    }

    const getToDos = () => myToDos;

    return {
        createNewToDoItem,
        getToDos,
    }


};

export { ToDoManager };