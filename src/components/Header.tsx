import ThemeToggle from './ThemeToggle';

export default function Header() {
	return (
		<header className='flex flex-col justify-center items-center w-full my-3 relative'>
			<div className='flex justify-end w-full px-5 -mb-6'>
				<ThemeToggle className={''} />
			</div>
			<h1 className='text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600'>
				Hacker News
			</h1>
		</header>
	);
}
