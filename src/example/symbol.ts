// // symbol是一种基本数据类型
// const s = Symbol("name");

// let prop = "name";
// const info = {
//     [s]: "zhaosi"
// };
// info[s] = "hahah";
// for (const key in info) {
//     console.log(key);
// }
// console.log(Object.keys(info));
// console.log(Object.getOwnPropertyNames(info));
// console.log(JSON.stringify(info));

// console.log(Object.getOwnPropertySymbols(info));
// console.log(Reflect.ownKeys(info));

// // Symbol.for() Symbol.keyFor()
// const s2 = Symbol.for("lison");
// const s3 = Symbol.for("lison");
// // s2 === s3 true
// console.log(Symbol.keyFor(s));
// console.log(Symbol.keyFor(s2));

// console.log(Symbol.hasInstance);
// // instanceof
// const obj1 = {
//     [Symbol.hasInstance](otherObj: object) {
//         console.log(otherObj);
//     }
// };
// console.log({ a: "a" } instanceof <any>obj1);

// let arr2: Array<number> = [1, 2];
// // console.log([1].concat(arr2, [3, 4]));
// // arr2[Symbol.isConcatSpreadable]

// class C extends Array {
//     constructor(...args: any) {
//         super(...args);
//     }
//     static get [Symbol.species]() {
//         return Array;
//     }
//     getName() {
//         return "zhaosi";
//     }
// }
// const c = new C(1, 23, 4);

// const a = c.map(item => {
//     item + 1;
// });

// console.log(a instanceof C);
// console.log(a instanceof Array);

// let obj3 = {
//     [Symbol.match](str: string) {
//         console.log(str.length);
//     }
// };
// "adada".match(<RegExp>obj3);

// let hutian: unknown = {
//     [Symbol.toPrimitive](type: any) {
//         console.log(type);
//     }
// };
// // const res = (hutian as number)++;

// const res = `abc${hutian}`;

// let obj5 = {
//     get [Symbol.toStringTag]() {
//         return "zhaosi";
//     }
// };
