// factory

type shoe ={
    purpose:string
};

class BalletFlat implements shoe {
    purpose='dancing';
}

class Boot implements shoe {
    purpose= 'woodcutting';
}

class Sneaker implements shoe {
    purpose= 'walking'
}



type newShoe = {  //使用函数重载 来规定一个函数的不同值的返回类型
    create(type:'balletFlat'): BalletFlat
    create(type:'boot') : Boot
    create(type:'sneaker') : Sneaker
}

let shoe :newShoe  = {
    create(type: 'balletFlat' | 'boot' | 'sneaker'): shoe {
        switch (type) {
            case 'balletFlat':
              return new BalletFlat()
            case 'boot':
              return new Boot()
            case 'sneaker':
              return new Sneaker()
          }
    }
}


shoe.create('balletFlat');
shoe.create('boot');
shoe.create('sneaker')



//