import React from 'react';
import { Paper, Button, Separator } from './components';
import SearchBox from './SearchBox';
import OfficeLocationCard from './OfficeLocationCard';
import Offices from './officeData.json';

import './App.css';

const App = () => (
	<Paper
		variant='elevation-2'
		className='mx-auto my-4 box-border flex h-screen w-full max-w-[1200px] cursor-default flex-col px-4 dark:bg-gray-900'
	>
		<h1 className='w-[30%] text-center'>Office Locator</h1>
		<div className='flex flex-grow overflow-hidden'>
			<div className='flex w-[30%] flex-col'>
				<div className='grid flex-grow grid-cols-1'>
					<SearchBox />
				</div>
				<div className='mb-6 grid flex-grow grid-cols-1 overflow-y-auto rounded-bl-lg bg-gray-50 dark:bg-gray-800 '>
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
			</div>
			<div className='ml-4 w-[70%] flex-grow rounded-tr-md'>Map Box</div>
		</div>
	</Paper>
);

export default App;
