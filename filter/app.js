 let adult=[];
let ages=[14,54,12,10,55,86,3,6,4,14];
 for(let i=0;i<age.length;i++)
 {
     if(ages[i]>=21)
     {
 adult.push(age[i]);
     }
 }
 console.log(adult);

const adult=ages.filter(function(age)
{
    if(age>=21)
    {
        return true;
    }
})
console.log(adult);

// filter with arrow 
const adult=ages.filter(ages=> age>=21)
console.log(adult);



