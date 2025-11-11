//console.log("hello");

//setTimeout(function () {
//    console.log("world");
//},5000)

//console.log("goodbye");



// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId, function (paymentInfo) {
//         showOrderSummary(paymentInfo,function () {
//             updateWalletBalance();
//         });
//     });
// });

//  createOrder(cart)
//  .then(function (orderId) {
//     return proceedToPayment(orderId);
// })
// .then(function (paymenyInfo) {
//     return shoeOrderSummary(paymentInfo);
// })
// .then(function (paymentInfo) {
//     return updateWalletBalance(paymentInfo);
// });


const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  })
  .catch(function (err) {
    console.error("Error:", err);
  });


