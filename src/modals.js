import {display} from "./display.js";
import {projectDependencies, projManager } from "./functions.js";
import { Project, Task, } from "./classes.js";



function ManageModals() {

    const modals = document.querySelectorAll('.modal');

    const projectModal = document.querySelector('.project-modal');
    const taskModal = document.querySelector('.task-modal');
    const overlay = document.querySelector('.overlay');

    const openProjectModal = () => {
        projectModal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    };

    const openTaskModal = () => {
        taskModal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }

    const closeModal = () => {
        modals.forEach(modal => {
            modal.classList.add('hidden');
        })
        
        overlay.classList.add('hidden');
    }

    return {
        openProjectModal,
        openTaskModal,
        closeModal
    }

};

export { ManageModals };