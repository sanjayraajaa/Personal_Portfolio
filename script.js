document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementsByClassName("navlinks")[0];
    const btn = document.getElementsByClassName("nav_btn")[0];
    const links = document.getElementsByClassName("main_link");
    const overlay = document.getElementsByClassName("nav-overlay")[0];

    btn.addEventListener('click', () => {
        navbar.classList.add('active');
    });

    Array.from(links).forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove('active');
        });
    });

    overlay.addEventListener('click', ()=>{
        navbar.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for up_button
    const upButton = document.querySelector('.up_button a');
    if (upButton) {
        upButton.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        });
    }

    const heading = document.getElementsByClassName("heading")[0];
    if (heading) {
        heading.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        });
    }

    const mainLinks = document.querySelectorAll('.main_link');
    mainLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const footLink = document.querySelectorAll('.foot_link');
    footLink.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const designer = document.querySelector('.designer');
    if (designer) {
        designer.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        });
    }
});
