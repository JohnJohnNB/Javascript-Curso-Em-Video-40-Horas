var agora = new Date()
var hora = agora.getHours()
console.log(`São exatamente ${hora} horas`)
if (hora>0 && hora<6) {
    console.log('Está de madrugada')
} else if (hora<12) {
    console.log('Está de manhã')
} else if (hora <= 18) {
    console.log('Está de tarde')
} else {
    console.log('Está de noite')
}