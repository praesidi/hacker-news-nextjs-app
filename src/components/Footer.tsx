import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
	return (
		<footer className='mt-auto p-1 max-w-[1280px] w-full pt-[40px] text-center'>
			design and code by{' '}
			<a
				href='https://github.com/praesidi'
				target='_blank'
				className='text-orange-600 transition-all duration-300 ease-out hover:text-orange-400'
			>
				praesidi
				<FontAwesomeIcon icon={faGithub} className='ml-0.5'></FontAwesomeIcon>
			</a>
		</footer>
	);
}
