//I changed this from crateboard.js in order to learn as an example in class

"use strict";
var Game = function(){//use module, don't need to put var in function except recursion
    
    //these are not global variables
    var i;
    var j;
    var startEndPointX;
    var startEndPointY;
    var targetStartPointX;
    var targetStartPointY;
    var source = "";
    var square;
        
    function initialArr(){//this is another way of creating a function
        var squareSize;
        if(Math.random()<.2){
            squareSize = 8;
        }else if(Math.random()<.4){//can use ".4" instead of "0.4"
            squareSize = 9;
        }else if(Math.random()<.6){
            squareSize = 10;
        }else if(Math.random()<.8){
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
    
//    Game.prototype.getSource = function(square){//use prototype to add a function
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
                    if(directionNum === 1){
                        source = source + "<span class='bobcatLeft'>"+square[i][j]+"</span>";
                    }
                    if(directionNum === 2){
                        source = source + "<span class='bobcatUp'>"+square[i][j]+"</span>";
                    }
                    if(directionNum === 3){
                        source = source + "<span class='bobcatRight'>"+square[i][j]+"</span>";
                    }
                    if(directionNum === 4){
                        source = source + "<span class='bobcatDown'>"+square[i][j]+"</span>";
                    }
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
        
    var printOut = function(source){
        document.getElementById("array").innerHTML=source;
        console.log("Done");
    }

};


    var game = new Game();
    alert(game);

window.onclick() = function(){
    var square = game.initialArr();
    var source = game.getSource(square);
    game.printOut(source);
    
    var input = prompt(brd);
    brd.move(input);//this is a clumsy way to move
};
