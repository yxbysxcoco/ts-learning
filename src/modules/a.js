// export const name = "zhaosi";
// export const age = 18;
// export const address = "beijing";
const name = "zhaosi";
const age = 18;
const address = "beijing";

export {
    name as zhao,
    age,
    address,
};
//

export function func() {
    var addres;
}
export class A {}
// 导出的值是动态绑定的，也就是在这个文件中导出的这个值发生了变化，另一个文件里引入也会感知到这个变化