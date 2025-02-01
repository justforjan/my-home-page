export function formatDateToYearMonth(date: Date): string {
    return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
}