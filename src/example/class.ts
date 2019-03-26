// class Point {
//     public x: number;
//     public y: number;
//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
//     public getPosition() {
//         return `(${this.x}, ${this.y})`;
//     }
// }
// const point = new Point(1, 2);

// class Parent {
//     public name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }

// class Child extends Parent {
//     constructor(name: string) {
//         super(name);
//     }
// }

// public
// static
// private 私有的
// protected 受保护
// class Parent {
//     public static name: string;
//     protected age: number;
//     // private age: number;
//     protected constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     protected getAge() {
//         return this.age;
//     }
// }

// class Child extends Parent {
//     constructor(name: string, age: number) {
//         super(name, age);
//     }
// }

// const a = new Child("zhashilong", 21);
// class UserInfo {
//     public readonly name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// let a = new UserInfo("zhaopsi");

// class A {
//     constructor(public name: string) {
//         this.name = name;
//     }
// }
// const a = new A("zhaosi");
// console.log(a);
// class Info {
//     public name: string;
//     public age?: number;
//     constructor(name: string, age?: number, public sex?: string) {
//         this.name = name;
//         this.age = age;
//     }
//     get ii() {
//         return `${this.name}`;
//     }
//     set ii(value) {
//         this.name = value;
//     }
// }
// const a = new Info("找死");
// a.ii = "赵四";
// console.log(a);
// abstract class People {
//     constructor(public name: string) {}
//     public abstract printName(): void;
// }
// class Man extends People {
//     constructor(name: string) {
//         super(name);
//         this.name = name;
//     }
//     public printName() {
//         console.log(this.name);
//     }
// }

// abstract class People {
//     public abstract name: string;
//     abstract get insideName(): string;
//     abstract set insideName(value: string);
// }

// class P extends People {
//     public name!: string;
//     public insideName!: string;
// }

// class People {
//     constructor(public name: string) {}
// }

// const p: People = new People("zz");

// 类类型接口
// interface Food {
//     type: string;
//     name: string;
// }

// class Foodz implements Food {
//     public type!: string;
//     public name!: string;
// }
// 接口继承类
// class P {
//     public name!: string
//     // tslint:disable-next-line:no-empty
//     constructor() {}
// }

// // tslint:disable-next-line:no-empty-interface
// interface I extends P {}

// class B implements I {
//     public name!: string
// }

// const create = <T>(c: new () => T): T => {
//     return new c();
// };
// class Info {
//     public age!: number;
// }
// create(Info);
