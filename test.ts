function showName (name: string): string {
    return 'your name is ' + name;
}
let myname: string = 'liuyyongsheng';
console.log(showName(myname));

interface Person {
    name: string;
    age?: number
}
let my: Person = {
    name: 'liuyongsheng',
    age: 67
}
console.log(my);

// 参数默认值
function sum (x: number, y:number = 123): number {
    return x + y;
}
sum(123);

type Str = string;

function getName (name: Str): string {
    return name + 'weqwe';
}

getName('aaaa');

// 类型别名
// 常用于联合类型
type Name = String;
type NameFun = () => string;
type NameAll = Name | NameFun;

function getNewName(n: NameAll): Name {
    return n + '1';
}
getNewName('321321');
// 字符串字面量类型
type eventNames = 'click' | 'scroll';
function handleEvent (ele: eventNames): string {
    return ele + '1';
}
handleEvent('click');
// 元组
let tom: [string, number] = ['dasda', 213];
// tom[0] = 'dasda';
// tom[1] = 123;
console.log(tom);

// 枚举
enum Days { sun, Mon, Tue };

console.log(Days[0]);

// 类

class Animal {
    public name: any;
    public constructor (name:any) {
        this.name = name;
    }
    sayHi (): string {
        return `dasda ${this.name}`;
    }
}
let a = new Animal('eqw');
