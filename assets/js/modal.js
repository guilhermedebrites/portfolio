
const projectAluraBooks = document.getElementById('alurabooks');
const projectHzc = document.getElementById('hzc');
const projectOpttech = document.getElementById('opttech');
const projectAluraPlus = document.getElementById('aluraplus');

projectAluraBooks.addEventListener('click', () => inicialModal('modal-alurabooks'));
projectHzc.addEventListener('click', () => inicialModal('modal-hzc'));
projectOpttech.addEventListener('click', () => inicialModal('modal-opttech'));
projectAluraPlus.addEventListener('click', () => inicialModal('modal-aluraplus'));

function inicialModal(modalId){
    const modal = document.getElementById(modalId);
    if(modal){
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if(e.target.id == modalId || e.target.className == 'close-modal') {
                modal.classList.remove('mostrar');
            }
        });
    }

}