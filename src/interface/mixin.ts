// 首先要明白什么事混入 这对后面的写泛型才有更加准确的判断
// 是一个函数接受一个类的构造方法 返回构造类方法


type classConstructor<T> = new(...args:any[]) => T ;//返回一个对象的数据结构 类其实就算是object

function fn<C extends classConstructor<{getValue():object}>>(Class:C){
    return class extends Class {
        constructor(...args:any[]){  //这边类型必须为any
            super(...args)
        };
        getValue(){
            return {
                
            }
        }
    }
}