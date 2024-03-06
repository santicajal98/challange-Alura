//variable que define la condicion inicial de como va a funcionar la pagina, si como encriptador o desencripatador, por defecto funciona como envriptador por eso toma valor 1
var condicionEncriptador = 1;

//funcion que responde a la interaccion con los botontes de encriptador y desencriptado
function habilitarBoton(value){
    const botonEncriptar = document.querySelector('.encriptarBoton');
    const botonDesencriptar = document.querySelector('.desencriptarBoton');
    if (value  == 1) {
        botonEncriptar.style.backgroundColor = '#53EB3C';
        botonDesencriptar.style.backgroundColor = '#556B51';
        condicionEncriptador = 1;
        var textoInput = document.querySelector('#intro').value;
        if(textoInput != ""){
        var traduccion = encriptador(textoInput);
        document.querySelector('.textoSalida').value= traduccion;
        }
    }
    if (value == 2) {
        botonEncriptar.style.backgroundColor = '#556B51';
        botonDesencriptar.style.backgroundColor = '#53EB3C';
        condicionEncriptador = 2;
        var textoInput = document.querySelector('#intro').value;
        if(textoInput != ""){
        var traduccion = desencriptador(textoInput);
        document.querySelector('.textoSalida').value= traduccion;
        }
    }
}

//funcion que interactua con el ingreso de texto en el input, si no hay texto dentro no realiza el encriptado o desencriptado
function inputTexto(textoIngresado){
    //el siguiente if controla si el input tiene texto o no, en caso de no tener en la ventana de transcripcion pone una imagen que indica que no hay texto
    if (textoIngresado === ""){    
        const div = document.querySelector('.segundo');
        const elemento = document.createElement('img');
        elemento.src = '/img/1.png';
        elemento.id = 'salida'
        div.appendChild(elemento);
        while(controlExistencia(2) == false){
            const elementoTranscripto = document.querySelector('.textoSalida');
            elementoTranscripto.remove();
        }
    }else{
            //controlo que la imagen exista antes de eliminarla y crear el elemento que la va a reemplazar
            if(controlExistencia(1) == false){
                removerImagen();
                crearElemento();
            }
    }
    //esta seccion indica que si el input tiene texto se lo encripte o desencripte
    if (document.querySelector('#intro').value != "" && condicionEncriptador == 1){
        var traduccion = encriptador(textoIngresado);
        document.querySelector('.textoSalida').value= traduccion;
    }
    if (document.querySelector('#intro').value != "" && condicionEncriptador == 2){
        var traduccion = desencriptador(textoIngresado);
        document.querySelector('.textoSalida').value= traduccion;
    }
}
//funcion para controlar la existencia de un elemento de html
function controlExistencia(control){
    if (control == 1){
        let imagen = document.querySelector('#salida')
        if(imagen == undefined){
            return true;
        }else{
            return false;
        }
    }
    if (control == 2){
        let texto = document.querySelector('.textoSalida')
            if(texto == undefined){
                return true;
            }else{
                return false;
            }
    }
}


function removerImagen(){
    const imagen = document.querySelector('#salida');
    imagen.remove();
}

function crearElemento(){
    const div = document.querySelector('.segundo');
    const elemento = document.createElement('textarea')
    elemento.classList ='textoSalida'
    div.appendChild(elemento);
}


function encriptador(){
    let mensaje = document.getElementById('intro').value;
    let nuevo = [];
    for (let index = 0; index < mensaje.length; index++) {
        if (mensaje[index] != 'a' && mensaje[index] != 'e' && mensaje[index] != 'i' && mensaje[index] != 'o' && mensaje[index] != 'u'){
                nuevo = nuevo + mensaje[index];
        }else{
            if(mensaje[index] == 'a'){
                nuevo = nuevo + 'ai';
            }
            if(mensaje[index] == 'e'){
                nuevo = nuevo + 'enter';
            }
            if(mensaje[index] == 'i'){
                nuevo = nuevo + 'imes';
            }
            if(mensaje[index] == 'o'){
                nuevo = nuevo + 'ober';
            }
            if(mensaje[index] == 'u'){
                nuevo = nuevo + 'ufat';
            }
        }
}
return nuevo;
}


function desencriptador(){
    let mensaje = document.getElementById('intro').value;
    let nuevo = [];
    let letra = [];
    let indiceNuevo = 0;
    for (let index = 0; index < mensaje.length; index++) {
        if (mensaje[index] != 'a' && mensaje[index] != 'e' && mensaje[index] != 'i' && mensaje[index] != 'o' && mensaje[index] != 'u'){
            nuevo = nuevo + mensaje[index];
            indiceNuevo ++;
            }else{
                if(mensaje[index] == 'a' && mensaje[index+1]=='i'){
                    nuevo = nuevo + 'a';
                    index = index + 1;
                    indiceNuevo++;
                }
                if(mensaje[index] == 'e' && mensaje[index+1]=='n' && mensaje[index+2]=='t' && mensaje[index+3]=='e' && mensaje[index+4]=='r'){
                    nuevo = nuevo + 'e';
                    index = index + 4;
                    indiceNuevo++;
                }
                if(mensaje[index] == 'i' && mensaje[index+1]=='m' && mensaje[index+2]=='e' && mensaje[index+3]=='s'){
                    nuevo = nuevo + 'i';
                    index = index + 3;
                    indiceNuevo++;
                }
                if(mensaje[index] == 'o' && mensaje[index+1]=='b' && mensaje[index+2]=='e' && mensaje[index+3]=='r'){
                    nuevo = nuevo + 'o';
                    index = index + 3;
                    indiceNuevo++;
                }
                if(mensaje[index] == 'u' && mensaje[index+1]=='f' && mensaje[index+2]=='a' && mensaje[index+3]=='t'){
                    nuevo = nuevo + 'u';
                    index = index + 3;
                    indiceNuevo++;
                }
            }
        }
        return nuevo;
} 
function botonCopiar(){
        let copiar = document.querySelector('.textoSalida').value;
        navigator.clipboard.writeText(copiar);
    }
    