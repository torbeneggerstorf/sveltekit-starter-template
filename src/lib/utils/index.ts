/**
 * Formats a date string to a localized format
 */
export function formatDate(date: string | Date, locale: string = 'de-DE'): string {
	const dateObj = typeof date === 'string' ? new Date(date) : date;
	return new Intl.DateTimeFormat(locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(dateObj);
}

/**
 * Truncates text to a specified length
 */
export function truncate(text: string, length: number, suffix: string = '...'): string {
	if (text.length <= length) return text;
	return text.slice(0, length).trim() + suffix;
}

/**
 * Creates a URL-friendly slug from a string
 */
export function slugify(text: string): string {
	return text
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^\w\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/--+/g, '-')
		.trim();
}

/**
 * Delays execution for a specified time
 */
export function delay(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Clamps a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
	return Math.min(Math.max(value, min), max);
}

/**
 * Checks if code is running on the server
 */
export function isServer(): boolean {
	return typeof window === 'undefined';
}

/**
 * Merges class names conditionally
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
	return classes.filter(Boolean).join(' ');
}
