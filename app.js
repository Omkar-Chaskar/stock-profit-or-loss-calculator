let purPrice = document.querySelector("#stock-purchase");
let quantity = document.querySelector("#stock-quntity");
let curPrice = document.querySelector("#stock-current");
let btn = document.querySelector("#btn-submit")
let msg = document.querySelector("#msg")
let inputSection = document.querySelector("input")

btn.addEventListener("click", function(event){
    event.preventDefault();
    if(inputSection.value > 0){
        purPrice = Number(purPrice.value);
        quantity = Number(quantity.value);
        curPrice = Number(curPrice.value);
        
        if (purPrice > curPrice) {
            let loss = (purPrice - curPrice) * quantity;
            let perProfit = ((purPrice - curPrice)/100)*purPrice ;
            console.log(profit , perProfit ,"%")
            msg.innerHTML ="You are in profit."
        } else {
            msg.innerHTML ="You are in loss."
        }
    }else{
        msg.innerHTML = "Please enter values greater than Zero."
    }
})
