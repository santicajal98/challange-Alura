//variable que define la condicion inicial de como va a funcionar la pagina, si como encriptador o desencripatador, por defecto funciona como envriptador por eso toma valor 1
var condicionEncriptador = 1;

//funcion que responde a la interaccion con los botontes de encriptador y desencriptado
function habilitarBoton(value){
    const botonEncriptar = document.querySelector('.encriptar-boton'); //variable que toma las propiedades del boton de encriptar
    const botonDesencriptar = document.querySelector('.desencriptar-boton'); //variable que toma las propiedades del boton de desencriptar
    //condiciones de encriptado que definen la apariencia de los botones
    if (value  == 1) {
        //apariencia de los botones
        botonEncriptar.style.backgroundColor = '#53EB3C';
        botonEncriptar.style.color = '#000000'
        botonDesencriptar.style.backgroundColor = '#556B51';
        botonDesencriptar.style.color = '#FFFFFF'
        condicionEncriptador = 1; // se establece la condicion de encriptado
        var textoInput = document.querySelector('#texto-introducido').value;//variable que toma el valor del texto ingresado
        if(textoInput != ""){ //condicion para el encriptado que establece que el campo de ingreso no puede estar vacio
        var traduccion = encriptador(textoInput);//funcion que encripta el texto ingresado y lo asigna a una variable
        document.querySelector('.texto-convertido').value= traduccion;//asignacion del texto convertido al textarea de salida
        }
    }
    if (value == 2) {
        //apariencia de los botones
        botonEncriptar.style.backgroundColor = '#556B51';
        botonEncriptar.style.color = '#FFFFFF'
        botonDesencriptar.style.backgroundColor = '#53EB3C';
        botonDesencriptar.style.color = '#000000'
        condicionEncriptador = 2;// se establece la condicion de encriptado
        var textoInput = document.querySelector('#texto-introducido').value;//variable que toma el valor del texto ingresado
        if(textoInput != ""){ //condicion para el encriptado que establece que el campo de ingreso no puede estar vacio
        var traduccion = desencriptador(textoInput);//funcion que deseencripta el texto ingresado y lo asigna a una variable
        document.querySelector('.texto-convertido').value= traduccion;//asignacion del texto convertido al textarea de salida
        }
    }
}

//funcion que interactua con el ingreso de texto en el input, si no hay texto dentro no realiza el encriptado o desencriptado
function inputTexto(textoIngresado){
    //el siguiente if controla si el input tiene texto o no, en caso de no tener en la ventana de transcripcion pone una imagen y un mensaje que indica que no hay texto
    if (textoIngresado === ""){  //se hace el control de que en la seccion de ingreso no haya ningun texto
        const div = document.querySelector('.contenedor-salida'); //se asigna a la variable div el elemento con la clase "contenedor-salida"
        const imagen = document.createElement('img');//se crea un elemento HTML de tipo imagen
        imagen.src = 'img/lupa.png'; //se le asigna una src al elemento imagen
        imagen.id = "imagen-salida"; //se le agrega un id al elemento imagen
        div.appendChild(imagen); // se coloca el elemento imagen como hijo del elemento div
        const titulo = document.createElement('h2') //se crea un elemento de tipo h2 de HTML y se lo asgina a la variable titulo
        titulo.textContent = 'NINGUN MENSAJE ENCONTRADO'; //se le asigna un texto de contenido a la variable titulo
        titulo.classList = 'titulo-salida'; //se le asigna una clase a la variable titulo
        div.appendChild(titulo); //se coloca el elemento titulo como hijo del elemento div
        const subtitulo = document.createElement('p') //se crea un elemento p y se lo asgina a la variable subtitulo
        subtitulo.classList = 'subtitulo-salida'; //se le asigna una clase a la variable subtitulo
        subtitulo.textContent = 'Ingrese un texto para encriptar o desencriptar'; //se le agrega un texto de contenido a la variable subtitulo
        div.appendChild(subtitulo);//se coloca como hijo del div a la variable subtitulo
        while(controlExistencia(2) == false){ //se hace un control de que la imagen exista o no previamente
            const elementoTranscripto = document.querySelector('.texto-convertido'); //se le asigna a la variable elementoTranscripto el elemento de clase texto-convertido
            elementoTranscripto.remove();//se remueve el elemento mencionado anteriormente
        }
    }else{
        //controlo que la imagen exista antes de eliminarla y crear el elemento que la va a reemplazar
        if(controlExistencia(1) == false){
            removerContenido(); //remuevo la imagen y el texto contenido
            crearElemento();//creo el nuevo elemento que va a contener el texto transcripto
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

//funcion para remover el contenido del div de salida, remueve la imagen y los textos
function removerContenido(){
    const imagen = document.querySelector('#imagen-salida');
    imagen.remove();
    const titulo = document.querySelector('.titulo-salida')
    titulo.remove();
    const subtitulo = document.querySelector('.subtitulo-salida')
    subtitulo.remove();
}
//funcion que crea el elemento de tipo textarea que va a contener el mensaje encriptado o desencriptado
function crearElemento(){
    const div = document.querySelector('.contenedor-salida');
    const elemento = document.createElement('textarea');
    elemento.classList ='texto-convertido';
    elemento.rows = "40";
    elemento.cols = "30";
    div.appendChild(elemento);
}
//funcion que encripta el mensaje ingresado y lo devuelve a una variable
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
//funcion que desencripta el mensaje ingresado y lo devuelve a una variable
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
//funcion que define el comportamiento del boton copiar
function botonCopiar(){
        let copiar = document.querySelector('.texto-convertido').value;
        navigator.clipboard.writeText(copiar);
    }
    