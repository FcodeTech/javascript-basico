const btn = document.querySelector('button')
btn.addEventListener('click', contador)
btn.addEventListener('mouseenter', entrar)
btn.addEventListener('mouseout', sair)

function entrar() {
    btn.style.background = 'blue'
    btn.style.color = 'white'
    btn.style.transition = '1s'
}

function sair() {
    btn.style.background = 'none'
    btn.style.color = 'blue'
}

function contador() {
    const campo1 = document.querySelector('input#inicio')
    const campo2 = document.querySelector('input#fim')
    const campo3 = document.querySelector('input#passo')
    const res = document.getElementById('contador')

    if (campo1.value.length === 0 && campo2.value.length === 0 && campo3.value.length === 0) {
        res.innerHTML = '[ERRO] Falta de dados, digite os valores é tente novamente...'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(campo1.value)
        let f = Number(campo2.value)
        let p = Number(campo3.value)
        if (p <= 0) {
            alert('[ERRO] passo inválido! consideranso PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let cont = i; cont <= f; cont += p) {
                res.innerHTML += ` ${cont} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for (let cont = i; cont >= f; cont -= p) {
                res.innerHTML += ` ${cont} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

