(()=>{"use strict";function t(t,e,o,n,c,i){this.title=t,this.descr=e,this.dueDate=o,this.priority=n,this.notes=c,this.completed=!1}function e(e,o){this.title=e,this.toDos=[],this.createNewToDoItem=function(e,o,n,c,i,r){const s=new t(e,o,n,c,i,r);this.toDos.push(s)}}function o(){const t=[],o=(o,n)=>{const c=new e(o,n);t.push(c)};return o("My First Project"),o("My Second Project"),{addProject:o,getMyProjects:()=>t}}t.prototype.toggleCompletedStatus=function(){!1===this.completed?this.completed=!0:!0===this.completed&&(this.completed=!1)};const n=o().getMyProjects(),c=()=>{const t=document.querySelector("#proj-list-div");return o(),n.forEach((e=>{const o=document.createElement("button");o.classList.add("project-button"),o.textContent=`${e.title}`,t.appendChild(o)})),t};console.log("Big Dawgs STAY barkin"),document.querySelector("#container").appendChild((()=>{const t=document.createElement("div");t.setAttribute("id","home-container");const e=document.createElement("div"),o=document.createElement("h2");e.setAttribute("id","proj-list-div"),o.setAttribute("id","proj-list-title");const n=document.createElement("div"),c=document.createElement("h2");return n.setAttribute("id","current-proj-div"),c.setAttribute("id","current-proj-title"),o.textContent="My Projects",c.textContent="Home",e.appendChild(o),n.appendChild(c),t.appendChild(e),t.appendChild(n),t})());const i=o(),r=i.getMyProjects();console.log(i.getMyProjects());const s=new e("Sicko Mode Project");r.push(s),console.log(r),s.createNewToDoItem("Oil Change"),console.log(r);const d=new e("Big Boy Responsibilites");d.createNewToDoItem("Fix Sink"),d.createNewToDoItem("Cook Dinner"),r.push(d),(()=>{const t=document.querySelector("#proj-list-div"),e=document.querySelector("dialog"),n=document.createElement("button");n.setAttribute("id","new-proj-button"),n.textContent="+ New Project";const i=document.querySelector("#title-input");n.addEventListener("click",(t=>{e.showModal()})),document.querySelector("#submit-new-proj-btn").addEventListener("click",(t=>{t.preventDefault(),o().addProject(i),i.value="",c(),e.close()})),t.appendChild(n)})(),c();const l=document.querySelectorAll(".project-button"),u=document.querySelector("#current-proj-div");l.forEach((t=>{t.addEventListener("click",(e=>{!function(){for(;u.firstChild;)u.removeChild(u.lastChild)}();const o=document.createElement("h2");o.textContent=`${t.textContent}`,u.appendChild(o),createAddNewToDoButton()}))}))})();