class Arr extends Array {
    [x: string]: any;
    constructor(type: any, ...args: Array<number | string>) {
        super(...(args as any));
        this.type = type;
    }
    getType = () => {
        return this.type;
    };
    [Symbol.hasInstance](otherObj: object) {
        console.log(otherObj);
        return otherObj;
    }
}
const arr5 = new Arr("number", 1, 2, 3);

console.log(arr5.getType());
