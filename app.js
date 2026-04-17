// app.js - Complete Azkar App Logic

document.addEventListener('DOMContentLoaded', () => {

    // ===== ELEMENTS =====
    const views = document.querySelectorAll('.view');
    const backBtn = document.getElementById('back-btn');
    const appTitle = document.getElementById('app-title');
    const appHeader = document.getElementById('app-header');
    const menuGrid = document.getElementById('menu-grid');

    // ===== SVG ICONS for Home Cards =====
    const menuIcons = {
        listen: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 65C40 65 25 55 25 40V25C25 22 27 20 30 20H35C35 15 37 10 40 10C43 10 45 15 45 20H50C53 20 55 22 55 25V40C55 55 40 65 40 65Z" fill="#0e6c64" opacity="0.15"/>
            <path d="M40 60C40 60 28 52 28 40V28C28 25.8 29.8 24 32 24H48C50.2 24 52 25.8 52 28V40C52 52 40 60 40 60Z" stroke="#0e6c64" stroke-width="2.5" fill="none"/>
            <circle cx="40" cy="36" r="4" fill="#0e6c64"/>
            <path d="M36 44C36 42 38 40 40 40C42 40 44 42 44 44V48H36V44Z" fill="#0e6c64"/>
            <path d="M58 30C60 33 61 36 61 40" stroke="#d1aa5b" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M62 24C65 29 67 34 67 40" stroke="#d1aa5b" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M66 18C70 25 72 32 72 40" stroke="#d1aa5b" stroke-width="2.5" stroke-linecap="round"/>
        </svg>`,
        morning_evening: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 65C40 65 25 55 25 40V25C25 22 27 20 30 20H50C53 20 55 22 55 25V40C55 55 40 65 40 65Z" fill="#0e6c64" opacity="0.15"/>
            <path d="M40 60C40 60 28 52 28 40V28C28 25.8 29.8 24 32 24H48C50.2 24 52 25.8 52 28V40C52 52 40 60 40 60Z" stroke="#0e6c64" stroke-width="2.5" fill="none"/>
            <circle cx="40" cy="36" r="4" fill="#0e6c64"/>
            <path d="M36 44C36 42 38 40 40 40C42 40 44 42 44 44V48H36V44Z" fill="#0e6c64"/>
            <path d="M55 12C53 14 52 17 52 20C52 26 57 30 62 30C59 34 55 36 50 36C43 36 38 31 38 24C38 19 41 14 45 12" stroke="#d1aa5b" stroke-width="2" fill="#d1aa5b" opacity="0.8"/>
            <circle cx="65" cy="15" r="1.5" fill="#d1aa5b"/>
            <circle cx="60" cy="10" r="1" fill="#d1aa5b"/>
        </svg>`,
        comprehensive: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 65V30C20 28 22 25 25 22C30 18 35 15 40 15C45 15 50 18 55 22C58 25 60 28 60 30V65" stroke="#0e6c64" stroke-width="2.5" fill="none"/>
            <path d="M25 65V35C25 33 28 30 32 28C35 26 38 25 40 25C42 25 45 26 48 28C52 30 55 33 55 35V65" stroke="#0e6c64" stroke-width="2" fill="#0e6c64" opacity="0.1"/>
            <path d="M15 65H65" stroke="#0e6c64" stroke-width="2.5"/>
            <rect x="35" y="40" width="10" height="25" rx="1" fill="#0e6c64" opacity="0.3"/>
            <circle cx="40" cy="35" r="3" fill="#0e6c64"/>
            <path d="M37 44C37 42.5 38.5 41 40 41C41.5 41 43 42.5 43 44V50H37V44Z" fill="#0e6c64"/>
            <path d="M33 55H47" stroke="#0e6c64" stroke-width="1.5"/>
        </svg>`,
        tasbeeh: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="40" cy="42" rx="22" ry="25" stroke="#0e6c64" stroke-width="2.5" fill="none"/>
            <circle cx="40" cy="17" r="4" fill="#0e6c64"/>
            <circle cx="25" cy="22" r="3" fill="#0e6c64" opacity="0.7"/>
            <circle cx="18" cy="32" r="3" fill="#0e6c64" opacity="0.7"/>
            <circle cx="16" cy="44" r="3" fill="#0e6c64" opacity="0.7"/>
            <circle cx="19" cy="55" r="3" fill="#0e6c64" opacity="0.7"/>
            <circle cx="27" cy="63" r="3" fill="#0e6c64" opacity="0.7"/>
            <circle cx="40" cy="67" r="3" fill="#0e6c64" opacity="0.7"/>
            <circle cx="53" cy="63" r="3" fill="#0e6c64" opacity="0.7"/>
            <circle cx="61" cy="55" r="3" fill="#0e6c64" opacity="0.7"/>
            <circle cx="64" cy="44" r="3" fill="#0e6c64" opacity="0.7"/>
            <circle cx="62" cy="32" r="3" fill="#0e6c64" opacity="0.7"/>
            <circle cx="55" cy="22" r="3" fill="#0e6c64" opacity="0.7"/>
            <line x1="40" y1="13" x2="40" y2="6" stroke="#0e6c64" stroke-width="2"/>
            <circle cx="40" cy="5" r="2" fill="#d1aa5b"/>
        </svg>`,
        add_dhikr: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="40" cy="42" rx="22" ry="25" stroke="#d1aa5b" stroke-width="2.5" fill="none"/>
            <circle cx="40" cy="17" r="4" fill="#d1aa5b"/>
            <circle cx="25" cy="22" r="3" fill="#d1aa5b" opacity="0.6"/>
            <circle cx="18" cy="32" r="3" fill="#d1aa5b" opacity="0.6"/>
            <circle cx="16" cy="44" r="3" fill="#d1aa5b" opacity="0.6"/>
            <circle cx="19" cy="55" r="3" fill="#d1aa5b" opacity="0.6"/>
            <circle cx="27" cy="63" r="3" fill="#d1aa5b" opacity="0.6"/>
            <circle cx="40" cy="67" r="3" fill="#d1aa5b" opacity="0.6"/>
            <circle cx="53" cy="63" r="3" fill="#d1aa5b" opacity="0.6"/>
            <circle cx="61" cy="55" r="3" fill="#d1aa5b" opacity="0.6"/>
            <circle cx="64" cy="44" r="3" fill="#d1aa5b" opacity="0.6"/>
            <circle cx="62" cy="32" r="3" fill="#d1aa5b" opacity="0.6"/>
            <circle cx="55" cy="22" r="3" fill="#d1aa5b" opacity="0.6"/>
            <circle cx="40" cy="42" r="10" fill="#d1aa5b" opacity="0.2"/>
            <line x1="40" y1="36" x2="40" y2="48" stroke="#d1aa5b" stroke-width="3" stroke-linecap="round"/>
            <line x1="34" y1="42" x2="46" y2="42" stroke="#d1aa5b" stroke-width="3" stroke-linecap="round"/>
        </svg>`,
        ruqyah: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="20" width="50" height="45" rx="4" fill="#d1aa5b" opacity="0.15" stroke="#d1aa5b" stroke-width="2"/>
            <rect x="20" y="15" width="40" height="45" rx="3" fill="none" stroke="#d1aa5b" stroke-width="2"/>
            <text x="40" y="42" text-anchor="middle" fill="#d1aa5b" font-size="16" font-weight="bold" font-family="Tajawal">اقرأ</text>
            <path d="M25 55L40 65L55 55" stroke="#0e6c64" stroke-width="2" fill="none"/>
            <path d="M20 58L40 70L60 58" stroke="#0e6c64" stroke-width="2" fill="none"/>
        </svg>`,
        ramadan: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15C48 17 47 20 47 23C47 29 51 34 57 34C54 38 50 40 45 40C38 40 33 35 33 28C33 23 36 18 40 15" stroke="#0e6c64" stroke-width="2.5" fill="#0e6c64" opacity="0.2"/>
            <circle cx="58" cy="18" r="2" fill="#d1aa5b"/>
            <circle cx="64" cy="25" r="1.5" fill="#d1aa5b"/>
            <circle cx="55" cy="12" r="1.5" fill="#d1aa5b"/>
            <path d="M20 50H60" stroke="#0e6c64" stroke-width="2"/>
            <path d="M25 50V65C25 67 27 68 30 68H50C53 68 55 67 55 65V50" stroke="#0e6c64" stroke-width="2" fill="none"/>
            <path d="M30 55H50" stroke="#0e6c64" stroke-width="1.5" opacity="0.5"/>
            <path d="M30 60H45" stroke="#0e6c64" stroke-width="1.5" opacity="0.5"/>
        </svg>`,
        names: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="50" height="50" rx="10" fill="#0e6c64" opacity="0.1" stroke="#0e6c64" stroke-width="2"/>
            <rect x="20" y="20" width="40" height="40" rx="6" fill="none" stroke="#d1aa5b" stroke-width="2"/>
            <text x="40" y="48" text-anchor="middle" fill="#d1aa5b" font-size="22" font-weight="bold" font-family="Tajawal">الله</text>
        </svg>`,
        settings: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 15L48 20V30L40 35L32 30V20L40 15Z" stroke="#0e6c64" stroke-width="2" fill="#0e6c64" opacity="0.15"/>
            <path d="M55 25L63 30V40L55 45L47 40V30L55 25Z" stroke="#0e6c64" stroke-width="2" fill="#0e6c64" opacity="0.15"/>
            <path d="M25 25L33 30V40L25 45L17 40V30L25 25Z" stroke="#0e6c64" stroke-width="2" fill="#0e6c64" opacity="0.15"/>
            <path d="M40 35L48 40V50L40 55L32 50V40L40 35Z" stroke="#0e6c64" stroke-width="2" fill="#0e6c64" opacity="0.15"/>
            <path d="M55 45L63 50V60L55 65L47 60V50L55 45Z" stroke="#0e6c64" stroke-width="2" fill="#0e6c64" opacity="0.15"/>
            <path d="M25 45L33 50V60L25 65L17 60V50L25 45Z" stroke="#0e6c64" stroke-width="2" fill="#0e6c64" opacity="0.15"/>
            <circle cx="40" cy="40" r="8" stroke="#d1aa5b" stroke-width="2" fill="none"/>
            <circle cx="40" cy="40" r="3" fill="#d1aa5b"/>
        </svg>`
    };

    // ===== STATE =====
    const state = {
        currentView: 'view-home',
        tasbeeh: {
            currentTextIndex: 0,
            count: 0,
            totalCount: parseInt(localStorage.getItem('tasbeeh_total') || '0'),
            customDhikrs: JSON.parse(localStorage.getItem('custom_dhikrs') || '[]')
        },
        azkar: {
            type: 'morning',
            currentIndex: 0
        },
        ruqyah: { currentIndex: 0 },
        ramadan: { currentIndex: 0 },
        audio: {
            isPlaying: false,
            interval: null,
            currentType: 'morning',
            player: null
        },
        settings: JSON.parse(localStorage.getItem('app_settings') || JSON.stringify({
            vibration: true,
            sound: true,
            theme: 'light',
            fontSize: 'medium',
            morningReminder: false,
            eveningReminder: false
        }))
    };

    // ===== INIT =====
    init();

    function init() {
        // Apply saved settings
        applySettings();

        // Setup Audio player
        state.audio.player = document.getElementById('audio-player');

        // Render home
        renderHomeMenu();
        setupDates();

        // Listeners
        backBtn.addEventListener('click', goHome);

        // Tasbeeh
        document.getElementById('dhikr-selector').addEventListener('click', openDhikrModal);
        document.getElementById('dhikr-modal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('dhikr-modal')) closeDhikrModal();
        });
        document.getElementById('tasbeeh-btn').addEventListener('click', incrementTasbeeh);
        document.getElementById('tasbeeh-reset').addEventListener('click', resetTasbeeh);

        // Azkar Reader tabs & controls
        setupTabs();
        document.getElementById('azkar-next-btn').addEventListener('click', () => changeReader('azkar', 1));
        document.getElementById('azkar-prev-btn').addEventListener('click', () => changeReader('azkar', -1));
        document.getElementById('share-azkar-btn').addEventListener('click', () => shareCurrentDhikr('azkar'));

        // Ruqyah controls
        document.getElementById('ruqyah-next-btn').addEventListener('click', () => changeReader('ruqyah', 1));
        document.getElementById('ruqyah-prev-btn').addEventListener('click', () => changeReader('ruqyah', -1));
        document.getElementById('share-ruqyah-btn').addEventListener('click', () => shareCurrentDhikr('ruqyah'));

        // Ramadan controls
        document.getElementById('ramadan-next-btn').addEventListener('click', () => changeReader('ramadan', 1));
        document.getElementById('ramadan-prev-btn').addEventListener('click', () => changeReader('ramadan', -1));
        document.getElementById('share-ramadan-btn').addEventListener('click', () => shareCurrentDhikr('ramadan'));

        // Audio Listen
        document.getElementById('main-play-btn').addEventListener('click', togglePlay);
        document.getElementById('volume-slider').addEventListener('input', (e) => {
            if (state.audio.player) {
                state.audio.player.volume = e.target.value / 100;
            }
        });

        // Add dhikr
        document.getElementById('add-dhikr-btn').addEventListener('click', addCustomDhikr);

        // Settings
        setupSettings();

        // Share app
        document.getElementById('share-app-btn').addEventListener('click', shareApp);
    }

    // ===== NAVIGATION =====
    function switchView(viewId, title) {
        // Stop audio if leaving listen
        if (state.currentView === 'view-listen' && state.audio.isPlaying) {
            togglePlay();
        }

        views.forEach(view => view.classList.remove('active'));
        document.getElementById(viewId).classList.add('active');
        state.currentView = viewId;

        if (viewId === 'view-home') {
            backBtn.classList.add('hidden');
            appTitle.textContent = 'الإصدار : 4.5';
        } else {
            backBtn.classList.remove('hidden');
            appTitle.textContent = title;
        }

        // View-specific init
        if (viewId === 'view-tasbeeh') initTasbeeh();
        if (viewId === 'view-azkar') { state.azkar.currentIndex = 0; renderReader('azkar'); }
        if (viewId === 'view-comprehensive') renderComprehensive();
        if (viewId === 'view-ruqyah') { state.ruqyah.currentIndex = 0; renderReader('ruqyah'); }
        if (viewId === 'view-names') renderNames();
        if (viewId === 'view-ramadan') { state.ramadan.currentIndex = 0; renderReader('ramadan'); }
        if (viewId === 'view-listen') initAudioPlayer();
        if (viewId === 'view-add-dhikr') renderCustomDhikrList();
        if (viewId === 'view-settings') initSettings();

        // Scroll to top
        document.querySelector('.app-content').scrollTop = 0;
    }

    function goHome() {
        switchView('view-home', '');
    }

    // ===== HOME SCREEN =====
    function renderHomeMenu() {
        menuGrid.innerHTML = '';
        appData.menuItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-card';
            card.id = 'card-' + item.id;

            const iconSvg = menuIcons[item.id] || '<i class="fas fa-star" style="font-size:2.5rem;color:#0e6c64;"></i>';
            const isRawIcon = !menuIcons[item.id];

            card.innerHTML = `
                <div class="card-icon">${iconSvg}</div>
                <div class="card-title">${item.title}</div>
            `;
            card.addEventListener('click', () => switchView(item.view, item.title));
            menuGrid.appendChild(card);
        });
    }

    // ===== TABS =====
    function setupTabs() {
        document.querySelectorAll('.tab-btn').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const target = e.target.getAttribute('data-target');
                const viewType = e.target.getAttribute('data-view');

                // Deactivate sibling tabs 
                const parentTabs = e.target.closest('.tabs');
                parentTabs.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');

                if (viewType === 'azkar') {
                    state.azkar.type = target === 'tab-morning' ? 'morning' : 'evening';
                    state.azkar.currentIndex = 0;
                    renderReader('azkar');
                } else if (viewType === 'listen') {
                    state.audio.currentType = target === 'listen-morning' ? 'morning' : 'evening';
                    if (state.audio.isPlaying) togglePlay();
                }
            });
        });
    }

    // ===== TASBEEH =====
    function initTasbeeh() {
        updateTasbeehUI();

        const dhikrList = document.getElementById('dhikr-list');
        dhikrList.innerHTML = '';

        const allDhikrs = [...appData.tasbeehList, ...state.tasbeeh.customDhikrs];

        allDhikrs.forEach((text, index) => {
            const div = document.createElement('div');
            div.className = 'modal-item';
            const isLong = text.length > 40;
            div.innerHTML = `
                <span>${text}</span>
                ${isLong ? '<i class="fas fa-copy copy-icon"></i>' : ''}
            `;
            div.addEventListener('click', (e) => {
                e.stopPropagation();
                state.tasbeeh.currentTextIndex = index;
                state.tasbeeh.count = 0;
                updateTasbeehUI();
                closeDhikrModal();
            });
            dhikrList.appendChild(div);
        });

        // "Add new" option at bottom
        const addDiv = document.createElement('div');
        addDiv.className = 'modal-item add-new';
        addDiv.innerHTML = `<i class="fas fa-copy copy-icon"></i><span>اضافة تسبيحة جديدة</span>`;
        addDiv.addEventListener('click', (e) => {
            e.stopPropagation();
            closeDhikrModal();
            switchView('view-add-dhikr', 'إضافة ذكر');
        });
        dhikrList.appendChild(addDiv);
    }

    function updateTasbeehUI() {
        const allDhikrs = [...appData.tasbeehList, ...state.tasbeeh.customDhikrs];
        document.getElementById('current-dhikr-text').textContent = allDhikrs[state.tasbeeh.currentTextIndex];
        document.getElementById('current-count').textContent = state.tasbeeh.count;
        document.getElementById('total-count').textContent = state.tasbeeh.totalCount;
        document.getElementById('tasbeeh-digital').textContent = state.tasbeeh.count;
    }

    function openDhikrModal() {
        document.getElementById('dhikr-modal').classList.add('active');
    }

    function closeDhikrModal() {
        document.getElementById('dhikr-modal').classList.remove('active');
    }

    function incrementTasbeeh() {
        state.tasbeeh.count++;
        state.tasbeeh.totalCount++;
        localStorage.setItem('tasbeeh_total', state.tasbeeh.totalCount.toString());
        updateTasbeehUI();

        // Haptic feedback
        if (state.settings.vibration && navigator.vibrate) {
            navigator.vibrate(30);
        }
    }

    function resetTasbeeh() {
        state.tasbeeh.count = 0;
        updateTasbeehUI();
    }

    // ===== GENERIC READER (azkar, ruqyah, ramadan) =====
    function getReaderData(type) {
        switch (type) {
            case 'azkar': return state.azkar.type === 'morning' ? appData.azkarMorning : appData.azkarEvening;
            case 'ruqyah': return appData.ruqyahShariah;
            case 'ramadan': return appData.ramadanDuas;
            default: return [];
        }
    }

    function getReaderState(type) {
        switch (type) {
            case 'azkar': return state.azkar;
            case 'ruqyah': return state.ruqyah;
            case 'ramadan': return state.ramadan;
            default: return { currentIndex: 0 };
        }
    }

    function renderReader(type) {
        const list = getReaderData(type);
        const readerState = getReaderState(type);
        if (list.length === 0) return;

        const item = list[readerState.currentIndex];
        const prefix = type === 'azkar' ? '' : type + '-';

        document.getElementById((prefix || '') + (type === 'azkar' ? 'azkar-' : '') + 'title').textContent = item.title || 'ذكر';
        document.getElementById((prefix || '') + (type === 'azkar' ? 'azkar-' : '') + 'content').textContent = item.text;
        document.getElementById((prefix || '') + (type === 'azkar' ? '' : '') + 'circle-counter').textContent = item.count;
        document.getElementById((prefix || '') + (type === 'azkar' ? 'azkar-' : '') + 'counter-text').textContent = `${readerState.currentIndex + 1}/${list.length}`;
    }

    // Simplified render approach for each reader
    function renderAzkar() {
        const list = state.azkar.type === 'morning' ? appData.azkarMorning : appData.azkarEvening;
        if (list.length === 0) return;
        const item = list[state.azkar.currentIndex];
        document.getElementById('azkar-title').textContent = item.title || 'ذكر';
        document.getElementById('azkar-content').textContent = item.text;
        document.getElementById('circle-counter').textContent = item.count;
        document.getElementById('azkar-counter-text').textContent = `${state.azkar.currentIndex + 1}/${list.length}`;
    }

    function renderRuqyah() {
        const list = appData.ruqyahShariah;
        if (list.length === 0) return;
        const item = list[state.ruqyah.currentIndex];
        document.getElementById('ruqyah-title').textContent = item.title || 'ذكر';
        document.getElementById('ruqyah-content').textContent = item.text;
        document.getElementById('ruqyah-circle-counter').textContent = item.count;
        document.getElementById('ruqyah-counter-text').textContent = `${state.ruqyah.currentIndex + 1}/${list.length}`;
    }

    function renderRamadan() {
        const list = appData.ramadanDuas;
        if (list.length === 0) return;
        const item = list[state.ramadan.currentIndex];
        document.getElementById('ramadan-title').textContent = item.title || 'ذكر';
        document.getElementById('ramadan-content').textContent = item.text;
        document.getElementById('ramadan-circle-counter').textContent = item.count;
        document.getElementById('ramadan-counter-text').textContent = `${state.ramadan.currentIndex + 1}/${list.length}`;
    }

    // Override renderReader to use specific functions
    function renderReader(type) {
        if (type === 'azkar') renderAzkar();
        else if (type === 'ruqyah') renderRuqyah();
        else if (type === 'ramadan') renderRamadan();
    }

    function changeReader(type, direction) {
        let list, readerState;
        if (type === 'azkar') {
            list = state.azkar.type === 'morning' ? appData.azkarMorning : appData.azkarEvening;
            readerState = state.azkar;
        } else if (type === 'ruqyah') {
            list = appData.ruqyahShariah;
            readerState = state.ruqyah;
        } else if (type === 'ramadan') {
            list = appData.ramadanDuas;
            readerState = state.ramadan;
        }

        let newIndex = readerState.currentIndex + direction;
        if (newIndex >= 0 && newIndex < list.length) {
            readerState.currentIndex = newIndex;
            renderReader(type);
        }
    }

    // ===== COMPREHENSIVE AZKAR =====
    function renderComprehensive() {
        const container = document.getElementById('comprehensive-list');
        container.innerHTML = '';

        appData.azkarComprehensive.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'comprehensive-item';
            div.innerHTML = `
                <div class="item-number">${index + 1}</div>
                <div class="item-content">
                    <div class="item-title">${item.title}</div>
                    <div class="item-text">${item.text}</div>
                </div>
                <div class="item-count">× ${item.count}</div>
            `;
            div.addEventListener('click', () => {
                div.classList.toggle('expanded');
            });
            container.appendChild(div);
        });
    }

    // ===== NAMES OF ALLAH =====
    function renderNames() {
        const grid = document.getElementById('names-grid');
        grid.innerHTML = '';

        appData.namesOfAllah.forEach((name, index) => {
            const card = document.createElement('div');
            card.className = 'name-card';
            card.innerHTML = `
                <div class="name-number">${index + 1}</div>
                <div class="name-text">${name}</div>
            `;
            grid.appendChild(card);
        });
    }

    // ===== ADD CUSTOM DHIKR =====
    function addCustomDhikr() {
        const input = document.getElementById('custom-dhikr-input');
        const feedback = document.getElementById('add-dhikr-feedback');
        const text = input.value.trim();

        if (!text) {
            showFeedback(feedback, 'يرجى كتابة نص الذكر', 'error');
            return;
        }

        state.tasbeeh.customDhikrs.push(text);
        localStorage.setItem('custom_dhikrs', JSON.stringify(state.tasbeeh.customDhikrs));
        input.value = '';
        showFeedback(feedback, 'تم إضافة الذكر بنجاح ✓', 'success');
        renderCustomDhikrList();
    }

    function showFeedback(el, msg, type) {
        el.textContent = msg;
        el.className = 'feedback-msg ' + type;
        el.classList.remove('hidden');
        setTimeout(() => el.classList.add('hidden'), 2500);
    }

    function renderCustomDhikrList() {
        const listEl = document.getElementById('custom-dhikr-list');
        const emptyEl = document.getElementById('no-custom-dhikr');
        listEl.innerHTML = '';

        if (state.tasbeeh.customDhikrs.length === 0) {
            emptyEl.classList.remove('hidden');
            return;
        }

        emptyEl.classList.add('hidden');

        state.tasbeeh.customDhikrs.forEach((text, index) => {
            const item = document.createElement('div');
            item.className = 'custom-dhikr-item';
            item.innerHTML = `
                <span>${text}</span>
                <button class="delete-btn" data-index="${index}"><i class="fas fa-trash-alt"></i></button>
            `;
            item.querySelector('.delete-btn').addEventListener('click', () => {
                state.tasbeeh.customDhikrs.splice(index, 1);
                localStorage.setItem('custom_dhikrs', JSON.stringify(state.tasbeeh.customDhikrs));
                renderCustomDhikrList();
            });
            listEl.appendChild(item);
        });
    }

    // ===== AUDIO PLAYER =====
    function initAudioPlayer() {
        animateVisualizer(false);
        const icon = document.querySelector('#main-play-btn i');
        icon.className = 'fas fa-play';
        state.audio.isPlaying = false;
    }

    function togglePlay() {
        state.audio.isPlaying = !state.audio.isPlaying;
        const icon = document.querySelector('#main-play-btn i');
        const player = state.audio.player;

        if (state.audio.isPlaying) {
            icon.className = 'fas fa-pause';
            animateVisualizer(true);

            // Try to play actual audio
            const src = state.audio.currentType === 'morning'
                ? appData.audioSources.azkarMorning
                : appData.audioSources.azkarEvening;

            if (player.src !== src) {
                player.src = src;
            }
            player.play().catch(() => {
                // Audio may fail due to CORS or network issues - visualizer still works
            });
        } else {
            icon.className = 'fas fa-play';
            animateVisualizer(false);
            if (player) player.pause();
        }
    }

    function animateVisualizer(play) {
        const bars = document.querySelectorAll('.bar');
        if (play) {
            state.audio.interval = setInterval(() => {
                bars.forEach(bar => {
                    const h = Math.floor(Math.random() * 140) + 15;
                    bar.style.height = `${h}px`;
                });
            }, 130);
        } else {
            clearInterval(state.audio.interval);
            bars.forEach(bar => {
                bar.style.height = '10px';
            });
        }
    }

    // ===== DATES =====
    function setupDates() {
        const d = new Date();
        const days = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

        const dd = String(d.getDate()).padStart(2, '0');
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const yyyy = d.getFullYear();
        document.getElementById('gregorian-date').textContent = `${dd}-${mm}-${yyyy}`;
        document.getElementById('day-name').textContent = days[d.getDay()];

        try {
            document.getElementById('hijri-date').textContent = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(d);
        } catch (e) {
            document.getElementById('hijri-date').textContent = '١٤٤٧';
        }
    }

    // ===== SHARE =====
    function shareCurrentDhikr(type) {
        let list, idx;
        if (type === 'azkar') {
            list = state.azkar.type === 'morning' ? appData.azkarMorning : appData.azkarEvening;
            idx = state.azkar.currentIndex;
        } else if (type === 'ruqyah') {
            list = appData.ruqyahShariah;
            idx = state.ruqyah.currentIndex;
        } else if (type === 'ramadan') {
            list = appData.ramadanDuas;
            idx = state.ramadan.currentIndex;
        }

        const item = list[idx];
        const text = `${item.title}\n\n${item.text}\n\n— تطبيق اذكار الصباح والمساء`;

        if (navigator.share) {
            navigator.share({ text }).catch(() => { });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(text).then(() => {
                alert('تم نسخ الذكر');
            }).catch(() => { });
        }
    }

    function shareApp() {
        const text = 'تطبيق اذكار الصباح والمساء - أذكار المسلم اليومية الشاملة';
        if (navigator.share) {
            navigator.share({ title: 'اذكار الصباح والمساء', text }).catch(() => { });
        } else {
            navigator.clipboard.writeText(text).then(() => {
                alert('تم نسخ رابط التطبيق');
            }).catch(() => { });
        }
    }

    // ===== SETTINGS =====
    function setupSettings() {
        // Theme
        document.querySelectorAll('.theme-option').forEach(opt => {
            opt.addEventListener('click', () => {
                document.querySelectorAll('.theme-option').forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
                state.settings.theme = opt.getAttribute('data-theme');
                applySettings();
                saveSettings();
            });
        });

        // Font size
        document.querySelectorAll('.font-size-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.font-size-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.settings.fontSize = btn.getAttribute('data-size');
                applySettings();
                saveSettings();
            });
        });

        // Toggles
        document.getElementById('setting-vibration').addEventListener('change', (e) => {
            state.settings.vibration = e.target.checked;
            saveSettings();
        });
        document.getElementById('setting-sound').addEventListener('change', (e) => {
            state.settings.sound = e.target.checked;
            saveSettings();
        });
        document.getElementById('setting-morning-reminder').addEventListener('change', (e) => {
            state.settings.morningReminder = e.target.checked;
            saveSettings();
        });
        document.getElementById('setting-evening-reminder').addEventListener('change', (e) => {
            state.settings.eveningReminder = e.target.checked;
            saveSettings();
        });
    }

    function initSettings() {
        // Sync UI with state
        document.getElementById('setting-vibration').checked = state.settings.vibration;
        document.getElementById('setting-sound').checked = state.settings.sound;
        document.getElementById('setting-morning-reminder').checked = state.settings.morningReminder;
        document.getElementById('setting-evening-reminder').checked = state.settings.eveningReminder;

        // Theme
        document.querySelectorAll('.theme-option').forEach(o => {
            o.classList.toggle('active', o.getAttribute('data-theme') === state.settings.theme);
        });

        // Font
        document.querySelectorAll('.font-size-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-size') === state.settings.fontSize);
        });
    }

    function applySettings() {
        document.documentElement.setAttribute('data-theme', state.settings.theme);
        document.documentElement.setAttribute('data-font', state.settings.fontSize);
    }

    function saveSettings() {
        localStorage.setItem('app_settings', JSON.stringify(state.settings));
    }
});
