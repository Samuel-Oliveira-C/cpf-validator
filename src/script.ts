public geradorValidoCPF():number{
    constructor(){

    }
    let acumuladorDigito1:number  = 0; 
    let acumuladorDigito2:number = 0;
    let numbers: number[] = this.randomNubers();   //esse metodo deve gerar numeros no range de 0 a 9 e deve retornar um array

    acumuladorDigito1 = this.acumuladorDigito1(numbers);


    let resultadoDigito1:number = acumuladorDigito1 % 11;
    let resultadoDigito2:number = acumuladorDigito2 % 11;

    if(resultadoDigito1 === 10 && resultadoDigito2 === 10){
        resultadoDigito1 = 0;
        resultadoDigito2 = 0;
    }
    else if(resultadoDigito1 === 10){
        resultadoDigito1 = 0;
    }
    else{
        resultadoDigito2 = 0
    }

    //verificar se é verdadeiro
    if(resultadoDigito1 === numbers[09] && resultadoDigito2 === numbers[10]){
        return 1 // verdadeiro
    }
    else{
        return 0;   //falso
    }
}