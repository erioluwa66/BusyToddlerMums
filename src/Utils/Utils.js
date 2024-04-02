// Utils to convert fraction strings to decimals and vice versa

// A safe eval function to handle fraction strings like "1/2"
const safeEval = (str) => {
  const [numerator, denominator] = str.split("/");
  return denominator
    ? parseInt(numerator, 10) / parseInt(denominator, 10)
    : parseInt(numerator, 10);
};

// Convert decimal numbers to fractions
export const decimalToFraction = (decimal) => {
  if (decimal === parseInt(decimal, 10)) return `${decimal}`; // No need to convert

  const len = decimal.toString().length - 2;
  let denominator = Math.pow(10, len);
  let numerator = decimal * denominator;

  // Find the Greatest Common Divisor (GCD)
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const divisor = gcd(numerator, denominator);

  numerator /= divisor;
  denominator /= divisor;

  return `${Math.floor(numerator)}/${Math.floor(denominator)}`;
};

// Scale a quantity and convert to a fraction if needed
export const scaleQuantity = (quantity, scale) => {
  const numberPattern = /[\d.\/]+/g;
  const number = numberPattern.exec(quantity)?.[0];

  if (!number) return quantity; // Return original if no numeric value found

  const scaled = safeEval(number) * scale;
  const unit = quantity.replace(numberPattern, "").trim();

  if (Number.isInteger(scaled)) return `${scaled} ${unit}`;

  return `${decimalToFraction(scaled)} ${unit}`;
};
