const form = document.getElementById("valores");

function compValor(primeiroValor, segundoValor)
{
    primeiroValor = parseFloat(primeiroValor);
    segundoValor = parseFloat(segundoValor);

    return segundoValor > primeiroValor;
}

form.addEventListener("submit", function(e)
{
    e.preventDefault();

    var valorA = document.getElementById("valor-a").value;
    var valorB = document.getElementById("valor-b").value;
    const resultado = document.getElementById("resultado");

    if (compValor(valorA, valorB)) 
    {
        resultado.innerHTML = "Formulário válido! B é maior que A";
        resultado.style.backgroundColor = "green";
    } else
    {
        resultado.innerHTML = "Formulário inválido! B deve ser maior que A.";
        resultado.style.backgroundColor = "red";
    }
})