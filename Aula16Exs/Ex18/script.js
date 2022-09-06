let vetor = []
let select = document.getElementById('out')
let div = document.getElementById("res")
let valor = document.getElementById('txtnum')

function isNumber(valor) {
    if (Number(valor)>=1 && Number(valor)<=100) {
        return true
    } else {
        return false
    }
}

function inLista(num, lista) {
    if (lista.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumber(valor.value) && !inLista(valor.value, vetor)) {
        let option = document.createElement('option')
        option.text = `Valor ${Number(valor.value)} adicionado!`
        select.appendChild(option)
        vetor.push(Number(valor.value))
        div.innerHTML = ''
    } else {
        alert('Valor incorreto ou já encontrado na lista!')
    }
    valor.value = ''
    valor.focus()
}

function finalizar(){
    div.replaceChildren()
    if (vetor.length != 0) {
        let tamanho = vetor.length
        if (vetor.length > 1) {
            let maior = Math.max(...vetor)
            let menor = Math.min(...vetor)
            let msg_maior = document.createElement("p")
            msg_maior.innerHTML = `O maior número é ${maior}`
            let msg_menor = document.createElement("p")
            msg_menor.innerHTML = `O menor número é ${menor}`
            div.appendChild(msg_maior)
            div.appendChild(msg_menor)
        } else {
            let maior = Math.max(vetor)
            let msg_maior = document.createElement("p")
            msg_maior.innerHTML = `O maior número é ${maior}`
            div.appendChild(msg_maior)
        }
        let soma = somar()
        let msg_soma = document.createElement("p")
        msg_soma.innerHTML = `A soma é ${soma}`
        div.appendChild(msg_soma)  
    } else {
        alert('Por favor, adicione elementos!')
    }

}

function somar() {
    let total = 0
    for (let i = 0; i < vetor.length; i++) {
        total += vetor[i]
    }
    return total
}