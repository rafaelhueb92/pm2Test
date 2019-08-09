const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const message = "Requisição endpoint com sucesso!";
  console.log(`----> Tempo de requisição ${new Date().getTime()}`);

  res.send({ message });
});

app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
