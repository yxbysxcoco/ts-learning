// const getFullName = ({ firstName, lastName }: NameInfo): string => {
//     return `${firstName} ${lastName}`;
// };

// getFullName({
//     firstName: "lilei",
//     lastName: "ds"
// });

// // 接口
// interface NameInfo {
//     firstName: string;
//     lastName: string;
// }

// interface Vegetable {
//     readonly type: string;
//     color?: string;
//     [prop: string]: any;
// }
// const getVegetables = ({ color, type }: Vegetable) => {
//     return `A ${color ? color : ""} ${type}`;
// };

// // 三种绕过接口检测的方式
// // 类型兼容
// // 索引签名
// // 指定类型
// getVegetables({
//     color: "red",
//     type: "tomoto",
//     z: "dsa"
// } as Vegetable);

// let vegetableObj: Vegetable = {
//     type: "tomoto"
// };

// interface ArrInter {
//     0: number;
//     1: string;
// }

// let arr9: ArrInter = [1, "aaa"];

// // 类型别名
// type AddFunc = (num1: number, num2: number) => number;

// const add: AddFunc = (n1, n2) => {
//     return n1 + n2;
// };

// interface RoleDic {
//     [id: number]: string;
// }
// const role1: RoleDic = {
//     0: "superAdmin"
// };

// interface Vegetables {
//     color: string;
// }

// interface Tomoto extends Vegetables {
//     radius: number;
// }

// const tomoto: Tomoto = {
//     color: "dsad",
//     radius: 1222
// };
// // 混合类型接口直接给函数定义属性

// interface Counter {
//     (): void;
//     count: number;
// }

// const getCounter = (): Counter => {
//     const c = () => {
//         c.count++;
//     };
//     c.count = 0;
//     return c;
// };

// const counter: Counter = getCounter();

// counter();
