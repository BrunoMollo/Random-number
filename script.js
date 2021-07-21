

const input = document.querySelector(".cont input");
const textVidas = document.querySelector(".lives");
const mensaje = document.querySelector(".mensaje");
const boton = document.querySelector(".cont button");

let numero = Math.floor(Math.random() * 100 + 1);
let vidas=10;
textVidas.innerHTML="Vidas: "+vidas;


boton.onclick=()=>{
    if (boton.innerHTML == "Reiniciar"){
        boton.innerHTML = "Adivinar";
        mensaje.innerHTML="Nuevo numero generado";
        numero = Math.floor(Math.random() * 100 + 1);
        vidas = 10;
        textVidas.innerHTML = "Vidas: " + vidas;
        return;
    }


    if(input.value==""){
        mensaje.innerHTML="Debes ingresar un numero";
        return;
    }
    //Adivino
    if(input.value == numero){
        mensaje.innerHTML = `Bien!!! El numero es ${numero}`;
        boton.innerHTML = "Reiniciar";
        return;
    }
    //NO adivino
    vidas--;
    textVidas.innerHTML = "Vidas: " + vidas;

    if(vidas==0){
        mensaje.innerHTML ="Te quedaste sin vidas, suerte la proxima";
        boton.innerHTML="Reiniciar";
    }
    else if(input.value<numero){
        mensaje.innerHTML = `El numero es mayor que ${input.value}`;
    }
    else if (input.value > numero) {
        mensaje.innerHTML = `El numero es menor que ${input.value}`;
    }
    input.value="";
       
}

input.addEventListener("keyup",(event)=>{
    if(event.keyCode==13){
        boton.click();
    }
   
})