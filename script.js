let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.home-content', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        opacity: 0,
        easing: 'ease-in-out',
        delay: 200
    });

    ScrollReveal().reveal('.home-img', {
        duration: 1000,
        origin: 'right',
        distance: '50px',
        opacity: 0,
        easing: 'ease-in-out',
        delay: 400
    });

    ScrollReveal().reveal('.social-icons a', {
        duration: 1000,
        origin: 'left',
        distance: '50px',
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200
    });

    ScrollReveal().reveal('.btn-group a', {
        duration: 1000,
        origin: 'top',
        distance: '50px',
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200
    });

    ScrollReveal().reveal('.about-img', {
        duration: 1000,
        origin: 'top',
        distance: '50px',
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200
    });    

    ScrollReveal().reveal('.about-content', {
        duration: 1000,
        origin: 'top',
        distance: '50px',
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200
    });

    ScrollReveal().reveal('.about-img img', {
        duration: 1000,
        origin: 'left',
        distance: '50px',
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200
    });

    ScrollReveal().reveal('.about-content .btn', {
        duration: 1000,
        origin: 'right',
        distance: '50px',
        opacity: 0,
        easing: 'ease-in-out',
        delay: 200
    });

    ScrollReveal().reveal('.service-box', {
        duration: 1000,
        origin: 'left',
        distance: '50px',
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200
    });

    ScrollReveal().reveal('.projects', {
        duration: 2000,
        origin: 'bottom',
        distance: '50px',
        opacity: 0,
        easing: 'ease-in-out',
        interval: 200
    });
});