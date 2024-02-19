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


export { ToDoItem };