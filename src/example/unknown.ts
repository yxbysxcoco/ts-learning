// 十大要素
// 任何类型的值都可以赋值给这个类型
// let value: unknown;
// value = "a";
// value = 1234;
// 如果没有类型断言或基于控制流的类型细化时，unknown不可以赋值给其他类型，此时他只能赋值给自身或者any
// let value1: string = value
// 如果没有类型断言或者基于控制流的类型细化时不能在他上面进行任何操作
// value +=1
// unknown与任何类型组成的交叉类型最后都等于其他类型
// type type1 = string & unknown;
// unknown与任何类型组成的联合类型都等于unknown类型（除了any）
// type type2 = string | unknown;
// never是这个类型的子类型
// type type3 = never extends unknown ? true : false;
// keyof unknown等于类型never
// type type = keyof unknown
// 只能对unknown进行等或不等操作，不能进行其他操作
// unknown类型的值不能访问他属性，也不能作为函数调用和作为类创建属性
// 使用映射类型时如果使用的是unknown类型则不会映射任何属性

// type Type<T> = T extends string ? string : number;
// let index: Type<"a">;
// type Type<T> = T extends any ? T : never;
// type Type1 = Type<string | number>;
// type Diff<T, U> = T extends U ? never : T;
// type test = Diff<string | number | boolean, undefined | number>;
// type Type<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
// interface Part {
//     id: number;
//     name: string;
//     subparts: Part[];
//     updatePart(newName: string): void;
// }
// type Test = Type<Part>;
// type Type<T> = T extends any[] ? T[number] : T;
// type Test = Type<string[]>;
// type Type<T> = T extends Array<infer U> ? U : T;
// type Test = Type<string[]>;
// type Type = Exclude<"a" | "b" | "c", "a" | "b">;
// type Type = Extract<"a" | "b", "b">;
// type Type = NonNullable<string | number | null | undefined>;
// type Type = ReturnType<() => string>;
// class A {
//     public name: string;
//     constructor() {
//         this.name = "zhas";
//     }
// }
// type Type = InstanceType<typeof A>;
