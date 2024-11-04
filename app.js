const powd = document.getElementById ("powder")
const btn = document.getElementById("btn-1")
const zero = document.getElementById("zero")
const found = document.getElementById("foundation")
const btn2 = document.getElementById("btn-2")
const palette = document.getElementById("vee")
const btn3 = document.getElementById("btn-3")
const qua = document.getElementById("qua")
const eyes = document.getElementById("eyeshadow")
const quant = document.getElementById("quant")
const btn4 = document.getElementById("btn-4")
const lipstick = document.getElementById("velvet")
const quanti = document.getElementById("quanti")
const btn5 = document.getElementById("btn-5")
const men = document.getElementById("perf")
const quantity = document.getElementById("quantity")
const btn6 = document.getElementById("btn-6")
const find = document.getElementById("search")
const bar = document.getElementById("ham")
const link = document.getElementById("david")


// // window.alert ("search")
// let search = parseInt(prompt("What do you want to buy from us today?"))


bar.addEventListener("click", ()=>{  link.classList.remove("shop")
    link.classList.add("hambug")

})

let powder = {
    price : 15000,
    qty : 25
}

btn.addEventListener("click",()=>{

    if (qty.innerText == 0){
        alert("out of stock")
    }
    else{
        let answer = Number (zero.innerText)
         zero.innerText = answer + powder.price
        console.log(result);
    }
    
    // zero.innerText += Number(powder.price)
    // console.log(typeof zero.innerText);
    
    // zero.innerText= parseInt(zero.innerText)
    // console.log(typeof zero.innerText);
    
    // zero.innerText = Math.abs (zero.innerText + powder.price)
    // console.log(typeof powder.price);
    // console.log(typeof zero);
    // console.log(typeof zero.innerText);

})

let foundation = {
    price : 8000,
    qt: 30

}
btn2.addEventListener("click",()=>{
    let answer =Number(zero.innerText)
    zero.innerText = answer + foundation.price
    let result = Number (qt.innerText)
    qt.innerText = -- result
})

let vee= {
    price:20000,
    quan: 50
    
}
btn3.addEventListener("click",()=>{
    let answer = Number(zero.innerText)
    zero.innerText = answer + vee.price
    let result = Number (quan.innerText)
    quan.innerText = -- result
    console.log(result);
    
})

let eyeshadow = {
    price : 18000,
    quant : 10
}
btn4.addEventListener("click",()=>{
    let answer = Number (zero.innerText)
    // console.log(typeof answer);
    zero.innerText = answer + eyeshadow.price
    let result = Number(quant.innerText)
    quant.innerText= -- result 
    console.log(result);
    
})
let velvet = {
    price : 30000,
    quanti: 10
}
btn5.addEventListener("click",()=>{
    let answer = Number (zero.innerText)
    // console.log(typeof answer);
    zero.innerText = answer + velvet.price
    let result = Number(quanti.innerText)
    quanti.innerText= -- result 
    console.log(result);
    

})

let perf = {
    price : 50000,
    quantity : 8
}
btn6.addEventListener("click",()=>{
    let answer = Number (zero.innerText)
    // console.log(typeof answer);
    zero.innerText = answer + perf.price
    let result = Number(quantity.innerText)
    quantity.innerText= -- result 
    console.log(result);
})

// console.log(typeof answer);
