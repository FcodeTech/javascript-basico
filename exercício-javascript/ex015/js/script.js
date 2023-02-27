const botao = document.querySelector('button')
    botao.addEventListener('click', verificar)

function verificar() {
    const data = new Date()
    const ano = data.getFullYear()
    const campoAno = document.querySelector('input#txtano')
    const resultado = document.querySelector('div#res')

    if (campoAno.value.length === 0 || Number(campoAno.value) > ano) {
        resultado.innerHTML = '[ERRO] Verifique os dados e tente novamente!'
    } else {
        let masculino = document.querySelector('input#mas')
        let femenino = document.querySelector('input#fem')
        let idade = ano - Number(campoAno.value)

        let genero = ''

        // Criando um elemento ('img') com atributo: (id='foto')
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        // Condicional masculino
        if (masculino.checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'image/m-crianca.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'image/m-jovem.png')
            } else if (idade < 50) {
                // Aduto
                img.setAttribute('src', 'image/m-aduto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'image/m-idoso.png')
            }
            // Codicional femenina
        } else if (femenino.checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'image/f-crianca.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'image/f-jovem.png')
            } else if (idade < 50) {
                // Aduto
                img.setAttribute('src', 'image/f-aduto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'image/f-idoso.png')
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
        img.style.margin = '20px'
    }
}