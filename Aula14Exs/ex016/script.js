function rodar() {
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var res = document.getElementById('res')
    var text = ''
    if (inicio.length != 0 && fim.length != 0 && passo.length != 0 && passo != 0) {
        var ini = Number(inicio)
        var end = Number(fim)
        var razao = Number(passo)
        var validacao = true
        if (ini < end) {
            if (razao>0) {
                for (beginning = ini; beginning<=end; beginning += razao) {
                    text += `${beginning}` + ' \u{1F449} '
                }
            } else {
                var validacao = false
            }
        } else {
            var razao = Math.abs(Number(passo))
            for (beginning = ini; beginning >= end; beginning -= razao) {
                text += `${beginning}` + ' \u{1F449} '
            }
        }
        if (validacao == true) {
            text += 'FIM'
            res.innerHTML = text
        } else {
            res.innerHTML = 'Impossível calcular'
        }
    } else {
        res.innerHTML = 'Impossível calcular'
    }
}
