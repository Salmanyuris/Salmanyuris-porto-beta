document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    // Load saved tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to render tasks
    function renderTasks() {
        todoList.innerHTML = ''; // Clear the list first
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center animate__animated animate__fadeIn';
            li.textContent = task;

            const deleteButton = document.createElement('button');
            deleteButton.className = 'btn btn-danger btn-sm';
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                tasks.splice(index, 1); // Remove task from array
                localStorage.setItem('tasks', JSON.stringify(tasks)); // Update localStorage
                renderTasks(); // Re-render the list
            });

            li.appendChild(deleteButton);
            todoList.appendChild(li);
        });
    }

    // Add new task
    todoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (todoInput.value.trim() !== '') {
            tasks.push(todoInput.value.trim()); // Add task to array
            localStorage.setItem('tasks', JSON.stringify(tasks)); // Save to localStorage
            todoInput.value = ''; // Clear input field
            renderTasks(); // Re-render the list
        }
    });

    // Initial render
    renderTasks();
});

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
    if (count === texts.length) {
      count = 0;  // Kembali ke teks pertama
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typewriter').textContent = letter;

    if (letter.length === currentText.length) {
      // Jika satu kalimat selesai diketik, tunggu 2 detik, lalu hapus perlahan
      setTimeout(erase, 2000);
    } else {
      setTimeout(type, 100); // Kecepatan ketik
    }
  }

  function erase() {
    letter = currentText.slice(0, --index);
    document.getElementById('typewriter').textContent = letter;

    if (letter.length === 0) {
      count++;
      setTimeout(type, 500); // Setelah semua terhapus, lanjut ke teks berikutnya
    } else {
      setTimeout(erase, 50); // Kecepatan hapus
    }
  }

  // Mulai animasi
  type();

  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");

  menuToggle.addEventListener("click", () => {
    // Toggle menu visibility classes
    mobileMenu.classList.toggle("max-h-0");
    mobileMenu.classList.toggle("opacity-0");
    mobileMenu.classList.toggle("max-h-[400px]");
    mobileMenu.classList.toggle("opacity-100");
    mobileMenu.classList.toggle("mt-4");
    mobileMenu.classList.toggle("pb-2");

    // Animate hamburger icon
    if (mobileMenu.classList.contains("max-h-0")) {
      menuIcon.classList.replace("fa-times", "fa-bars");
      menuIcon.style.transform = "rotate(0deg)";
    } else {
      menuIcon.classList.replace("fa-bars", "fa-times");
      menuIcon.style.transform = "rotate(90deg)";
    }
  });
  // --- Light/Dark Mode Logic ---
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");
  const themeToggleDesktop = document.getElementById("theme-toggle-desktop");
  const themeIconMobile = document.getElementById("theme-icon-mobile");
  const themeIconDesktop = document.getElementById("theme-icon-desktop");
  const htmlElement = document.documentElement;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    htmlElement.classList.add("dark");
    updateThemeIcons(true);
  } else if (savedTheme === "light" || (!savedTheme && !systemPrefersDark)) {
    htmlElement.classList.remove("dark");
    updateThemeIcons(false);
  }

  function updateThemeIcons(isDark) {
    if (isDark) {
      themeIconMobile?.classList.replace("fa-moon", "fa-sun");
      themeIconDesktop?.classList.replace("fa-moon", "fa-sun");
    } else {
      themeIconMobile?.classList.replace("fa-sun", "fa-moon");
      themeIconDesktop?.classList.replace("fa-sun", "fa-moon");
    }
  }

  function toggleTheme() {
    htmlElement.classList.toggle("dark");
    const isDark = htmlElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeIcons(isDark);
  }

  if (themeToggleMobile) themeToggleMobile.addEventListener("click", toggleTheme);
  if (themeToggleDesktop) themeToggleDesktop.addEventListener("click", toggleTheme);
