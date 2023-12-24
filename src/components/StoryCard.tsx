import { Story } from '@/types';
import convertTime from '@/utils/convertTime';
import getShortLink from '@/utils/getShortLink';
import {
	faComments,
	faClock,
	faUser,
	faStar,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function StoryCard({ data }: { data: Story }) {
	const postTime = convertTime(data.time);
	const link = data.url ? getShortLink(data.url) : 'link not provided';

	return (
		<div className='w-11/12 sm:w-4/5 mb-2'>
			<div>
				<span className='text-lg font-medium text-gray-600  transition duration-300 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500'>
					<Link href={`/story/${data.id}`}>{data.title}</Link>
				</span>
				<span
					className={`text-gray-400 ml-1 transition duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 
					${link === 'link not provided' ? 'pointer-events-none opacity-50' : ''}`}
				>
					<a href={data.url} target='_blank'>
						({link})
					</a>
				</span>
			</div>
			<div className='flex flex-wrap text-gray-400 dark:text-gray-600'>
				<div className='flex items-center shrink-0 mr-1.5'>
					<FontAwesomeIcon icon={faStar} className='text-sm mr-0.5' />
					{`${data.score} points`}
				</div>

				<div className='flex items-center shrink-0 mr-1.5'>
					<FontAwesomeIcon icon={faUser} className='text-sm mr-0.5' />
					{data.by}
				</div>

				<div className='flex items-center shrink-0 mr-1.5'>
					<FontAwesomeIcon icon={faClock} className='text-sm mr-0.5' />
					{`${postTime} ago`}
				</div>

				{data.hasOwnProperty('descendants') && (
					<div className='flex items-center shrink-0'>
						<FontAwesomeIcon icon={faComments} className='text-sm mr-0.5' />
						{data.descendants === 1
							? `${data.descendants} comment`
							: `${data.descendants} comments`}
					</div>
				)}
			</div>
		</div>
	);
}
