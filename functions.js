//functionstatement
function a() {
    console.log("a is called")
}
//function expression
var b = function (param1) {
    console.log("param1");
}
function xyz(){

}

//b(xyz);


setTimeout(function () {
    console.log("time");
},5000);

function x(y) {
    console.log("x");
    y();
}
x(function y() {
    console.log("y");
});