# 🚀 Ruslan — Backend Developer Portfolio & CV (Go / C# / C++)

[![Deploy to GitHub Pages](https://github.com/Irus07/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Irus07/Portfolio/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/Live-GitHub%20Pages-0284c7?style=flat&logo=github)](https://irus07.github.io/Portfolio/)
[![Tech Stack](https://img.shields.io/badge/Stack-Pure%20HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-10b981?style=flat)](https://irus07.github.io/Portfolio/)

> Современный, высокопроизводительный одностраничный сайт-резюме и портфолио бэкенд-разработчика (Go / C# / C++). Построен на чистом стеке (Vanilla Web) без использования и установки Node.js, npm или внешних сборщиков. Развертывается автоматически на **GitHub Pages** через **GitHub Actions**.

---

## ⚡ Особенности и фичи

- **Zero Dependencies / No Node.js**: Полностью автономный стек (HTML5, CSS3 Custom Properties, Vanilla ES6+). Работает сразу при открытии `index.html` в любом браузере.
- **Bento Grid & Glassmorphism Design**: Современный интерфейс в стиле Vercel / Linear с неоновыми акцентами и плавными микроанимациями.
- **Интерактивный терминал & API инспектор**: Встроенная эмуляция ответов HTTP API (`GET /v1/profile`) и интерактивная консоль с командами (`help`, `skills`, `projects`, `sudo hire`, `clear`).
- **C++ в стеке**: Акцент на изучение и готовность писать высокопроизводительный код на C++ (Modern C++17/20, STL, ручное управление памятью, многопоточность).
- **Двуязычность (RU / EN)**: Переключение языка интерфейса в один клик с сохранением в `localStorage`.
- **Темная и светлая тема**: Автоматическая адаптация фонового канваса и цветовой палитры.
- **Интерактивный Canvas-фон**: Легковесная частичная сетка связей на HTML5 Canvas (60 FPS, 0 внешних библиотек).
- **Фильтрация стека**: Мгновенная фильтрация технологий по категориям (Backend, Базы данных, DevOps, Качество, UI).
- **A4 Резюме / Версия для печати**: Отдельная страница [`resume.html`](resume.html) и стили `@media print` для печати или сохранения в чистый PDF.
- **Автоматический CI/CD деплой**: GitHub Actions workflow (`.github/workflows/deploy.yml`) публикует проект на GitHub Pages при каждом пуше в `main`.

---

## 🛠️ Стек разработчика

- **Основные языки бэкенда:** Go (Golang), C# (.NET 8/9, ASP.NET Core)
- **Системное направление:** C++ (Modern C++17/20, STL, RAII, умные указатели, многопоточность — изучаю и готов работать)
- **Архитектура:** Clean Architecture, Repository Pattern, Dependency Injection (DI), DTO, REST API, gRPC
- **Базы данных & SQL:** PostgreSQL (Code First, EF Core, миграции, оптимизация LINQ)
- **Тестирование и качество:** xUnit (модульные и интеграционные тесты, покрытие 70%+)
- **Десктоп и UI:** WPF (MVVM, Community Toolkit: ObservableObject, RelayCommand), Vue.js, SPA
- **Инфраструктура & DevOps:** Docker, Docker Compose, Linux, Git, GitHub Actions
- **AI-Workflow:** Интеграция AI-агентов в рабочий процесс для ускорения прототипирования и рутинного кода на 20–30%

---

## 📂 Структура проекта

```text
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD автоматический деплой на GitHub Pages
├── assets/
│   ├── css/
│   │   └── style.css       # Стилистика, Bento grid, темы, print-стили
│   └── js/
│       ├── app.js          # Логика терминала, переключение языков, тем, фильтры
│       └── canvas.js       # Легковесный интерактивный фон на Canvas
├── index.html              # Главная страница портфолио
├── resume.html             # Чистая A4-версия резюме для печати / PDF
└── README.md               # Документация проекта
```

---

## 🚀 Локальный запуск

Так как проект выполнен **без Node.js и npm**:
1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/Irus07/Portfolio.git
   cd Portfolio
   ```
2. Просто откройте файл `index.html` в любом браузере (двойной клик или перетаскивание в Chrome/Edge/Firefox).
3. Или запустите любой локальный статический сервер (если нужно):
   - Python: `python -m http.server 8080`
   - Или расширение Live Server в VS Code.

---

## ⚙️ Настройка GitHub Pages

1. Перейдите в настройки репозитория: **Settings** -> **Pages**.
2. В разделе **Build and deployment** -> **Source** выберите:
   `GitHub Actions`.
3. При каждом `git push` в ветку `main` workflow `.github/workflows/deploy.yml` автоматически соберет и опубликует сайт по адресу:
   👉 **`https://irus07.github.io/Portfolio/`**

---

## 📬 Контакты

- **GitHub:** [github.com/Irus07](https://github.com/Irus07)
