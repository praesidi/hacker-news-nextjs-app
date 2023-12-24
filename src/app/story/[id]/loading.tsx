import BackButton from '@/components/BackButton';

export default function Loading() {
	return (
		<main className='max-w-[1280px] w-full flex flex-col items-center justify-center px-8'>
			{/* back button */}
			<div className='flex justify-start items-center w-full my-5'>
				<div className='h-[42px] w-[80px] rounded-lg bg-gray-300 animate-pulse'></div>
			</div>
			{/* title */}
			<div className='h-8 w-1/2 mb-1 bg-gray-300 rounded animate-pulse'></div>
			{/* story stats */}
			<div className='h-6 w-1/3 mb-8 bg-gray-300 rounded animate-pulse'></div>
			{/* comments counter */}
			<div className='w-full flex justify-start mb-5'>
				<div className='h-7 w-[200px] bg-gray-300 rounded animate-pulse'></div>
			</div>
			{/* comment tree */}
			<div className='w-full flex flex-col gap-3'>
				{Array(7)
					.fill(true)
					.map((_, index) => (
						<CommentSkeleton key={index} />
					))}
			</div>
		</main>
	);
}

function CommentSkeleton() {
	return (
		<div className='w-full rounded py-1 px-3 border-l border-l-neutral-500 '>
			<div className='h-4 w-[160px] mb-2 rounded bg-gray-300 animate-pulse'></div>
			<div className='flex w-full flex-col gap-2'>
				<div className='w-full h-4 rounded bg-gray-300 animate-pulse'></div>
				<div className='w-full h-4 rounded bg-gray-300 animate-pulse'></div>
				<div className='w-1/3 h-4 rounded bg-gray-300 animate-pulse'></div>
			</div>
		</div>
	);
}
