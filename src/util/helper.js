export const createDataFirstTable = (id, F, UR, UK, UC, I) => {
  return { id, F, UR, UK, UC, I };
};

export const createDataLastTable = (i, UK, UC, R, RK) => {
  const I = +(i / 1000);
  const UL = +Math.sqrt(Math.pow(UK, 2) - Math.pow(RK * I, 2)).toFixed(2);
  const UR = +(I * RK).toFixed(3);
  const XL = +(UL / I).toFixed(2);
  const XC = +(UC / I).toFixed(2);
  const Z = +Math.sqrt(Math.pow(R + RK, 2) + Math.pow(XL - XC, 2)).toFixed(2);
  const F = +((Math.atan((XL - XC) / (R + RK)) * 180) / Math.PI).toFixed(2);
  if (!isNaN(i) && !isNaN(UK) && !isNaN(UC) && !isNaN(R) && !isNaN(RK)) {
    return { UL, UR, XL, XC, Z, F };
  }
};
