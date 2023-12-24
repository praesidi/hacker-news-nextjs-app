'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Image from 'next/image';
import BackButton from '@/components/BackButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons/faRefresh';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<main className='max-w-[1200px] w-full px-4 sm:px-8'>
			<div className='w-full flex justify-between my-6'>
				<BackButton />
				<button
					className='border px-3 py-2 rounded-lg flex items-center transition duration-200 border-gray-300 hover:shadow active:scale-95 dark:border-gray-600 dark:hover:shadow-slate-500'
					onClick={
						// Attempt to recover by trying to re-render the segment
						() => reset()
					}
				>
					<span className='mr-1'>Try Again</span>
					<FontAwesomeIcon icon={faRefresh} className='text-lg ml-0.5' />
				</button>
			</div>
			<div className=''>
				<h2 className='text-center text-2xl'>{`${error}`}</h2>
			</div>
			<div className='flex justify-center'>
				<Image src='/error-illustration.svg' alt='' width={540} height={300} />
			</div>
		</main>
	);
}
