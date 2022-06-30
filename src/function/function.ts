// 在五种申明函数的方法中
// 构造函数是不安全的

// such as
let b1 = (name:string,age: number)=>{};

let a = new Function('name','retun "hello" + name ');   //ts还会检验在同个作用域下的变量名重名问题，确实很智能
//类型报错 a is Function of type 

function log(message:string , userId?:string , age:string){           //可选参数一定要在最后 给可选参数提供默认值 就不必要放在最后了
    
}

// arguments 是否可定义类型
function sum(){
    return Array.from(arguments:String)   //arguments不能指定类型 
}

let arg : Array<Number> = [1,2];

function sum2(...arg:Number[]){
    return arg.reduce((c,b):number => { return c + b} ,0);    //是一个以前漏掉的细节问题，
                                                            // 我一直以为箭头函数里单一的一行代码，会成为返回值，
                                                            // 我知道箭头函数去掉括号是直接表示返回值；但之前一直没意识到这个问题
}

function().bind.call.apply//它们都会更改this的指向



function mapNode<T extends TreeNode>(node:T,f:(value:string)=>string) : T {
    return {
        ...node,
        value :f(node.value)
    }
}

type TreeNode = {
    value:string
};

type LeafNode = TreeNode & {
    isLeaf: true
}

type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode , TreeNode]
}

let a2 : TreeNode = {value:'a'};
let b2 : LeafNode = {value:'b' , isLeaf : true};
let c2 : InnerNode = {value : 'c' , children:[b2]};

let a3 = mapNode(a2,_=>_.toUpperCase())



function call<T extends any[],U>(
    f:(...args:T) => U,   //类型String | number 
    ...args:T,
):U {
    return f(...args)
}

function fill(length:number , value : string) : string[]{
    return Array.from({length}, ()=>value)
}

call(fill,10 , 'a')

Function.prototype.call



// 函数签名的重载 就是多个函数签名




// 泛型的新用法
// 可用于确定一个类里的一个函数是否存在