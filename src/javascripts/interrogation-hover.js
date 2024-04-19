const svgElement = document.getElementById('interrogation-svg');

// Función para crear la tarjeta
function crearTarjeta() {
  const tarjetaHover = document.createElement('div');
  tarjetaHover.classList.add('tarjeta-hover');
  
  // Establecer el contenido de la tarjeta
  tarjetaHover.innerHTML = `
    <p>Calculated accoding to the last week's sales</p>
  `;
  
  // Agregar la tarjeta hover al cuerpo del documento
  document.body.appendChild(tarjetaHover);

  return tarjetaHover;
}

// Mostrar la tarjeta cuando se pasa el ratón sobre el elemento SVG
svgElement.addEventListener('mouseenter', function(event) {
    const tarjetaHover = crearTarjeta();
    const rect = event.target.getBoundingClientRect();
    
    // Calcular las coordenadas del centro horizontal del SVG y la parte inferior del SVG
    const svgCenterX = rect.left + rect.width / 2;
    const svgBottomY = rect.bottom;
  
    // Calcular las coordenadas de la tarjeta
    const tarjetaWidth = tarjetaHover.offsetWidth;
    const tarjetaHeight = tarjetaHover.offsetHeight;
    const tarjetaLeft = svgCenterX - tarjetaWidth / 2;
    const tarjetaTop = svgBottomY;
  
    // Establecer la posición de la tarjeta
    tarjetaHover.style.left = tarjetaLeft + 'px';
    tarjetaHover.style.top = tarjetaTop + 'px';
  
    // Mostrar la tarjeta
    tarjetaHover.style.display = 'block';
  });
  
  // Ocultar la tarjeta cuando se sale del elemento SVG
  svgElement.addEventListener('mouseleave', function() {
    const tarjetaHover = document.querySelector('.tarjeta-hover');
    if (tarjetaHover) {
      tarjetaHover.remove();
    }
  });