var pistaLetra;
var idBoton;
$(".buttonReset").on('click',function(e){
    e.preventDefault();
    resetGame();
    
});
$(".pista").on('click',function(e){
    e.preventDefault();
    idBoton = $(this).attr('id');
    showPista();

});
$(".equis").on('click',function(){
    $(".bgpopup").fadeOut();
    $(".popup").empty();
});
$('.bgpopup').on('click', function(e) {
    if (e.target !== this){
        return;
    }
      $(".bgpopup").fadeOut();
      $(".popup").empty();
  });

function showPista(){
    var pistaContenido;
    $(".bgpopup").fadeIn();

    switch (idBoton) {
        case 'pistaA':
            pistaLetra = "A";
            break;
        case 'pistaB':
            pistaLetra = "B";
            break;
        case 'pistaC':
            pistaLetra = "C";
            break;
        case 'pistaD':
            pistaLetra = "D";
            break;
        case 'pistaE':
            pistaLetra = "E";
            break;
        case 'pistaF':
            pistaLetra = "F";
            break;
        case 'pistaG':
            pistaLetra = "G";
            break;
        case 'pistaH':
            pistaLetra = "H";
            break;
        case 'pistaI':
            pistaLetra = "I";
            break;
        case 'pistaJ':
            pistaLetra = "J";
            break;
        case 'pistaK':
            pistaLetra = "K";
            break;
        case 'pistaL':
            pistaLetra = "L";
            break;
        case 'pistaM':
            pistaLetra = "M";
            break;
        case 'pistaN':
            pistaLetra = "N";
            break;
        case 'pistaO':
            pistaLetra = "O";
            break;
        case 'pistaP':
            pistaLetra = "P";
            break;
        case 'pistaQ':
            pistaLetra = "Q";
            break;
        case 'pistaR':
            pistaLetra = "R";
            break;
        case 'pistaS':
            pistaLetra = "S";
            break;
        case 'pistaT':
            pistaLetra = "T";
            break;
        case 'pistaU':
            pistaLetra = "U";
            break;
        case 'pistaV':
            pistaLetra = "V";
            break;
        case 'pistaW':
            pistaLetra = "W";
            break;
        case 'pistaX':
            pistaLetra = "X";
            break;
        case 'pistaY':
            pistaLetra = "Y";
            break;
        default:
          console.log('Error');
    }

    switch (pistaLetra) {
        case 'A':
            pistaContenido = `<span>Arcabuz</span>`;
            break;
        case 'B':
            pistaContenido = `<span>Fruto tropical</span>`;
            break;
        case 'C':
            pistaContenido = `<img src="img/imgC.jpg" />`;
            break;
        case 'D':
            pistaContenido = `<img src="img/imgD.jpg" /><span>Cap. del antiguo Egipto</span>`;
            break;
        case 'E':
            pistaContenido = `<span>Añadiduras</span>`;
            break;
        case 'F':
            pistaContenido = `<span>Mariscal de Napoleón</span>`;
            break;
        case 'G':
            pistaContenido = `<span>Momento actual</span>`;
            break;
        case 'H':
            pistaContenido = `<span>Ataque en esgrima</span>`;
            break;
        case 'I':
            pistaContenido = `<span>Embalse</span>`;
            break;
        case 'J':
            pistaContenido = `<span>Rojo (ing.)</span>`;
            break;
        case 'K':
            pistaContenido = `<span>Pieza de ajedrez</span>`;
            break;
        case 'L':
            pistaContenido = `<span>Ansar, ánade</span>`;
            break;
        case 'M':
            pistaContenido = `<span>Soberano, musulmán</span>`;
            break;
        case 'N':
            pistaContenido = `<span>Presilla</span>`;
            break;
        case 'O':
            pistaContenido = `<span>Inicio en juego de pelota</span>`;
            break;
        case 'P':
            pistaContenido = `<span>Barra entre dos ruedas</span>`;
            break;
        case 'Q':
            pistaContenido = `<img src="img/imgQ.jpg" />`;
            break;
        case 'R':
            pistaContenido = `<span>Invariable, fijo</span>`;
            break;
        case 'S':
            pistaContenido = `<img src="img/imgS.jpg" />`;
            break;
        case 'T':
            pistaContenido = `<img src="img/imgT.jpg" />`;
            break;
        case 'U':
            pistaContenido = `<span>Campeón deportivo</span>`;
            break;
        case 'V':
            pistaContenido = `<span>Pozo de curtir cueros</span>`;
            break;
        case 'W':
            pistaContenido = `<span>Insecticida</span>`;
            break;
        case 'X':
            pistaContenido = `<span>Yo (latín)</span>`;
            break;
        case 'Y':
            pistaContenido = `<img src="img/imgY.jpg" />`;
            break;
        
        
        default:
          console.log('Error');
      }
    $(".popup").append(pistaContenido)
}

function pistaA(){
    var espacio1 = $("#45").val();
    var espacio2 = $("#25").val();
    var espacio3 = $("#80").val();
    var espacio4 = $("#48").val();
    var espacio5 = $("#60").val();
    var espacio6 = $("#105").val();
    var espacio7 = $("#1").val();
    var espacio8 = $("#95").val();
    var input = $(".inputA").val();

    if (espacio1 == 'M' || espacio1 == 'm' &&
        espacio2 == 'O' || espacio2 == 'o' &&
        espacio3 == 'S' || espacio3 == 's' &&
        espacio4 == 'Q' || espacio4 == 'q' &&
        espacio5 == 'U' || espacio5 == 'u' &&
        espacio6 == 'E' || espacio6 == 'e' &&
        espacio7 == 'T' || espacio7 == 't' &&
        espacio8 == 'E' || espacio8 == 'e'){
            $(".inputA").addClass('aprobado');
            $(".inputA").trigger( "blur" );
    }

   
}
function pistaB(){
    var espacio1 = $("#20").val();
    var espacio2 = $("#103").val();
    var espacio3 = $("#49").val();
    var espacio4 = $("#71").val();
    var espacio5 = $("#34").val();
    var espacio6 = $("#85").val();

    if (espacio1 == 'A' || espacio1 == 'a' &&
        espacio2 == 'G' || espacio2 == 'g' &&
        espacio3 == 'U' || espacio3 == 'u' &&
        espacio4 == 'A' || espacio4 == 'a' &&
        espacio5 == 'J' || espacio5 == 'j' &&
        espacio6 == 'E' || espacio6 == 'e'){
            $(".inputB").addClass('aprobado');
            $(".inputB").trigger( "blur" );
    }
}
function pistaC(){
    var espacio1 = $("#96").val();
    var espacio2 = $("#67").val();
    var espacio3 = $("#12").val();
    var espacio4 = $("#82").val();
    var espacio5 = $("#115").val();
    var espacio6 = $("#53").val();
    var espacio7 = $("#104").val();
    var espacio8 = $("#19").val();

    if (espacio1 == 'R' || espacio1 == 'r' &&
        espacio2 == 'E' || espacio2 == 'e' &&
        espacio3 == 'M' || espacio3 == 'm' &&
        espacio4 == 'A' || espacio4 == 'a' &&
        espacio5 == 'R' || espacio5 == 'r' &&
        espacio6 == 'Q' || espacio6 == 'q' &&
        espacio7 == 'U' || espacio7 == 'u' &&
        espacio8 == 'E' || espacio8 == 'e'){
            $(".inputC").addClass('aprobado');
            $(".inputC").trigger( "blur" );
    }
}
function pistaD(){
    var espacio1 = $("#97").val();
    var espacio2 = $("#57").val();
    var espacio3 = $("#21").val();
    var espacio4 = $("#65").val();
    var espacio5 = $("#42").val();

    if (espacio1 == 'T' || espacio1 == 't' &&
        espacio2 == 'E' || espacio2 == 'e' &&
        espacio3 == 'B' || espacio3 == 'b' &&
        espacio4 == 'A' || espacio4 == 'a' &&
        espacio5 == 'S' || espacio5 == 's'){
            $(".inputD").addClass('aprobado');
            $(".inputD").trigger( "blur" );
    }
}
function pistaE(){
    var espacio1 = $("#10").val();
    var espacio2 = $("#81").val();
    var espacio3 = $("#98").val();
    var espacio4 = $("#93").val();
    var espacio5 = $("#7").val();

    if (espacio1 == 'I' || espacio1 == 'i' &&
        espacio2 == 'T' || espacio2 == 't' &&
        espacio3 == 'E' || espacio3 == 'e' &&
        espacio4 == 'M' || espacio4 == 'm' &&
        espacio5 == 'S' || espacio5 == 's'){
            $(".inputE").addClass('aprobado');
            $(".inputE").trigger( "blur" );
    }
}
function pistaF(){
    var espacio1 = $("#108").val();
    var espacio2 = $("#38").val();
    var espacio3 = $("#58").val();

    if (espacio1 == 'N' || espacio1 == 'n' &&
        espacio2 == 'E' || espacio2 == 'e' &&
        espacio3 == 'Y' || espacio3 == 'y' ){
            $(".inputF").addClass('aprobado');
            $(".inputF").trigger( "blur" );
    }
}
function pistaG(){
    var espacio1 = $("#118").val();
    var espacio2 = $("#100").val();
    var espacio3 = $("#43").val();
    var espacio4 = $("#78").val();
    var espacio5 = $("#2").val();

    if (espacio1 == 'F' || espacio1 == 'f' &&
        espacio2 == 'E' || espacio2 == 'e' &&
        espacio3 == 'C' || espacio3 == 'c' &&
        espacio4 == 'H' || espacio4 == 'h' &&
        espacio5 == 'A' || espacio5 == 'a' ){
            $(".inputG").addClass('aprobado');
            $(".inputG").trigger( "blur" )
    }
}
function pistaH(){
    var espacio1 = $("#63").val();
    var espacio2 = $("#24").val();
    var espacio3 = $("#41").val();

    if (espacio1 == 'I' || espacio1 == 'i' &&
        espacio2 == 'D' || espacio2 == 'd' &&
        espacio3 == 'A' || espacio3 == 'a' ){
            $(".inputH").addClass('aprobado');
            $(".inputH").trigger( "blur" )
    }
}
function pistaI(){
    var espacio1 = $("#116").val();
    var espacio2 = $("#72").val();
    var espacio3 = $("#70").val();
    var espacio4 = $("#11").val();
    var espacio5 = $("#88").val();
    var espacio6 = $("#36").val();
    var espacio7 = $("#94").val();
    var espacio8 = $("#109").val();

    if (espacio1 == 'E' || espacio1 == 'e' &&
        espacio2 == 'S' || espacio2 == 's' &&
        espacio3 == 'T' || espacio3 == 't' &&
        espacio4 == 'A' || espacio4 == 'a' &&
        espacio5 == 'N' || espacio5 == 'n' &&
        espacio6 == 'Q' || espacio6 == 'q' &&
        espacio7 == 'U' || espacio7 == 'u' &&
        espacio8 == 'E' || espacio8 == 'e' ){
            $(".inputI").addClass('aprobado');
            $(".inputI").trigger( "blur" )
    }
}
function pistaJ(){
    var espacio1 = $("#102").val();
    var espacio2 = $("#46").val();
    var espacio3 = $("#66").val();

    if (espacio1 == 'R' || espacio1 == 'r' &&
        espacio2 == 'E' || espacio2 == 'e' &&
        espacio3 == 'D' || espacio3 == 'd'  ){
            $(".inputJ").addClass('aprobado');
            $(".inputJ").trigger( "blur" )
    }
}
function pistaK(){
    var espacio1 = $("#75").val();
    var espacio2 = $("#5").val();
    var espacio3 = $("#47").val();

    if (espacio1 == 'R' || espacio1 == 'r' &&
        espacio2 == 'E' || espacio2 == 'e' &&
        espacio3 == 'Y' || espacio3 == 'y'  ){
            $(".inputK").addClass('aprobado');
            $(".inputK").trigger( "blur" );
    }
}
function pistaL(){
    var espacio1 = $("#15").val();
    var espacio2 = $("#106").val();
    var espacio3 = $("#90").val();

    if (espacio1 == 'O' || espacio1 == 'o' &&
        espacio2 == 'C' || espacio2 == 'c' &&
        espacio3 == 'A' || espacio3 == 'a'  ){
            $(".inputL").addClass('aprobado');
            $(".inputL").trigger( "blur" );
    }
}
function pistaM(){
    var espacio1 = $("#117").val();
    var espacio2 = $("#61").val();
    var espacio3 = $("#17").val();
    var espacio4 = $("#54").val();
    var espacio5 = $("#74").val();

    if (espacio1 == 'J' || espacio1 == 'j' &&
        espacio2 == 'E' || espacio2 == 'e' &&
        espacio3 == 'Q' || espacio3 == 'q' &&
        espacio4 == 'U' || espacio4 == 'u' &&
        espacio5 == 'E' || espacio5 == 'e'  ){
            $(".inputM").addClass('aprobado');
            $(".inputM").trigger( "blur" );
    }
}
function pistaN(){
    var espacio1 = $("#29").val();
    var espacio2 = $("#56").val();
    var espacio3 = $("#92").val();
    var espacio4 = $("#3").val();

    if (espacio1 == 'O' || espacio1 == 'o' &&
        espacio2 == 'J' || espacio2 == 'j' &&
        espacio3 == 'A' || espacio3 == 'a' &&
        espacio4 == 'L' || espacio4 == 'l'  ){
            $(".inputN").addClass('aprobado');
            $(".inputN").trigger( "blur" );
    }
}
function pistaO(){
    var espacio1 = $("#51").val();
    var espacio2 = $("#79").val();
    var espacio3 = $("#83").val();
    var espacio4 = $("#37").val();
    var espacio5 = $("#13").val();

    if (espacio1 == 'S' || espacio1 == 's' &&
        espacio2 == 'A' || espacio2 == 'a' &&
        espacio3 == 'Q' || espacio3 == 'q' &&
        espacio4 == 'U' || espacio4 == 'u' &&
        espacio5 == 'E' || espacio5 == 'e'  ){
            $(".inputO").addClass('aprobado');
            $(".inputO").trigger( "blur" );
    }
}
function pistaP(){
    var espacio1 = $("#112").val();
    var espacio2 = $("#14").val();
    var espacio3 = $("#50").val();

    if (espacio1 == 'E' || espacio1 == 'e' &&
        espacio2 == 'J' || espacio2 == 'j' &&
        espacio3 == 'E' || espacio3 == 'e' ){
            $(".inputP").addClass('aprobado');
            $(".inputP").trigger( "blur" );
    }
}
function pistaQ(){
    var espacio1 = $("#113").val();
    var espacio2 = $("#55").val();
    var espacio3 = $("#64").val();
    var espacio4 = $("#8").val();
    var espacio5 = $("#30").val();

    if (espacio1 == 'H' || espacio1 == 'h' &&
        espacio2 == 'E' || espacio2 == 'e' &&
        espacio3 == 'G' || espacio3 == 'g' &&
        espacio4 == 'E' || espacio4 == 'e' &&
        espacio5 == 'L' || espacio5 == 'l' ){
            $(".inputQ").addClass('aprobado');
            $(".inputQ").trigger( "blur" );
    }
}
function pistaR(){
    var espacio1 = $("#87").val();
    var espacio2 = $("#110").val();
    var espacio3 = $("#76").val();
    var espacio4 = $("#27").val();
    var espacio5 = $("#39").val();
    var espacio6 = $("#91").val();
    var espacio7 = $("#114").val();

    if (espacio1 == 'E' || espacio1 == 'e' &&
        espacio2 == 'S' || espacio2 == 's' &&
        espacio3 == 'T' || espacio3 == 't' &&
        espacio4 == 'A' || espacio4 == 'a' &&
        espacio5 == 'B' || espacio5 == 'b' &&
        espacio6 == 'L' || espacio6 == 'l' &&
        espacio7 == 'E' || espacio7 == 'e' ){
            $(".inputR").addClass('aprobado');
            $(".inputR").trigger( "blur" );
    }
}
function pistaS(){
    var espacio1 = $("#9").val();
    var espacio2 = $("#101").val();
    var espacio3 = $("#4").val();
    var espacio4 = $("#68").val();
    var espacio5 = $("#40").val();

    if (espacio1 == 'R' || espacio1 == 'r' &&
        espacio2 == 'A' || espacio2 == 'a' &&
        espacio3 == 'V' || espacio3 == 'v' &&
        espacio4 == 'E' || espacio4 == 'e' &&
        espacio5 == 'L' || espacio5 == 'l' ){
            $(".inputS").addClass('aprobado');
            $(".inputS").trigger( "blur" );
    }
}
function pistaT(){
    var espacio1 = $("#26").val();
    var espacio2 = $("#84").val();
    var espacio3 = $("#16").val();
    var espacio4 = $("#77").val();
    var espacio5 = $("#99").val();
    var espacio6 = $("#35").val();
    var espacio7 = $("#86").val();

    if (espacio1 == 'N' || espacio1 == 'n' &&
        espacio2 == 'U' || espacio2 == 'u' &&
        espacio3 == 'R' || espacio3 == 'r' &&
        espacio4 == 'E' || espacio4 == 'e' &&
        espacio5 == 'Y' || espacio5 == 'y' &&
        espacio6 == 'E' || espacio6 == 'e' &&
        espacio7 == 'V' || espacio7 == 'v' ){
            $(".inputT").addClass('aprobado');
            $(".inputT").trigger( "blur" );
    }
}
function pistaU(){
    var espacio1 = $("#22").val();
    var espacio2 = $("#69").val();

    if (espacio1 == 'A' || espacio1 == 'a' &&
        espacio2 == 'S' || espacio2 == 's' ){
            $(".inputU").addClass('aprobado');
            $(".inputU").trigger( "blur" );
    }
}
function pistaV(){
    var espacio1 = $("#23").val();
    var espacio2 = $("#31").val();
    var espacio3 = $("#59").val();
    var espacio4 = $("#73").val();
    var espacio5 = $("#52").val();

    if (espacio1 == 'N' || espacio1 == 'n' &&
        espacio2 == 'O' || espacio2 == 'o' &&
        espacio3 == 'Q' || espacio3 == 'q' &&
        espacio4 == 'U' || espacio4 == 'u' &&
        espacio5 == 'E' || espacio5 == 'e'  ){
            $(".inputV").addClass('aprobado');
            $(".inputV").trigger( "blur" );
    }
}
function pistaW(){
    var espacio1 = $("#28").val();
    var espacio2 = $("#32").val();
    var espacio3 = $("#111").val();

    if (espacio1 == 'D' || espacio1 == 'd' &&
        espacio2 == 'D' || espacio2 == 'd' &&
        espacio3 == 'T' || espacio3 == 't'  ){
            $(".inputW").addClass('aprobado');
            $(".inputW").trigger( "blur" );
    }
}
function pistaX(){
    var espacio1 = $("#33").val();
    var espacio2 = $("#89").val();
    var espacio3 = $("#107").val();

    if (espacio1 == 'E' || espacio1 == 'e' &&
        espacio2 == 'G' || espacio2 == 'g' &&
        espacio3 == 'O' || espacio3 == 'o'  ){
            $(".inputX").addClass('aprobado');
            $(".inputX").trigger( "blur" );
    }
}
function pistaY(){
    var espacio1 = $("#6").val();
    var espacio2 = $("#44").val();
    var espacio3 = $("#18").val();
    var espacio4 = $("#62").val();

    if (espacio1 == 'Z' || espacio1 == 'z' &&
        espacio2 == 'E' || espacio2 == 'e' &&
        espacio3 == 'U' || espacio3 == 'u' &&
        espacio4 == 'S' || espacio4 == 's'  ){
            $(".inputY").addClass('aprobado');
            $(".inputY").trigger( "blur" );
    }
}
function cripto(){
    var espacio1 = $("#A1").val();
    var espacio2 = $("#G4").val();
    var espacio3 = $("#N3").val();
    var espacio4 = $("#S4").val();
    var espacio5 = $("#K5").val();
    var espacio6 = $("#Y6").val();
    var espacio7 = $("#E7").val();
    var espacio8 = $("#Q8").val();
    var espacio9 = $("#S9").val();
    var espacio10 = $("#E10").val();
    var espacio11 = $("#I11").val();
    var espacio12 = $("#C12").val();
    var espacio13 = $("#O13").val();
    var espacio14 = $("#P14").val();
    var espacio15 = $("#L15").val();
    var espacio16 = $("#T16").val();
    var espacio17 = $("#M17").val();
    var espacio18 = $("#Y18").val();
    var espacio19 = $("#C19").val();
    var espacio20 = $("#B20").val();
    var espacio21 = $("#D21").val();
    var espacio22 = $("#U22").val();
    var espacio23 = $("#V23").val();
    var espacio24 = $("#H24").val();
    var espacio25 = $("#A25").val();
    var espacio26 = $("#T26").val();
    var espacio27 = $("#R27").val();
    var espacio28 = $("#W28").val();
    var espacio29 = $("#N29").val();
    var espacio30 = $("#Q30").val();
    var espacio31 = $("#V31").val();
    var espacio32 = $("#W32").val();
    var espacio33 = $("#X33").val();
    var espacio34 = $("#B34").val();
    var espacio35 = $("#T35").val();
    var espacio36 = $("#I36").val();
    var espacio37 = $("#O37").val();
    var espacio38 = $("#F38").val();
    var espacio39 = $("#R39").val();
    var espacio40 = $("#S40").val();
    var espacio41 = $("#H41").val();
    var espacio42 = $("#D42").val();
    var espacio43 = $("#G43").val();
    var espacio44 = $("#Y44").val();
    var espacio45 = $("#A45").val();
    var espacio46 = $("#J46").val();
    var espacio47 = $("#K47").val();
    var espacio48 = $("#A48").val();
    var espacio49 = $("#U49").val();
    var espacio50 = $("#P50").val();
    var espacio51 = $("#O51").val();
    var espacio52 = $("#V52").val();
    var espacio53 = $("#C53").val();
    var espacio54 = $("#M54").val();
    var espacio55 = $("#Q55").val();
    var espacio56 = $("#N56").val();
    var espacio57 = $("#D57").val();
    var espacio58 = $("#F58").val();
    var espacio59 = $("#V59").val();
    var espacio60 = $("#A60").val();
    var espacio61 = $("#M61").val();
    var espacio62 = $("#Y62").val();
    var espacio63 = $("#H63").val();
    var espacio64 = $("#Q64").val();
    var espacio65 = $("#D65").val();
    var espacio66 = $("#J66").val();
    var espacio67 = $("#C67").val();
    var espacio68 = $("#S68").val();
    var espacio69 = $("#U69").val();
    var espacio70 = $("#I70").val();
    var espacio71 = $("#B71").val();
    var espacio72 = $("#I72").val();
    var espacio73 = $("#V73").val();
    var espacio74 = $("#M74").val();
    var espacio75 = $("#K75").val();
    var espacio76 = $("#R76").val();
    var espacio77 = $("#T77").val();
    var espacio78 = $("#G78").val();
    var espacio79 = $("#O79").val();
    var espacio80 = $("#A80").val();
    var espacio81 = $("#E81").val();
    var espacio82 = $("#C82").val();
    var espacio83 = $("#O83").val();
    var espacio84 = $("#T84").val();
    var espacio85 = $("#B85").val();
    var espacio86 = $("#T86").val();
    var espacio87 = $("#R87").val();
    var espacio88 = $("#I88").val();
    var espacio89 = $("#X89").val();
    var espacio90 = $("#L90").val();
    var espacio91 = $("#R91").val();
    var espacio92 = $("#N92").val();
    var espacio93 = $("#E93").val();
    var espacio94 = $("#I94").val();
    var espacio95 = $("#A95").val();
    var espacio96 = $("#C96").val();
    var espacio97 = $("#D97").val();
    var espacio98 = $("#E98").val();
    var espacio99 = $("#T99").val();
    var espacio100 = $("#G100").val();
    var espacio101 = $("#S101").val();
    var espacio102 = $("#J102").val();
    var espacio103 = $("#B103").val();
    var espacio104 = $("#C104").val();
    var espacio105 = $("#A105").val();
    var espacio106 = $("#L106").val();
    var espacio107 = $("#X107").val();
    var espacio108 = $("#F108").val();
    var espacio109 = $("#I109").val();
    var espacio110 = $("#R110").val();
    var espacio111 = $("#W111").val();
    var espacio112 = $("#P112").val();
    var espacio113 = $("#Q113").val();
    var espacio114 = $("#R114").val();
    var espacio115 = $("#C115").val();
    var espacio116 = $("#I116").val();
    var espacio117 = $("#M117").val();
    var espacio118 = $("#G118").val();

    if (espacio1 == 'T' || espacio1 == 't' &&
        espacio2 == 'A' || espacio2 == 'a' &&
        espacio3 == 'L' || espacio3 == 'l' &&
        espacio4 == 'V' || espacio4 == 'v' &&
        espacio5 == 'E' || espacio5 == 'e' &&
        espacio6 == 'Z' || espacio6 == 'z' &&
        espacio7 == 'S' || espacio7 == 's' &&
        espacio8 == 'E' || espacio8 == 'e' &&
        espacio9 == 'R' || espacio9 == 'r' &&
        espacio10 == 'I' || espacio10 == 'i' &&
        espacio11 == 'A' || espacio11 == 'a' &&
        espacio12 == 'M' || espacio12 == 'm' &&
        espacio13 == 'E' || espacio13 == 'e' &&
        espacio14 == 'J' || espacio14 == 'j' &&
        espacio15 == 'O' || espacio15 == 'o' &&
        espacio16 == 'R' || espacio16 == 'r' &&
        espacio17 == 'Q' || espacio17 == 'q' &&
        espacio18 == 'U' || espacio18 == 'u' &&
        espacio19 == 'E' || espacio19 == 'e' &&
        espacio20 == 'A' || espacio20 == 'a' &&
        espacio21 == 'B' || espacio21 == 'b' &&
        espacio22 == 'A' || espacio22 == 'a' &&
        espacio23 == 'N' || espacio23 == 'n' &&
        espacio24 == 'D' || espacio24 == 'd' &&
        espacio25 == 'O' || espacio25 == 'o' &&
        espacio26 == 'N' || espacio26 == 'n' &&
        espacio27 == 'A' || espacio27 == 'a' &&
        espacio28 == 'D' || espacio28 == 'd' &&
        espacio29 == 'O' || espacio29 == 'o' &&
        espacio30 == 'L' || espacio30 == 'l' &&
        espacio31 == 'O' || espacio31 == 'o' &&
        espacio32 == 'D' || espacio32 == 'd' &&
        espacio33 == 'E' || espacio33 == 'e' &&
        espacio34 == 'J' || espacio34 == 'j' &&
        espacio35 == 'E' || espacio35 == 'e' &&
        espacio36 == 'Q' || espacio36 == 'q' &&
        espacio37 == 'U' || espacio37 == 'u' &&
        espacio38 == 'E' || espacio38 == 'e' &&
        espacio39 == 'B' || espacio39 == 'b' &&
        espacio40 == 'L' || espacio40 == 'l' &&
        espacio41 == 'A' || espacio41 == 'a' &&
        espacio42 == 'S' || espacio42 == 's' &&
        espacio43 == 'F' || espacio43 == 'f' &&
        espacio44 == 'E' || espacio44 == 'e' &&
        espacio45 == 'M' || espacio45 == 'm' &&
        espacio46 == 'E' || espacio46 == 'e' &&
        espacio47 == 'Y' || espacio47 == 'y' &&
        espacio48 == 'Q' || espacio48 == 'q' &&
        espacio49 == 'U' || espacio49 == 'u' &&
        espacio50 == 'E' || espacio50 == 'e' &&
        espacio51 == 'S' || espacio51 == 's' &&
        espacio52 == 'E' || espacio52 == 'e' &&
        espacio53 == 'Q' || espacio53 == 'q' &&
        espacio54 == 'U' || espacio54 == 'u' &&
        espacio55 == 'E' || espacio55 == 'e' &&
        espacio56 == 'J' || espacio56 == 'j' &&
        espacio57 == 'E' || espacio57 == 'e' &&
        espacio58 == 'Y' || espacio58 == 'y' &&
        espacio59 == 'Q' || espacio59 == 'q' &&
        espacio60 == 'U' || espacio60 == 'u' &&
        espacio61 == 'E' || espacio61 == 'e' &&
        espacio62 == 'S' || espacio62 == 's' &&
        espacio63 == 'I' || espacio63 == 'i' &&
        espacio64 == 'G' || espacio64 == 'g' &&
        espacio65 == 'A' || espacio65 == 'a' &&
        espacio66 == 'D' || espacio66 == 'd' &&
        espacio67 == 'E' || espacio67 == 'e' &&
        espacio68 == 'E' || espacio68 == 'e' &&
        espacio69 == 'S' || espacio69 == 's' &&
        espacio70 == 'T' || espacio70 == 't' &&
        espacio71 == 'A' || espacio71 == 'a' &&
        espacio72 == 'S' || espacio72 == 's' &&
        espacio73 == 'U' || espacio73 == 'u' &&
        espacio74 == 'E' || espacio74 == 'e' &&
        espacio75 == 'R' || espacio75 == 'r' &&
        espacio76 == 'T' || espacio76 == 't' &&
        espacio77 == 'E' || espacio77 == 'e' &&
        espacio78 == 'H' || espacio78 == 'h' &&
        espacio79 == 'A' || espacio79 == 'a' &&
        espacio80 == 'S' || espacio80 == 's' &&
        espacio81 == 'T' || espacio81 == 't' &&
        espacio82 == 'A' || espacio82 == 'a' &&
        espacio83 == 'Q' || espacio83 == 'q' &&
        espacio84 == 'U' || espacio84 == 'u' &&
        espacio85 == 'E' || espacio85 == 'e' &&
        espacio86 == 'V' || espacio86 == 'v' &&
        espacio87 == 'E' || espacio87 == 'e' &&
        espacio88 == 'N' || espacio88 == 'n' &&
        espacio89 == 'G' || espacio89 == 'g' &&
        espacio90 == 'A' || espacio90 == 'a' &&
        espacio91 == 'L' || espacio91 == 'l' &&
        espacio92 == 'A' || espacio92 == 'a' &&
        espacio93 == 'M' || espacio93 == 'm' &&
        espacio94 == 'U' || espacio94 == 'u' &&
        espacio95 == 'E' || espacio95 == 'e' &&
        espacio96 == 'R' || espacio96 == 'r' &&
        espacio97 == 'T' || espacio97 == 't' &&
        espacio98 == 'E' || espacio98 == 'e' &&
        espacio99 == 'Y' || espacio99 == 'y' &&
        espacio100 == 'C' || espacio100 == 'c' &&
        espacio101 == 'A' || espacio101 == 'a' &&
        espacio102 == 'R' || espacio102 == 'r' &&
        espacio103 == 'G' || espacio103 == 'g' &&
        espacio104 == 'U' || espacio104 == 'u' &&
        espacio105 == 'E' || espacio105 == 'e' &&
        espacio106 == 'C' || espacio106 == 'c' &&
        espacio107 == 'O' || espacio107 == 'o' &&
        espacio108 == 'N' || espacio108 == 'n' &&
        espacio109 == 'E' || espacio109 == 'e' &&
        espacio110 == 'S' || espacio110 == 's' &&
        espacio111 == 'T' || espacio111 == 't' &&
        espacio112 == 'E' || espacio112 == 'e' &&
        espacio113 == 'H' || espacio113 == 'h' &&
        espacio114 == 'E' || espacio114 == 'e' &&
        espacio115 == 'R' || espacio115 == 'r' &&
        espacio116 == 'E' || espacio116 == 'e' &&
        espacio117 == 'J' || espacio117 == 'j' &&
        espacio118 == 'E' || espacio118 == 'e'  ){
            $("#cripto input").addClass('aprobado');
            $("#cripto input").trigger( "blur" );
            $(".bgpopup2").fadeIn();
    }
}
function resetGame(){
    $(".criptograma input").val('');
    $(".bgpopup2").fadeOut();
}

$(document).ready(function(){
    $('input').keyup(function(e){
        if($(this).val().length==$(this).attr("maxlength")){;
        $(this).parent().next().find('input').focus();
        }
       
        if(e.keyCode == 8) {
            $(this).parent().prev().find('input').focus().val('');
            
        }
    });
    
    $(".inputA").on('keyup',function(){
        pistaA();
        
    })
    $(".inputB").on('keyup',function(){
        pistaB();
    })
    $(".inputC").on('keyup',function(){
        pistaC();
    })
    $(".inputD").on('keyup',function(){
        pistaD();
    })
    $(".inputE").on('keyup',function(){
        pistaE();
    })
    $(".inputF").on('keyup',function(){
        pistaF();
    })
    $(".inputG").on('keyup',function(){
        pistaG();
    })
    $(".inputH").on('keyup',function(){
        pistaH();
    })
    $(".inputI").on('keyup',function(){
        pistaI();
    })
    $(".inputJ").on('keyup',function(){
        pistaJ();
    })
    $(".inputK").on('keyup',function(){
        pistaK();
    })
    $(".inputL").on('keyup',function(){
        pistaL();
    })
    $(".inputM").on('keyup',function(){
        pistaM();
    })
    $(".inputN").on('keyup',function(){
        pistaN();
    })
    $(".inputO").on('keyup',function(){
        pistaO();
    })
    $(".inputP").on('keyup',function(){
        pistaP();
    })
    $(".inputQ").on('keyup',function(){
        pistaQ();
    })
    $(".inputR").on('keyup',function(){
        pistaR();
    })
    $(".inputS").on('keyup',function(){
        pistaS();
    })
    $(".inputT").on('keyup',function(){
        pistaT();
    })
    $(".inputU").on('keyup',function(){
        pistaU();
    })
    $(".inputV").on('keyup',function(){
        pistaV();
    })
    $(".inputW").on('keyup',function(){
        pistaW();
    })
    $(".inputX").on('keyup',function(){
        pistaX();
    })
    $(".inputY").on('keyup',function(){
        pistaY();
    })
    
    $("#cripto input").on('keyup',function(){
        cripto();
    })
});





