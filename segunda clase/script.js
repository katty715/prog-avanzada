// 1. Seleccionamos el botón y la tarjeta que queremos modificar
// 'getElementById' busca un elemento en el HTML por su atributo 'id'
const botonTema = document.getElementById('btn-tema');

// 'querySelector' busca el primer elemento que coincida con la etiqueta dada (en este caso, la etiqueta <main>)
const tarjeta = document.querySelector('main');

// 2. Agregamos un "escuchador de eventos" (Event Listener) al botón
// Esto le dice al navegador: "Cuando alguien haga 'click' en este botón, ejecuta esta función"
botonTema.addEventListener('click', function() {
    
    // 3. Modificamos las clases de la tarjeta
    // 'classList' nos permite acceder a la lista de clases de un elemento HTML
    // 'toggle' es un método muy útil que funciona como un interruptor:
    // - Si el elemento NO tiene la clase 'dark-mode', se la agrega.
    // - Si el elemento YA TIENE la clase 'dark-mode', se la quita.
    tarjeta.classList.toggle('dark-mode');
    document.body.classList.toggle('dark-mode'); // También afectamos al fondo de la pantalla
    
});

// =====================================================================
// EJEMPLO DE FUNCIONES: Síncrona vs Asíncrona (Integradas al HTML)
// =====================================================================

const btnSincrono = document.getElementById('btn-sincrono');
const btnAsincrono = document.getElementById('btn-asincrono');
const divResultado = document.getElementById('resultado-ejemplos');

// 1. Función Sincrónica
btnSincrono.addEventListener('click', function() {
    divResultado.innerHTML = "Iniciando saludo síncrono...<br>";
    
    // Ejecución inmediata
    const saludo = "¡Hola! Este es un mensaje síncrono al instante.";
    divResultado.innerHTML += saludo + "<br>";
    divResultado.innerHTML += "Fin del saludo síncrono.";
});

// 2. Función Asincrónica
btnAsincrono.addEventListener('click', async function() {
    divResultado.innerHTML = "Iniciando petición asíncrona...<br>";
    divResultado.innerHTML += "Esperando 2 segundos...<br>";
    
    // Deshabilitamos el botón para evitar múltiples clics mientras carga
    btnAsincrono.disabled = true;
    
    // Simulamos una demora de 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    divResultado.innerHTML += "<strong>¡Datos recibidos después de 2 segundos!</strong><br>";
    divResultado.innerHTML += "Fin de la petición asíncrona.";
    
    // Volvemos a habilitar el botón
    btnAsincrono.disabled = false;
});
