/* Petit script pour gérer le formulaire localement (sans backend).
   Tu peux remplacer l'envoi par une requête fetch() vers un backend ou un service email. */

document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  const success = document.getElementById('successMessage');

  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();

      // lecture simple des champs (on peut valider plus)
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if(!name || !email || !message){
        alert('Merci de remplir tous les champs.');
        return;
      }

      // Effet visuel: afficher message puis reset
      success.style.display = 'block';
      setTimeout(()=> success.style.opacity = 1, 50);
      form.reset();

      // Option: tu peux envoyer une requête POST ici (ex: to an email API)
      // fetch('/send', {method:'POST', body: new FormData(form)})
      //  .then(...)
    });
  }

  // Small animation: animate progress bars
  document.querySelectorAll('.prog .bar div').forEach((el, idx)=>{
    const w = el.style.width || '60%';
    el.style.width = '0';
    setTimeout(()=> el.style.width = w, 300 + idx*150);
  });
});
