function Diceroller() {


let sides = document.getElementsByName('diSides');
let amount = document.getElementsByName('diAmount');
let counter =0;
while (counter<= amount)
{
let results = Math.floor(Math.random() * (sides+1));
alert(results);
 results = 0;
counter++
}
}
document.getElementsByClassName('className')
