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

export default function StoryCard({ data }: { data: Story }) {
	const postTime = convertTime(data.time);
	const link = data.url ? getShortLink(data.url) : 'link not provided';

	return (
		<div className='w-4/5 mb-2'>
			<div>
				<span className='text-lg font-medium text-gray-600'>{data.title}</span>
				<span className='text-neutral-400 ml-1'>
					<a href={data.url} target='_blank'>
						({link})
					</a>
				</span>
			</div>
			<div className='flex gap-2 text-gray-400 dark:text-gray-600'>
				<div className='flex items-center shrink-0'>
					<FontAwesomeIcon icon={faStar} className='text-sm mr-0.5' />
					{`${data.score} points`}
				</div>
				<div className='flex items-center shrink-0'>
					<FontAwesomeIcon icon={faUser} className='text-sm mr-0.5' />
					{`by ${data.by}`}
				</div>
				<div className='flex items-center shrink-0'>
					<FontAwesomeIcon icon={faClock} className='text-sm mr-0.5' />
					{postTime}
				</div>
				<div className='flex items-center shrink-0'>
					<FontAwesomeIcon icon={faComments} className='text-sm mr-0.5' />
					{data.descendants}
					{data.descendants === 1 ? ' comment' : ' comments'}
				</div>
			</div>
		</div>
	);
}
