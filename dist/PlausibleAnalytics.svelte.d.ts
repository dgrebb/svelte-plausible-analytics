import { SvelteComponent } from "svelte";
/**
 * Type definition for properties that can be sent as part of a page view event to Plausible.
 * These properties can be of type boolean, number, or string.
 */
export type PageviewProp = boolean | number | string;
/**
 * Type definition for pageview properties.
 * Can be either a boolean or an array containing a record with keys of type number or string,
 * and values of type boolean, number, or string.
 */
export type PageviewProps = {
    [key: number | string]: PageviewProp;
} | boolean;
declare const __propDef: {
    props: {
        /**
             * The API host.
             *
             * @defaultValue 'https://plausible.io'
             */ apiHost?: string | undefined;
        /**
             * Compatibility mode for tracking users on Internet Explorer.
             *
             * @defaultValue false
             */ compat?: boolean | undefined;
        /**
             * The domain name(s) of the website(s) to track.
             *
             * @defaultValue current hostname.
             */ domain?: string | string[] | undefined;
        /**
             * Enable analytics.
             *
             * @defaultValue `true` in production mode, `false` in development mode.
             */ enabled?: boolean | undefined;
        /**
             * Automatically track file downloads
             * (Requires manual goal configuration on Plausible.)
             * @defaultValue `false`
             */ fileDownloads?: boolean | undefined;
        /**
             * Automatically follow frontend navigation when using hash-based routing.
             *
             * @defaultValue `false`
             */ hash?: boolean | undefined;
        /**
             * Allow analytics to track on localhost (useful in hybrid apps).
             * @defaultValue `false`, unless `enabled` is `true` in development mode.
             */ local?: boolean | undefined;
        /**
             * Automatically track clicks on outbound links from your website.
             * (Requires manual goal configuration on Plausible.)
             * @defaultValue `false`
             */ outboundLinks?: boolean | undefined;
        /**
             * Holds the pageview properties to be used in the application.
             * The properties can be used for filtering in the Plausible dashboard. The pageview properties
             * are subject to certain limitations:
             * - Limited to 30 total custom properties per event.
             * - Limited to 300 characters per property name.
             * - Limited to 2000 characters per property value.
             *
             * @link https://plausible.io/docs/guided-tour#filtering for dashboard filtering by custom property details.
             * @defaultValue `false` Indicates no custom properties by default.
             */ pageviewProps?: PageviewProps | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PlausibleAnalyticsProps = typeof __propDef.props;
export type PlausibleAnalyticsEvents = typeof __propDef.events;
export type PlausibleAnalyticsSlots = typeof __propDef.slots;
export default class PlausibleAnalytics extends SvelteComponent<PlausibleAnalyticsProps, PlausibleAnalyticsEvents, PlausibleAnalyticsSlots> {
}
export {};
