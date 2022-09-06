var agora = new Date()
var dia = agora.getDay()
switch(dia) {
    case 0:
        word = 'Domingo'
        break
    case 1:
        word = 'Segunda'
        break
    case 2:
        word = 'Terça'
        break
    case 3:
        word = 'Quarta'
        break
    case 4:
        word = 'Quinta'
        break
    case 5:
        word = 'Sexta'
        break
    case 6:
        word = 'Sábado'
        break
}
console.log(`O dia de hoje é ${word}`)