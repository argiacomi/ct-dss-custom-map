import React from 'react';
import { Button, TextField } from './components';
import { SlidersHorizontal } from 'lucide-react';

const SearchBox = () => (
	<div className='rounded-tl-md bg-gray-100 p-2 dark:bg-gray-500'>
		<div className='mb-1 px-5 pt-3 text-xl'>Find a DSHS Office or Resource</div>
		<span className='flex items-center justify-start px-3 py-3 text-base'>
			<TextField
				type='text'
				placeholder='Zip Code, City, or County'
				className='mr-2 w-full cursor-text bg-white'
			/>
			<Button size='sm' className='h-[36px]'>
				Find
			</Button>
		</span>
		<Button
			color='primary'
			variant='text'
			className='mx-2 box-border flex w-full max-w-[284px] justify-start pl-2 pr-8 text-lg'
		>
			<SlidersHorizontal className='ml-2 mr-2 h-4 w-4' />
			Filter By Service
		</Button>
	</div>
);

export default SearchBox;
