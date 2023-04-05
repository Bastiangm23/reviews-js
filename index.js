const btn_anterior = document.getElementById("btn-anterior");
const btn_siguiente = document.getElementById("btn-siguiente");

const reviews_container = document.querySelector(".reviews-container");
let movimiento = 0

btn_siguiente.addEventListener("click", function(){
    console.log("presionaste siguiente");
    movimiento += -(100/3)
    reviews_container.style.transform = `translateX(${movimiento}%)`;
})

btn_anterior.addEventListener("click", function(){
    console.log("presionaste anterior");
    movimiento += (100/3)
    reviews_container.style.transform = `translateX(${movimiento}%)`;
})