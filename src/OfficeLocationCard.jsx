import React from 'react';
import { Separator } from './components';

const OfficeLocationCard = React.memo(
	({ label, title, address, city, isLast }) => {
		return (
			<div className='w-full cursor-default pt-4 transition-colors duration-500 hover:bg-gray-100 dark:hover:bg-gray-900'>
				<div className='mb-4 flex flex-row items-start'>
					<div className='aspect mx-3 mt-1 flex aspect-square h-6 w-6 items-center justify-center rounded-full bg-red-500 lg:mx-6'>
						<span className='text-sm font-extrabold text-white'>{label}</span>
					</div>
					<div>
						<a
							href='/'
							className='text-decoration-none cursor-pointer no-underline'
						>
							<div className='text-base font-bold text-black hover:text-primary dark:text-white sm:text-lg'>
								{title}
							</div>
						</a>
						<div className='text-xs text-gray-600 dark:text-gray-300 sm:text-sm'>
							{address}
						</div>
						<div className='text-xs text-gray-600 dark:text-gray-300 sm:text-sm'>
							{city}
						</div>
						<span className='mt-2 flex space-x-1'>
							<a
								href='/'
								className='text-decoration-none cursor-pointer border-none bg-opacity-0 text-blue-400 no-underline hover:text-blue-600'
							>
								View details
							</a>
							<Separator orientation='vertical' className='h-5' />
							<a
								href='/'
								className='text-decoration-none cursor-pointer border-none bg-opacity-0 text-blue-400 no-underline hover:text-blue-600'
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
	}
);

export default OfficeLocationCard;
