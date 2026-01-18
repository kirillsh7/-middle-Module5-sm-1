# Контактная книга (Contact Book)

Управление контактами с избранным и группировкой

![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple)
![Vite](https://img.shields.io/badge/Vite-5.0-orange)

## 🚀 О проекте

Веб-приложение для управления контактами с возможностью:

- Просмотра списка контактов
- Добавления контактов в избранное
- Фильтрации по имени и группам
- Сохранения состояния при перезагрузке

## ✨ Функциональность

- 📋 **Список контактов** - отображение всех контактов в виде карточек
- ⭐ **Избранное** - добавление/удаление контактов в избранное (В доработке)
- 🔍 **Фильтрация** - поиск по имени и фильтр по группам
- 📁 **Группы контактов** - группировка контактов по категориям
- 💾 **Сохранение состояния** - данные сохраняются при перезагрузке страницы
- 📱 **Адаптивный дизайн** - корректное отображение на мобильных устройствах

## 🛠 Технологии

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **State Management**: Redux Toolkit + RTK Query
- **Data Persistence**: Redux Persist
- **Styling**: React Bootstrap, CSS Modules
- **Build Tool**: Webpack
- **HTTP Client**: Fetch API через RTK Query
- **Routing**: React Router DOM

## 📦 Установка и запуск

### Предварительные требования

- Node.js 16+
- npm или yarn

### Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/kirillsh7/-middle-Module5-sm-1.git
cd contact-book
Установите зависимости:

bash
npm install
# или
yarn install
Запустите проект:

bash
npm run dev
# или
yarn dev
Откройте в браузере: http://localhost:3000

Производственная сборка
bash
npm run build
npm run preview
```

📡 API интеграция
Приложение использует моковые API с Mocki.io:

Контакты
Endpoint: GET https://mocki.io/v1/91840b05-7b74-4f20-88ca-64d01a3d2cb8

Response: Массив объектов ContactDto

Группы контактов
Endpoint: GET https://mocki.io/v1/a8553648-28b5-4f30-aeef-990efe16c0aa

Response: Массив объектов GroupContactsDto

🤝 Вклад в проект
Форкните репозиторий

Создайте ветку для фичи (git checkout -b feature/amazing-feature)

Зафиксируйте изменения (git commit -m 'Add amazing feature')

Запушьте ветку (git push origin feature/amazing-feature)

Откройте Pull Request
