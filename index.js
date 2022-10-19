const calcul = document.querySelector('#calcul');
let result = document.getElementById('result');

var t1 = "Je ne sait pas"
var t2 = "Je ne sait pas"
var t3 = "Je ne sait pas"
var t4 = "Je ne sait pas"
var t5 = "Je ne sait pas"
var t6 = "Je ne sait pas"
var t7 = "Je ne sait pas"

calcul.addEventListener('click' , (e) => {
    var size = document.getElementById('size').value/100;
    var weight = document.getElementById('weight').value;
    let imc = weight/size**2;

    result.innerHTML = `
        <h3>Voici votre IMC : ${imc}</h3>
        <p>${t1}</p>
    `

    e.preventDefault();
})