let vasarlasok=[]

function szamol(){
    let termek=document.getElementById("termekek").value
    
    let termekar=Number(document.getElementById("ar").value)
    let kedvezmeny=Number(document.getElementById("kedvezmeny").value)
    // let kiiras=document.getElementById("kiir").innerHTML

    let vasarlas={
        termeknev_key: termek,
        ar_key:termekar,
        kedvezmeny_key:kedvezmeny
    }
    vasarlasok.push(vasarlas)

    for (let i=0;i < vasarlasok.length;i++){
        console.log("Termek: " + vasarlasok[i].termeknev_key + ";"  +
            "Termék ára: " + vasarlasok[i].ar_key + ";" + "Kedvezmény: " + vasarlasok[i].kedvezmeny_key 
        );
        
    }

    osszegKiszamol(vasarlasok)

}

function osszegKiszamol(vasarlasok){
    let fizetendo=0
     for (let i=0;i < vasarlasok.length;i++){
        let tenylegesen_fizetendo=1-(vasarlasok[i].kedvezmeny_key/100)
        let osszeg=vasarlasok[i].ar_key*tenylegesen_fizetendo
        fizetendo+=osszeg     
        //  console.log("Termek: " + vasarlasok[i].termeknev_key + ";"  +
        //     "Termék ára: " + vasarlasok[i].ar_key + ";" + "Kedvezmény: " + vasarlasok[i].kedvezmeny_key )   
    }

    document.getElementById('kiir').innerHTML="A fizetendő összeg: " + fizetendo
}

