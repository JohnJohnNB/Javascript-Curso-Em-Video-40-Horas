let num = [1, 2, 3, 4, 5]

for (let pos in num) {
    console.log(num[pos])
}

number = 8
pos = num.indexOf(number)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor ${number} está na posição ${pos}`)
}