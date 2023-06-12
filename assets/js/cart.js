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


    ///Modal




    //login-register

    let login = document.querySelector(".header-icons a .fa-user")
    login.addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector(".header-login-register").classList.toggle("d-none")
    });





    //Basket-Cart




    let tableBody = document.querySelector("tbody");
    let products = JSON.parse(localStorage.getItem("basket"));
    
    
    getBasketDatas();
    
    function getBasketDatas(){
        if (products != null) {
            for (const product of products) {
                let nativePrice= product.price / product.count
                tableBody.innerHTML += `
                <tr data-id ="${product.id}">
                    <td><img src="${product.img}" alt=""> </td>
                    <td>${product.name}</td>
                    <td>${nativePrice}.00</td>
                    <td>
                     <div class="number">
                        <span class="minus">-</span>
                        <input type="text" value="${product.count}"/>
                        <span class="plus">+</span>
                     </div>
                    </td>
                        <td>${product.price}</td>
                        <td><i class="fa-solid fa-xmark delete"></i></td>
                       
              
                </tr>   `
                
        
        
            }
        
        
            getBasketCount(products);
        
            document.querySelector("#main .main-up").classList.add("d-none");
          
        
        
        
        
        
        } else {
        
            showAlert();
        
        }
    
    }
    
    function showAlert(arr){
        document.querySelector("table").classList.add("d-none");
        document.querySelector("#main .main-up").classList.remove("d-none");
        
    
    }
    
    
    
    
    function getBasketCount(arr) {
        let sum = 0;
    
        for (const item of arr) {
            sum += item.count;
        }
    
        document.querySelector("#navbar-middle .icon-delete .iconss .zeroo span").innerText = sum;
    
    }
    
    getBasketCount(products)
    
    
    
    function deleteProduct(id) {
        products = products.filter(m => m.id != id);
        localStorage.setItem("basket", JSON.stringify(products))
    }
    
    let deleteIcons = document.querySelectorAll(".delete")
    
    deleteIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            let id = parseInt(this.parentNode.parentNode.getAttribute("data-id"));
            deleteProduct(id);
            this.parentNode.parentNode.remove();
            if(products.length == 0){
                localStorage.removeItem("basket")
                showAlert();
    
            }
            
            showGrandTotal();
            getBasketCount(products);
            
            
            
        })
    })
    
    function plus(){
        let plusIcons = document.querySelectorAll(".plus");
        for (const plusIcon of plusIcons) {
            plusIcon.addEventListener("click",function(){{
                for (const product of products) {
                    if(product.id == this.parentNode.parentNode.parentNode.getAttribute("data-id") ){
                        let nativePrice = product.price/product.count
                        product.count++;
                        this.previousElementSibling.value++;
                        product.price = nativePrice*product.count
                        this.parentNode.parentNode.nextElementSibling.innerText = product.price
                        localStorage.setItem("basket",JSON.stringify(products))
                       
                    }
                }
    
                showGrandTotal();
                
            }})
        }
    }
    
    plus()
    
    function minus(){
        let minusIcons = document.querySelectorAll(".minus");
        for (const minusIcon of minusIcons){
            minusIcon.addEventListener("click",function(){
                for (const product of products) {
                    if(product.id == this.parentNode.parentNode.parentNode.getAttribute("data-id")){
                        let nativePrice = product.price/product.count
                        if(product.count == 1){
                            return;
                        }
                        product.count--
    
                        this.nextElementSibling.value--;
                        product.price = nativePrice*product.count
                        this.parentNode.parentNode.nextElementSibling.innerText = product.price
                        localStorage.setItem("basket",JSON.stringify(products))
                        
                    }   
                }
    
                showGrandTotal();
                
            })
        }
    }
    
    minus()
    
    
    function showGrandTotal(){
        if(products != null){
            let title = document.querySelector(".total-title");
            title.classList.remove("d-none");
            title.nextElementSibling.classList.remove("d-none");
            
             let sum = 0;
             for (const item of products){
                sum += parseInt(item.price);
             }
    
             title.nextElementSibling.innerText = "$"+ sum;
        }
    
    }
    
    showGrandTotal();
    
    
    



});
