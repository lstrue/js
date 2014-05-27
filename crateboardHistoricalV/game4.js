//In this version I will add event controlling the basic moving
"use strict";
(function(){
        
    //global variables
    var i;
    var j;
        
    //initial the square Array
    var initialArr = function(){

        //generate a random square size
        var squareSize;
        if(Math.random()<0.2){
            squareSize = 8;
        }else if(Math.random()<0.4){
            squareSize = 9;
        }else if(Math.random()<0.6){
            squareSize = 10;
        }else if(Math.random()<0.8){
            squareSize = 11;
        }else{
            squareSize = 12;
        }

        //initialize array
        var square = new Array(squareSize);
        for(i=0; i<squareSize; i++){
            square[i] = new Array(squareSize);
            for(j=0; j<squareSize; j++){
                if(Math.random()<0.2){
                    square[i][j] = 1;
                }else if(Math.random()<0.3){
                    square[i][j] = 2;
                }else if(Math.random()<0.4){
                    square[i][j] = 3;
                }else{
                    square[i][j] = 0;
                }
            }
        }
        
        //generate bobcat, representing by 4
        var startEndPoint = Math.floor(Math.random()*squareSize);
        square[squareSize-1][startEndPoint] = 4;
        
        //generate target starting point between 1 to squareSize - 2
        //For a random integer in the range from M to N (where M and N are two integers, M < N) use:
        //num = Math.floor(M + (1+N-M)*Math.random())  // num is random integer from M to N 
        var targetStartPoint = Math.floor(1 + (1 + squareSize - 2 - 1)*Math.random());
        square[targetStartPoint][targetStartPoint] = 5;
        
        return square;
    }
    
    //print out array
    var printOut = function(square){
        var squareSize = square.length;
        document.writeln("<pre><h1>");
        for(i=0; i<squareSize; i++){
            for(j=0; j<squareSize; j++){
                switch(square[i][j]){
                case 1:
                    document.write("<span class='green'>"+square[i][j]+"</span>");
                    break;
                case 2:
                    document.write("<span class='yellow'>"+square[i][j]+"</span>");
                    break;
                case 3:
                    document.write("<span class='brown'>"+square[i][j]+"</span>");
                    break;
                case 4:
                    document.write("<span class='bobcat'>"+square[i][j]+"</span>");
                    break;
                case 5:
                    document.write("<span class='red'>"+square[i][j]+"</span>");
                    break;
                default:
                    document.write("<span class='grey'>"+square[i][j]+"</span>");
                }
            }
            document.write("");
            document.writeln();
        }
        document.writeln("</h1></pre>");
        console.log("Done");
    }
    
    var square = initialArr();
    printOut(square);
    
    //add events
    document.onkeydown = checkKey;
    function checkKey(e) {
        e = e || window.event;
        switch(e.keyCode){
            case 37:
                alert("left arrow");
                break;
            case 38:
                alert("up arrow");
                break;
            case 39:
                alert("right arrow");
                break;
            case 40:
                alert("down arrow");
                break;
            case 13:
                alert("blow up");
//                document.write("<span class='bobcat'>"+square[i][j]+"</span>");
                break;
            default:
                alert("Only direction keys and enter key are functional keys");
        }
    }


}());
