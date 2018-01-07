const Monster = require('./Monster')

let kraken = new Monster('jenglot',300,100);

console.log(kraken.addDamage(100).addHealth(100).getCombo(200).monsterInfo())

sudes