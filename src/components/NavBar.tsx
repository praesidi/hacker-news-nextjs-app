export default function NavBar() {
	return (
		<nav className='flex justify-center items-center'>
			<ol className='flex gap-4'>
				<li>
					<a
						href='#'
						className='relative after:bg-black after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'
					>
						<span className=''>News</span>
					</a>
				</li>
				<li>
					<a
						href='#'
						className='relative after:bg-black after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'
					>
						<span>Latest</span>
					</a>
				</li>
				<li>
					<a
						href='#'
						className='relative after:bg-black after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'
					>
						<span>Ask</span>
					</a>
				</li>
				<li>
					<a
						href='#'
						className='relative after:bg-black after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'
					>
						<span>Show</span>
					</a>
				</li>
				<li>
					<a
						href='#'
						className='relative after:bg-black after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'
					>
						<span>Jobs</span>
					</a>
				</li>
			</ol>
		</nav>
	);
}
