class Rectangle{
    #width;
    #height;

    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    get width(){
        return this.#width;
    }
    set width(value){
        this.#width = value;
    }
    get height(){
        return this.#height;
    }
    set height(value){
        this.#height = value;
    }

    getAround(){
        return (this.width + this.height) * 2;
    }
    getArea(){
        return (this.width * this.height)
    }

}

const rect = new Rectangle();

rect.width = 10;
rect.height = 5;

console.log(`둘레의 길이는 ${rect.getAround()}이고 넓이는 ${rect.getArea()}입니다`);


