/* Snowfall */
(function() {
    const snowContainer = document.querySelector('.snow-container');
    const snowflakes = 80;
    for (let i = 0; i < snowflakes; i++) {
        const snow = document.createElement('span');
        snow.style.position = 'absolute';
        snow.style.width = Math.random() * 5 + 2 + 'px';
        snow.style.height = snow.style.width;
        snow.style.background = '#fff';
        snow.style.borderRadius = '50%';
        snow.style.left = Math.random() * 100 + 'vw';
        snow.style.top = '-10px';
        snow.style.opacity = Math.random() * 0.7 + 0.3;
        snow.style.animation = 'fall linear ' + (Math.random() * 10 + 5) + 's infinite';
        snow.style.animationDelay = Math.random() * 5 + 's';
        snowContainer.appendChild(snow);
    }
})();

/* Reveal sections */
const sections = document.querySelectorAll('.section');
const io = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting && e.target.classList.add('show'));
}, { threshold: 0.2 });
sections.forEach(sec => io.observe(sec));

/* Type-writer title */
const txt = "Rishitha Pawarindu";
let i = 0;

function typeTitle() {
    document.title = txt.slice(0, ++i);
    if (i > txt.length) i = 1;
    setTimeout(typeTitle, 300);
}
typeTitle();

/* Smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(a =>
    a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    })
);

/* Hamburger toggle */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
document.querySelectorAll('.nav-links a').forEach(link =>
    link.addEventListener('click', () => navLinks.classList.remove('active'))
);

// CSS snow keyframe
const style = document.createElement('style');
style.innerHTML = `@keyframes fall { to { transform: translateY(100vh); } }`;
document.head.appendChild(style);