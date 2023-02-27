const Btn = document.querySelector('button.btn')
const btn = document.querySelector('button#btn')
Btn.addEventListener('click', adicionar)
btn.addEventListener('click', finalizar)

// Recuperando valores dos inputs
const res = document.querySelector('div#result')
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let valores = []

// Chamando btn adicionar
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        res.innerHTML = 'Valor inválido ou já se encontra na lista.'
        res.style.color = 'blue'
    }

    // Limpando a caixa de texto
    num.value = ''
    // Mantendo o foco apos limpa a caixa de texto
    num.focus()
}

// Validando se os valores estão entre (1 e 100)
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) !== -1) {
        return true
    } else {
        return false
    }
}

// Chamando btn finalizar
function finalizar() {
    if (valores.length === 0) {
        res.innerHTML = 'Adicionar valores antes de finalizar!'
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let somar = 0
        let media = 0

        // Laço for de percuso dos valores
        for (let pos in valores) {
                somar += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = somar / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todos, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${somar}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }

}
