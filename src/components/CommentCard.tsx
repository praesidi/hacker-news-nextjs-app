import { faUser, faClock, faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sanitizeText from '@/utils/sanitizeText';
import { Comment } from '@/types';
import convertTime from '@/utils/convertTime';

export default function CommentCard({ data }: { data: Comment }) {
	const sanitizedText = sanitizeText(data.text);
	const time = convertTime(data.time);

	// TODO: adjust colors for light and dark modes

	return (
		<div className='border-l-2 rounded py-1 px-3 border-neutral-500'>
			<div className='flex items-center gap-2 mb-1 font-light'>
				<div>
					<FontAwesomeIcon icon={faUser} className='mr-1 text-sm' />
					<span className=''>{data.by}</span>
				</div>
				<div>
					<FontAwesomeIcon icon={faClock} className='mr-1 text-sm' />
					<span className=''>{`${time} ago`}</span>
				</div>
			</div>
			<div dangerouslySetInnerHTML={{ __html: sanitizedText }}></div>
		</div>
	);
}
