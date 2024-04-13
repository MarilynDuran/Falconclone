const menuBtn = document.getElementById('menuBtn');
const navbar = document.getElementById('navbar');


menuBtn.addEventListener('click', function() {
  navbar.classList.toggle('active');


  // Alternar el ancho de las líneas del botón
  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');
  const line3 = document.getElementById('line3');

  line1.style.width = line1.style.width === '100%' ? '80%' : '100%';
  line2.style.width = line2.style.width === '100%' ? '50%' : '100%';
  line3.style.width = line3.style.width === '100%' ? '70%' : '100%';

  // Alternar la clase de la barra de navegación para cambiar su anchura
  navbar.classList.toggle('narrow');
});
