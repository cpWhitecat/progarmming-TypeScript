// #TODO
/**
 * 做个反悔功能
 * 用那种数据结构来存储步骤行为
 */

// 给定参数 移动坐标

import { moveKing } from "../until";


type Color  = 'Black' | 'White';
type prieceFile = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' ;
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type prieceKingNumber = 'king1' | 'king2' ;
// ...

type moveStep = '1' | 'ri' | number | 'xie' ;  //移动方式

type moveKingType<T> = (...args:T[]) => boolean;  //感觉要实现一个多态
                                                 //再使用T extends 

// 给定参数 移动坐标
let kingPrieceFile:prieceFile = 'A';
let kingRank :Rank = 1;




// 坐标
class Position {  //类只能跟接口配合？？？ 后面加不了： 
    constructor(
        private file : prieceFile,
        private rank : Rank
    ){
        console.log(this.file,this.rank)
    };

}

// 棋子信息
//Priece就是个抽象类 一般有abstract 关键字
abstract class Priece /* <T>这个泛型主要还是用在反悔系统下 */ {  //abstract这个关键字，不能被创建实例 ， 但可以扩展 例如 继承 extends
    protected position : Position;
    constructor(
        private readonly Ncolor : Color,   //在这边的意思是可以被设置，但之后只能读取不能设置
        private readonly prieceNumber :number, 
        file:prieceFile,
        rank : Rank,
    ){
        this.position = new Position(file,rank) //这就是一个position实例，只有在这个作用域内才能访问Private   //实例化就是new className
    
    };

    moveTo(position:Position,canMoveTo:Boolean){  //

    };

    abstract canMoveTo(fn:moveKingType<Position> , ...position:Position[]): Boolean         //子类必须存在的函数，是需要写出数字签名的  /这个方法需要判断移动是否合法
}

class prieceMove<moveStep>{
    constructor(
        private readonly stepStyle : moveStep,

    ){}

    
}


//要把判断合法逻辑抽离出来

class King extends Priece {
    canMoveTo(moveKing:moveKingType<Position> , ...position: Position[]): Boolean {
        if(moveKing(...position)){
            return true
        }
    }
};
class Queen extends Priece {};
class Bishop extends Priece {};
class Knight extends Priece {};
class Rook extends Priece {};
class Pawn extends Priece {};


//一次游戏
class Game {
    private priece = Game.initPriece;

    private static initPriece(){
        return [
            new King('Black','E', 1)
        ]
    }
}




// 类型别名中包含的其他类型别名 不能被interface重写
// 接口支持泛型
// 接口里的不区分顺序


type interfaceTestA = string;
interface A<C> {
    name:C,
    home:interfaceTestA | number
}

interface bTest {
    name:string
}

interface B {
    name : bTest
}



// 我觉得其实类型别名和接口的差别还是挺大的
// 抽象的理解
// 接口不仅限制和规定了传入的类型，还同时保证了值的存在与否


interface testC<T extends string,U extends number>{ // <T>后面的继承删掉爷不行 ， 还是会报错
    name:T,
    age:U,
}

interface testC<T extends string> {
    name:T
}


// 不能合并接口 合并的接口泛型名称数量类型必须一模一样 如：144行例子所示

let aa : testC<string,number> = { //这个接口为什么能用啊 接口合并失败 会执行什么其他策略？ 好像是使用最后一次接口声明的结构  换一下上下顺序试试（用在这的接口提示还是一样的）：不必继续牛角尖下去了
    name:'cc',
    age:1
}



;

interface testD<T>{
    age:T
}
interface testD<T extends string>{
    name:T
};

let bb : testD<string> = {
    name:'1',
    age:1
}


interface Animations {
    eat(x:string) : void,
    sleep(t:Date) : void

}

class Animation implements Animations{
    private readonly AnimationName:string;
    protected AnimationAge :number;  //protected 不能被这个类的实例访问 ， 需要有个新类继承 和这个类
    constructor(
        private readonly age:number, //在构造函数里声明的private readonly 会变成这个类的私有属性
                                        // 那我还折腾的有点久了
        private readonly newName:string,
    ){
        this.AnimationName = newName;
        this.AnimationAge = age;
        console.log(this.age)
        
    };
    eat(x: string): void {
        console.log(this.AnimationAge)
    };
    sleep(t: Date): void {
        console.log(this.AnimationName)
    }
}

let newCat = new Animation(1,'ppp');

// let testNEwcat = newCat.AnimationAge

class cat extends Animation {
    eat(x: string): void {
        console.log(super(this.AnimationAge))  //可以正常访问  //super() 就是父级构造方法（只能调用方法）
    }
}


// interface with type both 声明 一个类

//下列都是可以规范new 一个实例所需类型

type newConstructorType = new(...args:any[]) => {}; //也可以用interface实现

interface newConstructorInterface {
    ...arg:any[]  //反正也可以定义
}
interface newConstructor {
    new():newConstructorType | newConstructorInterface,   //此为构造方法签名

}


interface interfaceFunctionTest{
//接口不能给函数用。。
}

function interfaceFunction():T{

}


// type 和 interface 可否做并集 &   ❌❌❌

type bothType = {};

interface bothInterface<T> {
    getvalue():T
}

class both implements bothInterface<C extends bothType | bothType> {
    getvalue():C{

    }
}

