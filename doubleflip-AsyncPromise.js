let flip = new Promise(
    (resolve, reject) => {
        var k1 = 2;
        var k2 = 2;
        setTimeout(() => {
            if (k1 === k2) {
                resolve('double');
            }
            reject("not now");
        }, 500);


    }

)

flip.then(resolve => (console.log(resolve))).
catch(reject => console.log(reject));