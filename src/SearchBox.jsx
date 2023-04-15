import React from 'react';
import { Button, TextField } from './components';
import { SlidersHorizontal } from 'lucide-react';

const SearchBox = () => (
	<div className='rounded-t-md bg-gray-100 p-2 dark:bg-gray-500 md:rounded-tl-md'>
		<div className='mb-1 px-5 pt-3 text-xl'>
			Find a CT DSS Office or Resource
		</div>
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
		<div className='box-border flex w-full min-w-0 whitespace-nowrap px-2'>
			<Button
				color='primary'
				variant='text'
				className='box-border w-full justify-start px-1 py-2 text-lg'
			>
				<SlidersHorizontal className='ml-2 mr-2 h-4 w-4' />
				Filter By Service
			</Button>
		</div>
	</div>
);

export default SearchBox;
