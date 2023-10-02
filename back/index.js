const express = require("express");
const axios = require("axios");
const cron = require("node-cron");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 4000;
app.use(cors());

let exchangeRates = {};

const updateExchangeRates = async () => {
  try {
    // TODO: crear una variable en env
    const response = await axios.get(
      "https://www.freeforexapi.com/api/live?pairs=USDEUR,USDGBP,USDCOP"
    );
    exchangeRates = response.data;
    fs.writeFileSync(
      "exchangeRates.json",
      JSON.stringify(exchangeRates, null, 2)
    );
    console.log("Tasas de cambio actualizadas:", exchangeRates);
  } catch (error) {
    console.error("Error al actualizar las tasas de cambio:", error);
  }
};
updateExchangeRates();

//Se ejecuta cada 4 horas
cron.schedule("0 */4 * * *", () => {
  updateExchangeRates();
});

// Actualiza cada 1 minuto para las pruebas Cada un minuto
// cron.schedule("*/1 * * * *", () => {
//   updateExchangeRates();
// });

try {
  exchangeRates = JSON.parse(fs.readFileSync("exchangeRates.json"));
} catch (error) {
  console.error("Error al leer el archivo:", error);
}

// TODO: modular metodos

app.get("/", (req, res) => {
  res.json("Playa, sol y arena.");
});

app.get("/api/convert", (req, res) => {
  let result;
  const { amount, from, to } = req.query;

  if (!amount || !from) {
    return res
      .status(400)
      .json({ error: "Faltan parámetros. Se requiere amount, from y to." });
  }

  if (
    (!exchangeRates.rates[from] && from !== "USD") ||
    (!exchangeRates.rates[to] && to !== "USD")
  ) {
    return res
      .status(400)
      .json({ error: "Solo soporta monedas como: USDEUR, USDGBP, USDCOP" });
  }
  let amountInUSD;
  if (from === "USD") {
    amountInUSD = amount;
  } else {
    amountInUSD = amount / exchangeRates.rates[from].rate;
  }

  if (to === "USD") {
    result = amountInUSD;
  } else {
    result = amountInUSD * exchangeRates.rates[to].rate;
  }
  res.json({ result });
});

app.get("/getMock", (req, res) => {
  try {
    const mockHorarios = JSON.parse(fs.readFileSync("HorariosActividad.json"));
    res.json({ mockHorarios });
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
