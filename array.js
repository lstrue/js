"use strict";
(function(){
    //for(var i=0; i<5; i++) alert(Math.random());
    document.writeln("<h1><pre>");
    var x = [];
    x.length = 2;
    document.writeln("x length "+x.length + " x[3]="+x[3]);
    x[5] = 1000; 
    x[3] = "XXX";
    x.length = 3;
    x.length = 9;//after shorten won't keep the value
    x["abc"] = 91;//don't do this usually
    document.writeln("x length "+x.length + " x[3]="+x[3] + "   x[5]="+x[5]);
    document.writeln("x[abc']="+x["abc"]);
    for(var i=1; i<=50; i=i+1){
        if(i%5 === 0 && i%3 ===0){
            document.writeln(i);
        }
    }
    var i;
    document.writeln("i="+i);
    document.writeln();
    
    var m = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ];
    alert(m[1][2]);
    
    var ax = [1,2,3,4,5];
    ax.push("abc");
    for(i = 0; i<ax.length; i++){
        document.writeln("i="+i+" ax[i]="+ax[i]);
    }
    document.writeln("ax:" + ax.length);
//    var ay = ax.pop();
//    document.writeln("ay:" + ay.length);
    
    //var az = ax.unshift();
    ax.shift();
    for(i = 0; i<ax.length; i++){
        document.writeln("i="+i+" ax[i]="+ax[i]);
    }
    
    document.writeln();
    
    ax.unshift("def");
    for(i = 0; i<ax.length; i++){
        document.writeln("i="+i+" ax[i]="+ax[i]);
    }
    
//    var aa = [], ai, aj, ax =10;
//    for(ai = 0; ai<ax; ai+=1){
//        aa.push(ai);
//    }
//    for(aj = 0; aj<ax; aj+=1){
//        aa.push(aj);
//    }
    
    
    document.writeln("</pre></h1>");
    console.log("I am done");
}());

CardGame.deck = {
    "suits":["hearts", "clubs", "diamonds", "spades"],
    "ranks":["two", "three"],
    "cards":[]
}
