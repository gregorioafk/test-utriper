import React, { useState } from "react";
import axios from "axios";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("30000");
  const [from, setFrom] = useState("USDCOP");
  const [to, setTo] = useState("USD");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const convertCurrency = async () => {
    if (!amount || !from || !to) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (from === to) {
      setError("Las monedas de origen y destino no pueden ser las mismas.");
      return;
    }
    try {
      const response = await axios.get("http://localhost:4000/api/convert", {
        params: {
          amount,
          from,
          to,
        },
      });
      setResult(response.data.result);
      console.log(response);
      setError("");
    } catch (error) {
      console.error(error);
    }
  };

  const currencies = [
    { description: "EURO", value: "USDEUR" },
    { description: "LIBRA ESTERLINA", value: "USDGBP" },
    { description: "PESO COLOMBIANO", value: "USDCOP" },
    { description: "DÓLAR ESTADOUNIDENSE", value: "USD" },
  ];

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Cantidad"
      />
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency.value} value={currency.value}>
            {currency.description}
          </option>
        ))}
      </select>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency.value} value={currency.value}>
            {currency.description}
          </option>
        ))}
      </select>
      <button onClick={convertCurrency}>Convertir</button>
      <p>
        Resultado: {error && <p>Error: {error}</p>}
        {result.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
    </div>
  );
};

export default CurrencyConverter;
