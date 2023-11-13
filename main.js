
let numSign;
let wDay;

document.getElementById("myButton").onclick = function () {
    numSign = document.getElementById("myInput").value;
    wDay = document.getElementById("myInput2").value;


if ((numSign == 1 || numSign == 2) && (wDay == "Segunda-feira")) {
        document.getElementById("myH1").textContent = `:( Seu carro não poderá passar nessa via com essas informações`
    } else if(((numSign == 1 || numSign == 2)) && !(wDay == "Segunda-feira")){
        document.getElementById("myH1").textContent = `:) Seu carro poderá passar nessa via com essas informações`
    }


if ((numSign == 3 || numSign == 4) && (wDay == "Terça-feira")) {
        document.getElementById("myH1").textContent = `:( Seu carro não poderá passar nessa via com essas informações`
    } else if(((numSign == 3 || numSign == 4) && !(wDay == "Terça-feira"))){
        document.getElementById("myH1").textContent = `:) Seu carro poderá passar nessa via com essas informações`
    }

    if ((numSign == 5 || numSign == 6) && (wDay == "Quarta-feira")) {
        document.getElementById("myH1").textContent = `:( Seu carro não poderá passar nessa via com essas informações`
    } else if(((numSign == 5 || numSign == 6) && !(wDay == "Quarta-feira"))){
        document.getElementById("myH1").textContent = `:) Seu carro poderá passar nessa via com essas informações`
    }

   
    if ((numSign == 7 || numSign == 8) && (wDay == "Quinta-feira")) {
        document.getElementById("myH1").textContent = `:( Seu carro não poderá passar nessa via com essas informações`
    } else if(((numSign == 7 || numSign == 8) && !(wDay == "Quinta-feira"))){
        document.getElementById("myH1").textContent = `:) Seu carro poderá passar nessa via com essas informações`
    }

   
    if ((numSign == 9 || numSign == 0) && (wDay == "Sexta-feira")) {
        document.getElementById("myH1").textContent = `:( Seu carro não poderá passar nessa via com essas informações`
    } else if(((numSign == 9 || numSign == 0) && !(wDay == "Sexta-feira"))){
        document.getElementById("myH1").textContent = `:) Seu carro poderá passar nessa via com essas informações`
    }
}