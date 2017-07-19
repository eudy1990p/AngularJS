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
/* fin practica uno */

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
    datoEudy.MisDatos();
    setInterval(fecha,1000);
})();

function fecha(){
    document.getElementById("fecha").innerHTML= new Date();
    console.log(new Date());
}