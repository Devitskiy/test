const http = require("http");

// Создаем сервер
const server = http.createServer((req, res) => {
  // Устанавливаем заголовки ответа
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Тело ответа
  res.end("Hello, World!");
});

// Указываем порт для сервера
const PORT = 3000;

// Запускаем сервер
server.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
