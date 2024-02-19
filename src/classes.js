class Project {
 constructor(name) {
    this.name = name;
    this.taskList = [];

 }
}

class Task {
    constructor(name, description, date, priority){
        this.name = name;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.complete = false;

    }

}