let message: string = "hello world Typescript";
// console.log(message);

const sum = (a: number, b: number) => {
    return a + b;
};

// console.log(sum(1, 5));

//
// console.log(message.length);
// console.log(message.charAt(0).toUpperCase());

// 1.type annotation

// let num: number = 1;
// console.log(num)

let arr: string[] = ['pham', 'duy', 'chien'];
// console.log(arr.push('hello world Typescript'));

// 2. type inference

// 3.Number type

let a: number = 2;
a = 4.5

// 4.String type
let str: string = "hello world \"Typescript\""; // escape character
let s: string = `
    hello world Typescript
`

str = `${s} ${str}` // js template string
// console.log(str);

// 5. Boolean type

let check: boolean = true;

// 6. Object type

let info: Object = {}
// let info: {} = {}

// info = {'name': 'chien'}
// console.log(info)

let info1: { name: string, age: number } = {name: 'chien', age: 12}

info1 = {
    name: 'chien',
    age: 34
}

// console.log(info1)

// 7. Array type

let arrNum: (Number | String)[] = [1, 2, 4]; // mix type
arrNum.push('c++');
// console.log(arrNum)

// 8. Tuple type
// => dataType/size/order
// optional tuple elements
let myTuple: [String, Number, Boolean?] = ['chien', 21];
// console.log(myTuple)

// 9 Enum type
// enum API_STATUS {
//     PENDING,
//     FULFILLED,
//     REJECTED // promise
// }

enum API_STATUS {
    PENDING = 'PENDING',
    FULFILLED = 'FULFILLED',
    REJECTED = 'REJECTED'// promise
}

// enum java

let a1: API_STATUS = API_STATUS.PENDING;
// console.log(a1)

// 10 Any type

let s2: any = 'chien';
// console.log(s2);
s2 = 3;

// 11 void type

const hello = (message: string): void => {
    // console.log(new Date().toISOString().split(' ')[0]);
}

// 12 never type

const handleException = (err: Error): never => {
    throw err.message;
}

// void vs never => js void return undefined, never don't return

// 13 union type
// 14 Type aliases => vs define, using c++

type strNum = Number | String;

const addNumOrString = (a: strNum, b: strNum): Number | String => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('invalid number');
}

console.log(addNumOrString(5, 6));

