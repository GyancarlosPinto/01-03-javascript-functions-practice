function sayHello(name) {
    if (name === 'Alice') {
        return `Hello, ${name}!`;
    } else if (name === 'Bob') {
        return `Hello, ${name}!`;
    } else {
        return `Hello, what is your name?`;
    }
}

console.log(sayHello('Alice'));
console.log(sayHello('Bob'));
console.log(sayHello());

function numSum(a, b) {
    return a + b;
}

console.log(numSum(10, 5));
console.log(numSum(4, -1));
console.log(numSum(6, 9));

function numSub(a, b) {
    return a - b;
}

console.log(numSub(15, 9));
console.log(numSub(3, 10));
console.log(numSub(1, 1));

function numMulti(a, b) {
    return a * b;
}

console.log(numMulti(10, 10));
console.log(numMulti(3, 3));
console.log(numMulti(4, 25));

function numDiv(a, b) {
    return a / b;
}

console.log(numDiv(9, 3));
console.log(numDiv(16, 4));
console.log(numDiv(25, 5));