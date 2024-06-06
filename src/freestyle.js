let jjdatabase = {

}


var caminhoimg;
let temptestint = true;

function mudaae(){
    if(temptestint == 1){
        document.getElementById("slider").setAttribute("src","../img/bind.jpg");
        document.getElementById("parceirosgameicon").setAttribute("src","../img/othericons/valorant.jpg");
   
    console.log("obito") 
    }  

    if(temptestint == 2){
        document.getElementById("slider").setAttribute("src","../img/fracture.jpg");
        document.getElementById("parceirosgameicon").setAttribute("src","../img/othericons/lol.jpg");
    
    console.log("chrollo")
    }

    if(temptestint == 3){
        document.getElementById("slider").setAttribute("src","../img/icebox.jpg");
        document.getElementById("parceirosgameicon").setAttribute("src","../img/othericons/cs2.png");
        
    console.log("chrollo")
    }
    
    temptestint ++;
    if(temptestint > 3) {
        temptestint = 1;
    }
}

var tmp = setInterval (mudaae, 3500);

console.log("hello world");

function testoneclick(){
    let way = document.getElementById("someds").style.display;
    if(document.getElementById("someds").style.display == "none"){
        document.getElementById("someds").style.display = "flex";
        console.log("tirou");
    }
    else{
        document.getElementById("someds").style.display = "none"
    }
    
}

// Mecanica do tempo
let dia = Math.floor(Math.random() * 2);
console.log(dia);

if(dia == 0){
 console.log("Você tem o dia todo.");
}
if(dia == 1){
    console.log("Você tem até meio dia.");
}

// Água
dia = Math.floor(Math.random() * 2);
if(dia == 0){
    console.log("1200 ml");
   }
   if(dia == 1){
       console.log("2000 ml");
   }

//Tipo de treino

dia = Math.floor(Math.random() * 2);
if(dia == 0){
console.log("Cardio");
}
if(dia == 1){

console.log("Intenso");
dia = Math.floor(Math.random() * 3);
if(dia == 0){
console.log(" 3x20 flexões \n 3x5 lances de escada");
}
if(dia == 1){
console.log("4x20 flexões \n 4x5 lances de escada");
}
if(dia == 2){
}
console.log("5x20 flexões \n 5x5 lances de escada");
}


dia = Math.floor(Math.random() * 2);
if(dia == 0){
console.log("Cardio");
}
if(dia == 1){
console.log("Intenso");
}