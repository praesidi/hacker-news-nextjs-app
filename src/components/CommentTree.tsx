import CommentCard from './CommentCard';
import { Story } from '@/types';

export default function CommentTree({ data }: { data: Story }) {
	let commentsQnty = '0 comments';

	if (data.descendants) {
		commentsQnty =
			data.descendants === 1 ? '1 comment' : `${data.descendants} comments`;
	}

	return (
		<>
			{/* only job posts do not have comment section */}
			{data.type !== 'job' && (
				<div className='mt-8 w-full'>
					<div className='text-lg font-semibold mb-5'>{commentsQnty}</div>
					{data.descendants > 0 ? (
						<div className='flex flex-col gap-3'>
							{data.kids &&
								data.kids.map((comment: any, index: number) => {
									return <CommentCard key={index} data={comment} />;
								})}
						</div>
					) : (
						<div>There are no comments yet ;(</div>
					)}
				</div>
			)}
		</>
	);
}
