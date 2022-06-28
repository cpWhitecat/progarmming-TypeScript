// <T>待书学到相应的内容再去学习



// unknow 类型

// 首先它不会被ts编译器推断，也就是任何值都不可能被推断成unknow type 
// unknow的值可以被比较和否定  ’！‘


// 类型字面量
const X : true = true;

// 使用const和let推导出来的类型是不一样的
const c = true;  // true
const d = 123;   // 123

// 为什么等书读到第六节；
// 
// 猜想
// 估计是跟最后赋的值有关


// TS索引签名是什么意思；
// 我的理解，不是指定了Key的type了嘛❌❌❌

/* 首先索引签名是针对对象的
不知道对象的键是数值还是字符
以及键值的类型 
索引签名的作用就体现出来了
[key:<string | number>]:<T>
**/


/* type object with Object for diff */

let a : object = {name:'cc'};  //小写  object 对对象里的字段没有要求

let b : Object = {toString() {         //报错原因是： Object
    return '1'         //为字符能通过类型检查 return number was Error
},}



//        |         &

//  没有交集的type test
type babyCat = {age:number , name:string};
type bigCat = {ageCat:number , nameCat : string};


type catBoth = babyCat | bigCat;    // |类型 相当于|| ，要么去前面的类

let cc : catBoth = {age:1};  //报错   至少是具备上面两个type的其中一个（的全部属性和类型） 
let cccc : catBoth = {age:1 , nameCat : '2'};
let ccccc : catBoth = {age:1,name:'1', ageCat:1};

let ccc :catBoth = {age:1,name:'1',ageCat:2,nameCat:'2'}  //两个没有交集的type ，变量ccc可以同时具备他们的所有属性；



// Array

// 数组类型注解
let firstArray: Array<number> = [];      //尖括号括起来的就是泛型
let secondArray: number[] = [];         //第二种注解方式
firstArray.push(1);

// 在数组定义的时候 要显式标注类型
// ts会推导 那个数组是什么类型，而且数组应该保持同质（就是里面的元素的类型要保持一致）


// Array的数组类型推断
function arrTuiDuan(){
    let a = [];  //type : never  预计： any
    a.push(1);
    a.push('1');  //这边类型的推断为什么是never 
    // a预计类型 为（number | string）                //是我tsconfig.json没配置的缘故？
    
    return a  // a:Array<never> 导致arrTuiDuan(){}:never[]
}



// 元组


// 元组必须显式注明类型

/**
 * 元组是个长度固定的数组
 * 比普通数组要安全  (具体看以后的开发场景)
 *  
*/


// enum  //枚举的创建

const enum lanuage {
    chinese,
    japanese,
    english
}

lanuage.chinese;   //这两行是等效的  都可以通过这两种方式访问
lanuage['chinese'];


let sybol = lanuage[7];  //const enum 不能通过键的方式访问  而enum 却可以  但这样哪怕键的值不在范围内继续访问也不会报错；
