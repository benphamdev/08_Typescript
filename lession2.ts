let age: number = 18;
if (age < 18) {
    // console.log('oke');
} else {
    console.log('not oke');
}

switch (age) {
    case 1:
        console.log('oke1')
        break;
    case 2:
    case 3:
        console.log('oke2');
        break;
    default:
    // console.log('oke3')
}

function sum(a: number, b: number): number {
    return a + b;
}

const sum1 = (a: number, b: number): number => {
    return a + b;
}

console.log(sum(4, 5), sum1(5, 6));

const getTotal = (...numbers: number[]): number => {
    let sum: number = 0;
    numbers.forEach(number => {
        sum += number;
    });
    return sum;
}

// console.log(getTotal(0));
// console.log(getTotal(1, 2));
// console.log(getTotal(1, 2, 3));

// spread vs rest

const multiply = (n: number, ...a: number[]) => {
    return a.map((x) => n * x);
}

console.log(multiply(2, 3, 4, 5));

// function overloading

function test(a: number, b: number): number;

function test(a: string, b: string): string;

function test(a: any, b: any) {
    return a + b;
}

console.log(test(1, 3), test('1', '3'));