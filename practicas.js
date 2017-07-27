/*## Práctica Numero 1.

Realizar un  hola mundo que imprima en consola tus siguientes datos:
* Nombre.
* Profesión.
* Edad.
* Nivel de conocimientos de programación del 1 al 10.
* Expectativas  que tienes del cuerso.
> Requerimientos del código:
>- Use variables
>- Use el comando `Console.log();`
>- Agrege como colaborador a jalvis1491@gmail.com
>- Fecha de limite de entrega 19/07/2017 

## Ejemplo

```javascript
var nombre = "José Alvis"

//El comando console.log puede recibir varios parametros separados por ','
//Por lo que podemos pasar un string con la descripción junto a la variable que se va a imprimir.
console.log("Nombre: ", nombre);
//Nombre: José Alvis
```
*/

(function(){
    'use strict';
/*    
    var nombre;
    nombre = "Eudy Alberto Arias Nolasco";
    var profesion;
    profesion = "DDAPP";
    var edad;
    edad = 26;
    var nivelConocimientoProg;
    nivelConocimientoProg = 1
    var expectativas;
    expectativas = "Aprender lo nuevo que me enseñen";
    //var datoEstudiante;
    
    console.log("Nombre:",nombre," Profesión:",profesion," Edad:",edad," Nivel de conocimientos de programación del 1 al 10:",nivelConocimientoProg," Expectativas  que tienes del cuerso:",expectativas);
    
    console.error("Nombre:",nombre," Profesión:",profesion," Edad:",edad," Nivel de conocimientos de programación del 1 al 10:",nivelConocimientoProg," Expectativas  que tienes del cuerso:",expectativas);
    
    console.warn("Nombre:",nombre," Profesión:",profesion," Edad:",edad," Nivel de conocimientos de programación del 1 al 10:",nivelConocimientoProg," Expectativas  que tienes del cuerso:",expectativas);
    
    console.info("Nombre:",nombre," Profesión:",profesion," Edad:",edad," Nivel de conocimientos de programación del 1 al 10:",nivelConocimientoProg," Expectativas  que tienes del cuerso:",expectativas);
/* fin practica uno *

    var datoEudy;
    datoEudy = {
        Nombre:nombre,
        Profesion:profesion,
        Edad:edad,
        NivelProgramacion:nivelConocimientoProg,
        Expectativas:expectativas,
        MisDatos:function(){
            console.warn("Nombre:",this.Nombre," Profesión:",this.Profesion," Edad:",this.Edad," Nivel de conocimientos de programación del 1 al 10:",this.NivelProgramacion," Expectativas  que tienes del cuerso:",this.Expectativas);
            
            alert("Nombre:"+this.Nombre+" Profesión:"+this.Profesion+" Edad:"+this.Edad+" Nivel de conocimientos de programación del 1 al 10:"+this.NivelProgramacion," Expectativas  que tienes del cuerso:"+this.Expectativas);
        }
    }
    */
    
    var practicas;
    practicas = {
        practica1:function(){
            var nombre;
            nombre = "Eudy Alberto Arias Nolasco";
            var profesion;
            profesion = "DDAPP";
            var edad;
            edad = 26;
            var nivelConocimientoProg;
            nivelConocimientoProg = 1
            var expectativas;
            expectativas = "Aprender lo nuevo que me enseñen";
            //var datoEstudiante;

            console.log("Nombre:",nombre," Profesión:",profesion," Edad:",edad," Nivel de conocimientos de programación del 1 al 10:",nivelConocimientoProg," Expectativas  que tienes del cuerso:",expectativas);
        },
        practica2:function(){
            /*
            Practica 2 : par o impar

                Define una función que reciba un numero x como parametro, e imprima los numeros del 0 al numero x, señalando si son par o impar.

                Requerimientos del código:

                Defina una funcion llamada 'imprimirNumeros'.
                Use un bucle FOR.
                Use el condicional IF para determinar si el numero es par o impar.
                Ejemplo

                imprimirNumeros(3);
                //debe imprimir en consola:
                // 1 impar
                // 2 par
                // 3 impar 

            */ 
            imprimirNumeros(30);
        },
        practica3:function(){
            /*
            Practica 3 : Array numeros pares

            Define una función que reciba como parametro un número x y esta devuelva un array con los numeros pares del 0 al número x.

            Requerimientos del código:

            Defina una funcion llamada 'numeroPares'.
            Definir una variable dentro de la funcion llamada 'arrayPar'.
            Use un bucle FOR.
            Use el condicional IF para determinar si el numero es par.
            Use push para agregar valores a 'arrayPar'.
            Use return para devolver el array 'arrayPar'.
            Ejemplo

            var newArrayPar = numeroPares(100);
            // la función debe devolver: [2,4,6,8,10,12,...,100]. 

            //ejemplo
            function numeroPares(numero){
                var arrayPar = [];
               // lógica para definir los números pares.
               //...
                return  arrayPar;
            }

            */
            var array;
            array = numeroPares(6);
            //debugger;
            array.forEach(function (valor){
                msj(valor,1);
            });
            console.log("");
            var i = 0;
            while(array[i]){
                msj(array[i],2);
                i++;
            }
            
        }
    }
    
    //practicas.practica1();
    //practicas.practica2();
    //practicas.practica3();
   var pract = new PracticasAngular();
    pract.practica1();
    pract.practica2();
    pract.practica3();
    //datoEudy.MisDatos();
    setInterval(fecha,1000);
})();

function fecha(){
    var fecha;
    fecha =  new Date();
    document.getElementById("fecha1").innerHTML=fecha;
    
    document.getElementById("fecha2").innerHTML= fecha.getDate()+"-"+fecha.getMonth()+"-"+fecha.getFullYear()+"  "+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
    console.log(new Date());
}
function imprimirNumeros(n){
    for(var i = 0 ; i <= n ; i++){
        if(i == 0 ){ continue; }
        var QueEs;
        var Tipo;
        Tipo = 2;
        QueEs = "impar";
        if( validarPar(i) && (i != 0) ){
           QueEs = "par";
           Tipo = 1;
        }
        msj("El número "+i+" es : "+QueEs,Tipo);
    }
}
function numeroPares(n){
    var arrayPar=[];
    for(i = 0 ; i <= n ; i++){
        if( validarPar(i) && (i != 0)){
            arrayPar.push(i);
        }
    }
    return arrayPar;
}
function validarPar(i){
    var EsPar;
    EsPar = false;
    if( ((i % 2 ) == 0) ){
        EsPar = true;    
    }
    return EsPar;
}
function msj(text,tipo){
        switch(tipo){
            case 1:
                console.log(text);
                break;
            case 2:
                console.warn(text);
                break;
            case 3:
                console.error(text);
                break;
            case 4:
                console.info(text);
                break;
               }
}

function PracticasAngular(){
    this.nombre = "Eudy Alberto Arias Nolasco";
    this.profesion = "DDAPP";
    this.edad = 26;
    this.nivelConocimientoProg = 1
    this.expectativas = "Aprender lo nuevo que me enseñen";
    
    this.practica1 = function(){
        var resp = confirm("Deseas ingresar tus datos?");
        if(resp){
             this.nombre = this.inputData("nombre ");
             this.profesion = this.inputData("profesion ");
             this.edad = this.inputData("edad ");
             this.nivelConocimientoProg = this.inputData("Nivel del 1-10 en programacion ");
             this.expectativas = this.inputData("expectativas ");
             this.msj();
        }else{
            this.msj();
        }
    };
    this.practica2 = function(){
        var x = this.inputCantidad();
        imprimirNumeros(x);
    };
    this.practica3 = function(){
        var x = this.inputCantidad();
        var array;
        array = numeroPares(x);
        var i = 0;
        do{
            msj(array[i],2);
            i++;
        }while(array[i]);
    };
    this.inputCantidad = function(){
        try{
            var dato = prompt("Escriba su cantidad","6");
            var x =  parseInt(dato); 
            return x;
        }catch(error){
            console.info(error.name,"\n",error.message);
            return 1;
        }
    };
    this.inputData = function(campo){
        try{
            var data = prompt("Ingrese el "+campo,"") ;
            //console.log(data);
            if((data == "") || (data.length == 0 ) || (/undefined/.test(data.toString()) ) ) throw "No es un dato permitido\nNo puede estar un campo vacío";
            return data;
        }catch(error){
            console.info(error.name,"\n",error.message);
            return "";
        }
    };
    this.msj = function(){
        console.error("Nombre:",this.nombre," Profesión:",this.profesion," Edad:",this.edad," Nivel de conocimientos de programación del 1 al 10:",this.nivelConocimientoProg," Expectativas  que tienes del cuerso:",this.expectativas);
    };
    
    
}



            