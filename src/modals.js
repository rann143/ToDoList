import {display} from "./display.js";
import {projectDependencies, projManager } from "./functions.js";
import { Project, Task, } from "./classes.js";



function ManageModals() {

    const modals = document.querySelectorAll('.modal');

    const projectModal = document.querySelector('.project-modal');
    const taskModal = document.querySelector('.task-modal');
    const editModal = document.querySelector('.edit-modal');
    const overlay = document.querySelector('.overlay');

    const editTitleInput = document.querySelector('#edit-title-input');
    const editDescrInput = document.querySelector('#edit-descr-input');
    const editDateInput = document.querySelector('#edit-date-input');
    const editPriorityInput = document.querySelector('#edit-priority-input');

    const openProjectModal = () => {
        projectModal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    };

    const openTaskModal = () => {
        taskModal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }

    const openEditModal = () => {
        
        editModal.classList.remove('hidden');
        overlay.classList.remove('hidden');

        editTitleInput.value = "currentValue for this task";
        editDescrInput.value = "currentValue for this task";
        editDateInput.value = "currentValue for this task";
        editPriorityInput.value = "currentValue for this task";
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
        openEditModal,
        closeModal
    }

};

export { ManageModals };