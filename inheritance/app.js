//EX:-1
function parent()
{

}
parent.prototype.car=function()
{
  console.log("bmw")
}
function child()
{

}
child.prototype=Object.create(parent.prototype);

child.prototype.cycle=function()
{
    console.log("hero")
}

var a=new child();
a.car();
a.cycle();



//EX:-2


function person(firstName, lastName, dob)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.birthday=new Date(dob);
  
this.calculateage=function(){
var x=Date.now()-this.birthday.getTime();
var y=new Date(x);
return Math.abs(y.getUTCFullYear()-1970);
}
}
var jhon=new person('jhon', 'doe', '08-01-1997');
console.log(jhon.calculateage());
var marry=new person('marry', 'doe', '14-02-1999');
console.log(marry.calculateage());

function marriage()
{
  
}
var z=new marriage





