(()=>{"use strict";class e{constructor(e){this.name=e,this.taskList=[]}addTask(e){this.taskList.push(e)}createTask(e,s,o,i){let r=new t(e,s,o,i);this.taskList.push(r)}editTask(e,t,s,o,i){this.deleteTask(e),this.createTask(t,s,o,i)}deleteTask(e){this.taskList=this.taskList.filter((t=>t.name!==e))}logTasks(){console.log(this.taskList)}}class t{constructor(e,t,s,o){this.name=e,this.description=t,this.date=s,this.priority=o,this.complete=!1}}const s=function(){const t=new e("Default");return{defaultProject:t,projects:[t]}}();function o(t){let o=new e(t);return s.projects.push(o),s.projects}function i(e){return s.projects.filter((t=>t.name==e))[0]}function r(){s.projects.forEach((e=>console.log(e)))}o("Groceries for Feb"),o("Shopping for Feb"),o("Activities for Feb"),s.projects.forEach((e=>console.log(e))),"Activities for Feb"!==s.defaultProject.name?s.projects=s.projects.filter((e=>"Activities for Feb"!==e.name)):alert("Can't remove Default Project"),console.log("delete project"),s.projects.forEach((e=>console.log(e))),console.log("create passion fruit"),o("Buy Passion Fruit"),s.projects.forEach((e=>console.log(e))),console.log("create and add task"),s.projects[1].createTask("Get Bread","Sourdough for Grilled Cheesies","2/22/24","Medium"),s.projects[1].createTask("Get Milk","Whole Milk for Tomato Soup","2/22/24","Medium"),r(),console.log("delete task from project"),s.projects[1].deleteTask("Get Milk"),r(),o("Fishing"),i("Fishing").createTask("Bait Time","Get Worms & Nightcrawlers","2/25/24","Low"),console.log(i("Fishing").taskList),console.log("change project name"),i("Fishing").name="Fishing Trip",i("Fishing Trip").createTask("Buy Clothes","Get Waders","2/29/24","high"),console.log(i("Fishing Trip").taskList),console.log("test editing task"),i("Fishing Trip").editTask("Buy Clothes","Go to Dick's Sporting Goods","Get some Water Pants","2/28/24","med"),console.log(s.projects[s.projects.length-1])})();