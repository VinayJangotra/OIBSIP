document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade In Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    document.querySelectorAll('.resume-section, .contact-section').forEach(section => {
        observer.observe(section);
    });

    // Button Hover Effect
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('mouseover', () => {
            btn.style.transform = 'scale(1.1)';
        });
        btn.addEventListener('mouseout', () => {
            btn.style.transform = 'scale(1)';
        });
    });
});

// Additional CSS for Fade In Animation
document.addEventListener('DOMContentLoaded', function() {
    // Existing code...

    // Sticky Navigation Bar
    const navbar = document.querySelector('nav'); // Adjust selector as needed
    window.onscroll = function() {
        if (window.pageYOffset > navbar.offsetTop) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    };

    // Dark Mode Toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle'); // Add this toggle in your HTML
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Dynamic Year in Footer
    const yearSpan = document.querySelector('.current-year');
    yearSpan.textContent = new Date().getFullYear();
});