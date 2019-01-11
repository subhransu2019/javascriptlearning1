function a(a,b){
for(i=1;i<=10;i++){
c=a+b;
document.write(c);
document.write("<br>");
a++;
b++;
}
}
a(1,5);
// function with return statement
function Add(a,b){
    for(i=1;i<=10;i++){
    return a+b;
    a++;
    b++;
    }
    }
    document.write("the value is "+ Add(1,5));
