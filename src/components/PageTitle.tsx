import React, { ReactNode } from 'react';

export default function PageTitle({ children }: { children: ReactNode }) {
	return (
		<h1 className='text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600'>
			{children}
		</h1>
	);
}
