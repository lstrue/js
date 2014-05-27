
"use strict";
var Game = (function(){//use module, don't need to put var in function except recursion
    
    //these are not global variables
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
    var totalMoves = 0;
    var directionNum = 2;
        
    //initial the square Array
    function initialArr(){//this is another way of creating a function rather than  var initialArr = function(){

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
                //for test, need to change later
                if(Math.random()<0.1){
                    square[i][j] = 1;
                }else if(Math.random()<0.15){
                    square[i][j] = 2;
                }else if(Math.random()<0.3){
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
                    source = source + "<img src='./images/1.jpg' alt='1.jpg' width='40' height='40'><span class='number'>"+square[i][j]+"</span>";
                    break;
                case 2:
                    source = source + "<img src='./images/2.jpg' alt='2.jpg' width='40' height='40'><span class='number'>"+square[i][j]+"</span>";
                    break;
                case 3:
                    source = source + "<img src='./images/3.jpg' alt='3.jpg' width='40' height='40'><span class='number'>"+square[i][j]+"</span>";
                    break;
                case 4:
                    if(directionNum === 1){
                        source = source + "<img src='./images/left.jpg' alt='left.jpg' width='40' height='40'><span class='number'>"+square[i][j]+"</span>";
                    }
                    if(directionNum === 2){
                        source = source + "<img src='./images/up.jpg' alt='up.jpg' width='40' height='40'><span class='number'>"+square[i][j]+"</span>";
                    }
                    if(directionNum === 3){
                        source = source + "<img src='./images/right.jpg' alt='right.jpg' width='40' height='40'><span class='number'>"+square[i][j]+"</span>";
                    }
                    if(directionNum === 4){
                        source = source + "<img src='./images/down.jpg' alt='down.jpg' width='40' height='40'><span class='number'>"+square[i][j]+"</span>";
                    }
                    break;
                case 5:
                    source = source + "<img src='./images/goal.jpg' alt='goal.jpg' width='40' height='40'><span class='number'>"+square[i][j]+"</span>";
                    break;
                default:
                    source = source + "<img src='./images/0.jpg' alt='0.jpg' width='40' height='40'><span class='number'>"+square[i][j]+"</span>";
                }
            }
        }
        return source + "</h1></pre>";
    }
    
    //when user clicks a button
    function keyDown(e) {
//        e = e || window.event;
        switch(e.keyCode){
            case 37:
//                alert("left arrow key down");
                if(directionNum === 1){//if the same direction
                    totalMoves ++;
                    showMoveChange();
                    beforeMove();
                    moveLeft(startEndPointX, startEndPointY);
                    break;
                }else{
                    directionNum = 1;
                    totalMoves ++;
                    showMoveChange();
                    direction(directionNum);
                    source = getSource(square);
                    printOut(source);
                    break;
                }
            case 38:
                if(directionNum === 2){//if the same direction
                    totalMoves ++;
                    showMoveChange();
                    beforeMove();
                    moveUp(startEndPointX, startEndPointY);
                    break;
                }else{
                    directionNum = 2;
                    totalMoves ++;
                    showMoveChange();
                    direction(directionNum);
                    source = getSource(square);
                    printOut(source);
                    break;
                }
            case 39:
                if(directionNum === 3){//if the same direction
                    totalMoves ++;
                    showMoveChange();
                    beforeMove();
                    moveRight(startEndPointX, startEndPointY);
                    break;
                }else{
                    directionNum = 3;
                    totalMoves ++;
                    showMoveChange();
                    direction(directionNum);
                    source = getSource(square);
                    printOut(source);
                    break;
                }
            case 40:
                if(directionNum === 4){//if the same direction
                    totalMoves ++;
                    showMoveChange();
                    beforeMove();
                    moveDown(startEndPointX, startEndPointY);
                    break;
                }else{
                    directionNum = 4;
                    totalMoves ++;
                    showMoveChange();
                    direction(directionNum);
                    source = getSource(square);
                    printOut(source);
                    break;
                }
            case 13:
                explodeFront(startEndPointX, startEndPointY);
                break;
            default:
                alert("Only direction keys and enter key are functional keys");
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
                alert("can't move down now");
                return;
            }
        }else{//if reach the border already do nothing
            alert("can't move down now");//either it's on the border or the left ones are on the border
            return;
        }
    }
    
    var printOut = function(source){
        document.getElementById("array").innerHTML=source;
        console.log("Done");
    }

    var showGoalPosition = function(goalY){
        var goalPosition = "<p>Push cat box to the "+ (goalY + 1) + " spot at the bottom.</p> \n\
                        <p>Use arrow key to move and use Enter key to explode the box in the front which costs 10 moves.</p>\n\
                        <p>Can't move more than 3 boxes at a time.</p>\n\
                        <p>Try to minimize moves in total. </p>";
        document.getElementById("goalPosition").innerHTML=goalPosition;
    }
    
    var showMoveChange = function(){
        document.getElementById("moveNum").innerHTML="<p style='color:red;'>Total moves: "+totalMoves+"</p>";
    }
    
    var direction = function(directionNum){
        switch(directionNum){
        case 1:
            document.getElementById("direction").innerHTML='<img src="./images/leftArrow.png" alt="Left" width="40" height="40" />';
            break;
        case 2:
            document.getElementById("direction").innerHTML='<img src="./images/upArrow.png" alt="Up" width="40" height="40" />';
            break;
        case 3:
            document.getElementById("direction").innerHTML='<img src="./images/rightArrow.png" alt="Right" width="40" height="40" />';
            break;
        case 4:
            document.getElementById("direction").innerHTML='<img src="./images/downArrow.png" alt="Down"  width="40" height="40" />';
            break;
        default:
        }
    }
    
    var explodeFront = function(X, Y){
        switch(directionNum){
        case 1://facing left
            if(Y - 1 >= 0){
                if(square[X][Y - 1] === 0 || square[X][Y - 1] === 5){
                    alert("can't explode 0 or 5!");
                }else{
                    square[X][Y - 1] = 0;
                    totalMoves = totalMoves + 10;
                    showMoveChange();
                    source = getSource(square);
                    printOut(source);
                }
            }else{
                alert("can't explode border!");
            }
            break;
        case 2://facing up
            if(X - 1 >= 0){
                if(square[X - 1][Y] === 0 || square[X - 1][Y] === 5){
                    alert("can't explode 0 or 5!");
                }else{
                    square[X - 1][Y] = 0;
                    totalMoves = totalMoves + 10;
                    showMoveChange();
                    source = getSource(square);
                    printOut(source);
                }
            }else{
                alert("can't explode border!");
            }
            break;
        case 3://facing right
            if(Y + 1 < square.length){
                if(square[X][Y + 1] === 0 || square[X][Y + 1] === 5){
                    alert("can't explode 0 or 5!");
                }else{
                    square[X][Y + 1] = 0;
                    totalMoves = totalMoves + 10;
                    showMoveChange();
                    source = getSource(square);
                    printOut(source);
                }
            }else{
                alert("can't explode border!");
            }
            break;
        case 4:
            if(X + 1 < square.length){
                if(square[X + 1][Y] === 0 || square[X + 1][Y] === 5){
                    alert("can't explode 0 or 5!");
                }else{
                    square[X + 1][Y] = 0;
                    totalMoves = totalMoves + 10;
                    showMoveChange();
                    source = getSource(square);
                    printOut(source);
                }
            }else{
                alert("can't explode border!");
            }
            break;
        default:
        }
    }
    
    //initialize
    square = initialArr();
    source = getSource(square);
    printOut(source);
    showGoalPosition(goalY);
    //add events
    document.onkeydown = keyDown;
    showMoveChange();
    direction(directionNum);

}());

