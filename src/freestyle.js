var caminhoimg;
let temptestint = true;

function mudaae(){
    if(temptestint == 1){
    document.getElementById("slider").style.backgroundImage = "url('../img/bind.jpg')"
    console.log("obito") 
    }  
    if(temptestint == 2){
    document.getElementById("slider").style.backgroundImage = "url('../img/fracture.jpg')" 
    console.log("chrollo")
    }
    if(temptestint == 3){
        document.getElementById("slider").style.backgroundImage = "url('../img/icebox.jpg')" 
        console.log("chrollo")
        }
    
    temptestint ++;
    if(temptestint > 3) {
        temptestint = 1;
    }
}



var tmp = setInterval (mudaae, 3500);

console.log("hello world");


