console . log ( "***** Resultados obtidos pelos atletas *****" ) ;

// Entradas

deixe  atletas  =  [
  {
    nome : "Cesar Abascal" ,
    notas : [ 10 ,  9,34 ,  8,42 ,  10 ,  7,88 ] ,
  } ,
  {
    nome : "Fernando Puntel" ,
    notas : [ 8 ,  10 ,  10 ,  7 ,  9,33 ] ,
  } ,
  {
    nome : "Daiane Jelinsky" ,
    notas : [ 7 ,  10 ,  9,5 ,  9,5 ,  8 ] ,
  } ,
  {
    nome : "Bruno Castro" ,
    notas : [ 10 ,  10 ,  10 ,  9 ,  9,5 ] ,
  } ,
] ;

// Correr para a matriz

atletas . forEach ( função ( ginasta ) {
    deixe  nomes  =  ginasta . nome
    console . log ( "\nAtleta: "  +  nomes ) ;

    deixe  notas  =  ginasta . notas . organizar ( )
    console . log ( "Notas obtidas: "  +  notas ) ;

    // Descartar a menor e a maior nota

    deixe  notasAComputar  =  ginasta . notas
    notasAComputar . sort ( function ( a , b ) {
        se ( a  >  b )  {
            retornar  1 ;
        }
        se ( a  <  b )  {
            retornar  -   1 ;
        }
        outro  {
            retornar  0 ;
        }
    } ) ;

    deixe  notasComputadas  =  notasAComputar . slice ( 1 , 4 ) ;

    // Fazer a média das notas

    deixe  soma  =  0 ;
    deixe  media  =  0 ;
    notasComputadas . forEach ( função ( notas ) {
        soma  =  soma  +  notas ;

        media  =  soma  /  notasComputadas . length
        retornar  mídia ;
    } ) ;

    console . log ( "Mídia válida: "  +  media ) ;
} ) ;
<br>

<!DOCTYPE html>
    <html lang="pt-br">
        <head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./css/styles.css">  
    <title>Primeiro projeto de certificacao</title>

        </head>

    <body>
        <h1>
        **** Dados dos atletas ****        
        </h1>
</body>

<script src="./.js/index.js"></script>

</html>
<h1>
     <h3>
        <p>
            Aplicacao para receber o nome e as notas dos atletas, calcular a media e apresentar o resultado ao usuario.
            <br>
            Aplicacao para receber os dados dos atletas.
        </p>
    </h3> 
</h1>

    <document class="write"></document>

	<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">

		<h2>Calculadora BASICA</h2>

            

		Valor 1: <input id="dvInput1" type="number" placeholder="0"><br><br>
		Valor 2: <input id="dvInput2" type="number" placeholder="0"><br><br>

	    Operacao:

		<button type="button" onclick="dvCalcular(OPERACAO_SOMA)">+</button>&nbsp;
            
		<button type="button" onclick="dvCalcular(OPERACAO_SUBTRACAO)">-</button>&nbsp;

		<button type="button" onclick="dvCalcular(OPERACAO_MULTIPLICACAO)">*</button>&nbsp;

		<button type="button" onclick="dvCalcular(OPERACAO_DIVISAO)">/</button><br><br>

		Resultado: 
        
        <span id="dvResultadoCalculo" style="border: solid 1px #aaa; padding:3px;">0</span>

	</div>
    
<br>
