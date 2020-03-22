// function format(priceAsNumber) {
//   const priceAsString = String(priceAsNumber);
//   // eslint-disable-next-line prefer-const
//   let [reais, centavos] = priceAsString.split('.');
//   if (centavos.length === 1) {
//     centavos += '0';
//   }

//   if (centavos.length === 1) {
//     centavos += '0';
//   }

//   const formattedPrice = `R$ ${reais},${centavos[0]}${centavos[1]}`;

//   return formattedPrice;
// }

// export default format;

import Intl from 'react-native-intl';

export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
