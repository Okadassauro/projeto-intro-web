//SEMANA 1.1

const exemplo1 = ''
const exemplo2 = 'number'
const exemplo3 = 'bolean'
//SEMANA 2.1 "Criação de característica array"
const allPaises = []    //sempre que abre colchete é array

//SEMANA 1.2
const objeto1 = {
    nome: `brasil`,
    habitantes: 212600000,
    litoraneo: true,
    principaisCidades: [`São Paulo`, `Rio de Janeiro`, `Brasília`, `Salvador`],
    link: "https://www.gov.br/pt-br",
    imagem: "./Imagens projeto/BR.png"
}

const objeto2 = {
    nome: `peru`,
    habitantes: 32970000,
    litoraneo: true,
    principaisCidades: [`Lima`, `Arequipa`, `Trujillo`, `Chiclayo`],
    link: "https://www.gob.pe/",
    imagem: "./Imagens projeto/PERU.png"
}

const objeto3 = {
    nome: `bolivia`,
    habitantes: 11670000,
    litoraneo: true,
    principaisCidades: [`Santa Cruz`, `	El Alto`, `La Paz`, `Cochabamba`],
    link: "https://www.presidencia.gob.bo/",
    imagem: "./Imagens projeto/BOLIVIA.png"
}
//SEMANA 1.3
const mediaHabitantes = (objeto1.habitantes + objeto2.habitantes + objeto3.habitantes) / 3 //operação matematica
console.log(mediaHabitantes);

//SEMANA 1.4
const litoraneo = objeto1.litoraneo && objeto2.litoraneo && objeto3.litoraneo
//console.log(litoraneo);

//SEMANA 2.2

//SEMANA 3.1 - TRANSFORMANDO ITENS EM OBJETOS
//ALTERAÇÃO DAS VARIAVEIS PARA OBJETOS, LINHA 9 À LINHA 28

//SEMANA 3.3 e 4.1 ALTERAÇÃO PARA VERIFICAÇÃO BOOLEANA
let arrayObjetos = []

function pushArray(objeto) {
    if (objeto.litoraneo === true) {
        arrayObjetos.push(objeto)
    } else {
        alert(` O objeto não foi adicionado ao array`)
    }
}

pushArray(objeto1)
pushArray(objeto2)
pushArray(objeto3)

console.log(arrayObjetos);

//SEMANA 5.1
let stringCidades1 = ``
for (let i in objeto1.principaisCidades) {
    stringCidades1 += `${objeto1.principaisCidades[i]}, `
}

//console.log(stringCidades2);

let stringCidades2 = ``
for (let i in objeto2.principaisCidades) {
    stringCidades2 += `${objeto2.principaisCidades[i]}, `
}

//console.log(stringCidades3);

let stringCidades3 = ``
for (let i in objeto3.principaisCidades) {
    stringCidades3 += `${objeto3.principaisCidades[i]}, `
}

//console.log(stringCidades3);

//SEMANA 2.2 / 5.1 REESCREVENDO RELATÓRIO

//console.log(`${objeto1.nome.toUpperCase()}\n${objeto1.habitantes}\n${objeto1.litoraneo}\n${stringCidades1}`);
//console.log(`${objeto2.nome.toUpperCase()}\n${objeto2.habitantes}\n${objeto2.litoraneo}\n${stringCidades2}`);
//console.log(`${objeto3.nome.toUpperCase()}\n${objeto3.habitantes}\n${objeto3.litoraneo}\n${stringCidades3}`);

//SEMANA 5.2
for (let i in arrayObjetos) {
    for (j in arrayObjetos[i]) {
        console.log(arrayObjetos[i][j]);
    }
}

//SEMANA 6.1

function imprimeObjeto(objeto) {
    let stringObjeto = ``
    stringObjeto = objeto
    console.log(stringObjeto)
}


//SEMANA 6.2
const funcaoBusca = (array, input) => {
    for (i in array) {
        for (j in array[i]) {
            if (array[i][j] === input) {
                let main = document.getElementById("main")
                let div = document.createElement('div')
                let section = document.createElement("section")
                let imagem = document.createElement("img")
                let ul = document.createElement("ul")
                let li1 = document.createElement("li")
                let li2 = document.createElement("li")
                let li3 = document.createElement("li")
                let a = document.createElement("a")

                div.setAttribute("id","div-sections")
                section.setAttribute("id", "section1")
                imagem.src = array[i].imagem
                a.setAttribute("href", array[i].link)
                a.setAttribute("target", "_blank")
                a.innerHTML = array[i].nome.toUpperCase()
                li1.innerHTML = `Nome: `
                li2.innerHTML = `População: ${array[i].habitantes}`
                li3.innerHTML = `Principais Cidades: ${array[i].principaisCidades}`

                main.appendChild(div)
                div.appendChild(section)
                section.appendChild(imagem)
                section.appendChild(ul)
                ul.appendChild(li1)
                ul.appendChild(li2)
                ul.appendChild(li3)
                li1.appendChild(a)
            }
        }
    }
};


for (i in arrayObjetos) {
    let div = document.getElementById('div-sections')
    let section = document.createElement("section")
    let imagem = document.createElement("img")
    let ul = document.createElement("ul")
    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    let li3 = document.createElement("li")
    let a = document.createElement("a")

    section.setAttribute("id", "section1")
    imagem.src = arrayObjetos[i].imagem
    a.setAttribute("href", arrayObjetos[i].link)
    a.setAttribute("target", "_blank")
    a.innerHTML = arrayObjetos[i].nome.toUpperCase()
    li1.innerHTML = `Nome: `
    li2.innerHTML = `População: ${arrayObjetos[i].habitantes}`
    li3.innerHTML = `Principais Cidades: ${arrayObjetos[i].principaisCidades}`

    div.appendChild(section)
    section.appendChild(imagem)
    section.appendChild(ul)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    li1.appendChild(a)
}

function botao(event) {
    event.preventDefault()
    let input = document.getElementById("pesquisa").value.toLowerCase()
    if (input === "") {
        alert("Este Objeto Não existe")
    } else {
        document.getElementById("div-sections").remove()
        funcaoBusca(arrayObjetos, input)
    }
}