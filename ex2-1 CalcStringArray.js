function CalcStringArray(arr) {
    var sum = 0;
    arr.forEach(element => {

        sum = sum + parseInt(element);
        console.log(sum);
    })
    console.log(sum)
}
var arr = ['2', '3', '4'];
CalcStringArray(arr);