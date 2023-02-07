const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const input3 = document.querySelector('#input3')
const resposta = document.querySelector('#resposta')
const btn = document.querySelector('#btn')
const refresh = document.querySelector('#refresh')

function resultado() {
    elemt1 = input1.value
    elemt2 = input2.value
    elemt3 = input3.value
    let x;
    x = (elemt2 * elemt3) / elemt1

    if (!isNaN(x)) { //Essa função verifica se a variável é um Number ou não
        return x
    } else {
        return "Digite valores válidos!"

    }

}
btn.addEventListener("click", () => {
    resposta.textContent = resultado()
})

refresh.addEventListener('click', () => {
    resposta.textContent = ""
    input1.value = ""
    input2.value = ""
    input3.value = ""
})