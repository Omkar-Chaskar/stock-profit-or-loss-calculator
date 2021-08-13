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

        console.log(pP , qnt ,cP)
        
        if (pP > cP) {
            let loss = ((pP - cP) * qnt).toFixed(2);
            let perLoss = (((pP - cP)*100)/pP).toFixed(2);
            msg.innerHTML ="You lost "+`${perLoss}`+"% loss. Your total loss is "+`${loss}` +".";
        } else {
            let profit = ((cP - pP) * qnt).toFixed(2);
            let perProfit = (((cP - pP)*100)/pP).toFixed(2);
            msg.innerHTML ="You gained "+`${perProfit}`+"% profit. Your total profit is "+`${profit}` +".";
        }
    }else{
        msg.innerHTML = "Please enter values greater than Zero."
    }
})
