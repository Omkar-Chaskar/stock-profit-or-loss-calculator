const purPrice = document.getElementById("stock-purchase");
const quantity = document.getElementById("stock-quntity");
const curPrice = document.getElementById("stock-current");
const form = document.forms[0];
let msg = document.querySelector("#msg")
let inputSection = document.querySelector("input")


form.addEventListener("submit",function clickHandler(e){
    e.preventDefault();

    let pP = Number(purPrice.value);
    let qnt = Number(quantity.value);
    let cP = Number(curPrice.value);
    console.log(typeof purPrice.value , quantity.value ,curPrice.value)
    if(inputSection.value > 0){
        
        
        if(isNaN(purPrice) === true){
            console.log("NaN value found")
            
        }
        console.log(pP , qnt ,cP)
        
        if (pP > cP) {
            let loss = (purPrice - curPrice) * quantity;
            let perLoss = ((purPrice - curPrice)*100)/purPrice ;
            console.log(typeof loss , perLoss ,"%")
            msg.innerHTML ="You are in Loss."
        } else {
            let profit = (curPrice - purPrice) * quantity;
            let perProfit = ((purPrice -curPrice)*100)/curPrice ;
            console.log(profit , perProfit.toFixed(2) ,"%")
            msg.innerHTML ="You are in profit."
        }
    }else{
        msg.innerHTML = "Please enter values greater than Zero."
    }
})
