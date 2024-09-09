function pesquisar(){
let section = document.getElementById 
("resultados-pesquisa");
console.log(section);

let resultados = ""

// para cada dado dentro da lista de dados
for (let dado of dados) {
    resultados += `
<div class="item-resultado">
        <img src=${dado.imagem} class="Imagens" width="130" height="200">
        <div class="texto">
        <h2>
        <a href=${dado.link} target="_blank">${dado.titulo}</a> 
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        </div>
        </div>
`
};

section.innerHTML = resultados }

