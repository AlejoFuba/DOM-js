/*
// EN CONSOLA
document  --> el arbol de nodos de html
document.dir --> los objetos que puedo manupular
window --> me trae los meotod que puedo manipular de la ventana
*/

// SELECCIONAR ELEMENTOS EN EL DOM
/*
1. document.getElementById('nombreID')
2. document.getElementsByClassName('nombreClase')
3. document.getElementsByTagName('Etiqueta')
4. document.querySelector('#nombreID') Se puede traer clases .nombreClase, ID #nombreID, o etiquetas
5. seleccionar elementos hijos
firstElementChild
lastElementChild
children[numero del hijo]
ejemplo: 
const padre = document.getElementById('padre')
console.log(padre)
const hijo = padre.children[1]
console.log(hijo)
*/


// DEMOS

// SELECCIONAR Y CAMBIAR TEXTO
/*
1. necesitamos variables para tomar los datos y seleccionar sus ID
ejemplo: 
    const tuNombre = document.getElementById('nombre');
    const botonEnviar = document.getElementById('btnEnviar');
    const mensajeBienvenida = document.getElementById('titulo');
podemos comprobar con el console.log()
2. se declara un evento para la variable del boton
ejemplos:
    botonEnviar.addEventListener('nombreEvento', () => {
        //codigo a ejecutar
    })
Los eventos son de tipo click, mouseover, mouseout
3. creamos una funcion para el evento
ejemplo: 
    botonEnviar.addEventListener('click', () => {
      const nuevoNombre = tuNombre.value;
      if (nuevoNombre) {
        mensajeBienvenida.textContent = `¡Hola, ${tuNombre}!`;
        //tambien funciona con .innerText
      } else {
        mensajeBienvenida.textContent = 'Bienvenido';
        alert('Por favor, ingresa tu nombre completo.');
      }
    });
el evento .addEventListener se acciona al presionar el boton y cambia los datos
*/

// DESAPARECER Y APARECER ELEMENTOS
/*
    1. capturamos el elemento en una variable
    comprobamos con console.log(nombreVariable)
    2. usamos classList para identificar las clases que queremos agregar, remover o alternar
    comprobamos con console.log(nombreVariable.classList)
    METODOS DE classList:
        .add : Agrega clases.
        .remove: Elimina clases.
        .toggle: Alterna la presecia de una clase.
    3. generamos un evento para aplicar los cambios de clases
    ejemplo: 
    cazaFantasma.addEventListener('click', () => {
        fantasma.classList.add('desaparecer')    
    });
*/

// AGREGAR ELEMENTOS 
/*
    1. Capturamos la zona donde vamos a agregar el contenido HTML
    ejemplo:
        const nombreVariable = document.getElementById('nombreId')
    2. le agregamos el contenido html usando .innerHTML .insertAdjacentHTML 
    ejemplo: 
        nombreVariable.innerHTML = '<h2>Contenido</h2>'
        nombreVariable.insertAdjacentHTML("beforeend", `<p>contenido</p>`);
        // admite beforebegin afterbegin beforeend afterend 
        nombreVariable.innerHTML += '<li>Contenido</li>'
        //concatena el contenido
    3. capturamos el valor del input y usamos el boton para agregar los elementos de lista
    ejemplo:
        const btnAgregar = document.getElementById('btn-agregar')
        const inputItem = document.getElementById('input-item')
    4. agregamos un evento de tipo click al boton
    ejemplo:
        btnAgregar.addEventListener('click', () => { // code here });
    5. Creamos la funcion para el evento donde se agregue el texto
    ejemplo: 
        const texto = inputItem.value
        const itemMercado = document.createElement('li')
        itemMercado.textContent = texto
        listaMercado.append(itemMercado)
        // .append .prepend .before .after
        listaMercado.insertAdjacentHTML("afterend", `<p class="animate__animated animate__fadeOut">Elemento agregado</p>`);
    6. Creamos otra funcion para remover el texto
*/

// CLONAR ELEMENTOS 
/*
    1. creamos una variable para el contenedor de nuestros elementos
    ejemplo:
        const jaula = document.getElementById('content-ghost')
    2. Creamos una variable del elemento a clonar
    ejemplo: 
        const fantasma = document.getElementById('ghost02')
    3. creamos una variable para el elemento clonado o remplazado
    ejemplo:
        const fantasmaClone = fantasma.cloneNode(true)
    4. añadimos el clone en el contenedor
    ejemplo:
        jaula.prepend(fantasmaClone)
    5. creamos un evento y funcion para el boton
*/

//Remplazar elementos
/*
    1. creamos una variable para el contenedor de nuestros elementos
    ejemplo:
        const jaula = document.getElementById('content-ghost')
    2. Creamos una variable del elemento a remplazar y su ubicación en el contenedor
    ejemplo: 
        const fantasmaNuevo = jaula.children[0]
    3. Creamos una variable para guardar el nuevo elemento a crear
    ejemplo:
        const fantasmaAzul = document.createElement('img')
    4. añadimos los atributos del elemento
    ejemplo:
        fantasmaAzul.src = './src/fantasma-azul.png'
        fantasmaAzul.alt = 'ilustracion de un fantasma estilo retro game'
    5. agregamos el nuevo elemento con el .replaceWith()
    ejemplo:
        fantasmaNuevo.replaceWith(fantasmaAzul)
    6. creamos un evento y funcion para el boton
*/


//EVENTOS DEL DOM
/*
//variable.addEventListener('evento', () => { // codigo a ejecutar });
mouseover
mouseout
click

*/
