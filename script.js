const sampleTasks = [
      {
        id: 1,
        title: "Complete React Performance Report",
        category: "work",
        priority: "high",
        progress: 0.67,
        updated: new Date('2025-05-16T20:30:00').getTime(),
        subtasks: [
          { text: "Analyze component rendering", done: true },
          { text: "Profile slow components", done: false },
          { text: "Summarize findings", done: false },
        ]
      },
      {
        id: 2,
        title: "Plan Summer Vacation",
        category: "travel",
        priority: "medium",
        progress: 0.5,
        updated: new Date('2025-05-17T09:00:00').getTime(),
        subtasks: [
          { text: "Book flights", done: true },
          { text: "Reserve hotel", done: false },
          { text: "Create itinerary", done: false },
        ]
      },
      {
        id: 3,
        title: "Finish Portfolio Website",
        category: "projects",
        priority: "high",
        progress: 0.95,
        updated: new Date('2025-05-17T15:00:00').getTime(),
        subtasks: [
          { text: "Design homepage", done: true },
          { text: "Implement animations", done: true },
          { text: "Deploy to Netlify", done: false },
        ]
      },
      {
        id: 4,
        title: "Read 'Atomic Habits'",
        category: "personal",
        priority: "low",
        progress: 0.3,
        updated: new Date('2025-05-17T22:00:00').getTime(),
        subtasks: [
          { text: "Read chapters 1-3", done: true },
          { text: "Read chapters 4-7", done: false },
          { text: "Summarize notes", done: false },
        ]
      },
      {
        id: 5,
        title: "Submit Tax Documents",
        category: "finance",
        priority: "high",
        progress: 1.0,
        updated: new Date('2025-05-18T10:00:00').getTime(),
        subtasks: [
          { text: "Collect receipts", done: true },
          { text: "Fill forms", done: true },
          { text: "Submit online", done: true },
        ]
      },
      {
        id: 6,
        title: "Prepare for Data Structures Exam",
        category: "education",
        priority: "medium",
        progress: 0.6,
        updated: new Date('2025-05-18T20:00:00').getTime(),
        subtasks: [
          { text: "Review lectures", done: true },
          { text: "Practice problems", done: false },
          { text: "Mock test", done: false },
        ]
      },
      {
        id: 7,
        title: "Launch Marketing Campaign",
        category: "work",
        priority: "high",
        progress: 0.2,
        updated: new Date('2025-05-17T11:00:00').getTime(),
        subtasks: [
          { text: "Draft email content", done: false },
          { text: "Design graphics", done: false },
          { text: "Schedule posts", done: true },
        ]
      },
      {
        id: 8,
        title: "Prepare Q2 Budget Review",
        category: "finance",
        priority: "high",
        progress: 0.5,
        updated: new Date('2025-05-18T08:00:00').getTime(),
        subtasks: [
          { text: "Collect expense reports", done: true },
          { text: "Analyze variances", done: false },
          { text: "Draft summary", done: false },
        ]
      },
      {
        id: 9,
        title: "Organize Team Meeting",
        category: "work",
        priority: "high",
        progress: 0.33,
        updated: new Date('2025-05-17T13:30:00').getTime(),
        subtasks: [
          { text: "Send invites", done: true },
          { text: "Prepare agenda", done: false },
          { text: "Book meeting room", done: false },
        ]
      },
      {
        id: 10,
        title: "Fix Critical Bugs",
        category: "projects",
        priority: "high",
        progress: 0.6,
        updated: new Date('2025-05-18T12:00:00').getTime(),
        subtasks: [
          { text: "Identify bugs", done: true },
          { text: "Write tests", done: true },
          { text: "Deploy hotfix", done: false },
        ]
      },
      {
        id: 11,
        title: "Client Presentation Prep",
        category: "work",
        priority: "high",
        progress: 0.8,
        updated: new Date('2025-05-18T15:00:00').getTime(),
        subtasks: [
          { text: "Create slides", done: true },
          { text: "Rehearse talk", done: true },
          { text: "Send materials", done: false },
        ]
      },
      {
        id: 12,
        title: "Renew Business License",
        category: "finance",
        priority: "high",
        progress: 0.33,
        updated: new Date('2025-05-17T17:00:00').getTime(),
        subtasks: [
          { text: "Fill renewal form", done: true },
          { text: "Pay fees", done: false },
          { text: "Submit documents", done: false },
        ]
      },
      {
        id: 13,
        title: "Update LinkedIn Profile",
        category: "personal",
        priority: "medium",
        progress: 0.5,
        updated: new Date('2025-05-16T21:00:00').getTime(),
        subtasks: [
          { text: "Add new skills", done: true },
          { text: "Update experience", done: false },
        ]
      },
      {
        id: 14,
        title: "Organize Photo Album",
        category: "personal",
        priority: "medium",
        progress: 0.25,
        updated: new Date('2025-05-17T10:00:00').getTime(),
        subtasks: [
          { text: "Select photos", done: false },
          { text: "Arrange by date", done: true },
          { text: "Order prints", done: false },
        ]
      },
      {
        id: 15,
        title: "Research Investment Options",
        category: "finance",
        priority: "medium",
        progress: 0.33,
        updated: new Date('2025-05-18T09:00:00').getTime(),
        subtasks: [
          { text: "Read articles", done: true },
          { text: "Compare funds", done: false },
          { text: "Consult advisor", done: false },
        ]
      },
      {
        id: 16,
        title: "Practice Yoga Routine",
        category: "personal",
        priority: "medium",
        progress: 0.67,
        updated: new Date('2025-05-18T07:00:00').getTime(),
        subtasks: [
          { text: "Warm-up", done: true },
          { text: "Main session", done: true },
          { text: "Cool down", done: false },
        ]
      },
      {
        id: 17,
        title: "Update Resume",
        category: "work",
        priority: "medium",
        progress: 0.5,
        updated: new Date('2025-05-17T19:00:00').getTime(),
        subtasks: [
          { text: "Add recent job", done: true },
          { text: "Format layout", done: false },
        ]
      },
      {
        id: 18,
        title: "Buy Groceries",
        category: "personal",
        priority: "low",
        progress: 0.33,
        updated: new Date('2025-05-16T18:00:00').getTime(),
        subtasks: [
          { text: "Make list", done: true },
          { text: "Go to store", done: false },
          { text: "Put away items", done: false },
        ]
      },
      {
        id: 19,
        title: "Clean Garage",
        category: "personal",
        priority: "low",
        progress: 0.67,
        updated: new Date('2025-05-17T16:00:00').getTime(),
        subtasks: [
          { text: "Sort boxes", done: true },
          { text: "Sweep floor", done: true },
          { text: "Organize tools", done: false },
        ]
      },
      {
        id: 20,
        title: "Read Tech News",
        category: "education",
        priority: "low",
        progress: 0.5,
        updated: new Date('2025-05-18T14:00:00').getTime(),
        subtasks: [
          { text: "Browse headlines", done: true },
          { text: "Read 2 articles", done: false },
        ]
      },
    ];
    (function forceUpdateAllTaskDates() {
      const min = new Date('2025-05-16T20:00:00').getTime();
      const max = new Date('2025-05-18T23:59:59').getTime();
      function randomDate() {
        return min + Math.floor(Math.random() * (max - min));
      }
      // Update sampleTasks
      sampleTasks.forEach(t => t.updated = randomDate());
      // Update tasks in localStorage if present
      let stored = localStorage.getItem('tasks');
      if (stored) {
        try {
          let arr = JSON.parse(stored);
          arr.forEach(t => t.updated = randomDate());
          localStorage.setItem('tasks', JSON.stringify(arr));
        } catch(e) {}
      }
    })();
    
    let currentCategory = 'all';
    let currentPriority = 'high';
    let tasks = JSON.parse(localStorage.getItem('tasks')) || sampleTasks;
    let themePref = localStorage.getItem('theme');
    let darkMode = themePref === 'dark' || themePref === null;
   
    function timeAgo(ts) {
      const now = Date.now();
      const diff = now - ts;
      const min = 60*1000, hr = 60*min, day = 24*hr, wk = 7*day, mo = 30*day;
      if (diff > mo) return `${Math.floor(diff/mo)}mo ago`;
      if (diff > wk) return `${Math.floor(diff/wk)}w ago`;
      if (diff > day) return `${Math.floor(diff/day)}d ago`;
      if (diff > hr) return `${Math.floor(diff/hr)}h ago`;
      if (diff > min) return `${Math.floor(diff/min)}m ago`;
      return 'just now';
    }
    function formatDate(ts) {
      return new Date(ts).toLocaleString();
    }
    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    function renderTasks() {
      const grid = document.getElementById('tasksGrid');
      grid.innerHTML = '';
      let filtered = tasks.filter(t =>
        (currentCategory === 'all' || t.category === currentCategory) &&
        (currentPriority === 'all' || t.priority === currentPriority) &&
        (!searchQuery || t.title.toLowerCase().includes(searchQuery))
      );
      filtered.forEach((task, i) => {
        const completed = task.subtasks.filter(st => st.done).length;
        const total = task.subtasks.length;
        const percent = Math.round(task.progress * 100);
        const card = document.createElement('div');
        card.className = `task-card ${task.priority} draggable${task.pinned ? ' pinned' : ''}`;
        card.setAttribute('draggable', 'true');
        card.setAttribute('data-id', task.id);
        setTimeout(() => card.classList.add('visible'), 120 + i*180);
        card.innerHTML = `
          <div class="task-header">
            <h3 class="task-title">${task.title}</h3>
            <span class="priority-badge">${task.priority === 'high' ? '🔥' : task.priority === 'medium' ? '⚡' : '🌱'} ${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</span>
          </div>
          <div class="progress-bar">
            <div class="fill" style="width: 0%"></div>
            <span class="progress-text">${completed}/${total} completed</span>
          </div>
          <div class="task-meta" style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
            <span class="meta-date"> <span class="date-icon">📅</span> <span>${timeAgo(task.updated)}</span> <span class="full-date">${formatDate(task.updated)}</span></span>
            <span style="display:flex;align-items:center;gap:2px;margin-left:auto;">
              <button class="task-action-btn delete" title="Delete Task" style="background:none;border:none;font-size:1.25rem;cursor:pointer;padding:4px 8px;">🗑️</button>
              <button class="task-action-btn pin${task.pinned ? ' pinned' : ''}" title="Pin Task" style="background:none;border:none;font-size:1.25rem;cursor:pointer;padding:4px 8px;">📌</button>
              <button class="expand-arrow" title="Show subtasks" style="background:none;border:none;font-size:1.2rem;cursor:pointer;padding:2px 6px;color:var(--primary);transition:color 0.2s;">&#9660;</button>
            </span>
          </div>
          <div class="task-details">
            <ul class="subtasks">
              ${task.subtasks.map((st, idx) => `
                <li class="subtask${st.done ? ' completed' : ''}" data-task="${task.id}" data-sub="${idx}">
                  <span class="checkbox">${renderCheckbox(st.done)}</span>
                  <span>${st.text}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        `;
        // Expand/collapse only on arrow click
        card.querySelector('.expand-arrow').addEventListener('click', e => {
          e.stopPropagation();
          card.classList.toggle('expanded');
          // Rotate arrow
          e.currentTarget.innerHTML = card.classList.contains('expanded') ? '&#9650;' : '&#9660;';
        });
        // Also allow clicking the card (not on buttons) to expand/collapse
        card.addEventListener('click', function(e) {
          // Ignore clicks on arrow, pin, or delete buttons
          if (
            e.target.closest('.expand-arrow') ||
            e.target.closest('.task-action-btn.delete') ||
            e.target.closest('.task-action-btn.pin')
          ) return;
          card.classList.toggle('expanded');
          // Sync arrow direction
          const arrow = card.querySelector('.expand-arrow');
          if (arrow) arrow.innerHTML = card.classList.contains('expanded') ? '&#9650;' : '&#9660;';
        });
        // Drag-and-drop
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragover', dragOver);
        card.addEventListener('drop', dropCard);
        card.addEventListener('dragend', dragEnd);
        // Subtask checkbox
        card.querySelectorAll('.subtask').forEach(stEl => {
          stEl.querySelector('.checkbox').addEventListener('click', evt => {
            evt.stopPropagation();
            const tid = +stEl.dataset.task;
            const sid = +stEl.dataset.sub;
            const t = tasks.find(t => t.id === tid);
            t.subtasks[sid].done = !t.subtasks[sid].done;
            t.progress = t.subtasks.filter(st => st.done).length / t.subtasks.length;
            t.updated = Date.now();
            saveTasks();
            renderTasks();
            if (t.progress === 1) confettiBurst();
          });
        });
        // Action buttons (delete & pin) now in .task-meta
        card.querySelector('.task-action-btn.delete').addEventListener('click', evt => {
          evt.stopPropagation();
          if (confirm('Delete this task?')) {
            const idx = tasks.findIndex(t => t.id === task.id);
            if (idx !== -1) {
              tasks.splice(idx, 1);
              saveTasks();
              renderTasks();
            }
          }
        });
        card.querySelector('.task-action-btn.pin').addEventListener('click', evt => {
          evt.stopPropagation();
          task.pinned = !task.pinned;
          // Move pinned tasks to top
          tasks = [
            ...tasks.filter(t => t.pinned),
            ...tasks.filter(t => !t.pinned)
          ];
          saveTasks();
          renderTasks();
        });
        grid.appendChild(card);
      });
      setTimeout(initProgressBars, 100);
    }
    function renderCheckbox(done) {
      return `<svg viewBox="0 0 18 18"><circle cx="9" cy="9" r="7" stroke-width="2.5" stroke="#7f7fd5" fill="none"/><path d="M5 9.5l3 3 5-5" stroke="#2ecc71" stroke-width="2.5" fill="none" style="stroke-dasharray:18;stroke-dashoffset:${done ? 0 : 18};transition:stroke-dashoffset 0.5s cubic-bezier(.68,-0.55,.27,1.55);"/></svg>`;
    }
    // --- Progress Bar Animation ---
    function initProgressBars() {
      document.querySelectorAll('.task-card').forEach(card => {
        const bar = card.querySelector('.progress-bar .fill');
        const tid = +card.getAttribute('data-id');
        const t = tasks.find(t => t.id === tid);
        if (!bar || !t) return;
        setTimeout(() => {
          bar.style.width = `${Math.round(t.progress*100)}%`;
        }, 100);
      });
    }
    // --- Sidebar ---
    document.querySelectorAll('.category').forEach(cat => {
      cat.addEventListener('click', () => {
        document.querySelectorAll('.category').forEach(c => c.classList.remove('active'));
        cat.classList.add('active');
        currentCategory = cat.dataset.category;
        renderTasks();
        closeSidebar();
      });
    });
    // --- Priority Filters ---
    document.querySelectorAll('.filter').forEach(fil => {
      fil.addEventListener('click', e => {
        document.querySelectorAll('.filter').forEach(f => f.classList.remove('active'));
        fil.classList.add('active');
        currentPriority = fil.dataset.priority;
        renderTasks();
        // Particle effect
        particleBurst(fil, fil.classList.contains('high') ? '#ff6b6b' : fil.classList.contains('medium') ? '#ff9f43' : '#2ecc71');
      });
    });
    // --- Search ---
    let searchQuery = '';
    document.getElementById('searchBar').addEventListener('input', e => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderTasks();
    });
    // --- Theme Toggle ---
    function setTheme(dark) {
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : '');
      document.getElementById('themeIcon').textContent = dark ? '☀️' : '🌙';
      document.getElementById('themeText').textContent = dark ? 'Light Mode' : 'Dark Mode';
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    }
    document.getElementById('themeToggle').addEventListener('click', () => {
      darkMode = !darkMode;
      setTheme(darkMode);
    });
    setTheme(darkMode);
    // --- Hamburger (Mobile) ---
    const sidebar = document.querySelector('aside.sidebar');
    const hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      hamburger.classList.toggle('open');
      animateHamburger(hamburger.classList.contains('open'));
    });
    function closeSidebar() {
      if (window.innerWidth < 900) {
        sidebar.classList.remove('open');
        hamburger.classList.remove('open');
        animateHamburger(false);
      }
    }
    function animateHamburger(open) {
      const spans = hamburger.querySelectorAll('span');
      if (open) {
        spans[0].style.transform = 'translateY(10px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-10px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
      }
    }
    // --- Confetti ---
    function confettiBurst() {
      const canvas = document.getElementById('confetti');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.classList.add('active');
      const ctx = canvas.getContext('2d');
      const confetti = [];
      for (let i = 0; i < 80; i++) {
        confetti.push({
          x: Math.random()*canvas.width,
          y: -20,
          r: 6+Math.random()*8,
          d: Math.random()*canvas.height/2,
          color: `hsl(${Math.random()*360},90%,60%)`,
          tilt: Math.random()*10-5,
          tiltAngle: 0,
          tiltAngleInc: (Math.random()*0.07)+.05
        });
      }
      let frame = 0;
      function draw() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        confetti.forEach(c => {
          ctx.beginPath();
          ctx.ellipse(c.x, c.y, c.r, c.r/2, c.tilt, 0, 2*Math.PI);
          ctx.fillStyle = c.color;
          ctx.fill();
        });
      }
      function update() {
        confetti.forEach(c => {
          c.y += 2 + Math.random()*2;
          c.x += Math.sin(frame/10 + c.d/80)*2;
          c.tiltAngle += c.tiltAngleInc;
          c.tilt = Math.sin(c.tiltAngle)*8;
        });
      }
      function animate() {
        draw();
        update();
        frame++;
        if (frame < 80) requestAnimationFrame(animate);
        else setTimeout(() => canvas.classList.remove('active'), 800);
      }
      animate();
    }
    // --- Particle Burst for Filter ---
    function particleBurst(el, color) {
      for (let i=0; i<12; i++) {
        const p = document.createElement('span');
        p.style.position = 'absolute';
        p.style.left = '50%';
        p.style.top = '50%';
        p.style.width = '8px';
        p.style.height = '8px';
        p.style.borderRadius = '50%';
        p.style.background = color;
        p.style.pointerEvents = 'none';
        p.style.zIndex = 10;
        p.style.transform = `translate(-50%,-50%) scale(1)`;
        p.style.opacity = '1';
        el.appendChild(p);
        setTimeout(() => {
          p.style.transition = 'all 0.6s cubic-bezier(.68,-0.55,.27,1.55)';
          p.style.transform = `translate(-50%,-50%) scale(0.2) translate(${Math.cos(i/12*2*Math.PI)*32}px,${Math.sin(i/12*2*Math.PI)*32}px)`;
          p.style.opacity = '0';
        }, 10);
        setTimeout(() => el.removeChild(p), 700);
      }
    }
    // --- Drag-and-drop ---
    let dragSrc = null;
    function dragStart(e) {
      dragSrc = this;
      this.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', this.getAttribute('data-id'));
    }
    function dragOver(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      const over = this;
      if (over !== dragSrc) {
        over.parentNode.insertBefore(dragSrc, over);
      }
    }
    function dropCard(e) {
      e.stopPropagation();
      this.classList.remove('dragging');
      const id = +this.getAttribute('data-id');
      const idx = tasks.findIndex(t => t.id === id);
      const newIdx = Array.from(this.parentNode.children).indexOf(this);
      if (idx !== newIdx) {
        const [moved] = tasks.splice(idx, 1);
        tasks.splice(newIdx, 0, moved);
        saveTasks();
        renderTasks();
      }
    }
    function dragEnd() {
      this.classList.remove('dragging');
    }
    // --- Scroll-triggered fade-in ---
    function fadeInOnScroll() {
      const cards = document.querySelectorAll('.task-card');
      const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.2 });
      cards.forEach(card => observer.observe(card));
    }
    // --- Swipe gestures (mobile) ---
    let touchStartX = 0;
    document.addEventListener('touchstart', e => {
      if (e.touches.length === 1) touchStartX = e.touches[0].clientX;
    });
    document.addEventListener('touchend', e => {
      if (e.changedTouches.length === 1) {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (dx > 80) sidebar.classList.add('open');
        if (dx < -80) sidebar.classList.remove('open');
      }
    });
    // --- Initial Render ---
    renderTasks();
    fadeInOnScroll();
    // --- Page Load Animations ---
    window.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.category').forEach((cat, i) => {
        cat.style.opacity = '0';
        cat.style.transform = 'translateX(-40px)';
        setTimeout(() => {
          cat.style.transition = 'opacity 0.7s cubic-bezier(.68,-0.55,.27,1.55), transform 0.7s cubic-bezier(.68,-0.55,.27,1.55)';
          cat.style.opacity = '1';
          cat.style.transform = 'translateX(0)';
        }, 200 + i*90);
      });
    });
    // --- Responsive: close sidebar on resize ---
    window.addEventListener('resize', closeSidebar);
    // --- Add Task Modal ---
    const addTaskBtn = document.getElementById('addTaskBtn');
    const modalBg = document.getElementById('modalBg');
    const addTaskModal = document.getElementById('addTaskModal');
    const addTaskForm = document.getElementById('addTaskForm');
    const subtasksList = document.getElementById('subtasksList');
    const addSubtaskLine = document.getElementById('addSubtaskLine');
    const cancelModal = document.getElementById('cancelModal');
    function openModal() {
      modalBg.style.display = 'flex';
      setTimeout(() => modalBg.style.opacity = '1', 10);
      resetModal();
    }
    function closeModal() {
      modalBg.style.opacity = '0';
      setTimeout(() => modalBg.style.display = 'none', 250);
    }
    addTaskBtn.addEventListener('click', openModal);
    cancelModal.addEventListener('click', closeModal);
    modalBg.addEventListener('click', e => { if (e.target === modalBg) closeModal(); });
    function resetModal() {
      addTaskForm.reset();
      subtasksList.innerHTML = '';
      addSubtaskLine.click();
    }
    addSubtaskLine.addEventListener('click', () => {
      const line = document.createElement('div');
      line.className = 'subtask-line';
      line.innerHTML = `<input type="text" maxlength="40" placeholder="Subtask" required><button type="button" class="remove-subtask">✕</button>`;
      line.querySelector('.remove-subtask').onclick = () => line.remove();
      subtasksList.appendChild(line);
    });
    addTaskForm.addEventListener('submit', e => {
      e.preventDefault();
      const title = document.getElementById('taskTitle').value.trim();
      const category = document.getElementById('taskCategory').value;
      const priority = document.getElementById('taskPriority').value;
      const subtaskInputs = subtasksList.querySelectorAll('input');
      const subtasks = Array.from(subtaskInputs).map(input => ({ text: input.value.trim(), done: false })).filter(st => st.text);
      if (!title || subtasks.length === 0) {
        alert('Please enter a title and at least one subtask.');
        return;
      }
      const newTask = {
        id: Date.now(),
        title,
        category,
        priority,
        progress: 0,
        updated: Date.now(),
        subtasks
      };
      tasks.unshift(newTask);
      saveTasks();
      renderTasks();
      closeModal();
    });