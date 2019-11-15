//任意属性
interface Person {
    name: String;
    [c:string]:any;
}
let lucy:Person ={
    name:'lucy',
    nams:21
}
// 可选属性
interface Person2{
    name:string;
    age?:number
}

const mary:Person2={
    name:"sd"
}

//只读属性
interface Person3{
    readonly id:number;
    name:string;
    age:number
}

const jery :Person3={
    id:123434,
    name:"jery",
    age:17
}
console.log(jery)

let nArray :any[]=[1,2,3,4,5,"123sd"];
let nArray2 :number[] =[1,2,3];

//函数
function sum(name:string,age:number):string{
    return "my name is"+name;
}

//可选参数
function sum1(name:string,age?:number):string{
    return name+age;
}
sum1("cac")

console.log(sum1('ddd'))