export interface Story {
	id: number;
	by: string;
	descendants: number;
	kids?: number[];
	score: number;
	time: number;
	title: string;
	type: string;
	url?: string;
}

export interface Comment {
	by: string;
	id: number;
	kids?: number[];
	parent?: number;
	text: string;
	time: number;
	type: string;
}

export interface Job {
	by: string;
	id: number;
	score: number;
	text: string;
	time: number;
	title: string;
	type: string;
	url?: string;
}
