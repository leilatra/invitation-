// Envoie la confirmation de présence vers WhatsApp
function envoyerRSVP(e){
  e.preventDefault();
  const nom = document.getElementById('rsvp-nom').value;
  const nombre = document.getElementById('rsvp-nombre').value;
  const message = document.getElementById('rsvp-message').value;
  let texte = `Bonjour, je confirme ma présence au mariage de Fatou & Idrissa.%0ANom : ${nom}%0ANombre de personnes : ${nombre}`;
  if(message){ texte += `%0AMessage : ${message}`; }
  window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${texte}`, '_blank');
  return false;
}

// Animations d'apparition au défilement
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
  if(entry.isIntersecting){
  entry.target.classList.add('visible');
  }
  });
  }, { threshold: 0.15 });
  reveals.forEach(el => observer.observe(el));
