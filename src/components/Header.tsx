import ThemeToggle from './ThemeToggle';

export default function Header() {
	return (
		<header className='flex justify-between items-center max-w-[1280px] w-full my-3 px-5 relative'>
			<div className='w-[24px]'></div>
			<h1 className='text-center text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600'>
				Hacker News
			</h1>
			<div className='h-full w-[24px] flex items-start'>
				<ThemeToggle className={''} />
			</div>
		</header>
	);
}
