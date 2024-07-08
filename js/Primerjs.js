//

var intEdad = 30;
const strEdad = "Viejo";
let arrEdades = [1,2,3,4];

if(intEdad === "30"){
    console.log("Entro")
}
else{
    console.log("No Entro")
}


switch(strEdad){


    case "3raEdad":
        console.log("Entro Viejo");

        break;
    case "30":
        console.log("Entro 30");

        break;
    default:
        console.log("No entro");
}

let v = true;
let x= false;
let y = true;
if(v&&x&&y){
    console.log("Haga algo")
}