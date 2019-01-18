var obj1={
    name:lipu,
    age:25,
    place:Banglore
}
var obj2={
    name:subhrnsu,
    age:23,
    place:Banglore
}
var obj3={
    name:deba,
    age:22,
    place:Banglore
}
let user =new Map()
user.set('lipu',obj1);
user.set('subhransu',obj2);
user.set('deba',obj3);

console.log(user.get('lipu'))// i got all the information on lipu key

console.log(user);
console.log(user.keys);//i got all the keys.
console.log(user.values);//i got all the values.

// when ever i want to iterate it then we go for of
for (const key of user.keys())
{
    console.log(key);
}

for (const values of user.values())
{
    console.log(value);
}

for (const [key,values] of user)
{
    console.log(key +'='+ values.name);
}


for (const [key,values] of user.entries())
{
    console.log(key +'='+ values.name);
}

//array of array
var arr=[['key1','value1'],['key2','value2']];
var mymap=new Map(arr);
console.log(mymap.get('key1'));

