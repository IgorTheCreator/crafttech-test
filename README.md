# Приложение для управления задачами (Express/TS)

Реализация приложения по управлению задачами

## Стэк

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![Express js](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)

![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

## Как запустить приложение

- Установите зависимости

```
npm install
```

- Создайте файл .env и добавьте параметры подключения к базе данных. Пример можно найти в .env.example

- Выполните миграции

```
npm run migrate
```

- Запуск тестов

```
npm test
```

- Запуск приложения

```
npm run dev
```

- Примеры запросов к api находятся в файле requests-examples.json. Можно импортировать в Insomnia
