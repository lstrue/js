//In this version I will fix the bug: if I click left key it can only execute once
//this bug got fix in this version by moving <script src="game.js"></script> to the bottom of the html page
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
    
    //print outSource
    var getSource = function(square){
        var source = "<pre><h1>";
        for(i=0; i<square.length; i++){
            source = source + "<br>";
            for(j=0; j<square.length; j++){
                switch(square[i][j]){
                case 1:
                    source = source + "<span class='green'>"+square[i][j]+"</span>";
                    break;
                case 2:
                    source = source + "<span class='yellow'>"+square[i][j]+"</span>";
                    break;
                case 3:
                    source = source + "<span class='brown'>"+square[i][j]+"</span>";
                    break;
                case 4:
                    source = source + "<span class='bobcat'>"+square[i][j]+"</span>";
                    break;
                case 5:
                    source = source + "<span class='targetCraft'>"+square[i][j]+"</span>";
                    break;
                default:
                    source = source + "<span class='grey'>"+square[i][j]+"</span>";
                }
            }
        }
        return source + "</h1></pre>";
    }
    
    //this part has problem - if you want to use document.getElementById
    //be careful about loading order
    //here I get stuck at the loading order 
    var square = initialArr();
    var source = getSource(square);
    var printOut = function(source){
        alert(source);
        document.getElementById("array").innerHTML=source;
//        document.getElementById('game').src = "<h1>123</h1>";
        console.log("Done");
    }
    printOut(source);//getSource(initialArr())

    //add events
//    document.onkeydown = checkKey;
//    function checkKey(e) {
//        e = e || window.event;
//        switch(e.keyCode){
//            case 37:
//                alert(123);
////                square = initialArr();
////                square[0][0] = 8;
////                source = getSource(square);
//                printOut(source);
//                break;
//            default:
////                square = initialArr();
////                square[0][0] = 9;
////                source = getSource(square);
//                printOut(source);
//                break;
//        }
//    }

}());
