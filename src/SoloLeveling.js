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
console.log("Cardio " + dia);

if(dia == 0){
console.log(" 3x20 flexões \n 3x5 lances de escada");
}

if(dia == 1){
console.log(" 4x20 flexões \n 4x5 lances de escada");
}
if(dia == 2){
console.log(" 5x20 flexões \n 5x5 lances de escada s");
    }
}
console.log("hello worald");