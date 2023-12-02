const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const navbar = document.querySelector('.mid-container');

menuBtn.addEventListener('click', function () {
    navbar.classList.add('active');
    menuBtn.style.display = 'none';
    cancelBtn.style.display = 'inline';
});

cancelBtn.addEventListener('click', function () {
    navbar.classList.remove('active');
    cancelBtn.style.display = 'none';
    menuBtn.style.display = 'inline';
});

const themeIcon = document.querySelector('#d-l-mode');

themeIcon.onclick = function () {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.src = './assets/sun.png'
    }
    else {
        themeIcon.src = './assets/moon.png'
    }
}