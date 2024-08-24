class Protoss{
    #name;
    #hp;
    #dps;

    constructor(name,hp,dps){
        this.name = name;
        this.hp = hp;
        this.dps = dps;
        console.log("[%s] 체력: %d, 공격력: %d",this.#name,this.#hp,this.#dps);
    }

    set name(value){
        this.#name = value;
    }
    get name(){
        return this.#name;
    }

    set hp(value){
        this.#hp = value;
    }
    get hp(){
        return this.#hp;
    }

    set dps(value){
        this.#dps = value;
    }
    get dps(){
        return this.#dps;
    }

    move(position){
        console.log(this.name + "(이)가 " + position + "까지 이동합니다");
    }

    attack(target){
        console.log(`${this.name} (이)가 ${target}(을)를 공격합니다. 데미지: ${this.dps}`);
        // console.log(this.name + "(이)가" + target + "(을)를 공격합니다. 데미지: " + this.dps);
    }

}

class Zelot extends Protoss{
    sword(target){
        this.attack(target);
        console.log(">>>>>> 검으로 찌르기");
    }
}

class Dragoon extends Protoss{
    fire(target){
        this.attack(target);
        console.log(">>>>>> 원거리 공격");
    }
}

const z1 = new Zelot("질럿1",300,20);
z1.move("본진");
z1.sword("본진");

const z2 = new Zelot("질럿2",300,25);
z1.move("멀티");
z1.sword("멀티");

const d1 = new Dragoon("드라군1",250, 40);
d1.move("본진");
d1.fire("본진");

const d2 = new Dragoon("드라군2",250, 40);
d2.move("멀티");
d2.fire("멀티");