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