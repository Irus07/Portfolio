/**
 * Ruslan - Portfolio Application Logic
 * Zero dependencies, pure vanilla JavaScript.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initTerminal();
  initSkillsFilter();
  initMobileMenu();
  initCopyButtons();
});

/* ==========================================================================
   1. Theme Management (Dark / Light)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme') || 'dark';

  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeIcon(storedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (theme === 'light') {
    icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
  } else {
    icon.innerHTML = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;
  }
}

/* ==========================================================================
   2. Bilingual System (RU / EN)
   ========================================================================== */
const TRANSLATIONS = {
  ru: {
    badge_status: "Открыт к предложениям • Backend-разработчик (Go / C# / C++)",
    nav_about: "Обо мне",
    nav_skills: "Стек",
    nav_projects: "Проекты",
    nav_experience: "Опыт",
    nav_contact: "Контакты",
    hero_title: "Руслан",
    hero_subtitle: "Backend-разработчик • Go / C# / C++",
    hero_desc: "Разрабатываю производительные и надежные бэкенд-сервисы на Go и C# (ASP.NET Core). Активно углубляюсь в C++ (Modern C++17/20, STL, ручное управление памятью, ООП) и готов на нем писать и работать. Фокусируюсь на чистой архитектуре (DI, Repository pattern), базах данных (PostgreSQL, Code First, LINQ) и покрытии тестами (xUnit 70%+). Ускоряю написание рутинного кода на 20–30% с помощью современных AI-инструментов.",
    btn_projects: "Смотреть проекты",
    btn_print: "Резюме / PDF",
    btn_github: "GitHub @Irus07",
    btn_copy_contact: "Скопировать ссылку на GitHub",
    section_skills_tag: "Стек технологий",
    section_skills_title: "Ключевые инструменты и стек",
    section_skills_desc: "Технологии бэкенда, системной разработки и десктопных приложений",
    section_proj_tag: "Портфолио",
    section_proj_title: "Реализованные проекты",
    section_proj_desc: "Архитектура, ключевые технические решения и примеры реализации",
    section_exp_tag: "Практический опыт",
    section_exp_title: "Опыт разработки и подходы",
    section_exp_desc: "Принципы проектирования, контроль качества и оптимизация процессов",
    section_cta_title: "Готов присоединиться к инженерной команде",
    section_cta_desc: "Открыт к позициям Junior Backend-разработчика или стажера по направлениям Go, C# или C++. Готов быстро вникать в задачи и писать качественный код.",
    toast_copied: "Ссылка на GitHub скопирована!"
  },
  en: {
    badge_status: "Open to Work • Backend Developer (Go / C# / C++)",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_contact: "Contact",
    hero_title: "Ruslan",
    hero_subtitle: "Backend Developer • Go / C# / C++",
    hero_desc: "Engineering high-performance and resilient backend services with Go and C# (ASP.NET Core). Actively mastering C++ (Modern C++17/20, STL, memory management, OOP) and ready to develop and work with C++. Focused on clean architecture (DI, Repository pattern), relational databases (PostgreSQL, Code First, LINQ), and test coverage (xUnit 70%+). Boosting routine velocity by 20–30% with AI workflows.",
    btn_projects: "View Projects",
    btn_print: "Resume / PDF",
    btn_github: "GitHub @Irus07",
    btn_copy_contact: "Copy GitHub Link",
    section_skills_tag: "Technology Stack",
    section_skills_title: "Core Competencies & Tools",
    section_skills_desc: "Backend, systems development, and desktop application stack",
    section_proj_tag: "Portfolio",
    section_proj_title: "Featured Projects",
    section_proj_desc: "System architectures, core technical decisions, and code highlights",
    section_exp_tag: "Engineering Experience",
    section_exp_title: "Experience & Engineering Principles",
    section_exp_desc: "Architecture patterns, automated testing, and development workflows",
    section_cta_title: "Ready to Join Your Engineering Team",
    section_cta_desc: "Open for Junior Backend Developer / Intern roles in Go, C#, or C++. Eager to tackle ambitious engineering challenges and deliver robust code.",
    toast_copied: "GitHub link copied to clipboard!"
  }
};

function initLanguage() {
  const langBtn = document.getElementById('lang-switch');
  let currentLang = localStorage.getItem('site_lang') || 'ru';

  applyLanguage(currentLang);

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'ru' ? 'en' : 'ru';
      localStorage.setItem('site_lang', currentLang);
      applyLanguage(currentLang);
    });
  }
}

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.ru;
  const langBtn = document.getElementById('lang-switch');
  if (langBtn) {
    langBtn.textContent = lang.toUpperCase();
  }

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
}

/* ==========================================================================
   3. Interactive Terminal & Tab Switcher
   ========================================================================== */
function initTerminal() {
  const tabBtns = document.querySelectorAll('.term-tab-btn');
  const tabPanes = document.querySelectorAll('.term-tab-pane');
  const termInput = document.getElementById('term-input');
  const termOutput = document.getElementById('term-output');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach((b) => b.classList.remove('active'));
      tabPanes.forEach((p) => (p.style.display = 'none'));

      btn.classList.add('active');
      const target = document.getElementById(btn.getAttribute('data-target'));
      if (target) {
        target.style.display = 'block';
        if (btn.getAttribute('data-target') === 'tab-terminal' && termInput) {
          termInput.focus();
        }
      }
    });
  });

  if (!termInput || !termOutput) return;

  const history = [];
  let historyIndex = -1;

  termInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const command = termInput.value.trim();
      if (!command) return;

      history.push(command);
      historyIndex = history.length;

      executeCommand(command, termOutput);
      termInput.value = '';
      termOutput.scrollTop = termOutput.scrollHeight;
    } else if (e.key === 'ArrowUp') {
      if (history.length > 0 && historyIndex > 0) {
        historyIndex--;
        termInput.value = history[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < history.length - 1) {
        historyIndex++;
        termInput.value = history[historyIndex];
      } else {
        historyIndex = history.length;
        termInput.value = '';
      }
    }
  });

  termOutput.parentElement.addEventListener('click', () => {
    if (termInput) termInput.focus();
  });
}

function executeCommand(cmd, outputEl) {
  const line = document.createElement('div');
  line.className = 'term-line';
  line.innerHTML = `<span class="term-prompt">visitor@ruslan-dev:~$</span> <span class="term-cmd">${escapeHtml(cmd)}</span>`;
  outputEl.appendChild(line);

  const cleanCmd = cmd.toLowerCase().trim();
  const res = document.createElement('div');
  res.className = 'term-response';
  res.style.marginBottom = '12px';

  switch (cleanCmd) {
    case 'help':
      res.innerHTML = `
        <div style="color: #94a3b8; line-height: 1.6;">
          <b style="color: #38bdf8;">Available commands:</b><br/>
          • <span style="color:#a5b4fc">skills</span>     - View primary technology stack<br/>
          • <span style="color:#a5b4fc">projects</span>   - List featured projects<br/>
          • <span style="color:#a5b4fc">about</span>      - Developer overview & philosophy<br/>
          • <span style="color:#a5b4fc">contact</span>    - Show GitHub profile<br/>
          • <span style="color:#a5b4fc">sudo hire</span>  - Fast-track interview invitation<br/>
          • <span style="color:#a5b4fc">clear</span>      - Clear terminal screen
        </div>
      `;
      break;

    case 'skills':
      res.innerHTML = `
        <div style="color: #e2e8f0; font-size: 0.82rem;">
          <b style="color:#38bdf8;">[Backend & Core]</b> Go (Golang), C# (.NET 8/9, ASP.NET Core), C++ (Modern C++17/20, STL)<br/>
          <b style="color:#10b981;">[Databases]</b> PostgreSQL, SQL, Entity Framework Core (Code First & Migrations)<br/>
          <b style="color:#f59e0b;">[Systems & Network]</b> RESTful API, gRPC, Multithreading, Concurrency (goroutines, channels)<br/>
          <b style="color:#ec4899;">[Testing & Quality]</b> xUnit, Unit & Integration Tests (70%+ coverage)<br/>
          <b style="color:#6366f1;">[DevOps & Tools]</b> Docker, Linux, Git, GitHub Actions, AI Agent acceleration<br/>
          <b style="color:#38bdf8;">[Desktop & Web]</b> WPF (MVVM Toolkit), Vue.js, TypeScript
        </div>
      `;
      break;

    case 'projects':
      res.innerHTML = `
        <div style="color: #cbd5e1;">
          1. <b>Booking System REST API</b> (ASP.NET Core, PostgreSQL, EF Core, xUnit, Docker)<br/>
             → Full CRUD endpoints, Repository Pattern, DI, Code First, 70%+ test coverage.<br/>
          2. <b>C++ High-Performance Algorithmic Engine</b> (Modern C++, STL, Multithreading)<br/>
             → Memory safety, RAII, smart pointers, high-throughput data processing.<br/>
          3. <b>Go Concurrent Worker & Service</b> (Golang, Goroutines, Channels, gRPC)<br/>
             → High-throughput asynchronous task processing with zero-overhead error handling.<br/>
          4. <b>Booking System Desktop Client</b> (C#, WPF, MVVM Toolkit)<br/>
             → Multi-window/threaded, ContentControl navigation, asynchronous REST consumption.
        </div>
      `;
      break;

    case 'about':
      res.innerHTML = `
        <div style="color: #cbd5e1;">
          <b>Руслан / Ruslan</b><br/>
          Backend Developer: Go / C# / C++.<br/>
          Core focus: Clean Architecture, REST/gRPC API, Database Design, Unit & Integration testing (70%+).<br/>
          C++ Readiness: Actively studying C++ and ready to write high-performance code on it.<br/>
          AI workflow: 20-30% dev speedup using AI-agent tooling for boilerplate & refactoring.
        </div>
      `;
      break;

    case 'contact':
      res.innerHTML = `
        <div style="color: #cbd5e1;">
          • <b>GitHub:</b> <a href="https://github.com/Irus07" target="_blank" style="color:#38bdf8;">github.com/Irus07</a><br/>
          • <b>Status:</b> Открыт к работе / Open for hire (Junior / Intern)
        </div>
      `;
      break;

    case 'sudo hire':
    case 'hire':
      res.innerHTML = `
        <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; padding: 12px; border-radius: 6px; color: #34d399;">
          🎉 <b>PERMISSION GRANTED:</b> Great decision! Let's build solid software together.<br/>
          GitHub Profile: <a href="https://github.com/Irus07" target="_blank" style="color: #ffffff; text-decoration: underline; font-weight: bold;">github.com/Irus07</a>
        </div>
      `;
      showToast("🎉 Отличный выбор! Переходим на GitHub @Irus07");
      break;

    case 'clear':
      outputEl.innerHTML = '';
      return;

    default:
      res.innerHTML = `<span style="color:#ef4444;">Command not found: "${escapeHtml(cmd)}". Type <b style="color:#38bdf8">help</b> for command list.</span>`;
  }

  outputEl.appendChild(res);
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[m]));
}

/* ==========================================================================
   4. Skills Matrix Filtering
   ========================================================================== */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. Mobile Navigation
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-link');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
    });
  });
}

/* ==========================================================================
   6. Copy to Clipboard & Toast
   ========================================================================== */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('[data-copy]');
  copyBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(TRANSLATIONS[localStorage.getItem('site_lang') || 'ru'].toast_copied);
        }).catch(() => {
          prompt("Copy this:", textToCopy);
        });
      }
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20 6L9 17l-5-5"></path>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
