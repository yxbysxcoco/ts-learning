// 布尔类型
let bool: boolean = false;
// 数值类型
let num: number = 123;
num = 0b1111011;
num = 0o173;
num = 0x7b;
// 字符串类型
let str: string = "abc";
str = `数值是${num}`;
// 数组类型
let foo: number[];
foo = [1];
let bar: Array<number>;
bar = [1];
// 同时可以是多种类型
let type1: Array<number> | number;
type1 = [1];
let type2: (number | string)[];
type2 = ["a", 1];
// 元组类型
// 固定长度和类型
let tuple: [string, number, boolean];
tuple = ["a", 1, true];
// 枚举类型
// 一般枚举值的名字大写开头
enum Roles {
    SUPER_ADMIN = 1, // 让第一个的位置从1开始
    ADMIN,
    USER
}
// any类型
// 能不用就不用
let value: any;
const arr: any[] = [1, "a"];
// void类型
// 表示什么类型都不是
const consoleText = (text: string): void => {
    console.log(text);
};
// null和undifined
let u: undefined;
let n: null;
// never类型 抛出错误或者死循环
// 任意类型的子类型,因此可以赋值给任何类型
const errorFunc = (message: string): never => {
    throw new Error(message);
};
// const infiniteFunc = (): never => {
//     while (true) {}
// };
// let neverVariable = (() => {
//     while (true) {}
// })();
// object 在js中存的是对象在内存中地址的引用
let obj = {
    name: "coco"
};
function getObj(obj: object): void {
    console.log(obj);
}
// 类型断言
const getLength = (target: string | number): number => {
    if ((<string>target).length || (target as string).length === 0) {
        return (<string>target).length;
    } else {
        return target.toString().length;
    }
};
