// nav menu style
var nav = $("#navbarSupportedContent");
var btn = $(".custom_menu-btn");
btn.click
btn.click(function (e) {

    e.preventDefault();
    nav.toggleClass("lg_nav-toggle");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
});


function getCurrentYear() {
    var d = new Date();
    var currentYear = d.getFullYear()

    $("#displayDate").html(currentYear);
}

getCurrentYear();



document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');

    const revealOnScroll = function() {
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.8;

            if(boxTop < triggerBottom) {
                box.classList.add('show');
            } else {
                box.classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Call once to check initial state
});

// document.addEventListener('DOMContentLoaded', function() {
//     const serviceCards = document.querySelectorAll('.service-card');
//     const isMobile = window.matchMedia("(max-width: 768px)").matches;

//     if (isMobile) {
//         // Create overlay
//         const overlay = document.createElement('div');
//         overlay.classList.add('overlay');
//         document.body.appendChild(overlay);

//         serviceCards.forEach(card => {
//             card.addEventListener('click', () => {
//                 card.classList.toggle('active');
//                 overlay.classList.toggle('active');
//             });
//         });

//         overlay.addEventListener('click', () => {
//             const activeCard = document.querySelector('.service-card.active');
//             if (activeCard) {
//                 activeCard.classList.remove('active');
//                 overlay.classList.remove('active');
//             }
//         });

//         // Detect card in center of screen while scrolling
//         let ticking = false;
//         document.addEventListener('scroll', () => {
//             if (!ticking) {
//                 window.requestAnimationFrame(() => {
//                     const centerY = window.innerHeight / 2;
//                     let closestCard = null;
//                     let closestDistance = Infinity;
//                     serviceCards.forEach(card => {
//                         const rect = card.getBoundingClientRect();
//                         const distance = Math.abs(rect.top + rect.height / 2 - centerY);
//                         if (distance < closestDistance) {
//                             closestCard = card;
//                             closestDistance = distance;
//                         }
//                     });

//                     serviceCards.forEach(card => card.classList.remove('active'));
//                     if (closestCard) closestCard.classList.add('active');

//                     ticking = false;
//                 });
//                 ticking = true;
//             }
//         });
//     } else {
//         serviceCards.forEach(card => {
//             card.addEventListener('mouseover', () => {
//                 card.classList.add('active');
//             });
//             card.addEventListener('mouseout', () => {
//                 card.classList.remove('active');
//             });
//         });
//     }
// });





var testiomnialData = [
    {
        avatar: "https://img.freepik.com/free-photo/indian-man-using-laptop-his-home_1157-45095.jpg",
        name: "Ravi Sharma",
        review: "The Astra's digital marketing strategies transformed our online presence! Incredible results, highly recommend their services!"
    },
    {
        avatar: "https://img.freepik.com/free-photo/smiling-indian-girl-casual-clothes-pointing-away-looking-happy_171337-14493.jpg",
        name: "Sneha Patel",
        review: "The Astra's AI solutions revolutionized our business! Their expertise is unmatched, and the results are beyond our expectations!"
    },
    {
        avatar: "https://img.freepik.com/free-photo/handsome-young-man-indian-white-shirt-standing-grey-wall_1157-40993.jpg",
        name: "Amit Verma",
        review: "Outstanding service from The Astra! Their app development team crafted a top-notch app that exceeded all our expectations!"
    },
    {
        avatar: "https://img.freepik.com/free-photo/portrait-smiling-young-indian-man_171337-18883.jpg",
        name: "Priya Nair",
        review: "The Astra's e-commerce solutions helped us scale rapidly. Their team is highly skilled and super responsive. Couldn’t be happier!"
    },
    {
        avatar: "https://img.freepik.com/free-photo/happy-indian-woman-glasses-standing-isolated-wall_171337-12667.jpg",
        name: "Anjali Desai",
        review: "The Astra’s graphic design services truly elevated our brand’s image. Creative, innovative, and easy to work with!"
    }
]

var slideHolder = document.querySelector("#slideHolder")
for (let i of testimonialData) slideHolder.innerHTML += `<div class="swiper-slide"> <div class="ImgHolder"><img src="${i.avatar}"></div><div class="ContentHolder"><h3>${i.name}</h3><p>${i.review}</p></div></div>`

const swiper = new Swiper('#craouselContainer', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2.3,
    loop: true,
    spaceBetween: 30,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        depth: 800,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: { delay: 500 }
});
window.onresize = queryResizer
queryResizer()
function queryResizer() {
    if (window.innerWidth < 724) swiper.params.slidesPerView = 2
    if (window.innerWidth > 501) swiper.params.slidesPerView = 2
    if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3
    if (window.innerWidth < 501) swiper.params.slidesPerView = 1
    swiper.update()
}
