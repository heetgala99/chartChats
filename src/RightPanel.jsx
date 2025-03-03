import React from 'react';
import ChartPlot from './ChartPlot';

const RightPanel = (props = {}) => {

  return (
    <div>
      <div className='flex flex-col'>
        <div className='text-sm text-center px-15 py-5 m-10 bg-gray-100 rounded-lg shadow-lg'>
          { props.answer }
        </div>
        <div className='bg-gray-100 px-5 mx-10 border rounded-lg shadow-lg'>
          <ChartPlot
            chartData={ props.data }
          />
        </div>
      </div>
    </div>
  )
};

export default RightPanel;