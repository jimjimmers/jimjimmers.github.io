// Change header and announcement bar on scroll
const header = document.getElementById('main-header');
const announcementBar = document.getElementById('announcement-bar');

window.addEventListener('scroll', () => {
    const announcementBarHeight = announcementBar.offsetHeight;
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
        header.classList.remove('header-transparent');
        announcementBar.classList.remove('-translate-y-full');
        header.style.top = `${announcementBarHeight}px`;
    } else {
        header.classList.remove('header-scrolled');
        header.classList.add('header-transparent');
        announcementBar.classList.add('-translate-y-full');
        header.style.top = '0';
    }
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
mobileMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        mobileMenu.classList.add('hidden');
    }
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

const targets = document.querySelectorAll('.animate-on-scroll');
targets.forEach(target => {
    observer.observe(target);
});
