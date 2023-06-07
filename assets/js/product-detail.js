$(document).ready(function () {

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
    search.addEventListener("click", function (e) {
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
  
  
    ///Modal
  
    let modal = document.querySelectorAll(".whiskey-icons .fa-square-plus")
    modal.forEach(element => {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".product-priviews").classList.remove("d-none")
        document.body.style.overflow = "hidden";
  
      })
    });
  
  
    let closee = document.querySelector(".whiskey-name span i")
    closee.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(".product-priviews").classList.add("d-none")
      document.body.style.overflowY = "scroll"
    })
  
  
    //Modal price
  
    let oneprice = document.querySelector(".product-priviews .priviews-informs .whiskey-capacity").children[1]
    oneprice.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(".product-priviews .priviews-informs .whiskey-price").children[0].classList.toggle("d-none")
      document.querySelector(".product-priviews .priviews-informs .whiskey-price").children[1].classList.add("d-none")
      document.querySelector(".product-priviews .priviews-informs .whiskey-price").children[2].classList.add("d-none")
  
  
    })
  
  
  
  
  
    let twoprice = document.querySelector(".product-priviews .priviews-informs .whiskey-capacity").children[2]
    twoprice.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(".product-priviews .priviews-informs .whiskey-price").children[1].classList.toggle("d-none")
      document.querySelector(".product-priviews .priviews-informs .whiskey-price").children[0].classList.add("d-none")
      document.querySelector(".product-priviews .priviews-informs .whiskey-price").children[2].classList.add("d-none")
    })
  
    let threeprice = document.querySelector(".product-priviews .priviews-informs .whiskey-capacity").children[3]
    threeprice.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(".product-priviews .priviews-informs .whiskey-price").children[2].classList.toggle("d-none")
      document.querySelector(".product-priviews .priviews-informs .whiskey-price").children[0].classList.add("d-none")
      document.querySelector(".product-priviews .priviews-informs .whiskey-price").children[1].classList.add("d-none")
    })
  
  
  
  
  
  
  
  
  
  
    //login-register
  
    let login = document.querySelector(".header-icons a .fa-user")
    login.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(".header-login-register").classList.toggle("d-none")
    });
  
  });