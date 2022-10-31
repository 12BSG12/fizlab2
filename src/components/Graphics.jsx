import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  DiscreteColorLegend,
} from 'react-vis';
import { useWindowDimensions } from '../hooks/hooks';

export const Graphics = ({
  xAxisOn0 = true,
  yAxisOn0 = true,
  firstGraphic,
  thirdGraphic,
  secondGraphic,
}) => {
  const { width } = useWindowDimensions();
  return (
    <div className="Graphics">
      <XYPlot
        width={width >= 1200 ? width / 2.2 : width - 50}
        height={500}
        {...{ xDomain: firstGraphic.xDomain, yDomain: firstGraphic.yDomain }}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="f, кГц" on0={xAxisOn0} />
        <YAxis title="I, мА; U, В" on0={yAxisOn0} />
        <LineMarkSeries data={firstGraphic.UL} color='#12939A'/>
        <LineMarkSeries data={firstGraphic.UC} color='#000'/>
        <LineMarkSeries data={firstGraphic.I} color='#f93'/>
        <DiscreteColorLegend
          style={{ position: 'absolute', left: '80px', top: '10px' }}
          orientation="horizontal"
          items={[
            {
              title: 'UL',
              color: '#12939A',
            },
            {
              title: 'UC',
              color: '#000',
            },
            {
              title: 'I',
              color: '#f93',
            },
          ]}
        />
      </XYPlot>
      <XYPlot
        width={width >= 1200 ? width / 2.2 : width - 50}
        height={500}
        {...{ xDomain: secondGraphic.xDomain, yDomain: secondGraphic.yDomain }}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="f, кГц" on0={xAxisOn0} />
        <YAxis title="Z, X (Ом)" on0={yAxisOn0} />
        <LineMarkSeries data={secondGraphic.Z} color='#12939A'/>
        <LineMarkSeries data={secondGraphic.XL} color='#000'/>
        <LineMarkSeries data={secondGraphic.XC} color='#f93'/>
        <DiscreteColorLegend
          style={{ position: 'absolute', left: '80px', top: '10px' }}
          orientation="horizontal"
          items={[
            {
              title: 'Z',
              color: '#12939A',
            },
            {
              title: 'XL',
              color: '#000',
            },
            {
              title: 'XC',
              color: '#f93',
            },
          ]}
        />
      </XYPlot>
      <XYPlot
        width={width >= 1200 ? width / 2.2 : width - 50}
        height={500}
        {...{ xDomain: thirdGraphic.xDomain, yDomain: thirdGraphic.yDomain }}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="f, кГц" on0={xAxisOn0} />
        <YAxis title="&#4342; &#176;" on0={yAxisOn0} />
        <LineMarkSeries data={thirdGraphic.fi} color='#12939A'/>
        <DiscreteColorLegend
          style={{ position: 'absolute', left: '80px', top: '10px' }}
          orientation="horizontal"
          items={[
            {
              title: 'fi',
              color: '#12939A',
            },,
          ]}
        />
      </XYPlot>
    </div>
  );
};
