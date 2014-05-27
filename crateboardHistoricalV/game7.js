//In this version I will combine game5 and game6 together
//In this version I will give event meaning controlling the basic moving - just move left
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
    var source = "";
    var square;
    var sumInFront;
    var numInFront;
        
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
        squareSize = 8;

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
    
    //add events
    document.onkeydown = checkKey;
    function checkKey(e) {
        e = e || window.event;
        switch(e.keyCode){
            case 37:
                alert("left arrow key down");
                beforeMove();
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
    
    //before move needs to initial sumInFront and numInFront
    function beforeMove(){
        sumInFront = 0;
        numInFront = 0;
    }
    
    //this is the core part: every time click a button, it will change the array and print out
    //use recursion to make code look simple
    //adding promt can make development simple
    function moveLeft(X, Y){
//        alert("X: "+X);
//        alert("Y: "+Y);
        if(Y - 1 >= 0){//if it's not on the array border
            if(sumInFront <= 3){//if sum is larger than 3 then do nothing
                if(square[X][Y - 1] === 0){
                    //if there is a 0 exists then can move
//                  alert("move");
                    for(i = 0; i <= numInFront; i++){
                        square[X][Y - 1 + i] = square[X][Y + i];
                    }
                    square[X][Y + i - 1] = 0;
                    source = getSource(square);
                    printOut(source);
//                    alert("startEndPointY: "+startEndPointY);
//                    alert("numInFront: "+numInFront);
                    startEndPointY = startEndPointY - 1;
//                    alert("startEndPointY: "+startEndPointY);
                    return;
                }else{//if it's not a 0 in front then add it and detect the next one
                    numInFront++;
                    sumInFront = sumInFront + square[X][Y - 1];
                    alert("numInFront: "+numInFront);
                    alert("sumInFront: "+sumInFront);
                    moveLeft(X, Y - 1);
                    return;
                }
            }else{
                alert("can't move to left");
                return;
            }
        }else{//if reach the border already do nothing
            alert("can't move to left");//either it's on the border or the left ones are on the border
            return;
        }
    }

    //non-recursive version for thinking first
//    function moveLeft(X, Y){
//        if(Y - 1 > 0){//if it's not on the array border
//            if(square[X][Y - 1] === 0){
//                //if the numInFront = 0 then simply change these two values
//                if(numInFront === 0){
//                    temp = square[X][Y - 1];
//                    square[X][Y - 1] = square[X][Y];
//                    square[X][Y] = temp;
//                }
//                return;
//            }else{
//                numInFront++;
//                sumInFront = sumInFront + square[X][Y - 1];
//                alert("numInFront: "+numInFront);
//                alert("sumInFront: "+sumInFront);
//                    if(Y - 1 > 0){//still not the border
//                        if(square[X][Y - 2] === 0){
//                            //if the numInFront = 0 
//                            //need to check numInFront and move all related ones
//                            if(numInFront === 0){
//                                temp = square[X][Y - 1];
//                                square[X][Y - 1] = square[X][Y];
//                                square[X][Y] = temp;
//                            }
//                            return;
//                        }else{
//                            numInFront++;
//                            sumInFront = sumInFront + square[X][Y - 1];
//                            alert("numInFront: "+numInFront);
//                            alert("sumInFront: "+sumInFront);
//
//
//                            return;
//                        }
//                    }
//                return;
//            }
//        }else{//if reach the border already do nothing
//            alert("can't go outside the border");
//            return;
//        }
//    }

    var printOut = function(source){
        document.getElementById("array").innerHTML=source;
        console.log("Done");
    }
    
    //initialize
    square = initialArr();
    source = getSource(square);
    printOut(source);


    function changeArr(a){
        
    }
    

}());

