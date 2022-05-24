// let a = document.getElementById('power').Math.Pow();
// let b = document.getElementById('sqrt').Math.Sqrt();
// let c = document.getElementById('pi').Math.PI();
// let d = document.getElementById('e').Math.exp();



function display(keys){
  document.getElementById('displayid').value+=keys;
}

function solve(){
 
  let x = document.getElementById('displayid').value;
  let y = eval(x);
  document.getElementById('displayid').value = y;
}

function clr(){
  document.getElementById('displayid').value = ' ';
}

2.7182818284