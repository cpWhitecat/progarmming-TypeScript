type inferA<T> = T extends unknown[] ? T[number] : true;
type inferB = inferA<symbol[] | number[]> 

// T[number]里的number其实就是下标 他的意思就数组下标们对应的值的类型
// 对书上的键入没理解透彻

// 可以说是彻底掌握键入了