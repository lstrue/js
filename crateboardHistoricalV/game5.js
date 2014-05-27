//In this version I will give event meaning controlling the basic moving
"use strict";
(function(){
        
    //global variables
    var i;
    var j;
    var startEndPointX;
    var startEndPointY;
    var targetStartPointX;
    var targetStartPointY;
    var temp;
        
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
        startEndPointX = squareSize-1;
        startEndPointY = Math.floor(Math.random()*squareSize);
        square[startEndPointX][startEndPointY] = 4;
        
        //generate target starting point between 1 to squareSize - 2
        //For a random integer in the range from M to N (where M and N are two integers, M < N) use:
        //num = Math.floor(M + (1+N-M)*Math.random())  // num is random integer from M to N 
        targetStartPointX = Math.floor(1 + (1 + squareSize - 2 - 1)*Math.random());
        targetStartPointY = Math.floor(1 + (1 + squareSize - 2 - 1)*Math.random());
        square[targetStartPointX][targetStartPointY] = 5;
        
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
                    document.write("<span class='targetCraft'>"+square[i][j]+"</span>");
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
        alert("key down");
        e = e || window.event;
        switch(e.keyCode){
            case 37:
                moveLeft(startEndPointX, startEndPointY);
                break;
            case 38:
                changeArr(38);
                break;
            case 39:
                changeArr(39);
                break;
            case 40:
                changeArr(40);
                break;
            case 13:
                changeArr(13);
                break;
            default:
                changeArr(13);
                //alert("Only direction keys and enter key are functional keys");
        }
    }
    
    //this is the core part: every time click a button, it will test the array
    //use recursion to make code look simple
    var sum = 0;
    var numInFront = 0;
    function moveLeft(X, Y){
        if(Y - 1 > 0){//if it's not on the array border
            while(sum <= 3 && numInFront <=3){//if sum is larger than 3 then do nothing
                if(square[X][Y - 1] === 0){
                    //if the numInFront = 0 then simply change these two values
                    if(numInFront === 0){
                        temp = square[X][Y - 1];
                        square[X][Y - 1] = square[X][Y];
                        square[X][Y] = temp;
                    }else{
                        //move each number one spot and change the original to 0
                        for(i = numInFront; i > 0; i--){
                            square[X][Y - numInFront] = square[X][Y - numInFront + 1];
                        }
                        square[X][Y] = 0;
                    }
                    printOut(square);
                    return;
                }else{
                    numInFront++;
                    sum = sum + square[X][Y - 1];
                    moveLeft(X, Y - 1);
                    return;
                }
            }
        }else{//if reach the border already do nothing
            return;
        }
    }


    function changeArr(a){
        
    }
    

}());
