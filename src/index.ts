import arrayMap from "chocolate-beans";
const res: number[] = arrayMap([1, 2], item => {
    return item + 3;
});
console.log(res);
