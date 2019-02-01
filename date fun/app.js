// function person(firstName, lastName, dob)
// {
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.birthday=new Date(dob);
  
// this.calculateage=function(){
// var x=Date.now()-this.birthday.getTime();
// var y=new Date(x);
// return Math.abs(y.getUTCFullYear()-1970);
// }
// }
// var jhon=new person('jhon', 'doe', '08-01-1997');
// console.log(jhon.calculateage());









var x=new Date();
// // val=x.getDate();
// // val=x.getDay();
// // val=x.getMonth();
// val=x.getTime();
// val=x.getMilliseconds();
// val=x.getMinutes();
// val=x.getUTCDay();
// val=x.getUTCSeconds();
val=x.getUTCDate();
// val=x.getTimezoneOffset();
// var birthday=new Date(01-6-1996);
// console.log(birthday.getTime)
// var x=Date.now();
console.log(val);

