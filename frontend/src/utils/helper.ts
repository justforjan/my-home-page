export function formatDateToYearMonth(date: Date): string {
    return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
}

const IMAGES_BASE_URL = import.meta.env.VITE_IMAGES_BASE_URL

export function imagePathFromImageName(image: string): string {
    return `${IMAGES_BASE_URL}/${image}`
}