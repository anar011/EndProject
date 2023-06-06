$(document).ready(function () {

    "use strict"

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
  
  
    //login-register
  
    let login = document.querySelector(".header-icons a .fa-user")
    login.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(".header-login-register").classList.toggle("d-none")
    });
  
  });