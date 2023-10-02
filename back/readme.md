# Prueba tecnica uTriper

- Se obtiene el valor de las monedas y se actualiza cada 4 horas, en la consola se muestra el valor de las monedas.
- Se creo metodo get para obtener el valor convertido: /api/convert?amount=100&from=USD&to=USDCOP
- Se agrego una estructura de datos para almacenar los horarios de las actividades en un JSON llamado HorariosActividad.json

# Conversor de Moneda y Horarios API

Este proyecto es una API que proporciona funcionalidades para convertir monedas y obtener horarios.

## Requisitos

- Version nvm 18.16.1
- Node.js
- npm

## Instalación

1. Check version
2. Ejecuta `npm install` para instalar las dependencias.

## Uso

Para iniciar el servidor, ejecuta `node index.js`. El servidor se iniciará en `http://localhost:4000`.

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
