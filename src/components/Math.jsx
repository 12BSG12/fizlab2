import { MathJaxContext, MathJax } from 'better-react-mathjax';
import React from 'react';
import { useSelector } from 'react-redux';
import { config } from '../util/helper';

export const Math = () => {
  const { resultData } = useSelector((state) => state.data);
  return (
    <MathJaxContext config={config}>
      <div className="gridTable four-column">
        <MathJax className="mathJax">
          {'`I=I/1000`'}
          <b>(Ом)</b>
        </MathJax>
        <MathJax className="mathJax">
          {`$U_{L}=sqrt{U_K^2-(R_{K}I)^{2}}$`}
          <b>(В)</b>
        </MathJax>
        <MathJax className="mathJax">
          {`$U_{R_{K}}=I*R_{K}$`}
          <b>(В)</b>
        </MathJax>
        <MathJax className="mathJax">
          {`$X_{L}=U_{L}/I$`}
          <b>(Ом)</b>
        </MathJax>
        <MathJax className="mathJax">
          {`$X_{C}=U_{C}/I$`}
          <b>(Ом)</b>
        </MathJax>
        <MathJax className="mathJax">
          {`$Z=sqrt{(R+R_{K})^{2}+(X_{L}-X_{C})^{2}}$`}
          <b>(Ом)</b>
        </MathJax>
        <MathJax className="mathJax">
          {`$phi=arctg((X_{L}-X_{C})/(R+R_{K}))$`}
          <b>(гр.)</b>
        </MathJax>
      </div>
      <div className="gridTable">
        {resultData.map((item) => (
          <div key={item.id}>
            <i>({item.id + 1})</i>
            <MathJax className="mathJax">
              {`$U_{L}=sqrt{${item.mathData.UK}^2-(${item.mathData.RK}*${item.mathData.I})^{2}}=${item.UL}$`}
              <b>(В)</b>
            </MathJax>
            <MathJax className="mathJax">
              {`$U_{R_{K}}=${item.mathData.I}*${item.mathData.RK}=${item.UR}$`}
              <b>(В)</b>
            </MathJax>
            <MathJax className="mathJax">
              {`$X_{L}=${item.UL}/${item.mathData.I}=${item.XL}$`}
              <b>(Ом)</b>
            </MathJax>
            <MathJax className="mathJax">
              {`$X_{C}=${item.mathData.UC}/${item.mathData.I}=${item.XC}$`}
              <b>(Ом)</b>
            </MathJax>
            <MathJax className="mathJax">
              {`$Z=sqrt{(${item.mathData.R}+${item.mathData.RK})^{2}+(${item.XL}-${item.XC})^{2}}=${item.Z}$`}
              <b>(Ом)</b>
            </MathJax>
            <MathJax className="mathJax">
              {`$phi=arctg((${item.XL}-${item.XC})/(${item.mathData.R}+${item.mathData.RK}))=${item.F}$`}
              <b>(гр.)</b>
            </MathJax>
          </div>
        ))}
      </div>
    </MathJaxContext>
  );
};
