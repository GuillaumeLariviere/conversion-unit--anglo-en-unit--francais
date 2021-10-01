let convertions = {
    Longueur:{
        metter:{
            foot:0.30480,
            miles:1609.34,
            kilomettre:1000,
            metter:1
        },
        foot:{
            metter:3.28077,
            miles:5280,
            kilomettre:3280.77,
            foot:1
        },
        miles :{
            metter:0.0006213,
            foot:0.0001893,
            kilomettre:1.60934,
            miles:1
        } ,
        kilomettre :{
            metter:0.0001,
            foot:0.0003280,
            miles:0.62137,
            kilomettre:1
        }
    },
    vitesse:{
        kmh:{
            mph:0.62137,
            kmh:1
        },
        mph:{
            kmh:1.60934,
            mph:1
        }
    },
    masse:{
        pound:{
            kilogramme:0.45359,
            pound:1
        },
        kilogramme:{
            pound: 2.20462,
            kilogramme:1
        }
    },
    volume:{
        littre:{
            gallons:0.2642,
            littre:1
        },
        gallons:{
            littre:3.7854,
            gallons:1
        }
    },
    Temp:{
        celsius:{
            fahrenheit:0,
            celsius:1
        },
        fahrenheit:{
            celsius:0,
            farhenheit:1
        }
    }
    //TODO a completer les autre conversion restante,
}

let getCelsiusFromFahrenheit = (fahrenheit)=>{
    return +((fahrenheit-32) / 1.8).toFixed(4)
}

let getFahrenheitFromCelsius = (celsius)=>{
    return +((celsius*1.8) + 32).toFixed(4)
}

let unitchoice = document.getElementById('unite')
    unitchoice.addEventListener('change' , (evt)=>{
let unitToConvert = document.getElementById("unite").value
let option = document.getElementById("choiceInit")
let optionEnd=document.getElementById("choiceEnd")
    if (unitToConvert==unitchoice.value){
    option.innerHTML="";
    optionEnd.innerHTML="";
        for(let k in convertions[unitToConvert]){
        option.innerHTML+="<option value ="+k+">"+k+"</option>"
        optionEnd.innerHTML+="<option value ="+k+">"+k+"</option>"
        }
    }
});

let form = document.getElementById('conversion');
form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
let valeur = document.getElementById("val").value;
let choiceEnd = document.getElementById("choiceEnd").value;
let choiceInit = document.getElementById("choiceInit").value;
let unitToConvert = document.getElementById("unite").value
let coef = convertions[unitToConvert][choiceInit][choiceEnd]
    if(coef == 0){
        if(choiceInit == "fahrenheit"){
        valeurConv= getCelsiusFromFahrenheit(valeur);
        }
        else if (choiceInit == "celsius"){
            valeurConv= getFahrenheitFromCelsius(valeur);
        
        }
    }
    else{
        valeurConv = coef*valeur;
    }
let result = document.getElementById("result");
    result.innerHTML = +(valeurConv).toFixed(4) +" "+choiceEnd;
});



// let getFootFromMetter = (metter)=>{
//     return +(metter / 3.28077).toFixed(4)
// }

// let getMetterFromFoot = (foot)=>{
//     return +(foot * 3.28077).toFixed(4)
// }

// let getMilesFromKm = (km)=>{
//     return +(km * 1.60934).toFixed(4)
// }

// let getKmFromMiles = (miles)=>{
//     return +(miles / 1.60934).toFixed(4)
// }

// let getPoundFromKg = (Kg) =>{
//     return +(Kg / 2.20462).toFixed(4)
// }

// let getKgFromPound = (pound) =>{
//     return +(pound * 2.20462).toFixed(4)
// }

// let getGallonsFromLittre = (littre)=>{
//     return +(littre / 3.7854).toFixed(4)
// }

// let getLittreFromGallons = (gallons)=>{
//     return +(gallons * 3.7854).toFixed(4)
// }


// if(choice == "foot"){
//     let valeurToConvert = getFootFromMetter(valeur);
//     let message = document.getElementById("result");
//     message.innerHTML =valeur+" "+"m => "+ valeurToConvert+" "+"ft";
// }
// else if(choice == "metter"){
//     let valeurToConvert = getMetterFromFoot(valeur);
//     let message = document.getElementById("result");
//     message.innerHTML =valeur+" "+"ft => "+ valeurToConvert+" "+"m";
// }
// else if(choice == "miles"){
//     let valeurToConvert = getMilesFromKm(valeur);
//     let message = document.getElementById("result");
//     message.innerHTML =valeur+" "+"km => "+valeurToConvert+" "+"mi";
// }
// else if(choice == "kilomettre"){
//     let valeurToConvert = getKmFromMiles(valeur);
//     let message = document.getElementById("result");
//     message.innerHTML =valeur+" "+"mi => "+valeurToConvert+" "+"km";
// }
// else if(choice == "pound"){
//     let valeurToConvert = getPoundFromKg(valeur);
//     let message = document.getElementById("result");
//     message.innerHTML =valeur+" "+"kg => "+valeurToConvert+" "+"lb";
// }
// else if(choice == "kilograme"){
//     let valeurToConvert = getKgFromPound(valeur);
//     let message = document.getElementById("result");
//     message.innerHTML =valeur+" "+"lb => "+valeurToConvert+" "+"kg";
// }
// else if(choice == "gallons"){
//     let valeurToConvert =getGallonsFromLittre (valeur);
//     let message = document.getElementById("result");
//     message.innerHTML =valeur+" "+"L => "+valeurToConvert+" "+"gal";
// }
// else if(choice == "littre"){
//     let valeurToConvert = getLittreFromGallons(valeur);
//     let message = document.getElementById("result");
//     message.innerHTML =valeur+" "+"gal => "+valeurToConvert+" "+"L";
// }
// else if(choice == "celsius"){
//     let valeurToConvert = getCelsiusFromFahrenheit(valeur);
//     let message = document.getElementById("result");
//     message.innerHTML =valeur+" "+"F° => "+valeurToConvert+" "+"C°";
// }
// else if(choice == "fahrenheit"){
//     let valeurToConvert =getFahrenheitFromCelsius (valeur);
//     let message = document.getElementById("result");
//     message.innerHTML =valeur+" "+"C° => "+valeurToConvert+" "+"F°";