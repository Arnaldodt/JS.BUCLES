function NumerosImpares(){
    console.log('1.- Imprimir impares 1-20');
    for (var i=1 ; i<=20 ; i++){
        if (i%2!=0){
            console.log(i);
        }
    }
}
NumerosImpares();

function Multiplos3(){
    console.log('2.- Disminuir múltiplos de 3');
    for (var i=100 ; i>=0 ; i--){
        if (i%3==0){
            console.log(i);
        }
    }
}
Multiplos3();

function ImprimeSecuencia(){
    console.log('3.- Imprime la secuencia');
    for (var i=4 ; i>=-4 ; i-=1.5){
        console.log(i);
    }
}
ImprimeSecuencia();

function Sigma(){
    console.log('4.- Sigma');
    var sum=0;
    for (var i=1 ; i<=100 ; i++){
        sum +=i;
    }
    console.log(sum);
}
Sigma();

function Factorial(){
    console.log('5.- Factorial');
    var mul=1;
    for (var i=1 ; i<=12 ; i++){
        mul *=i;
    }
    console.log(mul);
}
Factorial();