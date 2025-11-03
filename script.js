// Translations
const translations = {
    en: {
        // Header
        myTasks: 'MY TASKS',
        xp: 'XP:',
        tasks: 'Tasks:',
        completed: 'Completed:',
        achievements: 'Achievements',
        loadFromFile: '📂 Load from File',
        selectSaveFile: '📁 Select Save File',

        // Projects
        projects: 'PROJECTS',
        newProject: '+ New Project',
        noProject: 'No Project',
        createProject: 'Create',
        projectNamePlaceholder: 'Project name...',

        // Task Input
        taskPlaceholder: 'Write a new task...',
        addTask: '+ Add',

        // Priority
        priorityLow: '📎 Low',
        priorityMedium: '📌 Medium',
        priorityHigh: '⚠️ High',
        priorityCritical: '🔥 Critical',
        low: 'Low',
        medium: 'Medium',
        high: 'High',
        critical: 'Critical',

        // Status columns
        todoColumn: '📋 TO DO',
        inProgressColumn: '⚒ IN PROGRESS',
        doneColumn: '✓ DONE',

        // Colors
        colorGreen: 'Green',
        colorBlue: 'Blue',
        colorOrange: 'Orange',
        colorPurple: 'Purple',
        colorRed: 'Red',
        colorYellow: 'Yellow',

        // Achievements
        achievementsTitle: '🏆 ACHIEVEMENTS',
        achievementUnlocked: 'Achievement Unlocked!',
        newProjectTitle: 'New Project',

        // Achievement definitions
        achievement_firstTask_name: 'First Steps',
        achievement_firstTask_desc: 'Create your first task',
        achievement_taskMaster_name: 'Task Master',
        achievement_taskMaster_desc: 'Create 10 tasks',
        achievement_taskLegend_name: 'Task Legend',
        achievement_taskLegend_desc: 'Create 50 tasks',
        achievement_firstComplete_name: 'Done!',
        achievement_firstComplete_desc: 'Complete your first task',
        achievement_productive_name: 'Productive',
        achievement_productive_desc: 'Complete 10 tasks',
        achievement_unstoppable_name: 'Unstoppable',
        achievement_unstoppable_desc: 'Complete 50 tasks',
        achievement_organizer_name: 'Organizer',
        achievement_organizer_desc: 'Create your first project',
        achievement_projectMaster_name: 'Project Master',
        achievement_projectMaster_desc: 'Create 5 projects',
        achievement_speedRunner_name: 'Speed Runner',
        achievement_speedRunner_desc: 'Complete 3 tasks at once',
        achievement_xpHunter_name: 'XP Hunter',
        achievement_xpHunter_desc: 'Earn 500 XP',

        // Alerts and confirms
        browserNotSupported: '❌ Your browser does not support auto-save to file.\nUse Chrome, Edge or Opera.\n\nData is saved in LocalStorage.',
        fileSelected: 'File selected',
        autoSaveEnabled: 'All changes will now auto-save to this file!',
        deleteProjectConfirm: 'Delete project? Tasks will not be deleted, but will lose association with the project.',
        invalidFileFormat: '❌ Invalid file format!',
        loadBackupConfirm: 'Load data from backup?',
        currentDataReplaced: 'Current data will be replaced!',
        dataLoadedSuccess: '✅ Data loaded successfully!',
        errorLoadingFile: '❌ Error loading file!'
    },
    ua: {
        // Header
        myTasks: 'МОЇ ЗАВДАННЯ',
        xp: 'XP:',
        tasks: 'Завдань:',
        completed: 'Виконано:',
        achievements: 'Досягнення',
        loadFromFile: '📂 Завантажити з файлу',
        selectSaveFile: '📁 Вибрати файл збереження',

        // Projects
        projects: 'ПРОЄКТИ',
        newProject: '+ Новий проєкт',
        noProject: 'Без проєкту',
        createProject: 'Створити',
        projectNamePlaceholder: 'Назва проєкту...',

        // Task Input
        taskPlaceholder: 'Напишіть нове завдання...',
        addTask: '+ Додати',

        // Priority
        priorityLow: '📎 Низький',
        priorityMedium: '📌 Середній',
        priorityHigh: '⚠️ Високий',
        priorityCritical: '🔥 Критичний',
        low: 'Низький',
        medium: 'Середній',
        high: 'Високий',
        critical: 'Критичний',

        // Status columns
        todoColumn: '📋 ЗРОБИТИ',
        inProgressColumn: '⚒ В РОБОТІ',
        doneColumn: '✓ ГОТОВО',

        // Colors
        colorGreen: 'Зелений',
        colorBlue: 'Синій',
        colorOrange: 'Помаранчевий',
        colorPurple: 'Фіолетовий',
        colorRed: 'Червоний',
        colorYellow: 'Жовтий',

        // Achievements
        achievementsTitle: '🏆 ДОСЯГНЕННЯ',
        achievementUnlocked: 'Досягнення відкрито!',
        newProjectTitle: 'Новий проєкт',

        // Achievement definitions
        achievement_firstTask_name: 'Перші кроки',
        achievement_firstTask_desc: 'Створіть своє перше завдання',
        achievement_taskMaster_name: 'Майстер завдань',
        achievement_taskMaster_desc: 'Створіть 10 завдань',
        achievement_taskLegend_name: 'Легенда завдань',
        achievement_taskLegend_desc: 'Створіть 50 завдань',
        achievement_firstComplete_name: 'Готово!',
        achievement_firstComplete_desc: 'Виконайте своє перше завдання',
        achievement_productive_name: 'Продуктивний',
        achievement_productive_desc: 'Виконайте 10 завдань',
        achievement_unstoppable_name: 'Невпинний',
        achievement_unstoppable_desc: 'Виконайте 50 завдань',
        achievement_organizer_name: 'Організатор',
        achievement_organizer_desc: 'Створіть свій перший проєкт',
        achievement_projectMaster_name: 'Майстер проєктів',
        achievement_projectMaster_desc: 'Створіть 5 проєктів',
        achievement_speedRunner_name: 'Спідранер',
        achievement_speedRunner_desc: 'Виконайте 3 завдання одночасно',
        achievement_xpHunter_name: 'Мисливець за XP',
        achievement_xpHunter_desc: 'Заробіть 500 XP',

        // Alerts and confirms
        browserNotSupported: '❌ Ваш браузер не підтримує автозбереження у файл.\nВикористовуйте Chrome, Edge або Opera.\n\nДані зберігаються в LocalStorage.',
        fileSelected: 'Файл обрано',
        autoSaveEnabled: 'Всі зміни тепер автоматично зберігаються у цей файл!',
        deleteProjectConfirm: 'Видалити проєкт? Завдання не будуть видалені, але втратять зв\'язок з проєктом.',
        invalidFileFormat: '❌ Неправильний формат файлу!',
        loadBackupConfirm: 'Завантажити дані з резервної копії?',
        currentDataReplaced: 'Поточні дані будуть замінені!',
        dataLoadedSuccess: '✅ Дані успішно завантажено!',
        errorLoadingFile: '❌ Помилка завантаження файлу!'
    }
};

// Current language
let currentLanguage = 'en';

// Data Storage
let tasks = [];
let projects = [];
let achievements = [];
let stats = {
    xp: 0,
    tasksCreated: 0,
    tasksCompleted: 0,
    projectsCreated: 0
};

let selectedProject = null;
let draggedTask = null;
let fileHandle = null; // File handle for auto-save

// Achievement Definitions
const achievementDefinitions = [
    { id: 'first-task', name: 'First Steps', description: 'Create your first task', icon: '🌱', requirement: () => stats.tasksCreated >= 1, xp: 10 },
    { id: 'task-master', name: 'Task Master', description: 'Create 10 tasks', icon: '⭐', requirement: () => stats.tasksCreated >= 10, xp: 50 },
    { id: 'task-legend', name: 'Task Legend', description: 'Create 50 tasks', icon: '🏆', requirement: () => stats.tasksCreated >= 50, xp: 200 },
    { id: 'first-complete', name: 'Done!', description: 'Complete your first task', icon: '✓', requirement: () => stats.tasksCompleted >= 1, xp: 15 },
    { id: 'productive', name: 'Productive', description: 'Complete 10 tasks', icon: '💪', requirement: () => stats.tasksCompleted >= 10, xp: 75 },
    { id: 'unstoppable', name: 'Unstoppable', description: 'Complete 50 tasks', icon: '🚀', requirement: () => stats.tasksCompleted >= 50, xp: 300 },
    { id: 'organizer', name: 'Organizer', description: 'Create your first project', icon: '📁', requirement: () => stats.projectsCreated >= 1, xp: 20 },
    { id: 'project-master', name: 'Project Master', description: 'Create 5 projects', icon: '🎯', requirement: () => stats.projectsCreated >= 5, xp: 100 },
    { id: 'speed-runner', name: 'Speed Runner', description: 'Complete 3 tasks at once', icon: '⚡', requirement: () => false, xp: 50 }, // Special achievement
    { id: 'xp-hunter', name: 'XP Hunter', description: 'Earn 500 XP', icon: '💎', requirement: () => stats.xp >= 500, xp: 0 },
];

// Translation functions
function t(key) {
    return translations[currentLanguage][key] || key;
}

function applyTranslations() {
    // Header
    document.querySelector('.title').textContent = `⛏ ${t('myTasks')}`;
    document.querySelectorAll('.stat-label')[0].textContent = t('xp');
    document.querySelectorAll('.stat-label')[1].textContent = t('tasks');
    document.querySelectorAll('.stat-label')[2].textContent = t('completed');

    // Buttons with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key) {
            el.textContent = t(key);
        }
    });

    // Projects section
    document.querySelector('.project-header h2').textContent = t('projects');
    document.getElementById('add-project-btn').textContent = t('newProject');

    // Task input
    document.getElementById('task-input').placeholder = t('taskPlaceholder');
    document.getElementById('add-task-btn').textContent = t('addTask');

    // Priority select
    const prioritySelect = document.getElementById('priority-select');
    prioritySelect.options[0].text = t('priorityLow');
    prioritySelect.options[1].text = t('priorityMedium');
    prioritySelect.options[2].text = t('priorityHigh');
    prioritySelect.options[3].text = t('priorityCritical');

    // Status columns
    document.querySelector('[data-status="todo"] h3').textContent = t('todoColumn');
    document.querySelector('[data-status="in-progress"] h3').textContent = t('inProgressColumn');
    document.querySelector('[data-status="done"] h3').textContent = t('doneColumn');

    // Modals
    document.querySelector('#achievements-modal .modal-header h2').textContent = t('achievementsTitle');
    document.querySelector('#project-modal .modal-header h2').textContent = t('newProjectTitle');
    document.getElementById('create-project-btn').textContent = t('createProject');
    document.getElementById('project-name-input').placeholder = t('projectNamePlaceholder');

    // Achievement notification
    document.querySelector('.achievement-title').textContent = t('achievementUnlocked');

    // Color select
    const colorSelect = document.getElementById('project-color-input');
    colorSelect.options[0].text = t('colorGreen');
    colorSelect.options[1].text = t('colorBlue');
    colorSelect.options[2].text = t('colorOrange');
    colorSelect.options[3].text = t('colorPurple');
    colorSelect.options[4].text = t('colorRed');
    colorSelect.options[5].text = t('colorYellow');

    // Re-render dynamic content
    renderProjects();
    renderAchievements();
    updateTaskPriorityTitles();
}

function updateTaskPriorityTitles() {
    document.querySelectorAll('.task-priority-icon').forEach(icon => {
        const title = icon.getAttribute('title');
        if (title) {
            icon.setAttribute('title', t(title));
        }
    });
}

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    applyTranslations();
}

function loadLanguage() {
    const saved = localStorage.getItem('language');
    if (saved && translations[saved]) {
        currentLanguage = saved;
        document.getElementById('language-select').value = saved;
    }
}

// Initialize
function init() {
    loadLanguage();
    loadData();
    initAchievements();
    renderProjects();
    renderTasks();
    updateStats();
    applyTranslations();
    attachEventListeners();
}

// Event Listeners
function attachEventListeners() {
    // Task input
    document.getElementById('add-task-btn').addEventListener('click', addTask);
    document.getElementById('task-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    // Project modal
    document.getElementById('add-project-btn').addEventListener('click', () => {
        document.getElementById('project-modal').classList.remove('hidden');
    });
    document.getElementById('close-project-modal').addEventListener('click', () => {
        document.getElementById('project-modal').classList.add('hidden');
    });
    document.getElementById('create-project-btn').addEventListener('click', createProject);
    document.getElementById('project-name-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') createProject();
    });

    // Achievements modal
    document.getElementById('achievements-btn').addEventListener('click', () => {
        renderAchievements();
        document.getElementById('achievements-modal').classList.remove('hidden');
    });
    document.getElementById('close-achievements').addEventListener('click', () => {
        document.getElementById('achievements-modal').classList.add('hidden');
    });

    // Drag and drop
    setupDragAndDrop();

    // File operations
    document.getElementById('select-file-btn').addEventListener('click', selectSaveFile);
    document.getElementById('import-btn').addEventListener('click', () => {
        document.getElementById('import-file-input').click();
    });
    document.getElementById('import-file-input').addEventListener('change', importData);

    // Language selector
    document.getElementById('language-select').addEventListener('change', (e) => {
        changeLanguage(e.target.value);
    });
}

// Task Management
function addTask() {
    const input = document.getElementById('task-input');
    const projectSelect = document.getElementById('project-select');
    const prioritySelect = document.getElementById('priority-select');
    const text = input.value.trim();

    if (!text) return;

    const task = {
        id: Date.now(),
        text: text,
        status: 'todo',
        priority: prioritySelect.value || 'medium',
        projectId: projectSelect.value ? parseInt(projectSelect.value) : null,
        createdAt: new Date().toISOString()
    };

    tasks.push(task);
    stats.tasksCreated++;
    stats.xp += 5;

    input.value = '';
    projectSelect.value = '';
    prioritySelect.value = 'medium';

    saveData();
    renderTasks();
    updateStats();
    checkAchievements();
}

function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
    saveData();
    renderTasks();
    updateStats();
}

function moveTask(taskId, newStatus) {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    const oldStatus = task.status;
    task.status = newStatus;

    // Award XP and update stats
    if (oldStatus !== 'done' && newStatus === 'done') {
        stats.tasksCompleted++;
        stats.xp += 10;
        checkAchievements();
    }

    saveData();
    renderTasks();
    updateStats();
}

// Project Management
function createProject() {
    const nameInput = document.getElementById('project-name-input');
    const colorInput = document.getElementById('project-color-input');
    const name = nameInput.value.trim();

    if (!name) return;

    const project = {
        id: Date.now(),
        name: name,
        color: colorInput.value
    };

    projects.push(project);
    stats.projectsCreated++;
    stats.xp += 15;

    nameInput.value = '';
    document.getElementById('project-modal').classList.add('hidden');

    saveData();
    renderProjects();
    updateStats();
    checkAchievements();
}

function deleteProject(projectId) {
    if (!confirm(t('deleteProjectConfirm'))) return;

    projects = projects.filter(p => p.id !== projectId);
    tasks.forEach(task => {
        if (task.projectId == projectId) {
            task.projectId = null;
        }
    });

    if (selectedProject === projectId) {
        selectedProject = null;
    }

    saveData();
    renderProjects();
    renderTasks();
}

function toggleProjectFilter(projectId) {
    if (selectedProject === projectId) {
        selectedProject = null;
    } else {
        selectedProject = projectId;
    }
    renderProjects();
    renderTasks();
}

// Rendering
function renderProjects() {
    const projectList = document.getElementById('project-list');
    const projectSelect = document.getElementById('project-select');

    // Render chips
    projectList.innerHTML = '';
    projects.forEach(project => {
        const chip = document.createElement('div');
        chip.className = 'project-chip';
        if (selectedProject === project.id) {
            chip.classList.add('active');
        }
        chip.style.borderColor = project.color;
        chip.style.cursor = 'pointer';
        chip.innerHTML = `
            <span>${project.name}</span>
            <button class="delete-project" onclick="event.stopPropagation(); deleteProject(${project.id})">×</button>
        `;
        chip.addEventListener('click', () => toggleProjectFilter(project.id));
        projectList.appendChild(chip);
    });

    // Update select
    projectSelect.innerHTML = `<option value="">${t('noProject')}</option>`;
    projects.forEach(project => {
        const option = document.createElement('option');
        option.value = project.id;
        option.textContent = project.name;
        projectSelect.appendChild(option);
    });
}

function renderTasks() {
    const statuses = ['todo', 'in-progress', 'done'];
    const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };

    statuses.forEach(status => {
        const container = document.getElementById(`${status}-tasks`);
        container.innerHTML = '';

        const filteredTasks = tasks.filter(task => {
            const statusMatch = task.status === status;
            const projectMatch = selectedProject === null || task.projectId == selectedProject;
            return statusMatch && projectMatch;
        });

        // Sort by priority (critical first)
        filteredTasks.sort((a, b) => {
            const priorityA = priorityOrder[a.priority || 'medium'];
            const priorityB = priorityOrder[b.priority || 'medium'];
            return priorityA - priorityB;
        });

        filteredTasks.forEach(task => {
            const card = createTaskCard(task);
            container.appendChild(card);
        });

        // Update counter
        document.getElementById(`${status}-count`).textContent = filteredTasks.length;
    });
}

function createTaskCard(task) {
    const card = document.createElement('div');
    card.className = 'task-card';
    card.draggable = true;
    card.dataset.taskId = task.id;

    // Priority colors and labels
    const priorityConfig = {
        critical: { color: '#e74c3c', icon: '🔥' },
        high: { color: '#f39c12', icon: '⚠️' },
        medium: { color: '#3498db', icon: '📌' },
        low: { color: '#95a5a6', icon: '📎' }
    };

    const priority = task.priority || 'medium';
    const priorityInfo = priorityConfig[priority];

    const project = projects.find(p => p.id == task.projectId);
    const projectTag = project
        ? `<div class="task-project" style="border-color: ${project.color}">${project.name}</div>`
        : '';

    const priorityTag = `<span class="task-priority-icon" style="background-color: ${priorityInfo.color};" title="${priority}">${priorityInfo.icon}</span>`;

    card.innerHTML = `
        <div class="task-header">
            ${priorityTag}
            <div class="task-text">${task.text}</div>
            <div class="task-actions">
                <button class="task-btn" onclick="deleteTask(${task.id})">×</button>
            </div>
        </div>
        ${projectTag ? `<div class="task-meta">${projectTag}</div>` : ''}
    `;

    // Drag events
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragend', handleDragEnd);

    return card;
}

// Drag and Drop
function setupDragAndDrop() {
    const columns = document.querySelectorAll('.task-list');

    columns.forEach(column => {
        column.addEventListener('dragover', handleDragOver);
        column.addEventListener('drop', handleDrop);
    });
}

function handleDragStart(e) {
    draggedTask = parseInt(e.target.dataset.taskId);
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    draggedTask = null;
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();

    const column = e.target.closest('.column');
    if (!column || !draggedTask) return;

    const newStatus = column.dataset.status;
    moveTask(draggedTask, newStatus);
}

// Achievements
function initAchievements() {
    achievements = achievementDefinitions.map(def => ({
        ...def,
        unlocked: false
    }));

    // Load unlocked state from localStorage
    const saved = localStorage.getItem('achievements');
    if (saved) {
        const savedAchievements = JSON.parse(saved);
        achievements.forEach(ach => {
            const savedAch = savedAchievements.find(s => s.id === ach.id);
            if (savedAch) {
                ach.unlocked = savedAch.unlocked;
            }
        });
    }
}

function checkAchievements() {
    let newUnlocks = 0;

    achievements.forEach(achievement => {
        if (!achievement.unlocked && achievement.requirement()) {
            achievement.unlocked = true;
            newUnlocks++;
            stats.xp += achievement.xp;
            showAchievementNotification(achievement);
        }
    });

    if (newUnlocks > 0) {
        saveAchievements();
        updateStats();
    }
}

function getAchievementTranslation(achievementId, type) {
    // Convert 'first-task' to 'firstTask'
    const camelCaseId = achievementId.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    const key = `achievement_${camelCaseId}_${type}`;
    return t(key);
}

function showAchievementNotification(achievement) {
    const notification = document.getElementById('achievement-notification');
    const nameEl = notification.querySelector('.achievement-name');

    const translatedName = getAchievementTranslation(achievement.id, 'name');
    nameEl.textContent = `${achievement.icon} ${translatedName}`;
    notification.classList.remove('hidden');

    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

function renderAchievements() {
    const container = document.getElementById('achievements-list');
    const unlockedCount = achievements.filter(a => a.unlocked).length;

    document.getElementById('achievements-count').textContent = unlockedCount;

    container.innerHTML = '';
    achievements.forEach(achievement => {
        const item = document.createElement('div');
        item.className = `achievement-item ${achievement.unlocked ? 'unlocked' : 'locked'}`;

        const translatedName = getAchievementTranslation(achievement.id, 'name');
        const translatedDesc = getAchievementTranslation(achievement.id, 'desc');

        item.innerHTML = `
            <div class="icon">${achievement.icon}</div>
            <div class="name">${translatedName}</div>
            <div class="description">${translatedDesc}</div>
            ${achievement.unlocked ? `<div style="margin-top: 8px; color: var(--gold-yellow); font-size: 8px;">+${achievement.xp} XP</div>` : ''}
        `;
        container.appendChild(item);
    });
}

// Stats
function updateStats() {
    document.getElementById('xp-count').textContent = stats.xp;
    document.getElementById('task-count').textContent = tasks.length;
    document.getElementById('completed-count').textContent = tasks.filter(t => t.status === 'done').length;

    const unlockedCount = achievements.filter(a => a.unlocked).length;
    document.getElementById('achievements-count').textContent = unlockedCount;
}

// Data Persistence
async function saveData() {
    // Always save to localStorage as backup
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('stats', JSON.stringify(stats));

    // Also save to file if available
    await saveToFile();
}

async function saveAchievements() {
    localStorage.setItem('achievements', JSON.stringify(achievements));
    await saveToFile();
}

function loadData() {
    const savedTasks = localStorage.getItem('tasks');
    const savedProjects = localStorage.getItem('projects');
    const savedStats = localStorage.getItem('stats');

    if (savedTasks) tasks = JSON.parse(savedTasks);
    if (savedProjects) projects = JSON.parse(savedProjects);
    if (savedStats) stats = JSON.parse(savedStats);
}

// File System Access API
async function selectSaveFile() {
    try {
        // Check if File System Access API is supported
        if (!('showSaveFilePicker' in window)) {
            alert(t('browserNotSupported'));
            return;
        }

        const handle = await window.showSaveFilePicker({
            suggestedName: 'tasks.json',
            types: [{
                description: 'JSON file',
                accept: { 'application/json': ['.json'] }
            }]
        });

        fileHandle = handle;
        console.log('✅ Save file selected:', handle.name);
        alert(`✅ ${t('fileSelected')}: ${handle.name}\n\n${t('autoSaveEnabled')}`);

        // Save current data to the file
        await saveToFile();

    } catch (error) {
        if (error.name !== 'AbortError') {
            console.error('File selection error:', error);
        }
    }
}

async function saveToFile() {
    if (!fileHandle) return;

    try {
        const data = {
            tasks,
            projects,
            stats,
            achievements: achievements.map(a => ({ id: a.id, unlocked: a.unlocked })),
            lastSaved: new Date().toISOString()
        };

        const writable = await fileHandle.createWritable();
        await writable.write(JSON.stringify(data, null, 2));
        await writable.close();

        console.log('💾 Auto-save to file');

    } catch (error) {
        console.error('File save error:', error);
        // Don't alert on every save error, just log it
    }
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);

            // Validate data
            if (!data.tasks || !data.projects || !data.stats) {
                alert(t('invalidFileFormat'));
                return;
            }

            // Confirm import
            if (!confirm(`${t('loadBackupConfirm')}\n\n${t('tasks')}: ${data.tasks.length}\n${t('projects')}: ${data.projects.length}\nXP: ${data.stats.xp}\n\n${t('currentDataReplaced')}`)) {
                return;
            }

            // Import data
            tasks = data.tasks;
            projects = data.projects;
            stats = data.stats;

            if (data.achievements) {
                achievements.forEach(ach => {
                    const savedAch = data.achievements.find(s => s.id === ach.id);
                    if (savedAch) {
                        ach.unlocked = savedAch.unlocked;
                    }
                });
            }

            // Save to localStorage
            saveData();
            saveAchievements();

            // Re-render
            renderProjects();
            renderTasks();
            updateStats();

            console.log('✅ Data imported');
            alert(t('dataLoadedSuccess'));

        } catch (error) {
            console.error('Import error:', error);
            alert(t('errorLoadingFile'));
        }
    };

    reader.readAsText(file);
    event.target.value = ''; // Reset input
}

// Make functions globally available
window.addTask = addTask;
window.deleteTask = deleteTask;
window.moveTask = moveTask;
window.createProject = createProject;
window.deleteProject = deleteProject;
window.toggleProjectFilter = toggleProjectFilter;

// Initialize app
init();