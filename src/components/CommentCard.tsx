'use client';

import { faUser, faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sanitizeText from '@/utils/sanitizeText';
import { Comment } from '@/types';
import convertTime from '@/utils/convertTime';
import { ReactNode, useState } from 'react';

export default function CommentCard({ data }: { data: Comment }) {
	const [areNestedShown, setAreNestedShown] = useState<boolean>(true);

	const sanitizedText = sanitizeText(data.text);
	const time = convertTime(data.time);

	return (
		<>
			{/* comment container */}
			<div className='border rounded-md py-1 px-3 border-transparent border-l-neutral-500  transition duration-500 cursor-pointer hover:border-neutral-500'>
				{/* comment body */}
				<div
					onClick={() => {
						setAreNestedShown(false);
					}}
				>
					{data.deleted ? (
						<DeletedComment time={time} />
					) : (
						<CommonComment user={data.by} time={time} text={sanitizedText} />
					)}
				</div>
				{/* show nested comments button */}
				{data.kids && data.kids.length > 0 ? (
					<ShowNestedCommentsButton
						areShown={areNestedShown}
						onClick={() => setAreNestedShown(true)}
					>
						{data.kids?.length === 1
							? '1 comment'
							: `${data.kids?.length} comments`}
					</ShowNestedCommentsButton>
				) : null}
			</div>
			{/* nested comments container */}
			{data.kids && data.kids.length > 0 ? (
				<div
					className={`flex flex-col gap-3 pl-5 py-1 border-l border-neutral-300 dark:border-gray-700 ${
						areNestedShown ? '' : 'hidden'
					}`}
				>
					{data.kids.map((comment, index) => (
						<CommentCard key={index} data={comment} />
					))}
				</div>
			) : null}
		</>
	);
}

function CommonComment({
	user,
	time,
	text,
}: {
	user: string;
	time: string;
	text: string;
}) {
	return (
		<>
			<div className='flex items-center gap-2 mb-1 font-light'>
				<div className='flex items-center'>
					<FontAwesomeIcon icon={faUser} className='mr-1 text-sm' />
					<span className='font-medium'>{user}</span>
				</div>
				<div className='flex items-center'>
					<FontAwesomeIcon icon={faClock} className='mr-1 text-xs' />
					<span className='text-sm'>{`${time} ago`}</span>
				</div>
			</div>
			<div
				className='comment-text text-gray-800 dark:text-gray-300'
				dangerouslySetInnerHTML={{ __html: text }}
			></div>
		</>
	);
}

function DeletedComment({ time }: { time: string }) {
	return (
		<>
			<div className='flex items-center gap-2 mb-1 font-light'>
				<div className='flex items-center'>
					<FontAwesomeIcon icon={faUser} className='mr-1 text-sm' />
					<span className='font-medium'>unknown user</span>
				</div>
				<div className='flex items-center'>
					<FontAwesomeIcon icon={faClock} className='mr-1 text-xs' />
					<span className='text-sm'>{`${time} ago`}</span>
				</div>
			</div>
			<div className='italic text-gray-400'>This comment has been deleted</div>
		</>
	);
}

function ShowNestedCommentsButton({
	children,
	areShown,
	onClick,
}: {
	children: ReactNode;
	areShown: boolean;
	onClick: () => void;
}) {
	return (
		<div className={`flex justify-start mt-2 ${areShown ? 'hidden' : ''}`}>
			<button
				className='w-fit text-orange-400 hover:text-orange-300'
				onClick={onClick}
			>
				{children}
			</button>
		</div>
	);
}
