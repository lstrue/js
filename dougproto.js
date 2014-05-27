

"use strict";
function listAllProperties(o){     
	var objectToInspect;     
	var result = ""; result = result.concat("typeof:"+typeof o +"/   ");
	if(typeof o === "number") return "!!"+result+"\n";
          
	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){  
		result = result.concat("\n** "+objectToInspect+" ==> "+Object.getOwnPropertyNames(objectToInspect));  
	}
	
	return result+"\n"; 
}
//Object.getPrototypeOf({}).doug="dougy";

var x;
document.writeln("<pre><h2>");  
document["writeln"]("hi there");
document.writeln(typeof "xyz");
document.writeln(typeof listAllProperties);
document.writeln(typeof []);
document.writeln(typeof x);

x = 22;               document.writeln("22:  "+listAllProperties(x));

x = Object;         document.writeln("Object:  "+listAllProperties(x));
                
x = new Object(); document.writeln("newObj:  "+listAllProperties(x));
x = {"abc":93};               document.writeln("{}:  "+listAllProperties(x));

x = [];               document.writeln("[]:  "+listAllProperties(x));  //x=new Array();
x = [22, 7];       document.writeln("[stuf]:  "+listAllProperties(x));

x = function (){ var qq=3; return qq*qq; }
document.writeln("func:  "+listAllProperties(x)); 


document.writeln("</h2></pre>");
/*
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();
rect = new Rectangle;
rect.prototype = {"abc":13};   //not the one in the chain
var shape = new Shape();

rect instanceof Rectangle //true.
rect instanceof Shape //true.
rect.move(1, 1); //Outputs, "Shape moved."

document.writeln("<pre>");

Function.prototype.doug = 123;     //yes, all functions are affected.
document.writeln("getprotoofrect" + listAllProperties(Object.getPrototypeOf(rect)));
document.writeln("rect.proto" + listAllProperties(rect.prototype));
document.write("S.p = O.getp(s)   "); document.writeln(  (Shape.prototype === Object.getPrototypeOf(shape)));
document.writeln("S.p = O.getp(S)   "+ (Shape.prototype === Object.getPrototypeOf(Shape)));
			
document.writeln("Object;  "+listAllProperties(Object));
document.writeln("Objproto;  "+listAllProperties(Object.prototype));
var obj = new Object();
document.writeln("objprotot typeof is " + (typeof obj.prototype));
document.writeln("rectproto typeof is " + (typeof rect.prototype));
document.writeln("new Obj;  "+listAllProperties(obj));
//document.writeln("new Objproto;  "+listAllProperties(obj.prototype));
document.writeln("Shape;  "+listAllProperties(Shape));
document.writeln("Shapeproto;  "+listAllProperties(Shape.prototype));
document.writeln("Shape's length = " + Shape.length);
document.writeln("rect;  "+listAllProperties(rect));
document.writeln("shape;  "+listAllProperties(shape));
document.writeln("Rectangle;  "+listAllProperties(Rectangle));
document.writeln("Function;   "+listAllProperties(Function));
document.writeln("Array;   "+listAllProperties(Array));
document.writeln("array literal;   "+listAllProperties([3,"xyz"]));

var a = [6,"abc"];
a.x = 191;
document.writeln("done");
var myobj = new Object();
document.writeln(myobj.toString());
for( var prop in a){  //NOTE: the Array prototype properties are not enumerable
	document.writeln("someprop");
	if(typeof rect[prop] === "function") document.writeln("is func ");
	document.writeln("=="+prop+"==");
}
document.writeln("donewithprops");
var tmp = Object.prototype;
if(typeof tmp === "undefined") document.writeln("undefined tmp");
for( var prop in tmp){
	document.writeln("=>"+prop+"<=");
}
document.writeln( listAllProperties(tmp) + "\n" + tmp.valueOf() + ";"  );
document.writeln( listAllProperties(Object) + "\n" + tmp.valueOf() + ";"  );
	
document.writeln("</pre>");
*/
