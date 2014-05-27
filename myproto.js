"use strict"

var y = Object;

function listAllProperties(obj){
    //var objectToInspect;
    var result = "";
    result =  result.concat("typeof:" + typeof o + "/");

    if(typeof obj == "number"){//in case it's not an object, eg number
        return result + "\n";
    }
    
    for(var i = obj; i !== null; i = Object.getPrototypeOf(i)){
        result = result.concat("\n** "+i+" ==> " + Object.getOwnPropertyNames(i));
    }
    return result+"\n"; 
}

var x;
document.writeln("<pre><h2>");
document["writeln"]("hi there");

document.writeln(typeof "xyz");
document.writeln(typeof listAllProperties);
document.writeln(typeof blahblah);
document.writeln(typeof []);
document.writeln(typeof x);


x = 22;  document.writeln("22: " + listAllProperties(x));

x = new Object();  document.writeln("new Object(): " + listAllProperties(x));

x = Object;  document.writeln("Object: " + listAllProperties(x));

x = [];  document.writeln("[]:  "+listAllProperties(x));  //x=new Array();
x = [22, 7];   document.writeln("[stuf]:  "+listAllProperties(x));

x = {"abc":93};  document.writeln("{}:  "+listAllProperties(x));

x = function (){ var qq=3; return qq*qq; }
document.writeln("func:  "+listAllProperties(x)); 

document.writeln("</h2></pre>");

