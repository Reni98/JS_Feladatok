let rendelesek = []

function rendelesiAdatok(){
    let rendelo_neve=document.getElementById("nev").value
    let pizza = document.getElementById("pizzak").value
    let db = Number(document.getElementById("db").value)
    let meret = document.getElementById("meretek").value
    let sajt_bejelolve= document.getElementById("feltetek1").value    
    let sonka_bejelolve= document.getElementById("feltetek2").value

    let lista=document.getElementById('lista')

    
    let pizza_ar=0
    if(meret=="S"){
        pizza_ar+=(2500*db)
        
    }
    else if (meret=="M"){
        pizza_ar+=(3000*db)
    }
    else if(meret=="L"){
        pizza_ar+=(3500*db)
    }

    // if(sajt_bejelolve){        
    //     pizza_ar+=500
    // }
    // if(sonka_bejelolve){
    //     pizza_ar+=400
    // }

    let rendeles = {
        nev_key:rendelo_neve,
        pizza_key:pizza,
        db_key:db,
        fizetendo_key: pizza_ar
    }

    rendelesek.push(rendeles)

    console.log("Megrendelő: " + rendelo_neve + " Pizza: " + pizza + " Fizetendő: " + pizza_ar + "FT");
    lista.innerHTML+="Megrendelő neve: " + rendelo_neve +"<br>" +
                     "Pizza: " + pizza + "<br>" +
                     "DB: " + db + "<br>" +
                     "Fiztendő: " + pizza_ar + "Ft"


    rendelesekOsszegzese(rendelesek)
}

function rendelesekOsszegzese(rendelesek){
    // let nevek=[]
    for (let i=0; i < rendelesek.length;i++){
        // let nev= rendelesek[i].nev_key
        // nevek.push(nev)
        console.log("Név: " + rendelesek[i].nev_key + ";" + " DB: " + rendelesek[i].db_key);
        
    }
    console.log("Rendelők: " + nevek);
    
}
