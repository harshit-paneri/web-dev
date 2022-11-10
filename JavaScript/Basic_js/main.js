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