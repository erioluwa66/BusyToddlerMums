// utils.js

// This is a very naive implementation and needs to be expanded to handle different cases.
export const convertToFraction = (decimal) => {
  if (decimal === parseInt(decimal, 10)) {
    return String(decimal); // for whole numbers
  }
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const len = decimal.toString().length - 2;
  let denominator = Math.pow(10, len);
  let numerator = decimal * denominator;
  const divisor = gcd(numerator, denominator); // Get greatest common divisor
  numerator /= divisor;
  denominator /= divisor;
  return Math.floor(numerator) + "/" + Math.floor(denominator);
};

export const scaleQuantity = (quantity, scale) => {
  // Parse the quantity to extract numbers and apply scaling.
  // You would need a more complex function to handle units and mixed numbers.
  return parseFloat(quantity) * scale;
};