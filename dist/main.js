(()=>{"use strict";function t(t,e,o,n,i,s){this.title=t,this.descr=e,this.dueDate=o,this.priority=n,this.notes=i,this.completed=!1}function e(){const e=[],o=(o,n,i,s,c,r)=>{const d=new t(o,n,i,s,c,r);e.push(d)};return o("Big Dawg","Biggest","tmo","high","notes",!0),o("Little Dawg","Littlest","next week","low","notes",!1),o("Mid Dawg","Middest","wheneva","med","notes",!1),{createNewToDoItem:o,getToDos:()=>e}}function o(t,e){this.title=t,this.toDos=e}function n(){const t=[],n=(e,n)=>{const i=new o(e,n);t.push(i)};return n("My First Project",e().getToDos()),n("My Second Project",e().getToDos()),{addProject:n,getMyProjects:()=>t}}t.prototype.toggleCompletedStatus=function(){!1===this.completed?this.completed=!0:!0===this.completed&&(this.completed=!1)},console.log("Big Dawgs STAY barkin"),document.querySelector("#container").appendChild((()=>{const t=document.createElement("div");t.setAttribute("id","home-container");const e=document.createElement("div"),o=document.createElement("h2");e.setAttribute("id","proj-list-div"),o.setAttribute("id","proj-list-title");const n=document.createElement("div"),i=document.createElement("h2");return n.setAttribute("id","current-proj-div"),i.setAttribute("id","current-proj-title"),o.textContent="My Projects",i.textContent="This Project",e.appendChild(o),n.appendChild(i),t.appendChild(e),t.appendChild(n),t})()),console.log(e().getToDos()),console.log(n().getMyProjects()),(()=>{const t=document.querySelector("#proj-list-div");n().getMyProjects().forEach((e=>{const o=document.createElement("button");o.classList.add("project-button"),o.textContent=`${e.title}`,t.appendChild(o)}))})()})();