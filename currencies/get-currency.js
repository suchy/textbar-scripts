const axios = require('axios');

module.exports = async (currency) => {
  const url = `https://systemkantor.aliorbank.pl/forex/json/current/${currency}/PLN`;
  const { data } = await axios.get(url);
  const { buy } = data.currencies[0];
  const amountString = buy.replace(',', '.');
  const amount = parseFloat(amountString).toPrecision(3)

  return amount;
}
