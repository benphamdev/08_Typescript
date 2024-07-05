class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName() {
        return this.name;
    }

    public getAge() {
        return this.age;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setAge(age: number) {
        this.age = age;
    }

    getInfo() {
        return this.name + ' ' + this.age;
    }
}

let person1 = new Person('chien', 21);
console.log(person1.getInfo());

// readonly
class Greeter {
    readonly name: string = 'world';

    constructor(otherName?: string) {
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }

    // err() {
    //     this.name = 'not oke';
    // }
    // Cannot assign to 'name' because it is a read-only property.
    //
}

const g = new Greeter('readonly');
// console.log(g.name);

// inheritance
class Employee extends Person {
    private job: string;

    constructor(name: string, age: number, job: string) {
        super(name, age);
        this.job = job;
    }
}

let employee = new Employee('test', 2, 'dev');
// console.log(employee);

// static member

class MyClass {
    static x = 0;

    static print() {
        console.log(MyClass.x + 1);
    }
}

console.log(MyClass.x);
MyClass.print();

// generic classes
class Box<Type> {
    contents: Type;

    constructor(value: Type) {
        this.contents = value;
    }
}

const b = new Box('Hello');
const c = new Box(5);
console.log(b);

type Point2 = {
    x: number;
    y: number;
};


class SomePoint2 implements Point2 {
    x = 1;
    y = 2;
    z = 4;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

console.log(new SomePoint2(2, 3, 4));

interface IEmployee {
    empCode: number;
    name: string;
    getSalary: (empCode: number) => number;
}

class Teacher implements IEmployee {
    empCode: number;
    name: string;

    constructor(code: number, name: string) {
        this.empCode = code;
        this.name = name;
    }

    getSalary(empCode: number): number {
        return 2000;
    }
}

let teacher = new Teacher(1, 'chien');
console.log(teacher);