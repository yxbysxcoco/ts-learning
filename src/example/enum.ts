// const test = 1;
// enum Status {
//     Uploading,
//     Success,
//     Failed
// }
// console.log(Status.Uploading);
// console.log(Status.Uploading);

// enum Message {
//     Error = "Sorry, error",
//     Success = "success"
// }
// 异构枚举
// enum Res {
//     Failed = 0,
//     Success = "zzzz",
//     x = -3
// }
// console.log(Res);
// 枚举类型
// 如果有一种枚举所有成员都是字面量，那么枚举本身和成员都可以作为类型使用
// enum Animals {
//     Dog = 1,
//     Cat = 2
// }

// interface Dog {
//     type: Animals.Dog;
// }

// const dog: Dog = {
//     type: Animals.Dog
// };
// console.log(dog);
// 联合枚举类型
// enum Status {
//     off,
//     on
// }
// interface Light {
//     status: Status;
// }
// const light: Light = {
//     status: Status.off
// };
// 使用const不会编译生成枚举的对象
// const enum Animals {
//     Dog = 1
// }
// const dog = Animals.Dog
// var dog = 1 /* Dog */
