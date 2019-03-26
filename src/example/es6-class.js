// function Point(x, y) {
//     this.x = x;
//     this.y = y;
// }
// Point.prototype.getPosition = function () {
//     return "(" + this.x + "," + this.y + ")";
// };
// // var p1 = new Point(2, 3);
// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     getPosition() {
//         return "(" + this.x + "," + this.y + ")";
//     }
// }
// var p1 = new Point(2, 3);
// console.log(p1.__proto__.hasOwnProperty("getPosition"));
// var info = {
//     _age: 18,
//     set age(newValue) {
//         if (newValue > 18) {
//             console.log("haha laole")
//         } else {
//             console.log("hahahahhawonianqing")
//         }
//     },
//     get age() {
//         console.log("你问我年龄干嘛")
//         return this._age;
//     }
// }
// class Info {
//     constructor(age) {
//         this._age = age;
//     }

//     set age(newAge) {
//         this._age = newAge;
//     }

//     get age() {
//         return this._age;
//     }
// }
// const info = new Info(17)
// console.log(info)
// class表达式
// const Info = class {
//     constructor(age) {
//         this._age = age;
//     }
// }
// 静态方法
// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     static getClassName() {
//         return Point.name
//     }
// }
// var p = new Point(1, 2)
// console.log(Point.getClassName())
// 类的静态方法继承不了
// 类只有静态方法没有静态属性
// // 只有这种形式可以添加静态属性
// class Point {
//     constructor() {
//         this.x = 0
//     }
// }
// Point.y = 2
// var p = new Point()
// console.log(p)
// 私有方法和私有属性
// const _func2 = () => {}
// class Point {
//     // 一般使用下划线的方法默认为私有方法
//     func1() {
//         _func2.call(this);
//     }
// }
// 使用symbol
// const func1 = Symbol('func1')
// class Point {
//     static[func1]() {
//         console.log("这是一个私有的静态的方法");
//     }
// }
// let p = new Point()
// // console.log(p)
// function Point() {
//     console.log(new.target)
// }
// const p = new Point()
// class Point {
//     constructor() {
//         console.log(new.target)
//     }
// }
// const p3 = new Point()
// class Parent {
//     constructor() {
//         if (new.target === Parent) {
//             throw new Error("不能被实例化")
//         }
//     }
// }
// class Child extends Parent {
//     constructor() {
//         super()
//     }
// }
// const c = new Parent()
// console.log(c)
// 进阶篇
// function Food() {
//     this.type = "food"
// }

// Food.prototype.getType = function () {
//     return this.type
// }

// function Vegetable(name) {
//     this.name = name
// }
// // 继承的实现
// Vegetable.prototype = new Food()

// const tomato = new Vegetable()
// console.log(tomato.getType())

// class Parent {
//     constructor(name) {
//         this.name = name;
//     }
//     getName() {
//         return this.name;
//     }
// }

// class Child extends Parent {
//     constructor(name, age) {
//         super(name);
//         this.age = age;
//     }

// }

// const c = new Child("zhaosi", 18);
// console.log(c)
// console.log(c instanceof Parent)
// Object.getPrototypeOf(Child) === Parent && console.log(true)
// super作为函数，代表父类的构造函数constructor
// super作为对象
//在普通方法中，指向的是父类的原型对象，在static修饰的静态方法中指向的是父类

// class Parent {
//     constructor() {
//         this.type = "parent";
//     }
//     getName() {
//         return this.type;
//     }
// }
// Parent.getType = () => {
//     return "is parent";
// };
// class Child extends Parent {
//     constructor() {
//         super();
//         console.log(super.getName());
//     }
//     static getParentName() {
//         console.log(super.getType());
//     }
// }
// const c = new Child();
// Child.getParentName()

// class Parent {
//     constructor() {
//         this.name = "parent";
//     }
//     print() {
//         console.log(this)
//     }
// }

// class Child extends Parent {
//     constructor() {
//         super()
//         // this.name = "child"
//     }
//     childPrint() {
//         super.print()
//         // 对于继承来的，指向的是这个子类
//     }
// }
// const c = new Child()
// c.childPrint()
// var obj = new Object();
// (obj.__proto__ === Object.prototype) && console.log(true)
// 子类的__proto__指向父类本身
// 子类的prototype的__proto__指向父类的prototype属性
// 实例的__proto__属性的__proto__指向父类实例的__proto__
// es5中原生构造函数没法继承
// es6中可以

// class CustomArray extends Array {
//     constructor(...args) {
//         super(...args)
//     }
// }
// const c = new CustomArray(3)
// console.log(c)\