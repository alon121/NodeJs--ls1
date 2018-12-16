var myArr = [
    [3, 5, 5],
    [5, 4, 3],
    [65, 6, 4]
];


function checkArray(arr) {
    var big = 0;
    arr.forEach(function(element, i) {
        var singleArr = element.map(
            x => x)
        for (let j = 0; j < singleArr.length; j++) {
            if (singleArr[j] > big) {
                big = singleArr[j];
            };

        }
        console.log('the biggest is  ' + big);


    })
};
check(myArr);