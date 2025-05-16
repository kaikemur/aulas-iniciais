//atividade 15
let number = 5
let divisao = number / 2

Number.isInteger (divisao)
if (Number.isInteger (divisao))
    console.log ("esse numero é par")
else console.log ("esse numero é impar")

number = 13
divisao = number / 2
Number.isInteger (divisao)
if (Number.isInteger (divisao))
    console.log ("esse numero é par")
else console.log ("esse numero é impar")

number= 18
divisao = number / 2
Number.isInteger (divisao)
if (Number.isInteger (divisao))
    console.log ("esse numero é par")
else console.log ("esse numero é impar")

number= 35
divisao = number / 2
Number.isInteger (divisao)
if (Number.isInteger (divisao))
    console.log ("esse numero é par")
else console.log ("esse numero é impar")

number =10
divisao = number / 2
Number.isInteger (divisao)
if (Number.isInteger (divisao))
    console.log ("esse numero é par")
else console.log ("esse numero é impar")
 

number=1
divisao = number / 2
Number.isInteger (divisao)
if (Number.isInteger (divisao))
    console.log ("esse numero é par")
else console.log ("esse numero é impar")


//atividade 16
let produto1
let produto2

produto1 = 1000
produto2 = 980

if (produto1 < produto2)
    console.log(`O produto1 tem o melhor custo beneficio`)
else if (produto1 > produto2)
console.log (`O produto2 tem o melhor custo beneficio`)
else console.log (`Os dois produtos tem o mesmo custo beneficio`)

//atividade 17
let lado1
let lado2
let lado3
let soma

lado1 = 20
lado2 = 23
lado3 = 22

soma = lado1 + lado2 + lado3
console.log(`O perimetro desse triangulo é de: ${soma}cm`)

//atividade 18

let distancia
let velocidade
let tempo

distancia= 1000
velocidade= 50
tempo = distancia / velocidade
console.log(`voce ira chegar neste local em ${tempo}h`)

//atividade 19

let numero = 20

console.log(`o numero sorteado foi ${numero}`)
//atividade 20

let nota1
let nota2
let nota3

nota = 10
nota2 = 6
nota3 = 5

if (nota <3)
    console.log ("sua nota é F")
else if (nota <5)
    console.log ("Sua nota é D")
else if (nota <7)
    console.log ("Sua nota é C")
else if (nota <8)
    console.log ("Sua nota é B")
else
console.log ("Sua nota é A")


if (nota2 <3)
    console.log ("sua nota é F")
else if (nota2 <5)
    console.log ("Sua nota é D")
else if (nota2 <7)
    console.log ("Sua nota é C")
else if (nota2 <8)
    console.log ("Sua nota é B")
else
console.log ("Sua nota é A")

if (nota3 <3)
    console.log ("sua nota é F")
else if (nota3 <5)
    console.log ("Sua nota é D")
else if (nota3 <7)
    console.log ("Sua nota é C")
else if (nota3 <8)
    console.log ("Sua nota é B")
else
console.log ("Sua nota é A")
//atividade 21
let numero1=5
let fatorial= 1

fatorial *= numero1 
fatorial *= numero1 - 1;
fatorial *= numero1 - 2;
fatorial *= numero1 - 3;
fatorial *= numero1 - 4;
console.log(`o fatorial de ${numero1} é ${fatorial}`);
//atividade 22
let numimparPar= 3
let divi = numimparPar %2
if (divi % 2 == 0) 
 console.log(` o numero ${numimparPar} e par`);
    
 else console.log(`o numero ${numimparPar} e impar`);
 
  numimparPar= 6
  divi = numimparPar %2
 if (divi % 2 == 0) 
  console.log(` o numero ${numimparPar} e par`);
     
  else console.log(`o numero ${numimparPar} e impar`);

  //atividade 23

let nuca
let tot
nuca = [2,5,0,4]
tot = 0
for (let i = 0; i < nuca.length; i++ ) {tot += nuca [i];}
console.log(tot);

//atividade 25
let valor= 2
let peso= valor *3
let valor1= 3
let peso1= valor1 *2
let media= peso + peso1
let peso3=8
let verifi=media /8
 
console.log(`a sua media poderada è ${verifi} ` ) 

//atividade 26
let entrada= 7
let saida = 17 
let cargohoraria = (saida - entrada)

console.log(`sua carga horaria de trabalho e de ${cargohoraria} horas por dia`);

//atividade 27

let conta =730
let pessoas= 4
let pago = (conta /pessoas)
console.log(`cada pessoa tera de pagar ${pago} reais`);

//atividade 28
let umdolar =5.77
let real= 200
let dolar = (real /umdolar)
console.log(`voce tem ${dolar}`);
