import React from 'react';
import _ from 'lodash';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const ChartPlot = (props = {}) => {
  const {
    chartData = []
  } = props;

  const lineColors = [ '#8884d8', '#82ca9d' ];
  const keyNames = _.filter(_.keys(chartData[0]), (key) => key !== 'name');

  const lines = _.map(keyNames, (key, index) => {
    return (
      <Line
        key={ key }
        type="monotone"
        dataKey={ key }
        stroke={ lineColors[index] }
        activeDot={{ r: 4 }}
      />
    );
  });

  return (
    <ResponsiveContainer width="100%" height={ 400 }>
      <LineChart
        width={ 500 }
        height={ 300 }
        data={ chartData }
        margin={ { top: 5, right: 30, left: 20, bottom: 5 } }
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="name"
          tick={ { fontSize: 10 } }
        />
        <YAxis
          domain={ [80, 150] }
          tick={ { fontSize: 15 } }
          />
        <Tooltip
          wrapperStyle={ { fontSize: 15 } }
        />
        <Legend />
        { lines }
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartPlot;
