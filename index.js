(function() {
document.querySelectorAll('.stars').forEach(stars => {
const level = +stars.dataset.level;
for (let i = 0; i < 5; i++) {
const star = document.createElement('span');
star.textContent = '★';
star.style.color = i < level ? '#facc15' : '#d1d5db';
star.style.fontSize = '1.2rem';
stars.appendChild(star);
}
});
document.getElementById('year').textContent = new Date().getFullYear();
})();
