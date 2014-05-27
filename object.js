
(function (){
    var laptop = {
        "model" : "dell model",
        "series" : "dell series"
    };
    var desktop = {
        "model" : "Gateway",
        "designer" : {
            "firstName" : "Ted",
            "lastName" : "Waitt"
        }
    };
    var mouse = {
        "model":"HP",
        "mouseSize":"big"
    };
    
    document.writeln("<pre><h2>");
    document.writeln("laptop.model: " + laptop.model);
    document.writeln("laptop.series: " + laptop["series"]);
    
    //new property
    desktop.year = "2012";
    document.writeln("desktop.year: "+desktop.year);
    document.writeln("desktop.designer.firstName: "+desktop.designer.firstName);
    
    //new property
    laptop.mouse = mouse;
    document.writeln("laptop.mouse: "+laptop.mouse);
    document.writeln("laptop.mouse.model: "+laptop.mouse.model);
    
    //update property
    desktop.model = "new Gateway";
    document.writeln("desktop.model: "+desktop.model);
    
    document.writeln("=======this is an example using Object.create=======");
    var laptop2 = Object.create(laptop);//create is almost the same as reference - left reference to right
    //var laptop2 = laptop; // use "=" as two direction reference
    document.writeln("laptop2.model: "+laptop2.model);
    //change laptop can affect laptop2
    laptop.model = "new Dell";
    document.writeln("laptop2.model: "+laptop2.model);
    //here laptop2 can't affect laptop
    laptop2.series = "Change laptop2 can't affect laptop";
    document.writeln("laptop.series: "+laptop.series);
    document.writeln("laptop type is: "+typeof laptop);
    document.writeln("=====use 'Object.create' can refer to one side==========");

    //reference
    document.writeln("=======this is an example using '=' =======");
    document.writeln("desktop.model: "+desktop.model);
    var refer = desktop;
    refer.model = "new desktop model";
    document.writeln("desktop.model: "+desktop.model);//print out refer2 instead of refer
    document.writeln("the opposite way");
    document.writeln("desktop.model: "+desktop.model);
    desktop.model = "change model back";
    document.writeln("refer.model: "+refer.model);
    document.writeln("====use '=' can reference to each side===========");
    
    //prototype -- inheritance
    document.writeln("for in loop");
    var prop;
    var langs = new Array("java","C++","C");
    //for in loop follows prototype which means 
    for(prop in langs){
        document.writeln(langs[prop]);
    }
    document.writeln("for in loop 2");
    for(prop in laptop){
//        document.writeln(typeof laptop.prop);
//        if(typeof laptop[prop] !== "function"){
            document.writeln(prop + ": " + laptop[prop]);
//        }
    }
    document.writeln("</h2></pre>");
}());


//global abatement
var DroidApp = {}


