export const modal = {

    openModal() {
        const deleteButton = document.querySelector("#deleteButton");
        const deleteModal = document.querySelector("#deleteModal");
        deleteButton.addEventListener('click', () => deleteModal.showModal());
    }
    
}
