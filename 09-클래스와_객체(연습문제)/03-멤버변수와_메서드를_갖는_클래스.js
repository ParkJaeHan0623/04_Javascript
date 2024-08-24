class HelloWorld{
    message = null;

    sayHello(){
        let message = '123'
        console.log(this.message);  //this가 붙으면 클래스에서 찾고 this가 없으면 함수 안에서 찾게된다.
        console.log(message);
    }
    setEng(){
        this.message = "Hello JavaScript";
    }
    setKor(){
        this.message = "안녕하세요. 자바스크립트";
    }
}

const hello = new HelloWorld();

hello.setEng();
hello.sayHello();

hello.setKor();
hello.sayHello();