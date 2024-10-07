"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const script_js_1 = require("./script.js");
const classCPF = new script_js_1.GeradoresCPF();
const btElementValid = document.querySelector(".button-generator-valid");
const btElementInvalid = document.querySelector(".button-generator-invalid");
const validInput = document.querySelector("#validInput");
const invalidInput = document.querySelector("#invalidInput");
const verifyCPF = document.querySelector("#verifyCPF");
const verifybutton = document.querySelector("#verifybutton");
btElementValid.addEventListener("click", () => {
    const cpfValido = classCPF.gerarCPFValido();
    validInput.value = cpfValido;
});
btElementInvalid.addEventListener("click", () => {
    const cpfInvalido = classCPF.gerarCPFNaoValido();
    invalidInput.value = cpfInvalido;
});
verifybutton.addEventListener("click", () => {
    const input = verifyCPF.value;
    const convInput = input.split("").map(Number);
    const isValid = classCPF.validarCPF(convInput);
    if (isValid === true) {
        window.alert("CPF VALIDO");
    }
    else {
        window.alert("cpf não é valido");
    }
});
