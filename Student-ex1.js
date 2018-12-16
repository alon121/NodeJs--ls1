class Student {

    constructor(name, id, numgen) {
        this.name = name;
        this.id = id;
        this.numgen = numgen;
        this.grades = [];
    }

    add(num) {
        if (this.grades.length < this.numgen) {
            this.grades.push(num);
            console.log('push');
            console.log(num);
            console.log(this.grades.length);
        } else {
            console.log('you cannot');
        }
    }

}

var alon = new Student('alon', 22, 3);

console.log(alon);
alon.add(2);
console.log(alon);
alon.add(2);
console.log(alon);
alon.add(2);
console.log(alon);
alon.add(2);
console.log(alon);
alon.add(2);
console.log(alon);
alon.add(2);