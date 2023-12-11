let login = document.querySelector(".login");
document.querySelector("#login-btn").onclick = () =>{
    login.classList.toggle('active');
}

let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
    login.classList.remove('active');
    navbar.classList.toggle('active');
}

// window.onscroll = () => {
//     login.classList.remove('active');
//     navbar.classList.remove('active');
// }

// Recuperar el nombre de usuario 
var currentUsername = localStorage.getItem("currentUsername");

// Verificar si el usuario ha iniciado sesión
if (currentUsername) {
    // Mostrar el nombre de usuario en el mensaje
    document.getElementById("name-user").textContent = "Benvingut/da, " + currentUsername;
} else {
    // Si no hay nombre de usuario, redirigir a la página de inicio de sesión
    alert("Heu d'iniciar sessió per accedir a l'historial.");
    window.location.href = "app-bs/app.html";
}

function showMedicinalsMap() {
    var selectPlant = document.getElementById("medicinalsSelect");
    var mapContainer = document.getElementById("medicinalsMap");
    
    // Obtener el valor seleccionado en el select
    var selectedPlant = selectPlant.value;

    // Configurar la ruta de la imagen del mapa según la planta 
    var mapImagePath = "";

    switch (selectedPlant) {
        case "lavanda":
            mapImagePath = "mapa1.png";
            break;
        case "manzanilla":
            mapImagePath = "mapa2.png";
            break;
        case "menta":
            mapImagePath = "mapa3.png";
            break;
        default:
            // Si no hay selección válida, ocultar la imagen del mapa
            mapImagePath = "mapa0.png";
            break;
    }

    // Mostrar u ocultar la imagen del mapa según la selección
    mapContainer.src = mapImagePath;
}

document.addEventListener('DOMContentLoaded', function () {
    // Obtén el historial almacenado en localStorage o un array vacío si no existe
    var userHistory = JSON.parse(localStorage.getItem('userHistory')) || [];

    // Obtén el elemento del historial
    var historyContainer = document.getElementById('historial-imagenes');
    var historialMessage = document.getElementById('history');

    // Rellena el historial con imágenes previas almacenadas
    userHistory.forEach(function (imageSrc) {
        appendToHistory(imageSrc);
    });

    // Obtén el elemento del botón y añade un listener para el clic
    var likeButtons = document.querySelectorAll('.btn');
    likeButtons.forEach(function (button) {
        // localStorage.removeItem('userHistory');
        button.addEventListener('click', function () {
            // Obtén la fuente de la imagen
            var imageSrc = button.closest('.box').querySelector('img').src;

            // Si la imagen no está en el historial, agrégala y almacena en localStorage
            if (!userHistory.includes(imageSrc)) {
                userHistory.push(imageSrc);
                localStorage.setItem('userHistory', JSON.stringify(userHistory));
                appendToHistory(imageSrc);
                console.log('Imagen agregada al historial:', imageSrc);
                
                // Oculta el mensaje del historial si se ha agregado la primera imagen
                if (userHistory.length === 1) {
                    historialMessage.style.display = 'none';
                }
            } else {
                console.log('La imagen ya está en el historial:', imageSrc);
            }
        });
    });

    // Función para agregar al historial
    function appendToHistory(imageSrc) {
        // Crea un nuevo contenedor para la imagen
        var imageContainer = document.createElement('div');
        imageContainer.classList.add('history-image-container');

        // Crea un nuevo elemento de imagen
        var newImage = document.createElement('img');
        newImage.src = imageSrc;

        // Aplica estilos para hacer la imagen responsiva y pequeña
        newImage.style.width = '200px';
        newImage.style.height = '100%';

        // Añade la nueva imagen al contenedor
        imageContainer.appendChild(newImage);

        // Añade el nuevo contenedor al historial
        historyContainer.appendChild(imageContainer);
    }
});

function openCamera() {
    // Obtener el input de la cámara
    const cameraInput = document.getElementById("cameraInput");

    // Verificar si el navegador soporta la captura de la cámara
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Abrir la cámara
        navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
            // Cierra la cámara después de seleccionar una imagen
            cameraInput.addEventListener('change', function () {
                stream.getTracks().forEach(track => track.stop());
            });

            // Simular un clic en el input para abrir la cámara
            cameraInput.click();
        }).catch(function (error) {
            console.error("Error al acceder a la cámara:", error);
        });
    } else {
        // Si no se soporta la captura de la cámara, simplemente abre el diálogo de selección de archivo
        cameraInput.click();
    }
}

// Función para procesar la imagen seleccionada
function processSelectedImage(event) {
    const selectedFile = event.target.files[0];

    // Verificar si se seleccionó un archivo
    if (selectedFile) {
        const fileName = selectedFile.name.toLowerCase();

        // Verificar si el archivo seleccionado es "lavanda.png"
        if (fileName === "lavanda.jpg") {
            // Mostrar mensaje sobre la lavanda dentro del elemento <p>
            showPlantInfo("Lavanda", "La planta que es troba a la imatge és coneguda com a lavanda, és una planta relaxants i la seva agradable aroma.");
        } 
    }
}

// Función para mostrar información de la planta seleccionada
function showPlantInfo(plantName, plantDescription) {
    // Obtener el elemento <p> y establecer su contenido
    const lavandaMessageElement = document.getElementById("lavandaMessage");
    lavandaMessageElement.textContent = `${plantDescription}`;
}