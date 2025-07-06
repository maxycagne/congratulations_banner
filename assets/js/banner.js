const theme = (function () {

    const c = document.querySelector(".input");

    function setDM(dm) {
        localStorage.setItem('darkMode', dm);
    }

    function toggledm() {
        const dm = document.body.classList.contains("dark");
        document.body.classList.toggle("dark", !dm);
        setDM(!dm);
    }

    function checkdmPref() {
        const dm = localStorage.getItem('darkMode') === 'true';
        document.body.classList.toggle('dark', dm);
        c.checked = dm;
    }

    c.addEventListener("click", toggledm);

    checkdmPref();
})();

const navbar = (function () {

    const h = document.querySelector("#checkbox");
    const nm = document.querySelector(".nav-menu");
    const nmo = document.querySelector(".overlay");
    const nl = document.querySelectorAll(".nav-link");

    nl.forEach(n => n.addEventListener("click", closeMenu));
    h.addEventListener("change", mobileMenu);

    function mobileMenu() {
        if (h.checked) {
            nm.classList.add("active");
            nmo.classList.add("active");
        } else {
            nm.classList.remove("active");
            navMenuOverlay.classList.remove("active");
        }
    }

    function closeMenu() {
        if (h.checked) {
            h.checked = false;
            nm.classList.remove("active");
            nmo.classList.remove("active");
        }
    }

    const nb = document.querySelector('.navbar');
    const nbl = document.querySelectorAll('.nav-item .nav-link');

    nbl.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const navbarHeight = nb.offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            const duration = 20000;
            const delay = 100;
            setTimeout(() => {
                window.scroll({
                    top: targetPosition,
                    left: 0,
                    behavior: 'smooth',
                    duration: duration
                });
            }, delay);
        });
    });
})();
