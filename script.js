
/* =========================================================
   GORAV DHADHICH — PORTFOLIO JAVASCRIPT
   ========================================================= */

"use strict";


/* =========================
   MOBILE MENU
   ========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        menuBtn.textContent =
            navLinks.classList.contains("show")
                ? "✕"
                : "☰";

    });


    // Close menu after clicking a link

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            menuBtn.textContent = "☰";

        });

    });

}


/* =========================
   TYPING EFFECT
   ========================= */

const typingText = document.getElementById("typingText");

const words = [
    "web experiences.",
    "interactive websites.",
    "useful web tools.",
    "real-world projects."
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 75
    );
}

typeEffect();


/* =========================
   ACTIVE NAVBAR
   ========================= */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (target === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNav
);

updateActiveNav();


/* =========================
   SCROLL REVEAL
   ========================= */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".section-intro, " +
    ".about-text, " +
    ".stat-card, " +
    ".skill-card, " +
    ".project-card, " +
    ".education-card, " +
    ".contact-box"
);

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal-show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================
   PROJECT CARD TILT
   ========================= */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        if (window.innerWidth < 800) return;

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -2.5;

        const rotateY =
            ((x - centerX) / centerX) * 2.5;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================
   BUTTON RIPPLE
   ========================= */

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", event => {

        const ripple =
            document.createElement("span");

        ripple.classList.add("ripple");

        const rect =
            button.getBoundingClientRect();

        ripple.style.left =
            `${event.clientX - rect.left}px`;

        ripple.style.top =
            `${event.clientY - rect.top}px`;

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});


/* =========================
   CURSOR GLOW
   ========================= */

const cursorGlow =
    document.createElement("div");

cursorGlow.className = "cursor-glow";

document.body.appendChild(cursorGlow);


document.addEventListener("mousemove", event => {

    if (window.innerWidth < 800) return;

    cursorGlow.style.left =
        `${event.clientX}px`;

    cursorGlow.style.top =
        `${event.clientY}px`;

});


/* =========================
   CONSOLE MESSAGE
   ========================= */

console.log(
    "%c👋 Hey! Welcome to Gorav's portfolio.",
    "font-size:16px;font-weight:bold;"
);

console.log(
    "%cBuilt with HTML, CSS & JavaScript.",
    "font-size:12px;"
);


/* =========================================================
   PORTFOLIO V2 FEATURES
   ========================================================= */


/* =========================
   PAGE LOADER
   ========================= */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("pageLoader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 700);

    }

});


/* =========================
   THEME TOGGLE
   ========================= */

const themeBtn =
    document.getElementById("themeBtn");

const savedTheme =
    localStorage.getItem("gorav-theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    if (themeBtn) {
        themeBtn.textContent = "☀";
    }

}


if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        const isLight =
            document.body.classList.contains("light-theme");

        localStorage.setItem(
            "gorav-theme",
            isLight ? "light" : "dark"
        );

        themeBtn.textContent =
            isLight ? "☀" : "☾";

    });

}


/* =========================
   COMMAND PALETTE
   ========================= */

const commandOverlay =
    document.getElementById("commandOverlay");

const commandInput =
    document.getElementById("commandInput");

const commandButtons =
    document.querySelectorAll(
        ".command-items button"
    );


function openCommandPalette() {

    if (!commandOverlay) return;

    commandOverlay.classList.add("show");

    setTimeout(() => {

        commandInput?.focus();

    }, 100);

}


function closeCommandPalette() {

    commandOverlay?.classList.remove("show");

    if (commandInput) {
        commandInput.value = "";
    }

}


document.addEventListener("keydown", event => {

    if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
    ) {

        event.preventDefault();

        openCommandPalette();

    }


    if (event.key === "Escape") {

        closeCommandPalette();

    }

});


commandButtons.forEach(button => {

    button.addEventListener("click", () => {

        const target =
            button.dataset.target;

        closeCommandPalette();

        setTimeout(() => {

            document
                .querySelector(target)
                ?.scrollIntoView({
                    behavior: "smooth"
                });

        }, 100);

    });

});


/* Close by clicking outside */

commandOverlay?.addEventListener(
    "click",
    event => {

        if (event.target === commandOverlay) {

            closeCommandPalette();

        }

    }
);


/* =========================
   COMMAND SEARCH
   ========================= */

commandInput?.addEventListener(
    "input",
    () => {

        const search =
            commandInput.value
                .toLowerCase()
                .trim();

        commandButtons.forEach(button => {

            const text =
                button.textContent
                    .toLowerCase();

            button.style.display =
                text.includes(search)
                    ? "grid"
                    : "none";

        });

    }
);


/* =========================
   SCROLL TO TOP
   ========================= */

const scrollTop =
    document.getElementById("scrollTop");


window.addEventListener("scroll", () => {

    if (!scrollTop) return;

    if (window.scrollY > 600) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});


scrollTop?.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);
