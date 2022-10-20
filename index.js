const calcul = document.querySelector('#calcul');
let result = document.getElementById('result');

var t1 = "Insuffisance pondérante"
var t2 = "Poids normal"
var t3 = "Surpoids"
var t4 = "Obésité"


calcul.addEventListener('click' , (e) => {
    e.preventDefault();
    var size = document.getElementById('size').value/100;
    var weight = document.getElementById('weight').value;
    let imc = weight/size**2;

    if (size == 0 || weight == 0){
        result.innerHTML = `
            <h3>Formulaire invalide</h3>
            <p>Veuillez remplir les champs</p>
        `
    }else{
        if(imc < 18.5){
            result.innerHTML = `
            <h3>Voici votre IMC : ${imc}</h3>
            <p>${t1}</p>
        `
        }else if(imc > 18.5 && imc < 24.9){
            result.innerHTML = `
            <h3>Voici votre IMC : ${imc}</h3>
            <p>${t2}</p>
        `
        }else if(imc < 25 && imc < 29.9){
            result.innerHTML = `
            <h3>Voici votre IMC : ${imc}</h3>
            <p>${t3}</p>
        `
        }else{
            result.innerHTML = `
            <h3>Voici votre IMC : ${imc}</h3>
            <p>${t4}</p>
        `
        }
    }
})