let count = 0; // Initialize count to 0

function increaseCount() {
  count++; // Incrémente le compte de 1
  displayCount(); // Affiche le compte
  checkCountValue(); // Vérifier la valeur du count et afficher les messages
}

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Affiche le compte dans l'HTML
}

function checkCountValue() {
  if (count === 10) {
    alert("Votre publication Instagram a gagné 10 abonnés ! Félicitations !");
  } else if (count === 20) {
    alert("Votre publication Instagram a gagné 20 abonnés ! Continuez comme ça !");
  }
}
