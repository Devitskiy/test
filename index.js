const express = require('express'); // Подключаем Express
const app = express(); // Создаем приложение

// Маршрут для главной страницы
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Порт, на котором работает сервер
const PORT = 3000;

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});