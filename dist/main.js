(()=>{"use strict";class e{constructor(e){this.name=e,this.taskList=[]}addTask(e){this.taskList.push(e)}createTask(e,o,s,r){let c=new t(e,o,s,r);this.taskList.push(c)}deleteTask(e){this.taskList=this.taskList.filter((t=>t.name!==e))}logTasks(){console.log(this.taskList)}}class t{constructor(e,t,o,s){this.name=e,this.description=t,this.date=o,this.priority=s,this.complete=!1}}const o=function(){const t=new e("Default");return{defaultProject:t,projects:[t]}}();function s(t){let s=new e(t);return o.projects.push(s),o.projects}function r(){o.projects.forEach((e=>console.log(e)))}s("Groceries for Feb"),s("Shopping for Feb"),s("Activities for Feb"),o.projects.forEach((e=>console.log(e))),"Activities for Feb"!==o.defaultProject.name?o.projects=o.projects.filter((e=>"Activities for Feb"!==e.name)):alert("Can't remove Default Project"),console.log("delete project"),o.projects.forEach((e=>console.log(e))),console.log("create passion fruit"),s("Buy Passion Fruit"),o.projects.forEach((e=>console.log(e))),console.log("create and add task"),o.projects[1].createTask("Get Bread","Sourdough for Grilled Cheesies","2/22/24","Medium"),o.projects[1].createTask("Get Milk","Whole Milk for Tomato Soup","2/22/24","Medium"),r(),console.log("delete task from project"),o.projects[1].deleteTask("Get Milk"),r()})();