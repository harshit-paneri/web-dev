//x=document.getElementById("head1");

// Document.write("head1")

//console.log(document.getElementById('head1').innerHTML);
y = document.getElementById("head1").innerHTML;
console.log(y);


function my_f()
{
    x=document.getElementById("count").innerHTML;
    y= parseInt(x)+1;
    // console.log(x);
    // console.log(y);
    document.getElementById('count').innerHTML = y;
}
function reset()
{
    document.getElementById('count').innerHTML =0;
}
function sum()
{
     x=document.getElementById("a").value;
     y=document.getElementById("b").value;
     z= parseInt(x) + parseInt(y);
    document.getElementById("c").innerHTML = z;

}

var studInfo={
    name: "Harshit",
    age: 20,
    roll_no: 21,
    address : "sec.6 opp police staion",
}

var game = "GTA VICE CITY";
console.log(game.length);

// Home Work
function big(){
    document.getElementById("big").style.fontSize='35px';
}

let nk = 16 + 4 + "Volvo";
console.log(nk);

document.getElementById("ok").innerHTML = nk;

let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

document.getElementById("singleq").innerHTML =
answer1 + "<br>" + 
answer2 + "<br>" + 
answer3;


let number = [1,2,"3",4,5,6,7,8];
console.log(number[2]);
console.log(typeof number[2]);

// let a = number.slice(2,4);
// console.log(a);

// let b = number.splice(2,0,"90");
// console.log(number);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");


console.log(fruits.sort());
console.log(fruits.reverse());

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

console.log(myChildren);