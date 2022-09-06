function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `São exatamente ${hora} horas.`
    if (hora>=0 && hora<12) {
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#EEE8AA'
    } else if (hora<18) {
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#CD853F'
    } else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#4F4F4F'
    }
}