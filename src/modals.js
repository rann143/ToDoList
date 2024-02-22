import {display} from "./display.js";
import {projectDependencies, projManager } from "./functions.js";
import { Project, Task, } from "./classes.js";



function ManageModals() {

    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');

    const openModal = () => {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    };

    const closeModal = () => {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }

    return {
        openModal,
        closeModal
    }

};

export { ManageModals };