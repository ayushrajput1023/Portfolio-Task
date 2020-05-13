
alert("You are welcomed,Please click on Nav-Item");
var a = prompt("Enter Your Name");

function sum(){
  document.querySelector('h1').style.color='#9a1f40';
}

function name(){
  document.querySelector('h2').textContent = a;
}

document.querySelector('h1').textContent = a+" is the best boy in the world and doing some good work";

document.querySelectorAll('p')[4].textContent = "@ "+a;

function sound(){
  var audio = new Audio("images/tom-1.mp3");
  audio.play();
}

function fadout(){
  document.querySelectorAll('a')[4].style.opacity = '0';
}
function well(){
  document.querySelectorAll('img')[1].classList.add("imgg");
}
