import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
} from 'react-vis';

export const Graphics = ({
  xAxisOn0 = true,
  yAxisOn0 = true,
  verticalTickValues,
  horizontalTickValues,
  firstGraphic,
  thirdGraphic,
  secondGraphic,
}) => {

  return (
    <div className='Graphics'>
      <XYPlot width={900} height={500} {...{ xDomain: firstGraphic.xDomain, yDomain: firstGraphic.yDomain }}>
        {!verticalTickValues || verticalTickValues.length ? (
          <VerticalGridLines tickValues={verticalTickValues} />
        ) : null}
        {!horizontalTickValues || horizontalTickValues.length ? (
          <HorizontalGridLines tickValues={horizontalTickValues} />
        ) : null}
        <XAxis title="f, кГц" on0={xAxisOn0} />
        <YAxis title="I, мА; U, В" on0={yAxisOn0} />
        <LineMarkSeries data={firstGraphic.UL} />
        <LineMarkSeries data={firstGraphic.UC} />
        <LineMarkSeries data={firstGraphic.I} />
      </XYPlot>
      <XYPlot width={900} height={500} {...{ xDomain: secondGraphic.xDomain, yDomain: secondGraphic.yDomain }}>
        {!verticalTickValues || verticalTickValues.length ? (
          <VerticalGridLines tickValues={verticalTickValues} />
        ) : null}
        {!horizontalTickValues || horizontalTickValues.length ? (
          <HorizontalGridLines tickValues={horizontalTickValues} />
        ) : null}
        <XAxis title="f, кГц" on0={xAxisOn0} />
        <YAxis title="Z, X (Ом)" on0={yAxisOn0} />
        <LineMarkSeries data={secondGraphic.Z} />
        <LineMarkSeries data={secondGraphic.XL} />
        <LineMarkSeries data={secondGraphic.XC} />
      </XYPlot>
      <XYPlot width={900} height={500} {...{ xDomain: thirdGraphic.xDomain, yDomain: thirdGraphic.yDomain }}>
        {!verticalTickValues || verticalTickValues.length ? (
          <VerticalGridLines tickValues={verticalTickValues} />
        ) : null}
        {!horizontalTickValues || horizontalTickValues.length ? (
          <HorizontalGridLines tickValues={horizontalTickValues} />
        ) : null}
        <XAxis title="f, кГц" on0={xAxisOn0} />
        <YAxis title="&#4342; &#176;" on0={yAxisOn0} />
        <LineMarkSeries data={thirdGraphic.fi} />
      </XYPlot>
    </div>
  );
};
