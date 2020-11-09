const axios = require('axios');

module.exports = async (currency) => {
  const url = `https://systemkantor.aliorbank.pl/forex/json/current/${currency}/PLN`;
  const { data } = await axios.get(url);
  const { sell } = data.currencies[0];
  const amountString = sell.replace(',', '.');
  const amount = parseFloat(amountString).toPrecision(3)

  return amount;
}