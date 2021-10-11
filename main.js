function calcularMedia(){
    let nome = window.prompt("Qual é o nome do Aluno?")
    let primeiraNota = parseInt(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let segundaNota = parseInt(window.prompt(`Qual foi a outra nota de ${nome}?`))

    let media = (primeiraNota + segundaNota) / 2

    let resultado = document.querySelector("section#result")
    resultado.innerHTML = `<p>Calculando a média final de ${nome}.</p>`
    resultado.innerHTML += `<p>As notas obtidas foram ${primeiraNota} e ${segundaNota}.</p>`
    resultado.innerHTML += `<p>A média final será ${media}.</p>`
    if(media >= 7){
        resultado.innerHTML += "<p>A mensagem que temos é: Meus parabéns!</p>"
    } else {
        resultado.innerHTML += "<p>A mensagem que temos é: Estude um pouco mais!</p>"
    }
}