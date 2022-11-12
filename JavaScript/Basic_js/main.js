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
// Type OF : 
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

const numberss = [175, 50, 25];
numberss.reduce(myFunc);
function myFunc(total, num) {
    console.log(total);
    console.log(num);
    return total - num;
  }

  console.log("done");

  let obj = {
    name : 'Harshit',
    college : 'Techno',
  };
  for(let key in obj){
    console.log(obj[key]);
  }

  let num=[1,2,3];
  for(let x of num){
    console.log(x);
  }
// DATE 

  const d = new Date()
  console.log(d);
  console.log(d.toDateString());
  console.log("get Date : ");
  console.log(d.getDate());
  console.log(d.getMonth());
  console.log(d.getFullYear());
  console.log("UTC");
  console.log(d.getUTCHours());

  //TIME SET
  console.log("Time To SET ");
  console.log(d.setDate(8));
  console.log(d.toString());
  console.log(d.setMonth(9));
  console.log(d.setFullYear(2090));
  console.log(d);

  const k = new Date(2002,09,29);
  console.log(k);

  const jk = new Date(09,09,29);
  console.log(jk);

  // Math

  console.log(Math.ceil(4.9)*10);
  console.log(Math.floor(Math.random() * 10));
  let ok = new Set([1,2,3,7]);
  ok.add(4);
  console.log(ok);

  let x = new Map([
    ["name","ram"],
    ["class","7"],
    ["roll","21"]
  ])

  console.log(x);
  // 
  function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
      if(x == "") throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5) throw "too low";
      if(x > 10) throw "too high";
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
  }

  // This function
  const person1 = {
    firstName : 'Ram',
    lastName : 'Singh',
    fullName : function()
    {
      return this.firstName + " " + this.lastName;
    }
  };

  const person2 = {
    firstName : 'Tech',
    lastName : 'speed',
  }
  console.log(person1.fullName.call(person2));

  // apply
  console.log(person1.fullName.apply(person2));


  //console.log(person1.fullName());

  const man = {
    firstName : 'Mukesh',
    lastName : 'Sharma',
    fullName: function () {
      return this.firstName + " " + this.lastName;
    } 
  }
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = man.fullName.bind(member);
  console.log(fullName);

  console.log("hey, buddy DOM")

const xx=document.createElement('div');
xx.setAttribute('id','demo');
y=document.body.appendChild(xx);
xx.innerHTML="Hello World!!!";
console.log(y);

xx.style.backgroundColor='yellow';
xx.style.color='Green';

// function(callback){
//   callback();
// }

const count = () => {console.log('Hello') }
setTimeout(count, 5000);