export const createDataFirstTable = (id, F, UR, UK, UC, I) => {
  return { id, F, UR, UK, UC, I };
};

export const createDataLastTable = (id, i, UK, UC, R, RK, f) => {
  const I = +(i / 1000).toFixed(3);
  const UL = +Math.sqrt(Math.pow(UK, 2) - Math.pow(RK * I, 2)).toFixed(2);
  const UR = +(I * RK).toFixed(3);
  const XL = +(UL / I).toFixed(2);
  const XC = +(UC / I).toFixed(2);
  const Z = +Math.sqrt(Math.pow(R + RK, 2) + Math.pow(XL - XC, 2)).toFixed(2);
  const F = +((Math.atan((XL - XC) / (R + RK)) * 180) / Math.PI).toFixed(2);
  return {
    id,
    UL: isNaN(UL) ? 0 : UL,
    UR: isNaN(UR) ? 0 : UR,
    XL: isNaN(XL) ? 0 : XL,
    XC: isNaN(XC) ? 0 : XC,
    Z: isNaN(Z) ? 0 : Z,
    F: isNaN(F) ? 0 : F,
    mathData: {
      I, UK, UC, R, RK
    },
    f
  };
};

export const config = {
  loader: { load: ['input/asciimath'] },
  asciimath: {
    displaystyle: true,
    delimiters: [
      ['$', '$'],
      ['`', '`'],
    ],
  },
};
