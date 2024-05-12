require('dotenv').config(); // Import dotenv module to read .env file
const ZadarmaApi = require('./ZadarmaApi');

async function main() {
  const zadarma = new ZadarmaApi(process.env.ZADARMA_API_KEY, process.env.ZADARMA_API_SECRET);

  try {
    const tariffResponse = await zadarma.call('/v1/tariff');
    console.log(tariffResponse);

    // Add more API calls in needed

  } catch (error) {
    console.error('API request error:', error.message);
  }
}

main();
