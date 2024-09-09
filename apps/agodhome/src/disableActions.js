// Deshabilitar clic derecho
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Deshabilitar arrastrar imágenes
document.addEventListener('dragstart', function(e) {
  if (e.target.nodeName === 'IMG') {
      e.preventDefault();
  }
});

// Deshabilitar selección de texto
document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});
