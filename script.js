function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let anoform = document.querySelector('input#txtano')
    let resultado = document.querySelector('div#res')

    if (anoform.value.length == 0 || Number(anoform.value) > ano) {
      alert('[ERRO] Verifique o valor do ano e tente novamente.') 
    } else{
    let sexoform = document.getElementsByName('radsexo') // não pode ser queryselector pq só pega um elemento
    let idade = ano - Number(anoform.value)
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (sexoform[0].checked) {
        genero = "homem"
        document.body.style.background = "#4040ff"
        if (idade >= 0 && idade < 13) {
           // criança
           img.setAttribute("src", "foto-bebe-m.png")
           } else if (idade >= 13 && idade < 18) {
           //jovem
           img.setAttribute("src", "foto-jovem-m.png")
           } else if (idade > 18 && idade < 60) {
           //adulto
           img.setAttribute("src", "foto-adulto-m.png")
           } else {
            //idoso
           img.setAttribute("src", "foto-idoso-m.png")
           }
    } else if (sexoform[1].checked){
        genero = "mulher"
        document.body.style.background = "#ffc4d8"
        if (idade >= 0 && idade < 13) {
            // criança
            img.setAttribute("src", "foto-bebe-f.png")
           } else if (idade >= 13 && idade < 18) {
            //jovem
            img.setAttribute("src", "foto-jovem-f.png")
           } else if (idade > 18 && idade < 60) {
            //adulto
            img.setAttribute("src", "foto-adulto-f.png")
           } else {
            //idoso
            img.setAttribute("src", "foto-idoso-f.png")
           }
    } else if (sexoform[2].checked){
        genero = "não-binário"
        document.body.style.background = "#c0c0c0"
        if (idade >= 0 && idade < 13) {
            // criança
            img.setAttribute("src", "foto-bebe-enby.jpg")
           } else if (idade >= 13 && idade < 18) {
            //jovem
            img.setAttribute("src", "foto-jovem-enby.png")
           } else if (idade > 18 && idade < 60) {
            //adulto
            img.setAttribute("src", "foto-adulto-enby.jpg")
           } else {
            //idoso
            img.setAttribute("src", "foto-idoso-enby.png")
           }
    }
    resultado.style.textAlign = 'center'
    resultado.innerHTML = `Detectamos <straight>${genero}</straight> com <straight>${idade}</straight> anos`
    resultado.appendChild(img) // faz aparecer um elemento child 
 }
}