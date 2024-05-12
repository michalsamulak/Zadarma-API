const ZadarmaApi = require('./ZadarmaApi');

async function main() {
  const zadarma = new ZadarmaApi('YOUR_KEY', 'YOUR_SECRET');

  try {
    const tariffResponse = await zadarma.call('/v1/tariff');
    console.log(tariffResponse);

    // Add more API calls in needed

  } catch (error) {
    console.error('API request error:', error.message);
  }
}

main();
