// ---- FECHA -----

//Captura DOM
const mostrarHora = document.getElementById('hora');
const mostrarFecha = document.getElementById('fecha');

let fechaActual = new Date(); // Datos de la fecha en directo de la zona en la que estamos
let mesAnual = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] // getMonth cuenta desde el 0, le doy los números para que empiece desde 1 (Enero)

const numCero = (num) => // FUNCIÓN PARA ANTEPONER UN CERO A LOS NÚMEROS < 10
    num <= 9 ? `0${num}` : `${num}`;

    // Captura enn variables del día/mes/año
let dia = numCero(fechaActual.getDate()) 
let mes = numCero(mesAnual[fechaActual.getMonth()])
let year = fechaActual.getFullYear();

mostrarFecha.innerHTML = `${dia}/${mes}/${year}`; // Insertar fecha con todos los datos anteriores

// --- HORA ----- 

const hora = () => {
    setInterval(() => {
        let horaActual = new Date();
        mostrarHora.innerHTML = horaActual.toLocaleTimeString()
    }, 1000)
}

hora()


// ------ CONTRASEÑAS SEGURAS ------

const inputCarateres = document.getElementById('caracteres')
const contraseñaGenerada = document.getElementById('contraseñaGenerada')
const buttonPassword = document.getElementById('buttonPassword')

const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const minusculas = "abcdefghijklmnopqrstuvwxyz"
const numeros = "0123456789"
const simbolos = "!@#$%^&*()-_=+"


//Función para generar aleatoriedad, devuelve el caracter correspondiente a la posición

const aleatoria = (variables) => {
    return variables[Math.floor(Math.random() * variables.length)]
    }

// FUNCIÓN PARA GENERAR CONTRASEÑA 

const generarPassword = () => {
    let allVariables = mayusculas + numeros + minusculas + simbolos; // todas las cadenas combinadas en una larga
    let password = '';
    let numCaracteres = inputCarateres.value
    
    
        for (let num = 0; num < numCaracteres; num++) { // Se inicializa la variable con 0, cuantas veces se ejecutará el bucle
            password += aleatoria(allVariables)    // Si la condición: num < numCaracteres sea verdadera continúa, el bucle termina cuando es falsa
        }                                           //numCaracteres es el número total de iteraciones que se quiere que realice el bucle (el número de caracteres en la contraseña).
       contraseñaGenerada.innerHTML = `
       <h4>Contraseña Generada</h4>
                    <p>${password}</p>
                    `      //Dentro del cuerpo del bucle, se ejecuta esta línea de código 'password += aleatoria(allVariables)' en cada iteración
       aleatoria(allVariables)                      //genera un carácter aleatorio de la cadena allVariables.
                                                    //password += ... agrega (concatena) este carácter aleatorio a la variable password.
        }

        buttonPassword.addEventListener('click', generarPassword)

       
        // ---- CLIMA -----
        const containerTime = document.getElementById('container-Time')

        let city = 'Madrid'
        const apiKey = '6eed3220b1cc4ec29ba192021241607'
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`

        const getTime = async () => {
            try {
            const response = await fetch(url)
            const data = await response.json()
            return data
        } catch(error) {
         console.log('Este es el error', error)
    }
}

getTime().then(city => {
    const {current, forecast, location} = city
console.log(city)
const dataHour = forecast.forecastday[0].hour
const hoursData = dataHour.map(hour => {
    let horaSola = hour.time.split(' ')[1]
    return `<div class="time-Hour">${horaSola} <img src=${current.condition.icon} alt="icon"/> <p class="yellow">${hour.temp_c}°C</p></div>`;
}).join('');
    containerTime.innerHTML = `<div class="container-city"><h2>${location.name} / ${location.country} </h2> <p class="yellow">${current.condition.text} </p> 
    <div class="divTemp"><img src=${current.condition.icon} alt="icon" class="iconBig"/> 
    <div class="temp">
    <p class="tempNum">${current.temp_c}</p>
    <img src="./src/assets/imgIcon/celsius.png" alt="Celsius" class="celsius"/>
    </div>
    <div class="temp2">
    <p>Precipitaciones: ${current.precip_in}% </p>
    <p>Humedad: ${current.humidity}% </p>
    <p>Viento: ${current.wind_kph}Km/h </p>
    </div>
    </div>
    <div class="time-Hours">${hoursData}</div>
    `
})




//current.condition.icon / text "Sunny" / wind_kph
//forecast . forecastday .0 . hour
//location . country . name ó region

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
            let inputValues = {inputName, inputLink}
            //console.log(inputValues);
            const objetoEnlace = localStorage.getItem('arrEnlace') // en la primera vuelta no existe, en la segunda si.
            
            const names = objetoEnlace ? JSON.parse(objetoEnlace) : [] // nos queda un array vacio en la primera.
            console.log(names, `array antes del push`);
            names.push(inputValues) // aqui el array tiene el chiste
            console.log(names, `array después del push`);
        
            // console.log(array); //deberia mostrar chiste
        
            localStorage.setItem('arrEnlace', JSON.stringify(names))
            
            /*template(localStorage.getItem('nameEnlace', 'inputEnlace'))//Invocamos esta funcion y le pasamos los jokes guardados en la variable localStorage*/
        }


        buttonEnlaces.addEventListener('click', (e) => {
            console.log(e);
            saveEnlaces(e)
        })


        const imagenesRandom = ['./src/assets/imgBackground/ameenfahmy-7RZj4IrPT9Y-unsplash.jpg','./src/assets/imgBackground/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg']

    
        const cambioImagenes = () => {
            const body = document.body
            const imagenesRandom2 = Math.floor(Math.random() * imagenesRandom.length)
            
            body.style.backgroundImage = `url(${imagenesRandom[imagenesRandom2]})`
            
        }
        setInterval(cambioImagenes,5000)
        
        cambioImagenes()
        