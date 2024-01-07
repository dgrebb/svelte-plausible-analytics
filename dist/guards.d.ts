import { type PageviewProp, type PageviewProps } from './PlausibleAnalytics.svelte';
/**
 * Handles various value types and issues warnings if the values are not suitable for passing to Plausible.
 * Specifically checks for DOMTokenList, HTMLInputElement, Array, RegExp, and Date instances,
 * and warns about potential errors if these are not parsed as strings.
 *
 * @param {unknown} value - The value to be handled and checked.
 * @returns {boolean} Returns true if the value is acceptable, otherwise throws an error.
 * @throws {Error} Throws an error if the value is neither a number nor a string.
 */
export declare const handleEntry: (entry: unknown) => boolean;
/**
 * Checks if the number of custom properties in a PageviewProps object exceeds a specified limit.
 *
 * @param {PageviewProps} props - The PageviewProps object to check.
 * @returns {boolean} Returns true if the number of properties is within the limit, otherwise logs a warning.
 */
export declare const isCustomPropsLimit: (props: PageviewProps) => props is PageviewProps;
/**
 * Checks if the length of a custom property name or value exceeds a specified limit.
 *
 * @param {number} limit - The maximum allowed character length.
 * @param {PageviewProp} entry - The custom property entry to check.
 * @returns {boolean} Returns true if the entry's length does not exceed the limit,  otherwise logs a warning.
 */
export declare const isCustomPropEntryLimit: (limit: number, entry: PageviewProp) => entry is PageviewProp;
