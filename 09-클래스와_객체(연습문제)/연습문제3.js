class Student{
    #department;
    #number;

    constructor(department,number){
        this.department = department;
        this.number = number;
    }
    get department(){
        return this.#department
    }
    set department(value){
        this.#department = value;
    }
    get number(){
        return this.#number;
    }
    set number(value){
        this.#number = value;
    }

    sayHello(){
        console.log(`나는 ${this.department}학과 ${this.number}학번입니다`);
    }
}

const stud = new Student("컴퓨터",20240825);
stud.sayHello();