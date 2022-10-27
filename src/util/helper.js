export const createDataFirstTable = (F, UR, UK, UC, I) => {
  return { F, UR, UK, UC, I };
};

export const createDataLastTable = (i, UK, UC) => {
  const I = i / 1000;
  const UL = Math.sqrt(Math.pow(UK, 2) - Math.pow(17.7 * I, 2)).toFixed(2);
  const UR = (I * 17.7).toFixed(3);
  const XL = (UL / I).toFixed(2);
  const XC = (UC / I).toFixed(2);
  const Z = Math.sqrt(Math.pow(220 + 17.7, 2) + Math.pow(XL - XC, 2)).toFixed(2);
  const F = ((Math.atan((XL - XC) / (220 + 17.7)) * 180) / Math.PI).toFixed(2);
  return { UL, UR, XL, XC, Z, F };
};
