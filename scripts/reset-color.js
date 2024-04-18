 // Restablecer el color de hover para los elementos li dentro de detalles
 var details = document.querySelectorAll('details[name="nav"]');
 details.forEach(function(detail) {
   detail.addEventListener('mouseenter', function() {
     var lis = this.querySelectorAll('li');
     lis.forEach(function(li) {
       li.style.color = 'inherit';
     });
   });
   detail.addEventListener('mouseleave', function() {
     var lis = this.querySelectorAll('li');
     lis.forEach(function(li) {
       li.style.color = '';
     });
   });
 });