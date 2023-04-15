import React from 'react';
import { Paper } from './components';
import SearchBox from './SearchBox';
import OfficeLocationCard from './OfficeLocationCard';
import Offices from './officeData.json';
import GoogleMap from './GoogleMap';

import './App.css';

const App = () => {
	const initialLocation = {
		center: { lat: 41.7677753, lng: -72.6877505 },
		zoom: 18
	};

	return (
		<React.StrictMode>
			<Paper
				variant='elevation-2'
				className='mx-auto my-4 box-border h-screen w-full max-w-[1200px] cursor-default px-4 pb-4 dark:bg-gray-900'
			>
				<div className='grid h-full w-full grid-cols-1 overflow-hidden md:grid-cols-3'>
					<h1 className='col-span-full row-start-1 w-full text-center md:col-span-1'>
						Office Locator
					</h1>
					<div className='col-span-full row-start-2 w-full md:col-span-1 md:row-start-2'>
						<SearchBox />
					</div>
					<div className='col-span-full row-start-4 max-h-full w-full overflow-y-auto rounded-b-md bg-gray-50 dark:bg-gray-800 md:col-span-1 md:row-start-3 md:rounded-bl-md'>
						{Offices.map((office, index) => (
							<OfficeLocationCard
								key={index}
								label={index + 1}
								title={office.title}
								address={office.address}
								city={office.city}
								isLast={index === Offices.length - 1}
							/>
						))}
					</div>
					<div className='col-span-full row-start-3 h-full w-full md:col-span-2 md:col-start-2 md:row-start-2 md:row-end-4 md:rounded-r-md'>
						<GoogleMap
							center={initialLocation.center}
							zoom={initialLocation.zoom}
						/>
					</div>
				</div>
			</Paper>
		</React.StrictMode>
	);
};

export default App;
