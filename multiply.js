"use strict";
(function (){ //anonymous function
    var low = prompt("enter a low num:");
    low = parseInt(low);
    var high = prompt("enter a high num:");
    high = parseInt(high);

    //use caption example
    document.writeln("<table>");
    document.writeln("<table><caption>Multiplication Table</caption>");
//    document.writeln("<h3>Multiplication Table</h3>");
//    document.writeln("<table>");
        document.writeln("<tr>");
            document.writeln("<th></th>");
                for(var i=low; i<=high; i++){
                    document.writeln("<th>"+i+"</th>");
                }
        document.writeln("</tr>");
        
        for(i=low; i<=high; i++){
            document.writeln("<tr>");
            document.write("<th>" + i + "</th>");
            for(var j=low; j<=high; j++){
                document.write("<td>" + i*j + "</td>");
            }
            document.writeln("</tr>");
        }
    document.writeln("</table>");
}());


