// scripts.js
const toggleBtn = document.getElementById('toggle-dark');
const darkIcon = document.getElementById('dark-icon');
const lightIcon = document.getElementById('light-icon');
const body = document.body;

// Lưu trạng thái dark mode vào localStorage
function setDarkMode(on) {
    if (on) {
        body.classList.add('dark-mode');
        darkIcon.style.display = 'none';
        lightIcon.style.display = '';
        localStorage.setItem('darkMode', '1');
    } else {
        body.classList.remove('dark-mode');
        darkIcon.style.display = '';
        lightIcon.style.display = 'none';
        localStorage.setItem('darkMode', '0');
    }
}

// Đọc trạng thái dark mode khi load trang
window.addEventListener('DOMContentLoaded', () => {
    const dark = localStorage.getItem('darkMode') === '1';
    setDarkMode(dark);
});

toggleBtn.addEventListener('click', () => {
    setDarkMode(!body.classList.contains('dark-mode'));
});
