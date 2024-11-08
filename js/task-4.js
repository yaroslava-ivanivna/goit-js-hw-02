let price = {
  China: 100,
  Chile: 250,
  Australia: 170,
  Jamaica: 120,
};
function getShippingCost(country) {
  switch (country) {
    case 'China':
      return `Shipping to ${country} will cost ${price.China} credits`;
      break;
    case 'Chile':
      return `Shipping to ${country} will cost ${price.Chile} credits`;
      break;
    case 'Australia':
      return `Shipping to ${country} will cost ${price.Australia} credits`;
      break;
    case 'Jamaica':
      return `Shipping to ${country} will cost ${price.Jamaica} credits`;
      break;
    default:
      return `Sorry, there is no delivery to your country`;
  }
}
console.log(getShippingCost('Australia'));
console.log(getShippingCost('Germany'));
console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Sweden'));
