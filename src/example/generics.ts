// const getArray = <T>(value: T, times: number = 5): T[] => {
//     return new Array(times).fill(value);
// };

// const getArray = <T, U>(p1: T, p2: U, times: number): Array<[T, U]> => {
//     return new Array(times).fill([p1, p2]);
// };

// let getArray: <T>(arg: T, times: number) => T[];
// getArray = (arg: any, times: number) => {
//     return new Array(times).fill(arg);
// };
// getArray(12, 3).map((item: number) => item);
// type GetArray = <T>(arg: T, times: number) => T[];
// let getArray: GetArray = (x: any, times: number) => {
//     return new Array(times).fill(x);
// };
// getArray(12, 3).map((item) => item);
// interface GetArray<T> {
//     (arg: T, times: number): T[];
//     array: T[];
// }
// interface ValueWithLength {
//     length: number;
// }
// const getArray = <T extends ValueWithLength>(arg: T, times: number): T[] => {
//     return new Array(times).fill(arg);
// };

// getArray("123", 3);
// getArray({ length: 12 }, 12);
// const getProps = <T, K extends keyof T>(object: T, propName: K) => {
//     return object[propName];
// };
// const obj = {
//     a: "a",
//     b: "b"
// };
// getProps(obj, "a");
