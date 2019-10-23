var K=0;
var X=0;
var comparison = "";
function closest(array,num){
    var i=0;
    var minDiff=1000;
    var ans;
    for(i in array){
         var m=Math.abs(num-array[i]);
         if(m<minDiff){ 
                minDiff=m; 
                ans=array[i]; 
            }
      }
    return ans;
}
function returnK() {
  var e = document.getElementById("reactions");
  var sel = e.options[e.selectedIndex].value;
  switch (sel) {
case "reaction1":
K=.0012;
sel= "HClO₂&nbsp;&nbsp;&nbsp;&nbsp;⇌&nbsp;&nbsp;&nbsp;&nbsp;ClO₂⁻&nbsp;&nbsp;&nbsp;&nbsp;+ &nbsp;&nbsp;&nbsp;&nbsp;H⁺" 

break;
case "reaction2":
sel= "HC₂H₃O₂&nbsp;&nbsp;&nbsp;&nbsp;⇌&nbsp;&nbsp;&nbsp;&nbsp;C₂H₃O₂⁻&nbsp;&nbsp;&nbsp;&nbsp;+ &nbsp;&nbsp;&nbsp;&nbsp;H⁺"
K=.00018;

break;
case "reaction3":
sel= "NH₄⁺&nbsp;&nbsp;&nbsp;&nbsp;⇌&nbsp;&nbsp;&nbsp;&nbsp;NH₃⁺&nbsp;&nbsp;&nbsp;&nbsp;+ &nbsp;&nbsp;&nbsp;&nbsp;H⁺"
K=.00000000056;
}
  document.getElementById("test").innerHTML = sel + "";
}

function getChange() {
  {
    console.log(document.getElementById(document.getElementById("sg1").elements[2].value))
  var e = document.getElementById("reactions");
  var sel = e.options[e.selectedIndex].value;
  switch (sel) {
case "reaction1":
K=.0012;
sel= "HClO₂&nbsp;&nbsp;&nbsp;&nbsp;⇌&nbsp;&nbsp;&nbsp;&nbsp;ClO₂⁻&nbsp;&nbsp;&nbsp;&nbsp;+ &nbsp;&nbsp;&nbsp;&nbsp;H⁺" 

break;
case "reaction2":
sel= "HC₂H₃O₂&nbsp;&nbsp;&nbsp;&nbsp;⇌&nbsp;&nbsp;&nbsp;&nbsp;C₂H₃O₂⁻&nbsp;&nbsp;&nbsp;&nbsp;+ &nbsp;&nbsp;&nbsp;&nbsp;H⁺"
K=.00018;

break;
case "reaction3":
sel= "NH₄⁺&nbsp;&nbsp;&nbsp;&nbsp;⇌&nbsp;&nbsp;&nbsp;&nbsp;NH₃⁺&nbsp;&nbsp;&nbsp;&nbsp;+ &nbsp;&nbsp;&nbsp;&nbsp;H⁺"
K=.00000000056;
}
  document.getElementById("test").innerHTML = sel + "";
}
 var A = document.getElementById("sg1").elements[0].value;
 var B = document.getElementById("sg1").elements[1].value;
 var C = document.getElementById("sg1").elements[2].value;
 var Q = (B * C)/A;
 nerdamer.setVar('A', A);
 nerdamer.setVar('B', B);
 nerdamer.setVar('C', C);
 nerdamer.setVar('K', K);
  var eq = nerdamer("(B+X)*(C+X)/(A-X)=K",{K:K,A:A,B:B,C:C});
  console.log("1" + eq.toString());
  var sol = nerdamer.solveEquations("(B+X)*(C+X)/(A-X)=K","X");
  var sol1 = sol.toString();
  console.log("2" + sol.toString());
  var n = sol1.indexOf(",");
  var h1 = nerdamer(sol1.substring(0,n));
  var h2 = nerdamer(sol1.substring(n+1,sol1.length));
  var x1 = eval(h1.evaluate().toString());
  var x2 = eval(h2.evaluate().toString());
  console.log(x1);
  console.log(x2);
  console.log(Q);
  console.log(K);
  var array =[x1,x2];
  X = closest(array,0);
  console.log(X);
 
   if(Q < K){
    A=eval(A+X);
    B=eval(B-X);
    C=eval(C-X);
    document.getElementById("change1").innerHTML =  "-" + X;
document.getElementById("change2").innerHTML =  "+" + X;
document.getElementById("change3").innerHTML =  "+" + X;document.getElementById("equi1").innerHTML = A + "";
document.getElementById("equi2").innerHTML = B + "";
document.getElementById("equi3").innerHTML = C + "";
document.getElementById("exp").innerHTML = "Since Q < K, the reaction will shift to the right, the concentration of reactants will decrease, and the concentration of products will increase.";
}
  else if (Q == K){
document.getElementById("change1").innerHTML =  "0";
document.getElementById("change2").innerHTML =  "0";
document.getElementById("change3").innerHTML =  "0";
document.getElementById("equi1").innerHTML = A + "";
document.getElementById("equi2").innerHTML = B + "";
document.getElementById("equi3").innerHTML = C + "";
document.getElementById("exp").innerHTML = "Since Q = K, the reaction is at equilibrium and no change will occur."
}
  else {
  A = eval(A-X);
  B = eval(B+X);
  C = eval(C+X);
  document.getElementById("change1").innerHTML =  "+" + X;
document.getElementById("change2").innerHTML =  "-" + X;
document.getElementById("change3").innerHTML =  "-" + X;
console.log(A);
document.getElementById("equi1").innerHTML = A + "";
document.getElementById("equi2").innerHTML = B + "";
document.getElementById("equi3").innerHTML = C + "";
document.getElementById("exp").innerHTML = "Since Q > K, the reaction will shift to the left, the concentration of reactants will increase, and the concentration of products will decrease.";
console.log(document.getElementById("equi1").textContent);
 }


}


