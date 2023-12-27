import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Providers from './providers';
import Updater from '@/components/Updater';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Hacker News',
	description: 'Hacker News reader made with Next.js and TypeScript',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`flex flex-col items-center bg-neutral-100 h-screen w-screen max-w-full dark:bg-gray-800 ${inter.className}`}
			>
				<Providers>
					<Header />
					<Updater>{children}</Updater>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
