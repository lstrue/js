//this version generates 2D array with 0 1 2 3
"use strict";
(function(){
    
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
    
    var square = new Array(squareSize);
    document.writeln("<h1><pre>");
    
    for(var i=0; i<squareSize; i++){
        square[i] = new Array(squareSize);
        for(var j=0; j<squareSize; j++){
            if(Math.random()<0.2){
                square[i][j] = 1;
            }else if(Math.random()<0.3){
                square[i][j] = 2;
            }else if(Math.random()<0.4){
                square[i][j] = 3;
            }else{
                square[i][j] = 0;
            }
            document.write(" "+square[i][j]);
        }
        document.writeln();
    }
    
    document.writeln("</pre></h1>");
    console.log("Done");
}());
