T <: R
/**
 * T指 实际传入类型 R指预期类型
*/

// 函数比较特别

T >: R
// R 是 T 的子类
// T 是 R 的超类
// 



// 再重复那个观念，虽然自己本身已经知道,类似在vue中子组件的概念

// vue
/**
 * 假设这个注释里的是一个vue组件
 * 
 * <template>
 *  <div></div>
 * </template>
 * 
 * 
 * name:'test'
 * 
 * props:{  //这个是往子组件里传参
 *  duration:'cp'
 * }
 * 
*/



/**
 * 现在把上面那个组件导入
 * （现在这个组件就是test的子组件，跟我的思维相反的地方）
 * import test
 * 
 * <template>
 *  <test/>
 * </template>
 * 
*/

// 一个函数的型变

class Animal {

}

class people extends Animal {
    show(){}
}

class child extends people {
    cry(){}
}

function show(audlt:people) :people{  //返回的类型必须是预期的子集，就返回的类型是特殊点的，其他都相反
    audlt.show()
    return audlt
}



// ts的函数型变 跟传入值和返回值的<: 也是有关系的
// 对于函数型变
// 
// 就是子类可否变父类的问题
// 多不能变少
// 少可以变多



// 可赋值性
/**
 * 跟子类超类一样的概念
*/

// 类型拓宽
/**
 * 
*/

let a = [];
a.push('1') //例子不成功 估计我没配置tsconfig

// 多余属性检查✔✅✅✅



// 细化类型
// 比如说eventTarget
// 细化会触发那种dom的事件


// 键入 相当于就是根据别名 找到对应别名结构下的类型


