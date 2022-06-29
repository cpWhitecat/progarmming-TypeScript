// #TODO
/**
 * 做个反悔功能
 * 用那种数据结构来存储步骤行为
 */

// 给定参数 移动坐标

type Color  = 'Black' | 'White';
type prieceFile = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' ;
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type prieceKingNumber = 'king1' | 'king2' ;
// ...

type moveStep = '1' | 'ri' | number | 'xie' ;  //移动方式


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
abstract class Priece<T> {  //abstract这个关键字，不能被创建实例 ， 但可以扩展 例如 继承 extends
    protected position : Position;
    constructor(
        private readonly color : Color,   //在这边的意思是可以被设置，但之后只能读取不能设置
        private readonly prieceNumber :T, 
        file:prieceFile,
        rank : Rank;
    ){
        this.position = new Position(file,rank) //这就是一个position实例，只有在这个作用域内才能访问Private   //实例化就是new className
        
    };

    moveTo(position:Position,canMoveTo:Boolean){  //

    };

    abstract canMoveTo<T>(position:Position): Boolean         //子类必须存在的函数，是需要写出数字签名的  /这个方法需要判断移动是否合法
}

class prieceMove<moveStep>{
    constructor(
        private readonly stepStyle : moveStep,

    ){}

    
}


//要把判断合法逻辑抽离出来

class King extends Priece<prieceKingNumber> {
    canMoveTo<T>(position: Position): Boolean {
        if
    }
};
class Queen extends Priece<prieceQueenNumber> {};
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

