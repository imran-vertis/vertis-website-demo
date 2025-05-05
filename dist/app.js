// header.js - Start

document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("vertisGroupDropdown");
    if (!dropdown) return;

    const dropdownIcon = document.getElementById("dropdownIcon");
    const dropdownMenu = dropdown?.nextElementSibling;
    const parent = dropdown?.parentElement;

    if (!dropdownIcon || !dropdownMenu || !parent) return;

    parent.addEventListener("mouseenter", () => {
        dropdownIcon.src = "https://imran-vertis.github.io/vertis-website-demo/assets/images/icons/24/Accordion-up.svg";
        dropdownMenu.classList.add("show");
        dropdown.setAttribute("aria-expanded", "true");
    });

    parent.addEventListener("mouseleave", () => {
        dropdownIcon.src = "https://imran-vertis.github.io/vertis-website-demo/assets/images/icons/24/Accordion-down.svg";
        dropdownMenu.classList.remove("show");
        dropdown.setAttribute("aria-expanded", "false");
    });

    dropdown.addEventListener("click", () => {
        window.location.href = "https://imran-vertis.github.io/vertis-website-demo/pages/group/index.html";
    });
});


// End

// contact.js - Start
document.addEventListener("DOMContentLoaded", function () {

    if (document.querySelectorAll(".contact-section .form-control").length > 0) {

        const inputs = document.querySelectorAll(".form-control");
        inputs.forEach((input) => {
            let placeholderText = input.getAttribute("placeholder");
            if (input.hasAttribute("required") && !placeholderText.includes("*")) {
                input.setAttribute("placeholder", placeholderText + " ");
            }
        });

    }
});

// End

// our_people.js - Start

document.addEventListener("DOMContentLoaded", () => {

    const peopleSection = document.querySelector("section.our-people-section");
    if (!peopleSection) return;

    new Swiper(".swiper-container", {
        slidesPerView: 1.5,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            565: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                enabled: false,
            }
        }
    });
});

// End


// other_works.js - Start

document.addEventListener("DOMContentLoaded", function () {

    if (document.querySelector(".other-works-section.individual-project")) {


        new Swiper(".swiper-container", {
            slidesPerView: 1.5,
            spaceBetween: 15,
            breakpoints: {
                556: {
                    slidesPerView: 1.8, // Show 2 cards on tablets
                    spaceBetween: 15
                },
                992: {
                    slidesPerView: 3, // Disable Swiper on desktops
                    enabled: false
                }
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }

});

// End


// testimonials.js - Start

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".testimonial-slider");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");

    if (slider && nextBtn && prevBtn) {
        let translateX = 0;
        const cardWidth = document.querySelector(".testimonial-card")?.offsetWidth + 20;
        const totalCards = document.querySelectorAll(".testimonial-card").length;
        const visibleCards = Math.floor(slider?.parentElement?.offsetWidth / cardWidth);

        nextBtn.addEventListener("click", () => {
            if (Math.abs(translateX) < cardWidth * (totalCards - visibleCards)) {
                translateX -= cardWidth;
                slider.style.transform = `translateX(${translateX}px)`;
            }
        });

        prevBtn.addEventListener("click", () => {
            if (translateX < 0) {
                translateX += cardWidth;
                slider.style.transform = `translateX(${translateX}px)`;
            }
        });
    }

    const moveNavButtons = () => {
        const navButtons = document.querySelector(".nav-buttons");
        const sliderWrapper = document.querySelector(".testimonial-slider-wrapper");
        const colMd3 = document.querySelector(".buttons");

        if (!navButtons || !sliderWrapper || !colMd3) return;

        if (window.innerWidth <= 768) {
            if (!sliderWrapper.contains(navButtons)) {
                sliderWrapper.appendChild(navButtons);
            }
        } else {
            if (!colMd3.contains(navButtons)) {
                colMd3.appendChild(navButtons);
            }
        }
    };

    moveNavButtons();
    window.addEventListener("resize", moveNavButtons);

    const MAX_WORDS = 30;
    const testimonialTexts = document.querySelectorAll(".testimonial-text");
    testimonialTexts.forEach((title) => {
        const words = title.innerText.trim().split(" ");
        if (words.length > MAX_WORDS) {
            title.innerText = words.slice(0, MAX_WORDS).join(" ") + "...";
        } else {
            const spacesNeeded = MAX_WORDS - words.length;
            title.innerHTML += "&nbsp;".repeat(spacesNeeded * 5);
        }
    });
});



// End


// works.js - Start

if (
    document.querySelector('.works-section') ||
    document.querySelector('.news-section')
) {

    document.addEventListener("DOMContentLoaded", function () {
        new Swiper(".swiper-container", {
            slidesPerView: "3", // Adjusts to button width
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                992: { enabled: false }, // Disables Swiper on desktops (992px+)
            }
        });
    });
}

// End

