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
