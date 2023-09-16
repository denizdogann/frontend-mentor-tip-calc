const tipResult = document.getElementById("tip");
const totalResult = document.getElementById("total");
const noOfPPl = document.getElementById("num-of-ppl");
let tipPerc = 0;
const billInput = document.getElementById("bill")
const customTipInput = document.getElementById("custom");
const buttons = document.getElementsByClassName("perc");

$(".perc").on("click", function(){
  if($(this).hasClass("selected") == false){
    for(let element of buttons){
      if (element.classList.contains("selected")){
        element.classList.remove("selected")
      }
    }
    $(this).addClass("selected");
    tipPerc = Number($(this).html().slice(0,-1));
  }
  else{
    $(this).removeClass("selected");
    tipPerc = 0;
  }
  
  let bill = Number(billInput.value);
  let ppl = Number(noOfPPl.value);
  if(bill !==0 && ppl !==0){
    Calculate(bill,ppl,tipPerc)
  }
    
    
});

$(".ev-list").on("input", function(){
  let bill = Number(billInput.value);
  let ppl = Number(noOfPPl.value);
  if(isNaN(bill) || isNaN(ppl) || isNaN(tipPerc)){
    $(this).val("");
  }
  
  if(bill !==0 && ppl !==0){
    Calculate(bill,ppl,tipPerc);
  }

}
);

$("#custom").on("input", function(){
  for (let element of buttons) {
    element.style.backgroundColor = "hsl(183, 100%, 15%)";
  }
  let bill = Number(billInput.value);
  let ppl = Number(noOfPPl.value);
  tipPerc = customTipInput.value;
  if(isNaN(tipPerc)){
    $(this).val("");
  }
  if(bill !==0 && ppl !==0){
    console.log("evlist içi");
    Calculate(bill,ppl,tipPerc);
  }
})


function Calculate(bill, ppl, tipPerc){
  let tip =(bill * tipPerc) / 100;
  let totalwithTips = tip + bill;
  let tipPerPerson = tip / ppl;
  let totalPerPerson = totalwithTips/ppl

  tipResult.innerHTML = "$" + tipPerPerson.toFixed(2);
  totalResult.innerHTML = "$" +totalPerPerson.toFixed(2);

}
