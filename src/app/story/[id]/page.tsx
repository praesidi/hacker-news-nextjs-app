import getShortLink from '@/utils/getShortLink';
import fetchStory from '@/app/api/fetchStory';
import {
	faComments,
	faClock,
	faUser,
	faStar,
} from '@fortawesome/free-regular-svg-icons';
import { faLink, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import convertTime from '@/utils/convertTime';
import BackButton from '@/components/BackButton';
import CommentTree from '@/components/CommentTree';
import StoryTextWrapper from '@/components/StoryTextWrapper';

export default async function Story({ params }: { params: { id: string } }) {
	const data = await fetchStory(params.id);
	const postTime = convertTime(data.time);
	const link = data.url ? getShortLink(data.url) : 'link not provided';

	// FIXME: fix text (tags are still shown)
	// TODO: check if all comments returned

	return (
		<main className='max-w-[1200px] flex flex-col items-center justify-center px-8'>
			<div className='flex justify-start items-center w-full my-5'>
				<BackButton />
			</div>
			<h1 className='text-2xl font-bold text-gray-700 dark:text-gray-400'>
				{data.title}
			</h1>
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
				{data.hasOwnProperty('descendants') && (
					<div className='flex items-center shrink-0'>
						<FontAwesomeIcon icon={faComments} className='text-sm mr-0.5' />
						{data.descendants === 1
							? `${data.descendants} comment`
							: `${data.descendants} comments`}
					</div>
				)}
				<div className='flex items-center shrink-0 transition duration-300 hover:text-gray-600 dark:hover:text-gray-400'>
					<FontAwesomeIcon icon={faLink} className='text-sm mr-0.5' />
					<a
						href={`${data.url}`}
						target='_blank'
						className='underline decoration-dashed'
					>
						{link}
					</a>
				</div>
			</div>
			<StoryTextWrapper text={data.text} />
			{/* only job posts don't have comment section */}
			{data.type === 'job' ? <></> : <CommentTree data={data} />}
		</main>
	);
}
