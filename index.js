"use strict";
var answer = "global!";

(function (herman){ //anonymous function
    //alert(answer + " hi "+herman);
    var num = prompt("enter a num");
    num = parseInt(num);

    //var sum = num + 1   //if you forgot semicolon it still works but definitely not a good habit
    var sum = num + 1;
    document.writeln("<p>now is the \ntime" + sum + "<p>");
    document.writeln("<pre>now is the \n time" + sum + "</pre>");
    document.writeln("<h1><pre>");
    for(var i=1; i<=50; i++){//var is always global
        if(i%5===0){//triple equal sign 
            document.writeln(i);//javascript doesn't complain
        }
    }
    //var i;
    document.writeln("i="+i);//no warning
    document.writeln("</h1></pre>");
    console.log("I am done");
    console.log("I am done");
}(356));

//don't forget developer tool, view source code doesn't deploy js somehow
//sources can show js and html, console can show mistakes

//function a(herman){ //anonymous function
//    alert("hi"+herman);
//    var num = prompt("enter a num");
//    num = parseInt(num);
//
//    //var sum = num + 1   //if you forgot semicolon it still works but definitely not a good habit
//    var sum = num + 1;
//    document.writeln("<p>now is the time" + sum + "<p>");
//}

//(function a(){ //anonymous function
//    alert("hi");
//    var num = prompt("enter a num");
//    num = parseInt(num);
//
//    //var sum = num + 1   //if you forgot semicolon it still works but definitely not a good habit
//    var sum = num + 1;
//    document.writeln("<p>now is the time" + sum + "<p>");
//}());