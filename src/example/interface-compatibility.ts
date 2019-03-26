// let zh = "zhaosi";
// // 多类型联合
// // let arr = [1, "a"]
// let arr: Array<number | string> = [1, "a"];
// // 上下文类型推论
// window.onmousedown = (mouseEvent) => {
//     console.log(mouseEvent);
// };
// 类型兼容性
// interface Info {
//     name: string;
// }

// let a: Info;
// const b = { name: "helllo" };
// const c = { age: 18 };
// const d = { name: "zhja", age: 19 };
// a = b;
// a = d;
// 函数兼容性
// 参数个数
// 后面的参数个数要小于等于前面的参数个数
// let x = (a: number) => 0
// let y = (b: number, c: string) => 0
// y = x

// const getSum = (
//     arr: number[],
//     callback: (...args: number[]) => number
// ): number => {
//     return callback(...arr);
// };
// const res = getSum(
//     [1, 2, 3],
//     (...args: number[]): number => args.reduce((a, b) => a + b, 0)
// );
// console.log(res);

// // 函数参数双向协变
// let funcA = (arg: number | string): void => {};
// let funcB = (arg: number): void => {};
// funcA = funcB;
// 函数重载
// function merge(arg1: number, arg2: number): number;
// function merge(arg1: string, arg2: string): string;
// function merge(arg1: any, arg2: any) {
//     return arg1 + arg2;
// }
// 不同枚举值之间是不兼容的
// class Animal {
//     public static age: number;
//     constructor(public name: string) {}
// }
// class People {
//     public static age: string;
//     constructor(public name: string) {}
// }
// class Food {
//     constructor(public name: number) {}
// }
// let animal: Animal;
// let people: People;
// let food: Food;
// animal = people;
// animal = food; // 不兼容
// private
// protected这两个类型会对类型兼容造成影响
// class Animal {
//     protected age: string;
//     constructor() {}
// }
// class People {
//     protected age: string;
//     constructor() {}
// }
// class Food {
//     constructor(public name: number) {}
// }

// let animal: Animal = new People();

// interface Data<T> {
//     name: T;
// }
// let data1: Data<string>;
// let data2: Data<number>;
// data1 = data2;
