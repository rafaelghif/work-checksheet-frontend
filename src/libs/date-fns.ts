import { addYears, differenceInDays, format, isAfter, parseISO } from "date-fns";
import { id } from "date-fns/locale";

/**
 * Format a string date into "yyyy-MM-dd HH:mm" format with the provided locale.
 * @param {string} stringDate - The string date to format.
 * @returns {string} The formatted date string.
 */
export const formatDateTime = (stringDate: string) => {
    return format(parseISO(stringDate), "yyyy-MM-dd HH:mm", { locale: id });
}

/**
 * Format a string date into "yyyy-MM-dd" format with the provided locale.
 * @param {string} stringDate - The string date to format.
 * @returns {string} The formatted date string.
 */
export const formatDate = (stringDate: string) => {
    return format(parseISO(stringDate), "yyyy-MM-dd", { locale: id });
}

/**
 * Add a specific number of years to a given string date and format it into "yyyy-MM-dd" format with the provided locale.
 * @param {string} stringDate - The string date to add years to.
 * @param {number} yearCount - The number of years to add.
 * @returns {string} The new formatted date string or the original stringDate if it's falsy.
 */
export const addYearFromString = (stringDate: string, yearCount: number) => {
    return stringDate ? format(addYears(parseISO(stringDate), yearCount), "yyyy-MM-dd", { locale: id }) : stringDate;
}

/**
 * Check if a string date is expired (past the current date).
 * @param {string} stringExpireDate - The string date to check for expiration.
 * @returns {boolean} true if the date is expired, false otherwise.
 */
export const isExpired = (stringExpireDate: string) => {
    const currentDate = new Date();
    const expireDate = parseISO(stringExpireDate);
    return isAfter(currentDate, expireDate);
}

/**
 * Check if a string date is within a specified number of days from the current date.
 * @param {string} stringExpireDate - The string date to check.
 * @param {number} dayCountTolerance - The number of days for the tolerance.
 * @returns {boolean} true if the date is within the tolerance days, false otherwise.
 */
export const isWithinToleranceDays = (stringExpireDate: string, dayCountTolerance: number) => {
    const currentDate = new Date();
    const expireDate = parseISO(stringExpireDate);
    const dayDifference = Math.abs(differenceInDays(currentDate, expireDate));
    return dayDifference <= dayCountTolerance;
}