//Funcion
function random(max,min){
    let res=Math.floor(Math.random()*(max-min)+min);
    return res
}

function eleccion(jugada){
    let resultado = "";
    if(jugada == 1){
        resultado = "Piedra 🪨"
    }else if( jugada == 2){
        resultado = "Papel🧻";
    }else if( jugada == 3){
        resultado = "Tijera ✂️"
    }else{
        resultado = "mal elegido"
    }
    return resultado
}



// 1 sera piedra 2 papel 3 tijera
let jugador = 0
let pc=random(3,1);
let triunfos=0;
let perdidas=0;
// jugador = prompt("Elije: 1 piedra, papel, 3 tijera")

while(triunfos<3 && perdidas<3 ){
    pc = random(3,1);
    jugador = prompt("Elige: 1 piedra 2 papel 3 tijera")


    //alert("Elige jugador"+jugador)
    alert("Pc elige: "+eleccion(pc))
    alert("Tu eliges: "+eleccion(jugador))

    //Combate
    if(pc == jugador){
        alert("Empate!!");
    }else if(jugador == 1 && pc == 3){
        alert("Ganaste !")
        triunfos+=1;
    }else if(jugador == 2 && pc == 1){
        alert("Ganaste !")
        triunfos+=1;
    }else if(jugador == 3 && pc == 2){
        alert("Ganaste !")
        triunfos+=1;
    }else{
        alert("Perdiste !!")
        perdidas+=1;
    }
}

alert("Ganaste "+triunfos+"veces .Perdiste "+perdidas+" veces.")
