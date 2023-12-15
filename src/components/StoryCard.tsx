import { Story } from '@/types';
import convertTime from '@/utils/convertTime';
import getShortLink from '@/utils/getShortLink';

export default function StoryCard({ data }: { data: Story }) {
	const postTime = convertTime(data.time);
	const link = data.url ? getShortLink(data.url) : 'link not provided';

	return (
		<div className='w-4/5 mb-2'>
			<div>
				<span className='text-lg'>{data.title}</span>
				<span>{link}</span>
			</div>
			<div>
				<span>{data.score}</span>
				<span>by {data.by}</span>
				<span>{postTime}</span>
				<span>{data.descendants} comments</span>
			</div>
		</div>
	);
}
