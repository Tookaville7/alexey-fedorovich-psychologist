// script.js

// Functionality for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form functionality
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {};  
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Handle the form submission (example code, update with actual submission logic)
    console.log('Form data submitted:', data);
    alert('Thank you for your submission!');
});
