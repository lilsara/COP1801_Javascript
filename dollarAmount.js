
var amountEntered;
var amount = prompt("How much was the meal? $: ");
var total;
amountEntered = () => {
  Number(amount);
}

function totalAmount(){

let i = prompt("How was service: 1. Great, 2. Ok, 3. Poor: ");
    if(i == 1){
    total = ((amount/100)*15) + Number(amount);
    window.alert("The ticket was $" + amount + " " + "Total including the tip for great service: $" + total);
return;
    }
else if(i == 2){
total = ((amount/100)*12)  + Number(amount);
window.alert("The ticket was $" + amount + " " + "Total including the tip for ok service: $" + total);
return;
}
else if(i == 3){
  total = ((amount/100)*10) + Number(amount);
  window.alert("The ticket was $" + amount + " " + "Total including the tip for poor service: $" + total);
return;
}
else{
  window.alert("Error");
}
}


totalAmount();
