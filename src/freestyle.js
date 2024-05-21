var caminhoimg;
let temptestint = true;

function mudaae(){
    if(temptestint == true){
    document.getElementById("slider").style.backgroundImage = "url('../img/wallpp2.jpg')"
    console.log("obito") 
    }  
    if(temptestint == false){
    document.getElementById("slider").style.backgroundImage = "url('../img/wallpp1.png')" 
    console.log("chrollo")
    }
    
    temptestint = !temptestint;
}



var tmp = setInterval (mudaae, 3000);

console.log("hello world");


