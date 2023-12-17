export default async function getData(url: string) {
	try {
		const ids = await fetchStoryIds(url);

		const promises = await ids.map(async (id: number) => {
			try {
				const res = await fetch(
					`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
				);
				const response = await res.json();
				return response;
			} catch (error) {
				throw new Error('Failed to fetch story');
			}
		});

		const result = await Promise.all(promises);

		return result;
	} catch (error) {
		console.log(error);
		throw new Error('Failed to fetch data');
	}
}

async function fetchStoryIds(url: string) {
	try {
		const res = await fetch(url, { next: { revalidate: 600 } });
		const response = await res.json();

		return response;
	} catch (error) {
		throw new Error('Failed to fetch IDs');
	}
}
