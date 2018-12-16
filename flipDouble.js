let flip = new Promise(
    (resolve, rejects) => {
        let one = Math.floor(Math.random() * 6);
        one.toFixed();
        let two = Math.floor(Math.random() * 6);

        if (one === two) {
            resolve(`your one is ${one} and your two is ${two} `);
        }

        rejects(`no double .${one}.`);
    }
);
flip.then(fromResolve => console.log(fromResolve)).catch(fromReject => console.log(fromReject));