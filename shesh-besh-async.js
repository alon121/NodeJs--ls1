let flip = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
                var x = Math.floor(Math.random() * 6);
                var y = Math.floor(Math.random() * 6);
                if (x === y) {
                    resolve("shesh besh!");
                }
                reject("not now");
                console.log("your x " + x + "your y" + y);
            },
            2000);

    }
)
flip.then(fromresolve => console.log(fromresolve))
    .catch(fromreject => console.log(fromreject));

console.log("end");