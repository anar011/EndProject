"use strict"
//main-slider//

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//Home Search

let search = document.querySelector(".header-search a i")
search.addEventListener("click",function(e){
  e.preventDefault()
  document.querySelector(".header-search input").classList.toggle("d-none")
});


//bodyde searchin yox olmasi

// document.addEventListener("click", function (e) {
//   if (!!!e.target.closest(".header-search a i")) {
//       if (!$(".header-search input").classList.contains("d-none")) {
//           $(".header-search input").classList.add("d-none")
//       }
//   }
// })

// if (document.body.classList.contains('thatClass')) {
//   // do some stuff
// }


let modal = document.querySelectorAll(".whiskey-icons .fa-square-plus")
modal.forEach(element => {
  element.addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(".product-priviews").classList.remove("d-none")
  })
});


let closee = document.querySelector(".whiskey-name span i")
closee.addEventListener("click",function(e){
  e.preventDefault();
  document.querySelector(".product-priviews").classList.add("d-none")
})

