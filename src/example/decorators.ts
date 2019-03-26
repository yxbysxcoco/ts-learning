import { name } from "./tsm/a";
// function setName() {
//     console.log("get setName");
//     return (target) => {
//         // ...
//         console.log("setName");
//     };
// }
// function setAge() {
//     console.log("get setAge");
//     return (target) => {
//         // ...
//         console.log("setAge");
//     };
// }
// @setName()
// @setAge()
// class C {}

// let sign = null;
// function setName(name: string) {
//     return (target: new () => any) => {
//         sign = target;
//         console.log(target.name);
//     };
// }
// @setName("zhaosi")
// class C {}
// interface Obj {
//     [key: string]: any;
// }
// const obj: Obj = {};
// Object.defineProperty(obj, "name", {
//     value: "zhaosi",
//     writable: false,
//     // tslint:disable-next-line: object-literal-sort-keys
//     configurable: true,
//     enumerable: true
// });
// console.log(obj.name);
function enumerable(bool: boolean) {
    return (
        target: any,
        propertyName: string,
        descriptor: PropertyDescriptor
    ) => {
        descriptor.enumerable = bool;
    };
}
interface Person {
    name: string;
    age?: number;
    sex: string;
}
class Man implements Person {
    public name: string;
    public sex: string;
    constructor(n: string) {
        this.name = n;
    }
    @enumerable(false)
    get getName(): string {
        return this.name;
    }
    set setName(n: string) {
        this.name = n;
    }
}
const g = new Man("zyw");
g.name = "zhopu";
// console.log(g.name);
// console.log((g.setName = "zhou"));
// console.log(g.name);
