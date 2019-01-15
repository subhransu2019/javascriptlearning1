function f1()
{
    var x=document.getElementById("from1");
    var y="";
    var i;
for(i=0;i<x.length;i++)
{
y+= x.elements[i].value + "<br>";
}
document.write(y);
}
