//in this version I will keep adding functions
//1. how to make the goal point a different color all the time - this one can answer later since my 
//   structure is hard to do this
//2. Insted of the above one, I can simply tell user where the goal is
//3. When the bobcat equals goal spot, stop and congratulate user
//   show total moves and any move
"use strict";
(function(){
        
    //global variables
    var i;
    var j;
    var startEndPointX;//this can change to crack bobcat, so need goal point
    var startEndPointY;
    var goalX;//after initialization these won't change
    var goalY;
    var targetStartPointX;//target start point doesn't matter 
    var targetStartPointY;
    var source = "";
    var square;
    var sumInFront;
    var numInFront;
    var temp;
    var totalMoves = 0;
        
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
                //for test, need to change later
                if(Math.random()<0.05){
                    square[i][j] = 1;
                }else if(Math.random()<0.08){
                    square[i][j] = 2;
                }else if(Math.random()<0.09){
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
        goalX = startEndPointX;
        goalY = startEndPointY;
        
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
//                alert("left arrow key down");
                totalMoves ++;
                showMoveChange();
                beforeMove();
                moveLeft(startEndPointX, startEndPointY);
                break;
            case 38:
                totalMoves ++;
                showMoveChange();
                beforeMove();
                moveUp(startEndPointX, startEndPointY);
                break;
            case 39:
//                alert("right arrow key down");
                totalMoves ++;
                showMoveChange();
                beforeMove();
                moveRight(startEndPointX, startEndPointY);
                break;
            case 40:
                totalMoves ++;
                showMoveChange();
                beforeMove();
                moveDown(startEndPointX, startEndPointY);
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
                        if(square[X][Y + i] === 5 && X === goalX && (Y - 1 + i) === goalY){//goal spot
                            alert("Done! Total moves are: " + totalMoves);
                            return;
                        }
                    }
                    square[X][Y + i - 1] = 0;
                    source = getSource(square);
                    printOut(source);
//                    alert("startEndPointY: "+startEndPointY);
//                    alert("numInFront: "+numInFront);
                    startEndPointY = startEndPointY - 1;
//                    alert("startEndPointY: "+startEndPointY);
                    return;
                }else if(square[X][Y - 1] > 0 && square[X][Y - 1] < 4 ){//if it's 1,2,3
                    numInFront++;
                    sumInFront = sumInFront + square[X][Y - 1];
//                    alert("numInFront: "+numInFront);
//                    alert("sumInFront: "+sumInFront);
                    moveLeft(X, Y - 1);
                    return;
                }else if(square[X][Y - 1] === 5){//almost the same as 1,2,3
                    numInFront++;
                    moveLeft(X, Y - 1);
                    return;
                }
            }else{
                alert("can't move to left now");
                return;
            }
        }else{//if reach the border already do nothing
            alert("can't move to left now");//either it's on the border or the left ones are on the border
            return;
        }
    }
  

    function moveRight(X, Y){
//        alert("X: "+X);
//        alert("Y: "+Y);
        if(Y + 1 < square.length){//if it's not on the array border
            if(sumInFront <= 3){//if sum is larger than 3 then do nothing
                if(square[X][Y + 1] === 0){
                    //if there is a 0 exists then can move
//                    alert("move");
                    for(i = 0; i <= numInFront; i++){
                        square[X][Y + 1 - i] = square[X][Y - i];
                        if(square[X][Y - i] === 5 && X === goalX && (Y + 1 - i) === goalY){//goal spot
                            alert("Done! Total moves are: " + totalMoves);
                            return;
                        }
                    }
//                    alert("numInFront: "+numInFront);
//                    alert("Y: "+Y);
                    square[X][Y - i + 1] = 0;
//                    for(i = numInFront; i>=0; i--){
//                        square[X][Y + 1 + numInFront] = square[X][Y + numInFront];
//                    }
//                    square[X][Y - numInFront] = 0;//i here is always 0
                    source = getSource(square);
                    printOut(source);
                    startEndPointY = startEndPointY + 1;
//                    alert("startEndPointY: "+startEndPointY);
                    return;
                }else if(square[X][Y + 1] > 0 && square[X][Y + 1] < 4 ){//if it's 1,2,3
                    numInFront++;
                    sumInFront = sumInFront + square[X][Y + 1];
//                    alert("numInFront: "+numInFront);
//                    alert("sumInFront: "+sumInFront);
                    moveRight(X, Y + 1);
                    return;
                }else if(square[X][Y + 1] === 5){//almost the same as 1,2,3
                    numInFront++;
                    moveRight(X, Y + 1);
                    return;
                }
            }else{
                alert("can't move to right now");
                return;
            }
        }else{//if reach the border already do nothing
            alert("can't move to right now");//either it's on the border or the left ones are on the border
            return;
        }
    }
    
    function moveUp(X, Y){
        if(X - 1 >= 0){
            if(sumInFront <= 3){
                if(square[X - 1][Y] === 0){
                    for(i = 0; i <= numInFront; i++){
                        square[X - 1 + i][Y] = square[X + i][Y];
                        if(square[X + i][Y] === 5 && (X - 1 + i) === goalX && Y === goalY){//goal spot
                            alert("Done! Total moves are: " + totalMoves);
                            return;
                        }
                    }
                    square[X + i - 1][Y] = 0;
                    source = getSource(square);
                    printOut(source);
                    startEndPointX = startEndPointX - 1;
                    return;
                }else if(square[X - 1][Y] > 0 && square[X - 1][Y] < 4 ){
                    numInFront++;
                    sumInFront = sumInFront + square[X - 1][Y];
                    moveUp(X - 1, Y);
                    return;
                }else if(square[X - 1][Y] === 5){//almost the same as 1,2,3
                    numInFront++;
                    moveUp(X - 1, Y);
                    return;
                }
            }else{
                alert("can't move up now");
                return;
            }
        }else{
            alert("can't move up now");
            return;
        }
    }
    
    //you should not remove all the alert until the first version
    function moveDown(X, Y){
//        alert("X: "+X);
//        alert("Y: "+Y);
        if(X + 1 < square.length){//if it's not on the array border
            if(sumInFront <= 3){//if sum is larger than 3 then do nothing
                if(square[X + 1][Y] === 0){
                    //if there is a 0 exists then can move
//                    alert("move");
                    for(i = 0; i <= numInFront; i++){
                        square[X + 1 - i][Y] = square[X - i][Y];
                        if(square[X - i][Y] === 5 && (X + 1 - i) === goalX && Y === goalY){//goal spot
                            alert("Done! Total moves are: " + totalMoves);
                            return;
                        }
                    }
//                    alert("numInFront: "+numInFront);
//                    alert("Y: "+Y);
                    square[X - i + 1][Y] = 0;
//                    for(i = numInFront; i>=0; i--){
//                        square[X][Y + 1 + numInFront] = square[X][Y + numInFront];
//                    }
//                    square[X][Y - numInFront] = 0;//i here is always 0
                    source = getSource(square);
                    printOut(source);
                    startEndPointX = startEndPointX + 1;
//                    alert("startEndPointY: "+startEndPointY);
                    return;
                }else if(square[X + 1][Y] > 0 && square[X + 1][Y] < 4 ){
                    numInFront++;
                    sumInFront = sumInFront + square[X + 1][Y];
//                    alert("numInFront: "+numInFront);
//                    alert("sumInFront: "+sumInFront);
                    moveDown(X + 1, Y);
                    return;
                }else if(square[X + 1][Y] === 5){//almost the same as 1,2,3
                    numInFront++;
                    moveDown(X + 1, Y);
                    return;
                }
            }else{
                alert("can't move to right now");
                return;
            }
        }else{//if reach the border already do nothing
            alert("can't move to right now");//either it's on the border or the left ones are on the border
            return;
        }
    }
    
    var printOut = function(source){
        document.getElementById("array").innerHTML=source;
        console.log("Done");
    }

    var showGoalPosition = function(goalY){
        var goalPosition = "<h2>push red box to the "+ (goalY + 1) + "th spot at the bottom</h2>";
        document.getElementById("goalPosition").innerHTML=goalPosition;
    }
    
    var showMoveChange = function(){
        document.getElementById("moveNum").innerHTML="<h2>Total moves: "+totalMoves+"</h2>";
    }
    
    //initialize
    square = initialArr();
    source = getSource(square);
    printOut(source);
    showGoalPosition(goalY);
    showMoveChange();

    function changeArr(a){
        
    }
    

}());

