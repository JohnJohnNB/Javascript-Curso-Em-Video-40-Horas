const pessoa = {nome:'Zézin', idade: 21, peso: 70, engordar(p){
    this.peso += p
    console.log(`${this.nome} engordou ${p} kilos!`)
}}
console.log(pessoa.peso)
pessoa.engordar(2)
console.log(pessoa.peso)
