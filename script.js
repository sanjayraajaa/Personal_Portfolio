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
