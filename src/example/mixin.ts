// interface ObjectA {
//     a: string;
// }

// interface ObjectB {
//     b: string;
// }
// let A: ObjectA = {
//     a: "a"
// };
// let B: ObjectB = {
//     b: "b"
// };
// let AB: ObjectA & ObjectB = Object.assign(A, B);
// console.log(AB);
class A {
    public a: boolean;
    public funcA() {}
}

class B {
    public b: boolean;
    public funcB() {}
}

class AB implements A, B {
    public a: boolean = false;
    public b: boolean = false;
    public funcA: () => void;
    public funcB: () => void;
    constructor() {}
}

function mixins(base: any, from: any[]) {
    from.forEach((item) => {
        Object.getOwnPropertyNames(item.prototype).forEach((key) => {
            console.log(key);
            base.prototype[key] = item.prototype[key];
        });
    });
}

mixins(AB, [A, B]);
const ab = new AB();
console.log(ab);
