// Función para procesar el formulario al hacer clic en el botón "Submit"
function submitCustomization() {
  const colorSelect = document.getElementById('color');
  const selectedColor = colorSelect.value;

  // Agregar una clase al formulario basado en el color seleccionado
  const form = document.getElementById('customization-form');
  form.classList.remove('form-color-black', 'form-color-silver', 'form-color-blue');
  form.classList.add(`form-color-${selectedColor}`);
  
  // Aquí puedes agregar más lógica para procesar los datos del formulario si es necesario
}
