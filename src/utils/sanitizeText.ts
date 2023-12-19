import { sanitize } from 'isomorphic-dompurify';

function sanitizeText(text: string) {
	return sanitize(text);
}

export default sanitizeText;
