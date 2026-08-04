// =============================
// Dark / Light Mode
// =============================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("light")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});

// =============================
// Typing Animation
// =============================

const words = [
    "Computer Science Student"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typing.textContent = currentWord.substring(0, charIndex++);
    } else {
        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = isDeleting ? 80 : 150;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// =============================
// Smooth Scroll
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});

// =============================
// Active Navigation
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){
            link.classList.add("active");
        }

    });

});

// =============================
// Reveal Animation
// =============================

const revealElements = document.querySelectorAll(
".skill-card, .project-card, .about-container"
);

function reveal(){

    revealElements.forEach(el=>{

        const windowHeight = window.innerHeight;

        const top = el.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            el.style.opacity="1";
            el.style.transform="translateY(0)";

        }

    });

}

revealElements.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(50px)";
    el.style.transition="all .8s ease";

});

window.addEventListener("scroll", reveal);

reveal();

// =============================
// Welcome Message
// =============================

window.onload = function(){

console.log("Welcome to Madhuri's Portfolio!");

};