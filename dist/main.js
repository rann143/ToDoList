(()=>{"use strict";var e={904:(e,n,t)=>{t.d(n,{c:()=>s});var r=t(500),o=t.n(r),a=t(312),i=t.n(a)()(o());i.push([e.id,"body {\n    display: flex;\n    flex-direction: column;\n    padding-left: 250px;\n    padding-right: 250px;\n}\n\nheader {\n    align-self: center;\n    display: flex;\n    justify-content: center;\n    min-width: 260px;\n}\n\nh1 {\n    display: flex;\n    justify-content: center;\n    min-width: 260px;\n}\n\n#container {\n    display: grid;\n    grid-template-columns: 200px minmax(300px, 1fr);\n    justify-content: center;\n    gap: 10px;\n    \n}\n\n.project-list-div {\n    grid-column: 1/2;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    padding-left: 20px;\n    padding-bottom: 20px;\n    border-radius: 5px;\n    background-color: rgb(196, 248, 255);\n}\n\n.task-container {\n    grid-column: 2/3;\n    display: grid;\n    grid-template-rows: 50px 1fr;\n    grid-template-columns: 1fr 1fr;\n    background-color: rgb(252, 241, 226);\n    border-radius: 5px;\n    padding-bottom: 20px;\n}\n\n.task-list-title {\n    grid-row: 1/2;\n    grid-column: 1/2;\n    display: inline;\n    justify-self: center;\n    align-self: center;\n}\n\n\n.new-task-button {\n    grid-row: 1/2;\n    grid-column: 2/3;\n    justify-self: center;\n    align-self: center;\n    background-color: rgb(213, 213, 213);\n    box-shadow: 2px 2px 5px rgba(163, 163, 163, 0.363);\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n}\n\n.task-list-div {\n    grid-row: 2/3;\n    grid-column: 1/3;\n    \n}\n\n.task-div {\n    margin: 10px;\n    border-radius: 5px;\n    background-color: rgb(55, 236, 176);\n    padding: 5px;\n}\n\n.project-button {\n    margin-top: 5px;\n    margin-bottom: 5px;\n    padding: 10px;\n    border: none;\n    border-radius: 5px;\n    background-color: rgb(255, 207, 188);\n    box-shadow: 2px 2px 5px rgba(163, 163, 163, 0.363);\n    text-align: start;\n}\n\n.todo-button {\n    margin-right: 10px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding: 10px;\n    border: none;\n    border-radius: 5px;\n    background-color: rgb(171, 232, 219);\n    box-shadow: 2px 2px 3px rgba(163, 163, 163, 0.363);\n    text-align: start;\n}\n\n.new-proj-button {\n    background-color: rgb(213, 213, 213);\n    box-shadow: 2px 2px 5px rgba(163, 163, 163, 0.363);\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n    margin-bottom: 20px;\n}\n\n/* form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: start;\n} */\n\n\n\n.form-inputs {\n    display: grid;\n    grid-template-columns: 100px 1fr;\n    gap: 20px;\n}\n\n#submit-new-proj-btn {\n    margin: 10px;\n}\n#submit-new-todo-btn {\n    margin: 10px;\n    padding: 5px;\n    padding-left: 10px;\n    padding-right: 10px;\n    align-self: center;\n    border: none;\n    border-radius: 5px;\n    background-color: rgb(235, 208, 172);\n}\n\n\n\nbutton {\n    cursor: pointer;\n    border: none;\n    font-weight: 600;\n  }\n\n/* FOR MODALS */\n\n#container .hidden {\n    display: none;\n}\n\n.hidden {\n    display: none;\n}\n\n\n.project-modal {\n    justify-self: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 0.4rem;\n    width: 300px;\n    padding: 1.3rem;\n    min-height: 150px;\n    position: absolute;\n    top: 20%;\n    background-color: white;\n    border: 1px solid #ddd;\n    border-radius: 15px;\n    z-index: 2;\n  }\n\n.task-modal {\n    justify-self: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 0.4rem;\n    width: 400px;\n    padding: 1.3rem;\n    min-height: 300px;\n    position: absolute;\n    top: 20%;\n    background-color: white;\n    border: 1px solid #ddd;\n    border-radius: 15px;\n    z-index: 2;\n  }\n\n  form {\n    margin-top: 50px;\n    padding-bottom: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    gap: 20px;\n  }\n\n\n  label {\n    font-size: 20px;\n    font-weight: bold;\n  }\n\n  .overlay {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    backdrop-filter: blur(3px);\n    z-index: 1;\n  }\n\n  .btn {\n    display: inline-block;\n    padding: 0.8rem 1.4rem;\n    font-weight: 700;\n    background-color: black;\n    color: white;\n    border-radius: 5px;\n    text-align: center;\n    font-size: 1em;\n  }\n\n  .btn-close {\n    position: absolute;\n    justify-self: flex-start;\n    align-self: flex-end;\n    padding: 0.5rem 0.7rem;\n    background: #eee;\n    border-radius: 50%;\n  }",""]);const s=i},312:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},176:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},120:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},936:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{class e{constructor(e){this.name=e,this.taskList=[]}addTask(e){this.taskList.push(e)}createTask(e,t,r,o){return new n(e,t,r,o)}editTask(e,n,t,r,o){this.deleteTask(e),this.addTask(this.createTask(n,t,r,o))}deleteTask(e){this.taskList=this.taskList.filter((n=>n.name!==e))}logTasks(){console.log(this.taskList)}}class n{constructor(e,n,t,r){this.name=e,this.description=n,this.date=t,this.priority=r,this.complete=!1}}const r=function(){const n=new e("Default"),t=[n];return{defaultProject:n,projects:t,currentProject:t[0]}}(),o=function(){const n=e=>r.projects.filter((n=>n.name==e))[0];return{createProject:n=>{let t=new e(n);return r.projects.push(t),t},getProject:n,changeProjectName:(e,t)=>n(e).name=t,deleteProject:e=>{e!==r.defaultProject.name?r.projects=r.projects.filter((n=>n.name!==e)):alert("Can't remove Default Project")},showProjects:()=>{console.log(r.projects)},showProjectsNames:()=>{r.projects.forEach((e=>console.log(e.name)))},showProjectTaskList:e=>{console.log(n(e).taskList)}}}();var a=t(596),i=t.n(a),s=t(520),c=t.n(s),d=t(176),l=t.n(d),p=t(120),u=t.n(p),m=t(808),f=t.n(m),g=t(936),h=t.n(g),x=t(904),b={};b.styleTagTransform=h(),b.setAttributes=u(),b.insert=l().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=f(),i()(x.c,b),x.c&&x.c.locals&&x.c.locals;const v=function(){const e=document.querySelector("#container"),n=document.createElement("div");n.classList.add("project-list-div");const t=document.createElement("h2");t.textContent="Projects",n.appendChild(t);const r=document.createElement("div");r.classList.add("task-container");const a=document.createElement("h2");a.textContent="Tasks",a.classList.add("task-list-title"),r.appendChild(a);const i=document.createElement("div");i.classList.add("task-list-div"),r.appendChild(i);const s=y();document.querySelectorAll(".btn-close").forEach((e=>{e.addEventListener("click",s.closeModal)}));const c=e=>{const t=document.createElement("button");t.textContent=e.name,t.classList.add("project-button"),n.appendChild(t)},d=document.querySelector("#proj-title-input"),l=e=>{const n=document.createElement("div");n.classList.add("task-div"),n.textContent=`${e.name} ${e.description} ${e.date} ${e.priority}`,i.appendChild(n)},p=document.querySelector("#task-title-input"),u=document.querySelector("#task-descr-input"),m=document.querySelector("#task-date-input"),f=document.querySelector("#task-priority-input");return e.appendChild(n),e.appendChild(r),{createNewProjectButton:()=>{const e=document.createElement("button");e.classList.add("new-proj-button"),e.textContent="Add New Project",e.addEventListener("click",s.openProjectModal),n.appendChild(e)},createNewTaskButton:()=>{const e=document.createElement("button");e.classList.add("new-task-button"),e.textContent="Add New Task",e.addEventListener("click",s.openTaskModal),r.appendChild(e)},displayProject:c,displayTask:l,addNewProjectToScreen:()=>{if(""!==d.value){let e=d.value;d.value="";let n=o.createProject(e);c(n),o.showProjects()}},addNewTaskToScreen:e=>{let n=p.value,t=u.value,r=m.value,a=f.value;p.value="",u.value="",m.value="",f.value="";let i=o.getProject(e).createTask(n,t,r,a);console.log(i),o.getProject(e).addTask(i),l(i)}}}();function y(){const e=document.querySelectorAll(".modal"),n=document.querySelector(".project-modal"),t=document.querySelector(".task-modal"),r=document.querySelector(".overlay");return{openProjectModal:()=>{n.classList.remove("hidden"),r.classList.remove("hidden")},openTaskModal:()=>{t.classList.remove("hidden"),r.classList.remove("hidden")},closeModal:()=>{e.forEach((e=>{e.classList.add("hidden")})),r.classList.add("hidden")}}}v.createNewProjectButton(),v.createNewTaskButton(),o.createProject("Groceries for Feb"),o.createProject("Fishing Trip"),r.projects[1].createTask("Get Bread","Sourdough for Grilled Cheesies","2/22/24","Medium"),r.projects[1].addTask(r.projects[1].createTask("Get Milk","Whole Milk for Tomato Soup","2/22/24","Medium")),o.getProject("Groceries for Feb").addTask(o.getProject("Groceries for Feb").createTask("Buy Turmeric","Need this for tea","3/1/24","high")),o.getProject("Fishing Trip").addTask(o.getProject("Fishing Trip").createTask("Bait Time","Get Worms & Nightcrawlers","2/25/24","Low")),o.getProject("Fishing Trip").addTask(o.getProject("Fishing Trip").createTask("Buy Clothes","Get Waders","2/29/24","high")),o.getProject("Fishing Trip").editTask("Buy Clothes","Go to Dick's Sporting Goods","Get some Water Pants","2/28/24","med"),r.projects.forEach((e=>{v.displayProject(e)}));const j=document.querySelectorAll(".project-button"),k=document.querySelector(".task-list-div");document.querySelector("new-proj-button"),j.forEach((e=>{e.addEventListener("click",(n=>{n.preventDefault(),k.replaceChildren(),r.currentProject=o.getProject(e.textContent),o.getProject(e.textContent).taskList.forEach((e=>{v.displayTask(e)})),o.showProjectTaskList(o.getProject(e.textContent).name),console.log(j),console.log(r.currentProject)}))})),document.querySelector("#proj-sub-btn").addEventListener("click",(e=>{e.preventDefault(),v.addNewProjectToScreen(),y().closeModal()})),document.querySelector("#task-sub-btn").addEventListener("click",(e=>{e.preventDefault(),console.log(r.currentProject.name),v.addNewTaskToScreen(r.currentProject.name),y().closeModal()}))})()})();