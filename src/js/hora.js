//Captura DOM
const mostrarHora = document.getElementById('hora');
const mostrarFecha = document.getElementById('fecha');
const mensaje = document.getElementById('mensaje')
// --- HORA ----- 

const hora = () => {
    setInterval(() => {
        let horaActual = new Date();
        mostrarHora.innerHTML = horaActual.toLocaleTimeString()
        mostrarMensajes()
    }, 1000)
    
}

const mostrarMensajes = () => {
    let hours = new Date();
    let hour = hours.getHours();
    // let minuts = hours.getMinutes();
    let message = ''
    if (hour >= 0 && hour < 7) {
        message = 'Es hora de descansar. ¡Apaga y sigue mañana!';
    } else if (hour >=  7 && hour < 12) {
        message = '¡Buenos días! Desayuna fuerte y a darle al código.';
    } else if (hour >= 12 && hour < 14) {
        message = 'Echa un rato más pero no olvides comer.';
    } else if (hour >= 14 && hour < 16) {
        message = '¡Espero que hayas comido!';
    } else if ((hour >= 16 && hour < 18)) {
        message = '¡Buenas tardes! Solo queda el último empujón.';
    } else if ((hour >= 18 && hour < 22)) {
        message = 'Esto ya son horas extras... ¡Piensa en parar pronto!';
    } else if ((hour >= 22 && hour < 24)) {
        message = 'Buenas noches, es hora de parar y descansar!';
    }

    mensaje.textContent = message;
};

hora()
// ---- FECHA -----
  
let fechaActual = new Date(); // Datos de la fecha en directo de la zona en la que estamos
let mesAnual = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] // getMonth cuenta desde el 0, le doy los números para que empiece desde 1 (Enero)

const numCero = (num) => // FUNCIÓN PARA ANTEPONER UN CERO A LOS NÚMEROS < 10
    num <= 9 ? `0${num}` : `${num}`;

    // Captura enn variables del día/mes/año
let dia = numCero(fechaActual.getDate()) 
let mes = numCero(mesAnual[fechaActual.getMonth()])
let year = fechaActual.getFullYear();

mostrarFecha.innerHTML = `${dia}/${mes}/${year}`; // Insertar fecha con todos los datos anteriores



/*
- Desde las 00:01 hasta las 07:00 Es hora de descansar. Apaga y sigue mañana
- Desde las 07:01 hasta las 12:00 Buenos días, desayuna fuerte y a darle al código
- Desde las 12:01 hasta las 14:00 Echa un rato más pero no olvides comer
- Desde las 14:01 hasta las 16:00 Espero que hayas comido
- Desde las 16:01 hasta las 18:00 Buenas tardes, el último empujón
- Desde las 18:01 hasta las 22:00 Esto ya son horas extras, ... piensa en parar pronto
- Desde las 22:01 hasta las 00:00 Buenas noches, es hora de pensar en parar y descansar   
*/