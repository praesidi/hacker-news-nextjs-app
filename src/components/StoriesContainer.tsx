import { Story } from '@/types';
import StoryCard from './StoryCard';

export default function StoriesContainer({ data }: { data: Story[] }) {
	return (
		<div className='flex flex-col justify-center items-center gap-3'>
			{data.map((story: Story, index: number) => (
				<StoryCard key={index} data={story} />
			))}
		</div>
	);
}
