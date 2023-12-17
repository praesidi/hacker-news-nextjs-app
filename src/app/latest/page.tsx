import NavBar from '@/components/NavBar';
import PageTitle from '@/components/PageTitle';
import StoriesContainer from '@/components/StoriesContainer';
import getData from '../api/fetchStories';

export default async function Latest() {
	const data = await getData(
		'https://hacker-news.firebaseio.com/v0/newstories/.json?print=pretty&orderBy=%22$key%22&limitToFirst=100',
	);

	return (
		<main className='max-w-[1200px] flex flex-col items-center justify-center'>
			<NavBar />
			<PageTitle>Latest News</PageTitle>
			<StoriesContainer data={data} />
		</main>
	);
}
