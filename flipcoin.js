// let flipcoin = new Promise((resolve, reject) => {
//     let head = (Math.random() < 0.5);
//     console.log(head);
//     window.setTimeout(() => {
//         if (head === true) {
//             resolve("yes");
//         }

//         reject("no");
//     }, 2000);
// });

// flipcoin.then(fromResolve => console.log(fromResolve))
//     .catch(fromReject => console.log(fromReject));




let flipCoin = new Promise((resolve, reject) => {
    let head = (Math.random() < 0.5);
    setTimeout(() => {
        if (head === true) {
            resolve("Yeah, it's a head!");
        }
        reject("No luck this time!");
    }, 1000);
});
flipCoin
    .then(fromResolve => console.log(fromResolve))
    .catch(fromReject => console.log(fromReject));