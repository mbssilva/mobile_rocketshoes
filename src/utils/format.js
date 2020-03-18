function format(priceAsNumber) {
  const priceAsString = String(priceAsNumber);
  // eslint-disable-next-line prefer-const
  let [reais, centavos] = priceAsString.split('.');
  if (centavos.length === 1) {
    centavos += '0';
  }

  const formattedPrice = `R$ ${reais},${centavos}`;

  return formattedPrice;
}

export default format;
