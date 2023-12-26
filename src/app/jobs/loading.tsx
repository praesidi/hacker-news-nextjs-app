export default function Loading() {
	return (
		<main className='max-w-[1280px] w-full flex flex-col items-center justify-center px-4 sm:px-8'>
			<div className='h-6 w-[290px] mb-7 rounded bg-gray-300 dark:bg-gray-600 animate-pulse'></div>
			<div className='h-8 w-[90px] mb-5 rounded bg-gray-300 dark:bg-gray-600 animate-pulse'></div>
			<div className='w-full flex flex-col justify-center items-center gap-4'>
				{Array(10)
					.fill(true)
					.map((_, index) => (
						<StoryCardSkeleton key={index} />
					))}
			</div>
		</main>
	);
}

function StoryCardSkeleton() {
	return (
		<div className='w-3/4 flex flex-col justify-center items-start'>
			<div className='h-7 w-full rounded mb-2 bg-gray-300 dark:bg-gray-600 animate-pulse'></div>
			<div className='h-6 w-2/3 rounded bg-gray-300 dark:bg-gray-600 animate-pulse'></div>
		</div>
	);
}
