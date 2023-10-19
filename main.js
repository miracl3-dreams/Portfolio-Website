var typed = new Typed('#element', {
    strings: ['<strong>INFORMATION TECHNOLOGY STUDENT.</strong>', '<strong>FREELANCE WEB DEVELOPER.</strong>'],
    typeSpeed: 40,
});


    document.addEventListener("DOMContentLoaded", function () {
        const burgerMenu = document.querySelector(".burger-menu");
        const menuContainer = document.querySelector(".menu-container");

        burgerMenu.addEventListener("click", function () {
            if (menuContainer.style.width === "100%") {
                menuContainer.style.width = "0";
            } else {
                menuContainer.style.width = "100%";
            }
        }); 
    });
    

    document.addEventListener('DOMContentLoaded', function () {
        const burgerMenu = document.querySelector('.burger-menu');
        const navList = document.querySelector('.nav-list');
    
        burgerMenu.addEventListener('click', function () {
            navList.classList.toggle('show-menu');
        });
    });





























// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//             });
//             document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//         }
//     });
// };




// const zoomImage = document.getElementById("zoom-image");
// let currentScale = 1; // Initial scale
// let isZooming = false; // Flag to track if user is actively zooming

// // Function to enable/disable scrolling
// function enableScrolling() {
//   document.body.style.overflow = "auto";
//   isZooming = false;
// }

// function disableScrolling() {
//   document.body.style.overflow = "hidden";
//   isZooming = true;
// }

// zoomImage.addEventListener("wheel", (event) => {
//   event.preventDefault();

//   if (!isZooming) {
//     disableScrolling();
//   }

//   // Increase or decrease the scale based on scroll direction
//   if (event.deltaY < 0) {
//     currentScale += 0.1; // Zoom in
//   } else {
//     currentScale -= 0.1; // Zoom out
//   }

//   // Apply the scale transformation
//   zoomImage.style.transform = `scale(${currentScale})`;
// });

// zoomImage.addEventListener("mouseleave", () => {
//   enableScrolling();
// });


