function pastService(days) {
var days=$("#input").val();
var month=25;
var firstCalc=days/month;
var number=2;
var result=firstCalc/number;
document.getElementById("pastService").innerHTML= "You have"+"<br>"+ result + "<br>"+ "months of past service!"; 
}