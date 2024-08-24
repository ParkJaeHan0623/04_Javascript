class userClass{
    // 은닉된 멤버변수
    #userName;
    #email;

    // 멤버변수에 값을 최초로 할당(=초기화)하기 위한 생성자 함수
    constructor(userName,email){
        this.#userName = userName;
        this.#email = email;
    }

    // 멤버 변수 #userName에 값을 할당하기 위한 setter 함수
    set userName(value){
        if(!value){
            console.log("userName을 입력하세요");
            return;
        }
        this.#userName = value;
    }
    // 멤버변수 #userName에 값을 반환하기 위한 getter 함수
    get userName(){
        return this.#userName;
    }

    set email(value){
        if(!value){
            console.log("email을 입력하세요");
            return;
        }
        this.#email = value;
        
    }
    get email(){
        return this.#email;
    }

    // 일반적인 기능을 수행하기 위한 메서드
    login(){
        if(!this.userName || !this.email){
            console.log("userName이나 email을 확인하세요");
            return
        }
        console.log(`로그인 되었습니다. >> userName = ${this.userName}, email = ${this.email}`);
    }
}

const user = new userClass("lee","abc@naver.com");
user.login();

// console.log(user.#userName);  --> 은닉된 멤버변수에 접근하는 코드이므로 에러

user.userName = "";
user.email = "";

user.userName = "hello world";
user.email = "hello@world.com";
user.login();