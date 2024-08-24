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
}

