function person()
{
    name=subhransu;
    age=28;
}
// console.log(this.name);
// console.log(this.age);
 var a=new person();
 console.log(a);


 function person(name,age)
{
    this.name=name;
   this.age=age;
}
// console.log(this.name);
// console.log(this.age);
 var a=new person(subhransu,24);
 console.log(a);


 