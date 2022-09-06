function verificar() {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_pessoa = document.getElementById('txtano').value
    var res = document.querySelector('div#res')
    if (ano_pessoa.length == 0 || ano_pessoa > ano_atual) {
        window.alert('Por favor preencha os dados corretamente!')
    } else {
        var idade = ano_atual - ano_pessoa
        var radio_sex = document.getElementsByName('radsex')
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (radio_sex[0].checked) {
            gênero = 'homem'
            if (idade>0 && idade<10) {
                //KID
                img.setAttribute('src', 'bebamasc.png')
            } else if (idade<18) {
                //JOVEM
                img.setAttribute('src', 'jovemmasc.png')
            } else if (idade<50) {
                //ADULTO
                img.setAttribute('src', 'adultomasc.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idosomasc.png')
            }
        } else {
            gênero = 'mulher'
            if (idade>0 && idade<10) {
                //KID
                img.setAttribute('src', 'bebefeminino.png')
            } else if (idade<18) {
                //JOVEM
                img.setAttribute('src', 'jovemfeminino.png')
            } else if (idade<50) {
                //ADULTO
                img.setAttribute('src', 'adultofem.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idosofeminino.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é um(a) ${gênero} de ${idade} anos!`
        res.appendChild(img)
    }   
}