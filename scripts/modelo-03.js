/*
Uma loja de roupas está fazendo uma promoção nas camisetas para o final de semana.
Eles têm os seguintes preços para as camisetas do estoque (em reais):

[25.99, 32.50, 45.00, 20.00, 55.90, 38.75, 15.25]

A gerente da loja quer destacar as camisetas mais baratas (abaixo de 30 reais)
em uma arara especial na entrada da loja para atrair os clientes.
Crie um programa que:
1. Mostre todos os preços em formato de tabela
2. Crie um novo array apenas com as camisetas que custam menos de 30 reais
3. Mostre quantas camisetas serão colocadas na arara especial (abaixo de 30 reais)
4. Calcule quanto um cliente economizaria se comprasse todas as camisetas da
   arara especial em vez das camisetas mais caras
*/

const precoCamisetas=[25.99, 32.50, 45.00, 20.00, 55.90, 38.75, 15.25]

console.table(precoCamisetas)

let novoArray= []

let contadorCamisetasBaratas=0;

let precoTotalCamisetasCaras=0;

let precoTotalCamisetasBaratas=0;

for (let i = 0; i < precoCamisetas.length; i ++){
    if (precoCamisetas[i] < 30){
        novoArray[novoArray.length ] = precoCamisetas[i]
        contadorCamisetasBaratas++
        precoTotalCamisetasBaratas+= precoCamisetas
    }else{
       precoTotalCamisetasCaras +=precoCamisetas[I]
    }
}
console.table(novoArray)
console.log(`quantidade de camisetas na arara: ${contadorCamisetasBaratas}`);
console.log(`A economia foi de R$:${precoTotalCamisetasBaratas - precoTotalCamisetasBaratas.toFixed[2]} `);

