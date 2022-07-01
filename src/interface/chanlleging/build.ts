interface RequestBuilderInterface {
    setURL():boolean,
    method():boolean,
    date : object
}

class RequestBuilder <T> {
    private url : string | null = null;
    private method :'get' | 'post' | null = null;
    private date : object | null = null;


    constructor(){

    }
    
    setURL(url:string):boolean{
        this.url = url;
        return true
    }

    setMethod(method: 'get' | 'post'):boolean{
        this.method = method;
        return true
    }

    setDate(date:object):this{
        this.date = date;
        return this
    }

    send(){
        return new RequestBuilder<{this.setURL:true}> {

        }
    }
}


// 要做个泛型 ，确保在调用send之前 setURL setMethod 都被调用了


// 😭😭😭😭😭😭看了答案想法是对的 ， 就