import Link from 'next/link';

export default function NavBar() {
	return (
		<nav className='flex justify-center items-center mb-6'>
			<ol className='flex gap-4'>
				<li>
					<Link
						href='/news'
						className='relative text-lg font-semibold text-gray-400  after:bg-orange-500 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'
					>
						<span className=''>News</span>
					</Link>
				</li>
				<li>
					<Link
						href='/latest'
						className='relative text-lg font-semibold text-gray-400 after:bg-orange-500 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'
					>
						<span>Latest</span>
					</Link>
				</li>
				<li>
					<Link
						href='/ask'
						className='relative text-lg font-semibold text-gray-400 after:bg-orange-500 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'
					>
						<span>Ask</span>
					</Link>
				</li>
				<li>
					<Link
						href='/show'
						className='relative text-lg font-semibold text-gray-400 after:bg-orange-500 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'
					>
						<span>Show</span>
					</Link>
				</li>
				<li>
					<Link
						href='/jobs'
						className='relative text-lg font-semibold text-gray-400 after:bg-orange-500 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'
					>
						<span>Jobs</span>
					</Link>
				</li>
			</ol>
		</nav>
	);
}
