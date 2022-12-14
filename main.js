const botao = document.querySelector("[data-botao]");
const palavra = document.querySelector("[data-palavra]");
const resultado = document.querySelector("[data-resultado]");

botao.addEventListener("click", () => {
    const palavraTeste = palavra.value;
    let palavraTesteInvertida = palavraTeste.split("").reverse().join("");


    if(palavraTeste === palavraTesteInvertida){
        resultado.innerHTML = `
        <h2 class="resultado">A palavra " <span class="palavra-teste">${palavraTeste}</span> " é Palíndroma</h2>
        `
    } else{
        resultado.innerHTML = `
        <h2 class="resultado">A palavra " <span class="palavra-teste">${palavraTeste}</span> " não é Palíndroma</h2>
        `
    }

    palavra.value = "";
})