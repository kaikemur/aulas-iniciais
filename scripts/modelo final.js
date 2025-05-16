/*
Você conseguiu um estágio na equipe de marketing de uma loja de aplicativos para celular
e seu primeiro trabalho é analisar os dados dos 10 aplicativos mais baixados do mês.

Os dados são:
Nomes: ["TikTok", "Instagram", "WhatsApp", "Snapchat", "Spotify", "Netflix", "YouTube", "VSCO", "BeReal", "Uber"]
Downloads (em milhões): [2.5, 2.2, 1.8, 1.5, 1.3, 1.2, 1.1, 0.9, 0.8, 0.7]
Avaliações (de 1 a 5 estrelas): [4.7, 4.8, 4.5, 3.9, 4.6, 4.3, 4.9, 4.2, 3.8, 4.1]
Categorias: ["Social", "Social", "Comunicação", "Social", "Música", "Streaming", "Vídeo", "Foto", "Social", "Transporte"]
Seu gerente quer um relatório detalhado com as seguintes informações:

1. Mostre todos os dados em formato de tabela (nome, downloads, avaliação e categoria)
2. Encontre o aplicativo com maior número de downloads e sua categoria
3. Encontre o aplicativo com a melhor avaliação e sua categoria
4. Calcule a média de downloads dos aplicativos
5. Crie um novo array apenas com os nomes dos aplicativos que têm avaliação maior que 4.5
6. Calcule o total de downloads de todos os aplicativos da categoria "Social"
7. Verifique qual categoria tem mais aplicativos 

Esta análise será apresentada na reunião de marketing na próxima semana e ajudará
a definir as estratégias de promoção da loja.*/

const apps = [
"TikTok", "Instagram", "WhatsApp", "Snapchat","Spotify", "Netflix","YouTube", "VSCO", "BeReal", "Uber"]

const downloads =  [2.5, 2.2, 1.8, 1.5, 1.3, 1.2, 1.1, 0.9, 0.8, 0.7]

const avaliacoes=[4.7, 4.8, 4.5, 3.9, 4.6, 4.3, 4.9, 4.2, 3.8, 4.1]

const categorias= [
"Social","Social","Comunicação","Social", "Música", "Streaming",  "Vídeo","Foto","Social","Transporte"]

 let maioNumeroDowloads=0
 let categoriaMaiorDowload
 let aplicativoMaiorDowloads=0
 
 let maiorAvaliacao = avaliacoes[0];
 let categoriaMaioravaliacao=categorias[0]
 let aplicativoMaiorAvaliacao=apps

 let somaTotalDowloads=0;
 let mediaDowloads= 0;

 let novoArrai=[]
 let contadorNovoArray=0;
 let tDowloads=0;

 let categoriaMaisApps=""
 let maiorContagem = 0;


 for (let i =0; i < categorias.length;i++){
    if (downloads[i] > maioNumeroDowloads) {
        maioNumeroDowloads=downloads[i]
        categoriaMaiorDowloads=categorias[i]

    }
    if (avaliacoes[i] > maiorAvaliacao) {
        maiorAvaliacao=avaliacoes[i]
        categoriaMaiorDowload=categorias[i]
        aplicativoMaiorAvaliacao = apps[i]
    }
    somaTotalDowloads += downloads[i]
    if (categorias[i]=="Social"){
        tDowloads+=downloads[i]
    }

    if (avaliacoes > 4.5) {
        novoArray[contadorNovoArray]=apps[i]
        contadorNovoArray++;

        if (categorias[i]=="social"){
            somaTotalDowloads+=downloads[i]
    }
    if (condition) {
        
    }
 }
 

 mediaDowloads = somaTotalDowloads / downloads.length

 //console.table(apps)
 //console.table(downloads)
 //console.table(avaliacoes)
 // console.table(Categorias)

console.log(`o aplicativo com maior numero de dowloads e ${maioNumeroDowloads} da categoria ${categoriaMaiorDowloads}`)

console.log(`o aplicativo com o maior numero de avaliações e :${aplicativoMaiorAvaliacao} da categoria ${categoriaMaiorDowload}`);

console.log(`a media de dowloads e:${mediaDowloads}`);

console.log(`Os aplicativos com mais que 4.5 estrelas de avaliação são ${novoArrai}`);

console.log(`a soma dos dowloads dos apps com da categoria social e ${tDowloads} milhoes `);





