# test uTriper

Cada proyecto contiene su readme, de igual forma se deja un resumen aquí

# Requisitos

- nvm version 18
- Nodejs
- npm

# Backend

1. Check version
2. Ejecuta `npm install` para instalar las dependencias.
3. ejecuta `node index.js`. El servidor se iniciará en `http://localhost:4000`.

## Frontend

1. Ejecute `npm install` para instalar dependencias
2. Levante la aplicacion con `npm run start` -- se levantara en http://localhost:3000

## Estructura del Proyecto

- Recuerde ejecutar el backend de primera.

- `Calendario`: Contiene el selector de calendario con disponibilidad y precios.
- `CurrencyConverter`: Muestra un convertidor de monedas, lo cual le pega a un endpoint en el back `GET /api/convert`
- `MockHorarios`: Imprime un JSON en el html del la estructura de datos para almacenar los horarios de la actividad de la maneras mas eficiente.

### Endpoints

- `GET /api/convert`: Convierte una cantidad de una moneda a otra.
  - Parámetros de consulta:
    - `amount`: La cantidad de dinero que quieres convertir.
    - `from`: La moneda de origen.
    - `to`: La moneda de destino.
  - Ejemplo: `GET /api/convert?amount=100&from=USD&to=USDCOP`
- `GET /getMock`: Obtiene la estructura de los datos para almacenar la activdad.

## Actualizaciones de las Tasas de Cambio

Las tasas de cambio se actualizan cada 4 horas utilizando la API de Free Forex. Los datos de las tasas de cambio se almacenan en el archivo `exchangeRates.json`.
