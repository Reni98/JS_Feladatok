function rendelesiAdatok(){
    let rendelo_neve=document.getElementById("nev").value
    let pizza = document.getElementById("pizzak").value
    let meret = document.getElementById("meretek").value
    let sajt_bejelolve= document.getElementById("feltetek1").value
    let sonka_bejelolve= document.getElementById("feltetek2").value

    
    let pizza_ar=0
    if(meret=="S"){
        pizza_ar+=2500
    }
    else if (meret=="M"){
        pizza_ar+=3000
    }
    else if(meret=="L"){
        pizza_ar+=3500
    }

    if(sajt_bejelolve){        
        pizza_ar+=500
    }
    if(sonka_bejelolve){
        pizza_ar+=400
    }

    console.log("Megrendelő: " + rendelo_neve + " Pizza: " + pizza + " Fizetendő: " + pizza_ar + "FT");
    
}