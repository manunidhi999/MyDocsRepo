function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("done");
}
x();

// var a = 7
// let b = 5
// const c = 8
// function checkScope() {
//     console.log('iniside function',a);
//      console.log('iniside function',b);
//       console.log('iniside function',c);
//     function checkScope1(){
//         console.log("insode function 1", a);
//         console.log("insode function 1", b);
//         console.log("insode function 1", c);
//     }
//     checkScope1()
// }

// checkScope();
// // checkScope1();
// console.log('outside function',a);
// console.log('outside function',b);
// console.log('outside function',c);