void setup() 
{
	// general setup
	size (500,500);
	smooth();
}
void draw()  {
background(255, 255, 255);
 var D = parseFloat(document.getElementById("equi1").textContent);
 var E = parseFloat(document.getElementById("equi2").textContent);
 var F = parseFloat(document.getElementById("equi3").textContent);
 
var beaker = function (H, I, J){
    var width;
    var baseX;
    var beakerh;
    var bottom;
    bottom = 499;
    beakerh = 350;
    baseX = 100;
    width = 400;
    var Ah = 100*H/(H+I+J);
    var Bh = 100*I/(H+I+J);
    var Ch = 100*J/(H+I+J);
    noStroke();
    fill(224, 22, 22);
    rect(baseX,bottom-Ah, width, Ah);
    fill(61, 126, 224);
    rect(baseX,bottom-Ah-Bh, width, Bh);
    fill(159, 161, 56);
    rect(baseX,bottom-Ah-Bh-Ch, width, Ch);
};

{
beaker(D,E,F);
}
}



