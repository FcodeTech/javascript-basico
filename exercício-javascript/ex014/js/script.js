function carregar() {
    // Capiturando os elementos DOM
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    // Pegando hora atual da maquina
    var data = new Date()
    var hora = data.getHours()

    // Escrevendo na tela a hora
    msg.innerHTML = `Agora são ${hora} horas.`

    // Codicional
    if (hora >= 0 && hora < 12) {
        img.src = 'image/fotomanha.png'
        document.body.style.background = '#E2CD9F'
        msg.innerHTML = `Agora são ${hora} horas. Bom Dia!`
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'image/fototarde.png'
        document.body.style.background = '#B9846F'
        msg.innerHTML = `Agora são ${hora} horas. Boa Tarde!`
    } else {
        img.src = 'image/fotonoite.png'
        document.body.style.background = '#515154'
        msg.innerHTML = `Agora são ${hora} horas. Boa Noite!`
    }
}
