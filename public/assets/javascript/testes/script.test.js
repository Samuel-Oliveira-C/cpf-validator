import { GeradoresCPF } from "../script";
function validarCPFExterno(cpf) {
    const cpfNumeros = cpf.split('').map(Number);
    if (new Set(cpfNumeros).size === 1) {
        return false;
    }
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += cpfNumeros[i] * (10 - i);
    }
    let digito1 = 11 - (soma % 11);
    if (digito1 > 9)
        digito1 = 0;
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += cpfNumeros[i] * (11 - i);
    }
    let digito2 = 11 - (soma % 11);
    if (digito2 > 9)
        digito2 = 0;
    return (cpfNumeros[9] === digito1 && cpfNumeros[10] === digito2);
}
describe('GeradoresCPF', () => {
    let gerador;
    beforeEach(() => {
        gerador = new GeradoresCPF();
    });
    describe('gerarCPFValido', () => {
        it('deve gerar um CPF válido', () => {
            const cpf = gerador.gerarCPFValido();
            expect(validarCPFExterno(cpf)).toBe(true);
        });
        it('deve gerar CPFs únicos', () => {
            const cpf1 = gerador.gerarCPFValido();
            const cpf2 = gerador.gerarCPFValido();
            expect(cpf1).not.toBe(cpf2);
        });
        it('deve gerar CPFs com 11 dígitos', () => {
            const cpf = gerador.gerarCPFValido();
            expect(cpf).toHaveLength(11);
        });
    });
    describe('gerarCPFNaoValido', () => {
        it('deve gerar um CPF inválido', () => {
            const cpf = gerador.gerarCPFNaoValido();
            expect(validarCPFExterno(cpf)).toBe(false);
        });
        it('deve gerar CPFs inválidos únicos', () => {
            const cpf1 = gerador.gerarCPFNaoValido();
            const cpf2 = gerador.gerarCPFNaoValido();
            expect(cpf1).not.toBe(cpf2);
        });
        it('deve gerar CPFs inválidos com 11 dígitos', () => {
            const cpf = gerador.gerarCPFNaoValido();
            expect(cpf).toHaveLength(11);
        });
    });
    describe("Teste de Performance", () => {
        it('deve gerar CPFs válidos de forma eficiente', () => {
            const startTime = Date.now();
            for (let i = 0; i < 1000; i++) {
                const cpf = gerador.gerarCPFValido();
                expect(validarCPFExterno(cpf)).toBe(true);
            }
            const endTime = Date.now();
            const duration = endTime - startTime;
            console.log(`Tempo para gerar 1000 CPFs válidos: ${duration} ms`);
            expect(duration).toBeLessThan(5000);
        });
        it('deve gerar CPFs não válidos de forma eficiente', () => {
            const startTime = Date.now();
            for (let i = 0; i < 1000; i++) {
                const cpf = gerador.gerarCPFNaoValido();
                expect(validarCPFExterno(cpf)).toBe(false);
            }
            const endTime = Date.now();
            const duration = endTime - startTime;
            console.log(`Tempo para gerar 1000 CPFs não válidos: ${duration} ms`);
            expect(duration).toBeLessThan(5000);
        });
    });
});
