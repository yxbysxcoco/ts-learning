export const name: string = "zhaosi";
export interface FuncInterFace {
    name: string;
    (arg: number): string;
}
export class C {}
class D {}
export { D as ClassNameD };
export * from "./b";
export { name as zhao } from "./b";
