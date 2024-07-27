   // AÑADE TU ENLACE

   const nameEnlace = document.getElementById('input-nameEnlace')
   const inputEnlace = document.getElementById('input-enlace')
   const buttonEnlaces = document.getElementById('buttonEnlaces')
   const ulList = document.getElementById('ul-list')
   const formulario = document.getElementById('formulario')

   const saveEnlaces = (e) => { 
       e.preventDefault() // (e) previene el evento de reinicio de la pag

       
       let inputName = nameEnlace.value
       let inputLink = inputEnlace.value

        // Asegurarse de que el enlace comience con http:// o https://
        if (!inputLink.startsWith('http://') && !inputLink.startsWith('https://')) {
        inputLink = 'http://' + inputLink;
        }

       let inputValues = {inputName, inputLink}
       //console.log(inputValues);

        // Obtener los enlaces guardados en localStorage
       const objetoEnlace = localStorage.getItem('arrEnlace') // en la primera vuelta no existe, en la segunda si.
       const names = objetoEnlace ? JSON.parse(objetoEnlace) : [] // nos queda un array vacio en la primera.
       
       //console.log(names, `array antes del push`);
       names.push(inputValues) // Agregar el nuevo enlace al array
       //console.log(names, `array después del push`);

        // Guardar el array actualizado en localStorage
       localStorage.setItem('arrEnlace', JSON.stringify(names))

      //Invocamos esta funcion y le pasamos la lista guardada
        template(names)
       formulario.reset();
    }

   //funcion para crear la ulList 
const template = (data) => {
    const allListItems = data.map((item, index) => {
        return  `<li>
        <button class="buttonEnlace" onclick="removeItem(${index})">X</button>
        <a href="${item.inputLink}" target="_blank">${item.inputName}</a>
    </li>`;
    }).join('')

    ulList.innerHTML = allListItems //Agregamos allListItems al ul. contenedor.
}

//Función que carga los enlaces desde localStorage al cargar la página y se renderizan usando template
const loadEnlaces = () => {
    const cargaEnlaces = localStorage.getItem('arrEnlace');
    const enlaces = cargaEnlaces ? JSON.parse(cargaEnlaces) : [];
    template(enlaces);
}

//Function para eliminar el <li>.
const removeItem = (index) => {
    let array = JSON.parse(localStorage.getItem('arrEnlace')) //Almacenar en el array variable localStorage.
    array.splice(index, 1);
    localStorage.setItem('arrEnlace', JSON.stringify(array))//Agrega el arrayFiltered a localStorage.
    template(array)//Invocamos template(), para renderizar con localStorage actualizado.
}

buttonEnlaces.addEventListener('click', saveEnlaces);
window.addEventListener('load', loadEnlaces);