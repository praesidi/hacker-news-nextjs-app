'use client';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

export default function BackButton() {
	const router = useRouter();

	return (
		<button
			className='border px-3 py-2 rounded-lg flex items-center transition duration-200 border-gray-300 hover:shadow active:scale-95 dark:border-gray-600 dark:hover:shadow-slate-500'
			onClick={() => router.back()}
		>
			<FontAwesomeIcon icon={faAngleLeft} className='text-lg mr-0.5' />
			<span className='ml-1'>Back</span>
		</button>
	);
}
