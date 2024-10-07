//import { GeradoresCPF } from "./script.js"

type ElementoButton = HTMLButtonElement

//instaciando o objeto
const classCPF = new GeradoresCPF();

//pegando os elementos pela class
const btElementValid = document.querySelector(".button-generator-valid") as ElementoButton;
const btElementInvalid = document.querySelector(".button-generator-invalid") as ElementoButton;
const validInput = document.querySelector("#validInput") as HTMLInputElement;
const invalidInput = document.querySelector("#invalidInput") as HTMLInputElement;
const verifyCPF = document.querySelector("#verifyCPF") as HTMLInputElement;
const verifybutton = document.querySelector("#verifybutton") as ElementoButton;

//Eventos
btElementValid.addEventListener("click", () => {
    const cpfValido:string = classCPF.gerarCPFValido();
    validInput.value = cpfValido;
});

btElementInvalid.addEventListener("click", () => {
    const cpfInvalido:string = classCPF.gerarCPFNaoValido();
    invalidInput.value = cpfInvalido;
})
verifybutton.addEventListener("click",() =>{
    const input = verifyCPF.value;
    const convInput = input.split("").map(Number)
    const isValid = classCPF.validarCPF(convInput);
    if(isValid === true){
        window.alert("CPF VALIDO");
    }
    else{
        window.alert("cpf não é valido");
    }

})


