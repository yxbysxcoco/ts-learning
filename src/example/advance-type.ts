// const merge = <T, U>(arg1: T, arg2: U): T & U => {
//     let res = {} as T & U;
//     res = Object.assign(arg1, arg2);
//     return res;
// };
// const a = merge({ a: 2 }, { b: "sad" });
// console.log(a);
// const getL = (content: string | number): number => {
//     if (typeof content === "string") {
//         return content.length;
//     } else {
//         return content.toString().length;
//     }
// };
// const list = [123, "abs"];
// const getRv = () => {
//     const num = Math.random() * 10;
//     if (num < 5) {
//         return list[0];
//     } else {
//         return list[1];
//     }
// };
// const res = getRv();
// function isString(val: number | string): val is string {
//     return typeof val === "string";
// }
// if (isString(res)) {
//     console.log(res.length);
// } else {
//     console.log(res.toFixed());
// }
// 只能是Symbol string number boolean四种中的一种
// if (typeof res === "string") {
//     console.log(res.length);
// } else {
//     console.log(res.toFixed());
// }
// class C {
//     public age = 18;
//     constructor() {}
// }
// class B {
//     public name = "lison";
//     constructor() {}
// }
// const getRv = () => {
//     const num = Math.random() * 10;
//     if (num < 5) {
//         return new B();
//     } else {
//         return new C();
//     }
// };
// const item = getRv();
// if (item instanceof C) {
//     console.log(item.age);
// } else {
//     console.log(item.name);
// }
// null/undefined
// let value = "aaa";
// value = undefined;
// const getL = (value: string | null): number => {
//     return (value || "").length;
// };
// 嵌套中使用!进行类型断言
// 类型别名
// type typeString = string
// let str: typeString
// interface Ptype<T> {
//     a: T;
// }
// let p: Ptype<number> = {
//     a: 123
// };
// let p1: Ptype<string> = {
//     a: "123"
// };
// 类型也可用字面量来定义
// 可辨识联合两要素
// 具有普通的单例类型属性
// 一个类型别名包含了哪些类型的联合
// interface S {
//     kind: "zhaosi";
//     size: number;
// }
// interface R {
//     kine: "zhapods";
//     height: number;
//     width: number;
// }
// type X = R | S;
// class Count {
//     constructor(public count: number = 0) {}
//     public add(value: number) {
//         this.count += value;
//         return this;
//     }
//     public subtract(value: number) {
//         this.count -= value;
//         return this;
//     }
// }
// let count1 = new Count(10);
// // console.log(count1.add(3));
// class P extends Count {
//     constructor(public count: number = 0) {
//         super(count);
//     }
//     public pow(value: number) {
//         this.count = this.count ** value;
//         return this;
//     }
// }
// let p = new P(2);
// console.log(p.pow(3).add(2));
// interface Info {
//     name: string;
//     age: number;
// }
// let i: keyof Info;
// i = "name";
// function getValue<T, K extends keyof T>(obj: T, names: K[]): Array<T[K] > {
//     return names.map((n) => obj[n]);
// }

// const x = {
//     name: "zhaosi",
//     zzz: 18
// };

// let values = getValue(x, ["name"]);
// console.log(values);
// [] 索引访问操作符
// type nameType = Info["name"];
// function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
//     return o[name];
// }

// interface Ob<T> {
//     [key: string]: T;
// }
// const pb: Ob<number> = {
//     age: 18
// };
// let key: keyof Ob<number>;
// let key1: Ob<string>["name"];
// interface Type {
//     a: never;
//     b: undefined;
//     c: string;
//     d: number;
//     e: null;
//     f: object;
//     g: boolean;
// }
// type Test = Type[keyof Type];
// ts提供了借助旧类型创建新类型的方式
// interface Info {
//     age: number;
//     name: string;
//     sex: string;
// }
// // type ReadOnlyType<T> = { readonly [P in keyof T]?: T[P] };
// type ReadOnlyInfo = Readonly<Info>;
// let info: ReadOnlyInfo = {
//     age: 18,
//     name: "zhaosi",
//     sex: "man"
// };
// console.log(info);
// 内置的映射类型Readonly Partial Pick Record
// 同态
// 上面四个只有Record不是同态
// 使用映射类型进行推断
// interface Proxy<T> {
//     get(): T;
//     set(value: T): void;
// }
// type Proxify<T> = { [P in keyof T]: Proxy<T[P]> };

// function proxify<T>(obj: T): Proxify<T> {
//     const result = {} as Proxify<T>;
//     // tslint:disable-next-line:forin
//     for (const key in obj) {
//         result[key] = {
//             get: () => obj[key],
//             set: (value) => (obj[key] = value)
//         };
//         return result;
//     }
// }
// const res = proxify({ name: "zhaosi", age: 18 });
// console.log(res);
