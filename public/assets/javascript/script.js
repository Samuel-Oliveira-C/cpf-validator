class GeradoresCPF {
    gerarCPFValido() {
        let cpf;
        do {
            cpf = this.gerarNumerosAleatorios();
            const digito1 = this.calcularDigitoVerificador(cpf, GeradoresCPF.PESO_MAXIMO_DIGITO1);
            const digito2 = this.calcularDigitoVerificador(cpf, GeradoresCPF.PESO_MAXIMO_DIGITO2);
            cpf[9] = digito1;
            cpf[10] = digito2;
        } while (!this.validarCPF(cpf));
        return cpf.join('');
    }
    gerarCPFNaoValido() {
        let cpf;
        do {
            cpf = this.gerarNumerosAleatorios();
            const digito1 = this.calcularDigitoVerificador(cpf, GeradoresCPF.PESO_MAXIMO_DIGITO1);
            const digito2 = this.calcularDigitoVerificador(cpf, GeradoresCPF.PESO_MAXIMO_DIGITO2);
            cpf[9] = digito1;
            cpf[10] = digito2;
        } while (this.validarCPF(cpf));
        return cpf.join('');
    }
    gerarNumerosAleatorios() {
        let array = [];
        for (let index = 0; index < 11; index++) {
            let valor = Math.floor(Math.random() * 10);
            array.push(valor);
        }
        return array;
    }
    calcularDigitoVerificador(numeros, pesoMaximo) {
        const soma = numeros.slice(0, pesoMaximo - 1).reduce((acc, num, index) => acc + num * (pesoMaximo - index), 0);
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    }
    validarCPF(cpf) {
        const digito1 = this.calcularDigitoVerificador(cpf, GeradoresCPF.PESO_MAXIMO_DIGITO1);
        const digito2 = this.calcularDigitoVerificador(cpf, GeradoresCPF.PESO_MAXIMO_DIGITO2);
        return cpf[9] === digito1 && cpf[10] === digito2;
    }
}
GeradoresCPF.TAMANHO_CPF = 11;
GeradoresCPF.PESO_MAXIMO_DIGITO1 = 10;
GeradoresCPF.PESO_MAXIMO_DIGITO2 = 11;
export { GeradoresCPF };
