document.getElementById("calculate").addEventListener('submit',calculateResult);

function calculateResult()
{
var loanamount=document.getElementById('loan amount');
var inerest=document.getElementById('interest');
var yearstopay=document.getElementById('Years to repay');
var monthlypayment=document.getElementById('monthly payment box');
var totalpayment=document.getElementById('total payment box');
var totalInterest=document.getElementById('total interest box');

var principalamount=parseFloat(loanamount.value);
var amountofinterest=parseFloat(inerest.value)/100*principalamount;
var time=parseFloat(yearstopay.value);

var monthly=(principalamount+amountofinterest)/12;

if(isFinite(monthly)){
monthlypayment.value=monthly.toFixed();
totalpayment.value=principalamount*amountofinterest*time;
totalInterest.value=amountofinterest*time;
}
else{
console.log("showing error");
}





}