//this version generates 2D array with 0 1 2 3 and the location of bobcat and target 
//put these in functions which makes it more clear
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
        document.writeln("<h1><pre>");
        for(i=0; i<squareSize; i++){
            for(j=0; j<squareSize; j++){
                document.write(" "+square[i][j]);
            }
            document.writeln();
        }
        document.writeln("</pre></h1>");
        console.log("Done");
    }
    
    var square = initialArr();
    printOut(square);
    
    
        
}());
