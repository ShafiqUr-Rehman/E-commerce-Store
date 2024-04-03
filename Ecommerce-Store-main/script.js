// responsive navbar

let navBar = document.querySelector("#navbar");
let openMenu = document.querySelector("#menuIcon");
let closeMenu = document.querySelector("#closeMenu");

navBar.style.transform = "translateX(100%)";
navBar.style.transition = "transform 0.3s ease-in-out";

openMenu.addEventListener("click", () => {
    navBar.style.transform = "translateX(0)";
})

closeMenu.addEventListener("click",()=> {
    navBar.style.transform = "translateX(100%)";
})

// product image gallery

let mainImage = document.querySelector("#mainImage")
let thumbnails = document.querySelectorAll(".thumbnail")

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        mainImage.src = thumbnail.src;
    })
})

// scroll to top

document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        // Show or hide the button based on scroll position
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        // Smooth scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
