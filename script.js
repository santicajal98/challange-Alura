//variable que define la condicion inicial de como va a funcionar la pagina, si como encriptador o desencripatador, por defecto funciona como envriptador por eso toma valor 1
var condicionEncriptador = 1;

//funcion que responde a la interaccion con los botontes de encriptador y desencriptado
function habilitarBoton(value){
    const botonEncriptar = document.querySelector('.encriptar-boton');
    const botonDesencriptar = document.querySelector('.desencriptar-boton');
    if (value  == 1) {
        botonEncriptar.style.backgroundColor = '#53EB3C';
        botonEncriptar.style.color = '#000000'
        botonDesencriptar.style.backgroundColor = '#556B51';
        botonDesencriptar.style.color = '#FFFFFF'
        condicionEncriptador = 1;
        var textoInput = document.querySelector('#texto-introducido').value;
        if(textoInput != ""){
        var traduccion = encriptador(textoInput);
        document.querySelector('.texto-convertido').value= traduccion;
        }
    }
    if (value == 2) {
        botonEncriptar.style.backgroundColor = '#556B51';
        botonEncriptar.style.color = '#FFFFFF'
        botonDesencriptar.style.backgroundColor = '#53EB3C';
        botonDesencriptar.style.color = '#000000'
        condicionEncriptador = 2;
        var textoInput = document.querySelector('#texto-introducido').value;
        if(textoInput != ""){
        var traduccion = desencriptador(textoInput);
        document.querySelector('.texto-convertido').value= traduccion;
        }
    }
}
//
//areaTexto
//primero
//intro
//segundo
//salida
//textoSalida
//botoneesencriptacion
//encriptarBoton

//funcion que interactua con el ingreso de texto en el input, si no hay texto dentro no realiza el encriptado o desencriptado
function inputTexto(textoIngresado){
    //el siguiente if controla si el input tiene texto o no, en caso de no tener en la ventana de transcripcion pone una imagen que indica que no hay texto
    if (textoIngresado === ""){  
        const div = document.querySelector('.contenedor-salida');
        const imagen = document.createElement('img');
        imagen.src = 'img/icono.png';
        imagen.id = "imagen-salida";
        div.appendChild(imagen);
        const titulo = document.createElement('h2')
        titulo.textContent = 'NINGUN MENSAJE ENCONTRADO';
        titulo.classList = 'titulo-salida';
        div.appendChild(titulo);
        const subtitulo = document.createElement('p')
        subtitulo.classList = 'subtitulo-salida';
        subtitulo.textContent = 'Ingrese un texto para encriptar o desencriptar';
        div.appendChild(subtitulo);
        while(controlExistencia(2) == false){
            const elementoTranscripto = document.querySelector('.texto-convertido');
            elementoTranscripto.remove();
        }
    }else{
        //controlo que la imagen exista antes de eliminarla y crear el elemento que la va a reemplazar
        if(controlExistencia(1) == false){
            removerContenido();
            crearElemento();
        }
    }
    //esta seccion indica que si el input tiene texto se lo encripte o desencripte
    if (document.querySelector('#texto-introducido').value != "" && condicionEncriptador == 1){
        var traduccion = encriptador(textoIngresado);
        document.querySelector('.texto-convertido').value = traduccion;
    }
    if (document.querySelector('#texto-introducido').value != "" && condicionEncriptador == 2){
        var traduccion = desencriptador(textoIngresado);
        document.querySelector('.texto-convertido').value = traduccion;
    }
}
//funcion para controlar la existencia de un elemento de html
function controlExistencia(control){
    if (control == 1){
        let imagen = document.getElementById('imagen-salida');
        if(imagen == undefined){
            return true;
        }else{
            return false;
        }
    }
    if (control == 2){
        let texto = document.querySelector('.texto-convertido')
            if(texto == undefined){
                return true;
            }else{
                return false;
            }
    }
}


function removerContenido(){
    const imagen = document.querySelector('#imagen-salida');
    imagen.remove();
    const titulo = document.querySelector('.titulo-salida')
    titulo.remove();
    const subtitulo = document.querySelector('.subtitulo-salida')
    subtitulo.remove();
}

function crearElemento(){
    const div = document.querySelector('.contenedor-salida');
    const elemento = document.createElement('textarea');
    elemento.classList ='texto-convertido';
    elemento.rows = "40";
    elemento.cols = "30";
    div.appendChild(elemento);
}


function encriptador(){
    let mensaje = document.querySelector('#texto-introducido').value;
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
    let mensaje = document.getElementById('texto-introducido').value;
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
        let copiar = document.querySelector('.texto-convertido').value;
        navigator.clipboard.writeText(copiar);
    }
    