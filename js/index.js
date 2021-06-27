const navbarMenu = document.querySelector('.navbar-menu');
const menuContainer = document.querySelector('.mobile-menu-container');

const showMenu = () => {
    menuContainer.classList.toggle('mobile-menu-show');
    navbarMenu.classList.toggle('navbar-menu-clicked');
}
navbarMenu.addEventListener('click', showMenu)

// GSAP
gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();

tl.from('.header-text', {
    y: '-50%',
    opacity: 0,
    duration: 1,
    ease: Power4.easeOut
})

gsap.from(".anim-trigger-1", {
    scrollTrigger: {
        trigger: '.anim-trigger-1',
        start: "top bottom",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: .3
});

gsap.from(".anim-trigger-2", {
    scrollTrigger: {
        trigger: '.anim-trigger-2',
        start: "top bottom",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: .3
});

gsap.from(".anim-trigger-3", {
    scrollTrigger: {
        trigger: '.anim-trigger-3',
        start: "top bottom",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: .3
});


gsap.from(".anim-trigger-4", {
    scrollTrigger: {
        trigger: '.anim-trigger-4',
        start: "top center",
    },
    x: "-100%",
    duration: 1,
    ease: Power4.easeOut
});

gsap.from(".anim-trigger-5", {
    scrollTrigger: {
        trigger: '.anim-trigger-5',
        start: "top center",
    },
    y: 50,
    opacity: 0,
    stagger: .3,
    duration: 1,
    ease: Power4.easeOut
});

gsap.from(".anim-trigger-6", {
    scrollTrigger: {
        trigger: '.anim-trigger-6',
        start: "top center",
    },
    y: 50,
    opacity: 0,
    stagger: .3,
    duration: 1,
    ease: Power4.easeOut
});
