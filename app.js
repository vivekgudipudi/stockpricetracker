var initialPrice = document.querySelector
('#initial-price');

var stockQuantity = document.querySelector
('#stocks-quantity');
var currentPrice = document.querySelector
('#current-price');
var submitBtn = document.querySelector
('#submit-btn');

var outputBox = document.querySelector
('#output-box');
submitBtn.addEventListener('click', submitHandler);
  function submitHandler(){
      var ip = Number(initialPrice.value);
      var qty = Number(stockQuantity.value);
      var curr = Number(currentPrice.value);
      calculateProfitAndLoss(ip,qty,curr);

  } 




function calculateProfitAndLoss(initial,quantity,current){
    if(initial > current){
        //loss Logic here
        var loss = (initial - current)*quantity;
        var lossPercentage = (loss/initial)*100;
        showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage}% :-{`)
    } else if( current > initial){
        //profit Logic here

        var profit =(current - initial)* quantity;
        var profitPercentage = (profit /initial)* 100

        showOutput(`Hey the profit is ${profit} and the percentage is ${ profitPercentage}% :-}`)
    }else{
        //the rest logic
        showOutput(`Invalid Input!!!`)
    }
}
 function showOutput(message){
     outputBox.innerHTML = message;

 }