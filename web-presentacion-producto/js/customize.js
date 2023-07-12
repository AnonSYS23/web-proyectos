// Código JavaScript para el segundo código HTML

// Función para mostrar una alerta cuando se hace clic en el botón "Submit"
function submitCustomization() {
    alert('Your customization has been submitted!');
  }
  
  // Obtener el formulario de customización por su ID
  var customizationForm = document.getElementById('customization-form');
  
  // Agregar un evento de clic al botón del formulario de customización
  customizationForm.addEventListener('submit', function(event) {
    // Detener el envío del formulario
    event.preventDefault();
    
    // Llamar a la función submitCustomization cuando se hace clic en el botón
    submitCustomization();
  });
  