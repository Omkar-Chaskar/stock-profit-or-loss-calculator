const purPrice = document.getElementById("stock-purchase");
const quantity = document.getElementById("stock-quntity");
const curPrice = document.getElementById("stock-current");
const form = document.forms[0];
let msg = document.querySelector("#msg")
let inputSection = document.querySelector("input")
const container = document.querySelector(".container");


form.addEventListener("submit", function clickHandler(e) {
    e.preventDefault();

    let pP = Number(purPrice.value);
    let qnt = Number(quantity.value);
    let cP = Number(curPrice.value);
    console.log(typeof purPrice.value, quantity.value, curPrice.value)
    if (pP > 0 && qnt > 0 && cP > 0) {

        if (pP > cP) {
            let loss = ((pP - cP) * qnt).toFixed(2);
            let perLoss = (((pP - cP) * 100) / pP).toFixed(2);
            msg.innerHTML = `<div style="color: rgba(243, 13, 13, 0.76)">You lost ${perLoss}% loss. Your total loss is ${loss}.</div>`;
            document.body.style.backgroundImage = "url('./Image/white-background.jpg')";
            container.style.background = "transparent";
            if (perLoss >= 50) {
                document.body.style.backgroundImage = "url('./Image/loss.jpg')";
                container.style.backgroundColor = "rgba(25, 129, 143, 0.767)";
                document.body.style.backgroundSize = "400px";
            }

        } else {
            let profit = ((cP - pP) * qnt).toFixed(2);
            let perProfit = (((cP - pP) * 100) / pP).toFixed(2);
            msg.innerHTML = "You gained " + `${perProfit}` + "% profit. Your total profit is " + `${profit}` + ".";
            document.body.style.backgroundImage = "url('./Image/white-background.jpg')";
            container.style.background = "transparent";
            if (perProfit >= 50) {
                document.body.style.backgroundImage = "url('./Image/confetti.gif')";
                container.style.backgroundColor = "rgba(25, 129, 143, 0.767)";
                document.body.style.backgroundSize = "1000px";
            }
        }
    } else {
        msg.innerHTML = "Please enter values greater than Zero."
    }
})