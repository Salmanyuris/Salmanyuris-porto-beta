// --- Initial Theme Check (Run Immediately to prevent FOUC) ---
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const htmlElement = document.documentElement;

if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    htmlElement.classList.add("dark");
} else if (savedTheme === "light" || (!savedTheme && !systemPrefersDark)) {
    htmlElement.classList.remove("dark");
}

document.addEventListener('DOMContentLoaded', function () {
    // --- Todo Form Logic (Optional) ---
    const todoForm = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    if (todoForm && todoInput && todoList) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        function renderTasks() {
            todoList.innerHTML = ''; 
            tasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.className = 'list-group-item d-flex justify-content-between align-items-center animate__animated animate__fadeIn';
                li.textContent = task;
                const deleteButton = document.createElement('button');
                deleteButton.className = 'btn btn-danger btn-sm';
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', function () {
                    tasks.splice(index, 1);
                    localStorage.setItem('tasks', JSON.stringify(tasks));
                    renderTasks();
                });
                li.appendChild(deleteButton);
                todoList.appendChild(li);
            });
        }
        todoForm.addEventListener('submit', function (event) {
            event.preventDefault();
            if (todoInput.value.trim() !== '') {
                tasks.push(todoInput.value.trim());
                localStorage.setItem('tasks', JSON.stringify(tasks));
                todoInput.value = '';
                renderTasks();
            }
        });
        renderTasks();
    }

    // --- Typewriter Animation ---
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const texts = [
            "Salman Yuris!",
            "Web Developer!",
            "Cloud Computing Engineer!",
            "UI/UX Designer!",
            "Data Scientist!",
            "Laravel Developer!",
            "Database Administrator!"
        ];
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';

        function type() {
            if (count === texts.length) count = 0;
            currentText = texts[count];
            letter = currentText.slice(0, ++index);
            typewriterElement.textContent = letter;

            if (letter.length === currentText.length) {
                setTimeout(erase, 2000);
            } else {
                setTimeout(type, 100);
            }
        }

        function erase() {
            letter = currentText.slice(0, --index);
            typewriterElement.textContent = letter;

            if (letter.length === 0) {
                count++;
                setTimeout(type, 500);
            } else {
                setTimeout(erase, 50);
            }
        }
        type();
    }

    // --- Mobile Menu Toggle Logic ---
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");

    if (menuToggle && mobileMenu && menuIcon) {
        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("max-h-0");
            mobileMenu.classList.toggle("opacity-0");
            mobileMenu.classList.toggle("max-h-[400px]");
            mobileMenu.classList.toggle("opacity-100");
            mobileMenu.classList.toggle("mt-4");
            mobileMenu.classList.toggle("pb-2");

            if (mobileMenu.classList.contains("max-h-0")) {
                menuIcon.classList.replace("fa-times", "fa-bars");
                menuIcon.style.transform = "rotate(0deg)";
            } else {
                menuIcon.classList.replace("fa-bars", "fa-times");
                menuIcon.style.transform = "rotate(90deg)";
            }
        });
    }

    // --- Light/Dark Mode Toggle Event Listeners ---
    const themeToggleMobile = document.getElementById("theme-toggle-mobile");
    const themeToggleDesktop = document.getElementById("theme-toggle-desktop");
    const themeIconMobile = document.getElementById("theme-icon-mobile");
    const themeIconDesktop = document.getElementById("theme-icon-desktop");

    function updateThemeIcons(isDark) {
        if (isDark) {
            if (themeIconMobile) themeIconMobile.classList.replace("fa-moon", "fa-sun");
            if (themeIconDesktop) themeIconDesktop.classList.replace("fa-moon", "fa-sun");
        } else {
            if (themeIconMobile) themeIconMobile.classList.replace("fa-sun", "fa-moon");
            if (themeIconDesktop) themeIconDesktop.classList.replace("fa-sun", "fa-moon");
        }
    }

    // Set initial icon states based on the previously computed html class
    const isCurrentlyDark = htmlElement.classList.contains("dark");
    updateThemeIcons(isCurrentlyDark);

    function toggleTheme() {
        htmlElement.classList.toggle("dark");
        const isDark = htmlElement.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        updateThemeIcons(isDark);
    }

    if (themeToggleMobile) themeToggleMobile.addEventListener("click", toggleTheme);
    if (themeToggleDesktop) themeToggleDesktop.addEventListener("click", toggleTheme);
});
