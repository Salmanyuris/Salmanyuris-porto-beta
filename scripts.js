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

			menuToggle.addEventListener("click", () => {
				mobileMenu.classList.toggle("hidden");
			});

