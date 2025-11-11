//console.log("start");

setTimeout(function cbT() {
    console.log("cb setTimeout");
}, 5000);

fetch("https://api.netflix.com")
.then(function cbF() {
    console.log("CB Netflix");
});

console.log("End");