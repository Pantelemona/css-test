var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal')
var selectPlanButton = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative')
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

//console.dir(backdrop);
for (var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function() { 
//modal.style.display = 'block';
//backdrop.style.display = 'block';
//modal.className = 'open';//this will actually overwrite the complete class
modal.classList.add('open');
backdrop.classList.add('open');
    });
}

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}


function closeModal() {
    //backdrop.style.display ='none';
    //modal.style.display ='none'; 
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
    //mobileNav.style.display = 'block';
    //backdrop.style.display = 'block';
    mobileNav.classList.add('open'); 
    backdrop.classList.add('open');
});