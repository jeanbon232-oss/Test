// Animation basique : le texte du h1 change de couleur toutes les secondes
// Ajoute plein d'infos qui clignotent et changent de couleur
const infos = [
  "C'est ton jour !", "Fête à volonté !", "Des cadeaux partout !", "Attention aux surprises !", "Musique à fond !", "Des gâteaux !", "Des ballons !", "Des amis !", "Des rires !", "Des souvenirs !", "Encore plus de fun !", "Danse !", "Chante !", "Profite !", "Youhou !", "Party time !", "Explosion de couleurs !", "Clignotement maximum !", "Anniversaire de folie !", "🥳🎉🎂🎈🎊"
];

function randomColor() {
  return `hsl(${Math.floor(Math.random()*360)},100%,50%)`;
}

function addInfos() {
  const container = document.getElementById('infos');
  container.innerHTML = '';
  for (let i = 0; i < infos.length; i++) {
    const el = document.createElement('div');
    el.textContent = infos[i];
    el.className = 'clignote bouge';
    el.style.color = randomColor();
    el.style.fontSize = `${1 + Math.random()*2}em`;
    el.style.margin = `${Math.random()*20}px`;
    container.appendChild(el);
  }
}

addInfos();

// Change les couleurs en boucle
setInterval(() => {
  document.querySelectorAll('.clignote, .emoji, .bouge').forEach(el => {
    el.style.color = randomColor();
    el.style.background = Math.random() > 0.7 ? randomColor() : '';
  });
}, 200);

// Ajoute encore plus d'infos au clic
window.addEventListener('click', () => {
  addInfos();
});
