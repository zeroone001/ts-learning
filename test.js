function showName(name) {
    return 'your name is ' + name;
}
var myname = 'liuyyongsheng';
console.log(showName(myname));
var my = {
    name: 'liuyongsheng',
    age: 67
};
console.log(my);
// 参数默认值
function sum(x, y) {
    if (y === void 0) { y = 123; }
    return x + y;
}
sum(123);
function getName(name) {
    return name + 'weqwe';
}
getName('aaaa');
function getNewName(n) {
    return n + '1';
}
getNewName('321321');
function handleEvent(ele) {
    return ele + '1';
}
handleEvent('click');
// 元组
var tom = ['dasda', 213];
// tom[0] = 'dasda';
// tom[1] = 123;
console.log(tom);
// 枚举
var Days;
(function (Days) {
    Days[Days["sun"] = 0] = "sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
})(Days || (Days = {}));
;
console.log(Days[0]);
// 类
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        return "dasda " + this.name;
    };
    return Animal;
}());
var a = new Animal('eqw');
