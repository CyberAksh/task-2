// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Newsletter Validation
const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('news-email');
const statusMsg = document.getElementById('news-status');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
        statusMsg.textContent = 'Please enter an email address.';
        statusMsg.style.color = '#fecaca'; // light red
    } else if (!emailRegex.test(email)) {
        statusMsg.textContent = 'Please enter a valid email address.';
        statusMsg.style.color = '#fecaca';
    } else {
        statusMsg.textContent = 'Thanks for subscribing!';
        statusMsg.style.color = '#a7f3d0'; // light green
        form.reset();
        
        setTimeout(() => {
            statusMsg.textContent = '';
        }, 3000);
    }
});
