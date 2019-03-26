// function add2(arg1: number, arg2: number): number {
//     return arg1 + arg2;
// }

// const add3 = (arg1: number, arg2: number) => arg1 + arg2;

// let add: (x: number, y: number) => number;
// add = (arg1: number, arg2: number): number => arg1 + arg2;

// interface Add {
//     x: number,
//     y: number
// // }
// type Add = (x: number, y: number) => number;
// let add: Add;
// add = (x: number, y: number) => x + y;

// type Add = (arg1: number, arg2: number, arg3?: number) => number;
// let add: Add;
// add = (x: number, y: number) => x + y;

// let add = (x: number, y: number = 3) => x + y;
// const aa = (arg1: number, ...arg2: number[]) => {
//     //
// };
// 重载
// function handleData(x: string): string[];
// function handleData(x: number): number[];
// function handleData(x: any): any {
//     if (typeof x === "string") {
//         return x.split("");
//     } else {
//         return x
//             .toString()
//             .split("")
//             .map((item: any) => Number(item));
//     }
// }
