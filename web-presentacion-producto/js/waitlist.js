// Código JavaScript para el primer código HTML

// Función para mostrar una alerta cuando se hace clic en el botón "Join the waitlist"
function joinWaitlist() {
    alert('Thank you for joining the waitlist!');
  }
  
  // Obtener el formulario de waitlist por su ID
  var waitlistForm = document.getElementById('waitlist-form');
  
  // Agregar un evento de clic al botón del formulario de waitlist
  waitlistForm.addEventListener('submit', function(event) {
    // Detener el envío del formulario
    event.preventDefault();
    
    // Llamar a la función joinWaitlist cuando se hace clic en el botón
    joinWaitlist();
  });
  