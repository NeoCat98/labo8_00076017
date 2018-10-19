
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
var cont=1;
var bitacoras=[];
var formulario = document.getElementById("bitacora");
/* ¿Qué contienen la variable formulario ? contiene los elemento del form*/

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
});
/* ¿Qué hace el método evt.preventDefault() ? Para al la accion del elemento */

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
    let bitacora = { 
    cant:cont, 
    fecha: formulario[1].value, 
    descripcion: formulario[2].value, 
    cantidad: formulario[3].value 
  } 
 }); 
 /* ¿Qué es lo que contiene formulario[x]? contiene cada una de los elementos que estan dentro del form,en la posicion 1 contiene la fecha de la actividad, en la posicion 2 contiene la descripcion y por ultimo en la posicion 3 contiene la cantidad de horas  */
 formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
    let bitacora = { 
    cant:cont, 
    fecha: formulario[1].value, 
    descripcion: formulario[2].value, 
    cantidad: formulario[3].value 
  } 
    bitacoras.push(bitacora);
    cont++;
    mostrar();
 }); 

 const crearElemento = (bitacora, tbody) =>{ 
    let boton1 = document.createElement("input"); 
    boton1.setAttribute("type", "button"); 
    boton1.value = "eliminar";
    let tr = document.createElement("tr"); 
    Object.values(bitacora).forEach(item => { 
    
     let td = document.createElement("td"); 
     let content = document.createTextNode(item); 
     td.appendChild(content); 
     
     tr.setAttribute("class", "click"); 
     tr.appendChild(td); 
    }); 
    tr.appendChild(boton1); 
   tbody.appendChild(tr); 
  } 

/*¿Qué contienen las variables tr y td ? tr tiene una etiqueta tr que tendra como clase a click yo contiene a td y td contiene a content.
¿Qué contienen la variable content ? content contiene lo valores de bitacora
¿Qué valor tendra tbody al finalizar la iteración? tbody tiene todo lo guardado en tr.
Describa en pocas palabras lo que realizara esta función. Crea un tr y td, td tendra los valores que esten en bitacora */

const eliminar= (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
}

/*¿Qué es lo que hace .firstChild? mueve el nodo al primer hijo devuelve un valor booleano.
Después de realizar el while ¿Comó quedara el elemento tbody? queda vacio ya se remueven todos los hijos */

const agregar= ()=>{ 
    var eventtr = document.querySelectorAll(".click"); 
      eventtr.forEach((item, index) => { 
      item.addEventListener("click", () => { 
      document.querySelector("#fecha").value = item.childNodes[1].textContent; 
      document.querySelector("#descp").value = item.childNodes[2].textContent; 
      document.querySelector("#cant").value = item.childNodes[3].textContent; 
     }); 
    }) 
   } 
/*Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent;? el contenido que tenha el hijo del nodo en este caso el primero contiene la fecha,
el segundo contiene la descripcion y el tercero contiene la cantidad de horas. */
const mostrar = ()=>{ 
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) { 
     eliminar(document.querySelector(".tabla-btc tbody")); 
    } 
    bitacoras.forEach(item => { 
     crearElemento(item, document.querySelector(".tabla-btc tbody")); 
    }); 
    agregar();
   }
/*¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ?
Obtiene los elemento de los tbody antetiormente creados.

 ¿Qué hace el método childElementCount?
cuenta la cantidad de elementos de hijos que tiene.

¿Qué se mostrara en pantalla cuando se ejecute la función agregar()?
nada, solo guarda los valores de bitacora en tbody


 ¿Qué se mostrara en el navegador despues de ejecutar la función mostrar?
se muestran ya los valores que estan en bitacora que son guardados en tbody.

 */
/* 1.TODAS LAS CAJAS ESTAN LLENAS */
var input1 = document.getElementById("fecha");
input1.setAttribute("required","");
var input2 = document.getElementById("descp");
input2.setAttribute("required","");
var input3 = document.getElementById("cant");
input3.setAttribute("required","");
/*2. PINTAR DE COLOR ROJO LOS BRODES DE LA CAJA 
    3. PINTAR DE VERDE LAS CAJAS SI SON CORRECTOS*/;


input1.oninput = () => { 
   var valor = input1.value; 
   if(valor == "" || valor == null){ 
        input1.style.borderColor = "red";
   }else{
       input1.style.borderColor = "green";
   } 
}
input2.oninput = () => { 
    var valor = input2.value; 
    if(valor == "" || valor == null){ 
         input2.style.borderColor = "red";
    }else{
       input2.style.borderColor = "green";
    } 
}
input3.oninput = () => { 
    var valor = input3.value; 
    if(valor == "" || valor == null){ 
        input3.style.borderColor = "red";
    }
    else{
        input3.style.borderColor = "green";
    } 
}

