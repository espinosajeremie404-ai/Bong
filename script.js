// ===============================
// Typing Animation
// ===============================

const words = [
    "Student",
    "Web Developer",
    "Programmer",
    "Frontend Designer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {
        typing.textContent = currentWord.substring(0, letterIndex++);
    } else {
        typing.textContent = currentWord.substring(0, letterIndex--);
    }

    let speed = deleting ? 80 : 120;

    if (!deleting && letterIndex === currentWord.length + 1) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && letterIndex === 0) {
        deleting = false;
        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===============================
// Sticky Header
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,.85)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";
    } else {
        header.style.background = "rgba(0,0,0,.25)";
        header.style.boxShadow = "none";
    }

});


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (scrollY >= top) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// Reveal on Scroll
// ===============================

const revealElements = document.querySelectorAll(
".about, .card, .project-card, .skill-box"
);

function reveal() {

    revealElements.forEach(item => {

        const top = item.getBoundingClientRect().top;
        const screen = window.innerHeight - 100;

        if (top < screen) {
            item.classList.add("show");
        }

    });

}

window.addEventListener("scroll", reveal);
reveal();


// ===============================
// Smooth Button Animation
// ===============================

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-6px) scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0) scale(1)";

    });

});


// ===============================
// Floating Image Effect
// ===============================

const image = document.querySelector(".image-box");

window.addEventListener("mousemove", (e) => {

    if (!image) return;

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    image.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});


// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "25px";
topBtn.style.bottom = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#00d4ff";
topBtn.style.color = "#081b29";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===============================
// Mobile Menu
// ===============================

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

if (menu) {

    menu.addEventListener("click", () => {

        nav.classList.toggle("open");

    });

}