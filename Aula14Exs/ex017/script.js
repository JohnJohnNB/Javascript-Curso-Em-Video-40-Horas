function executar() {
    let numero = document.getElementById('txtn')
    let tabuada = document.getElementById('seltab')
    if (numero.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let num = Number(numero.value)
        tabuada.innerHTML = ''
        for (let c=1; c<=10; c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
        }
    } 
}