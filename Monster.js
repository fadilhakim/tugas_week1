class Monster {
    constructor(name,health,damage){
        this.name = name
        this.health = health
        this.damage = damage
    }
    addDamage(damage){
        this.damage += damage
        return this
    }
    addHealth(heal = 100){
        this.health += heal
        return this
    }
    getAtk(atk){
        this.health -= atk
        return this
    }

    getCombo(combo){
        this.addDamage += combo
        this.addHealth += combo
        return this
    }
    monsterInfo(){
        return `nama monster : ${this.name}, 
        health monster : ${this.health},
        damage monster : ${this.damage},
        `
    }
}

module.exports = Monster
