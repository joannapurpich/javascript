
var alpha = 6; 
var beta = 10; 

var add = alpha + beta;
var subtract = alpha - beta; 
var multiply = alpha * beta;
var divide = alpha / beta;

document.getElementById("add").innerHTML=
	"When I add " + alpha + " and " + beta + ", I get " +add;
document.getElementById("subtract").innerHTML=
	"When I subtract " + alpha + " and " + beta + ", I get " +subtract;
document.getElementById("multiply").innerHTML=
	"When I multiply " + alpha + " and " + beta + ", I get " +multiply;
document.getElementById("divide").innerHTML=
	"When I divide " + alpha + " and " + beta + ", I get " +divide;