
/* ==========================================================
   SYNERGETICSPARK TECHNOLOGIES
   PREMIUM ENTERPRISE SCRIPT
   ========================================================== */


/* ===============================
   NAVBAR SCROLL EFFECT
=============================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ===============================
   SCROLL PROGRESS BAR
=============================== */

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

});


/* ===============================
   REVEAL ON SCROLL
=============================== */

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });

}, {
    threshold: 0.1
});

reveals.forEach(el => revealObserver.observe(el));


/* ===============================
   ANIMATED COUNTERS
=============================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const el = entry.target;
            const target = +el.getAttribute("data-target");

            let count = 0;

            const speed = target / 60;

            const update = () => {

                count += speed;

                if (count < target) {
                    el.innerText = Math.floor(count);
                    requestAnimationFrame(update);
                } else {
                    el.innerText = target + "+";
                }

            };

            update();

            counterObserver.unobserve(el);
        }

    });

}, {
    threshold: 0.6
});

counters.forEach(counter => counterObserver.observe(counter));


/* ===============================
   PARTICLE BACKGROUND (LIGHTWEIGHT)
=============================== */

const canvas = document.getElementById("particles");

if (canvas) {

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.fillStyle = "rgba(255,255,255,0.5)";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        for (let i = 0; i < 80; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particlesArray.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}


/* ===============================
   SMOOTH NAV SCROLL (optional enhancement)
=============================== */

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


/* ===============================
   MOBILE MENU (basic toggle)
=============================== */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {

    hamburger.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        hamburger.classList.toggle("active");

    });

}