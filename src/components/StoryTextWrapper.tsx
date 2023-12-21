import sanitizeText from '@/utils/sanitizeText';

export default function StoryTextWrapper({ text }: { text: string }) {
	const sanitizedText = sanitizeText(text);

	return (
		<>
			{text ? (
				<div
					className='story-text'
					dangerouslySetInnerHTML={{ __html: text }}
				></div>
			) : null}
		</>
	);
}
