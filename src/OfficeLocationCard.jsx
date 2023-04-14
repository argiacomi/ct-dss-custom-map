import React from 'react';
import { Button, Separator } from './components';

const OfficeLocationCard = ({
	label,
	title,
	address,
	city,
	phone,
	services,
	isLast
}) => {
	return (
		<div className='w-full'>
			<div className='mb-4 flex flex-row align-middle'>
				<div
					className='ml-3 mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500'
					style={{ aspectRatio: '1/1' }}
				>
					<span className='text-sm font-extrabold text-white'>{'12'}</span>
					<div className='h-full' />
				</div>
				<div className='ml-4 self-start'>
					<a href='/' className='cursor-pointer no-underline'>
						<div className='text-base font-bold text-black  hover:text-primary dark:text-white'>
							{title}
						</div>
					</a>
					<div className=' cursor-default text-gray-600'>{address}</div>
					<div className=' cursor-default text-gray-600'>{city}</div>
					<span className='mt-2 flex space-x-1'>
						<a
							href='/'
							className='cursor-pointer border-none bg-opacity-0 text-blue-700 no-underline decoration-inherit hover:text-primary dark:text-white'
						>
							{' '}
							View details
						</a>
						<Separator orientation='vertical' className='h-5' />
						<a
							href='/'
							className='hover: cursor-pointer border-none bg-opacity-0 text-blue-700 no-underline decoration-inherit hover:text-primary dark:text-white'
						>
							Get Directions
						</a>
					</span>
				</div>
			</div>
			{!isLast && (
				<div className='mx-3 mb-0'>
					<Separator />
				</div>
			)}
		</div>
	);
};

export default OfficeLocationCard;
