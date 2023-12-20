export default async function fetchStory(id: string) {
	try {
		const res = await fetch(
			`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
		);
		const response = await res.json();

		if (response.kids && response.kids.length > 0) {
			response.kids = await Promise.all(
				response.kids.map(async (id: string) => {
					try {
						const response = await fetchStory(id);

						return response;
					} catch (error) {
						throw new Error('Failed to fetch comment');
					}
				}),
			);
		}
		return response;
	} catch (error) {
		throw new Error('Failed to fetch story');
	}
}
