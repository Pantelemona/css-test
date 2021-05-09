var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal')
var selectPlanButton = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative')
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta')

//console.dir(backdrop);
for (var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function() { 
//modal.style.display = 'block';
//backdrop.style.display = 'block';
//modal.className = 'open';//this will actually overwrite the complete class
modal.classList.add('open');
backdrop.style.display = 'block';
setTimeout(function() {
    backdrop.classList.add('open');
    }, 10);
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
    backdrop.style.display = 'none';
    setTimeout(function() {
        backdrop.classList.add('open');
        }, 200);
}

toggleButton.addEventListener('click', function() {
    //mobileNav.style.display = 'block';
    //backdrop.style.display = 'block';
    mobileNav.classList.add('open'); 
    backdrop.style.display = 'block';
    setTimeout(function() {
    backdrop.classList.add('open');
    }, 10);
});

ctaButton.addEventListener('animationstart', function(event) {
    console.log('Animation started', event);
})
ctaButton.addEventListener('animationend', function(event) {
    console.log('Animation ended', event);
})
ctaButton.addEventListener('animationiteration', function(event) {
    console.log('Animation iteration', event);
})