function Add(num1, num2) {
    return num1 + num2;
}
// console.log(Add(2, 3));

function Mul(num1, num2) {
    var sum = 0;
    for (i = 0; i < num1; i++) {
        sum = Add(sum, num2);
        console.log(sum);
    }
    return sum;

}
var x = Mul(5, 10);
console.log(x);