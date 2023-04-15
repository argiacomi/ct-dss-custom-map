import React from 'react';
import { Paper } from './components';
import SearchBox from './SearchBox';
import OfficeLocationCard from './OfficeLocationCard';
import GoogleMaps from './GoogleMaps';
import Offices from './Offices';

import './App.css';

const App = () => {
  return (
    <React.StrictMode>
      <Paper
        variant='elevation-2'
        className='mx-auto my-0 box-border h-fit w-full max-w-[1440px] cursor-default p-2 dark:bg-gray-900 md:h-[98vh] md:p-4'
      >
        <div className='grid h-full w-full grid-cols-1 md:grid-cols-3 md:overflow-hidden'>
          <h1 className='col-span-full row-start-1 w-full text-center md:col-span-1'>
            Office Locator
          </h1>
          <div className='col-span-full row-start-2 w-full md:col-span-1 md:row-start-2'>
            <SearchBox />
          </div>
          <Offices />
        </div>
      </Paper>
    </React.StrictMode>
  );
};

export default App;
