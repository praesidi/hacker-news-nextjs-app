'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

export default function Updater({ children }: { children: ReactNode }) {
	const router = useRouter();
	const seconds = 60; // change this value to change the interval

	useEffect(() => {
		setInterval(router.refresh, seconds * 1000);
	}, []);

	return <>{children}</>;
}
