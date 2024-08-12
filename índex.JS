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