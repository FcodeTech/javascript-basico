const btn = document.querySelector('button')
btn.addEventListener('click', tabuada)

function tabuada() {
    const campoTxt = document.getElementById('txtn')
    const tab = document.querySelector('select#seltab')

    if (campoTxt.value.length === 0) {
        window.alert('Por favor, digite um número')
    } else {
        const valor = Number(campoTxt.value)

        // Laço de repetição while
        let cont = 1
        tab.innerHTML = ''
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text += `${valor} x ${cont} = ${valor*cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
            cont++
        }
    }
}