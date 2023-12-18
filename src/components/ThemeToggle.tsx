'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function ThemeToggle({ className }: { className: string }) {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<>
			{theme === 'light' ? (
				<button
					onClick={() => setTheme('dark')}
					className='w-[24px] transition duration-300 ease-in-out text-xl'
				>
					<FontAwesomeIcon icon={faSun} />
				</button>
			) : (
				<button
					onClick={() => setTheme('light')}
					className='w-[24px] transition duration-300 ease-in-out text-xl'
				>
					<FontAwesomeIcon icon={faMoon} />
				</button>
			)}
		</>
	);
}
