var myArr = [
    [3, 5, 5],
    [5, 4, 3],
    [65, 6, 4]
];

function funcA(arr) {
    var sum = 0;

    return new Promise((resolve, reject) => {
        arr.forEach(function(element, i) {
            element.forEach(function(element, j) {
                sum += element;
            });
        });
        setTimeout(() => {
            resolve(sum);
            console.log(sum);
        }, 2000);


    });
}



function funcB() {
    var x = funcA(myArr);
    x.then(function(paramater) {
        console.log('Got data! Promise fulfilled.');
    }, function(parameter2) {
        console.log('Promise rejected.');
    })

}


funcB();
// function myAsyncFunction(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", url);
//         xhr.onload = () => resolve(xhr.responseText);
//         xhr.onerror = () => reject(xhr.statusText);
//         xhr.send();
//     });
// }