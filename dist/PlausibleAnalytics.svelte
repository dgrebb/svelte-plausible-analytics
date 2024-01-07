<script context="module">const plausible = (event, options) => window.plausible(event, options);
</script>

<script>import { onMount } from "svelte";
import { dev } from "$app/environment";
import { page } from "$app/stores";
import { pa } from "./store.js";
onMount(() => {
  pa.subscribe((events) => {
    let next = events.length && events.shift();
    while (next) {
      const { event, data } = next;
      plausible(event, data);
      next = events.shift();
    }
  });
});
export let apiHost = "https://plausible.io";
export let compat = false;
export let domain = $page.url.hostname;
export let enabled = !dev;
export let fileDownloads = false;
export let hash = false;
export let local = enabled && dev;
export let outboundLinks = false;
export let pageviewProps = false;
let isCustomPropsLimit, isCustomPropEntryLimit;
const setPageviewProps = async (node) => {
  if (!pageviewProps)
    return;
  if (dev) {
    const guards = await import("./guards.js");
    ({ isCustomPropsLimit, isCustomPropEntryLimit } = guards);
    isCustomPropsLimit(pageviewProps);
  }
  Object.entries(pageviewProps).forEach(([key, value]) => {
    if (dev) {
      isCustomPropEntryLimit(300, key);
      isCustomPropEntryLimit(2e3, value);
    }
    node.setAttribute(`event-${key}`, String(value));
  });
};
$:
  api = `${apiHost}/api/event`;
$:
  plausibleSrc = [
    `${apiHost}/js/script`,
    compat ? "compat" : void 0,
    fileDownloads ? "file-downloads" : void 0,
    hash ? "hash" : void 0,
    local ? "local" : void 0,
    outboundLinks ? "outbound-links" : void 0,
    pageviewProps ? "pageview-props" : void 0,
    "js"
  ].filter(Boolean).join(".");
</script>

<svelte:head>
	{#if enabled}
		<script
			data-api={api}
			data-domain={domain.toString()}
			defer
			src={plausibleSrc}
			use:setPageviewProps
		></script>
		<script>
			window.plausible =
				window.plausible ||
				function () {
					(window.plausible.q = window.plausible.q || []).push(arguments);
				};
		</script>
	{/if}
</svelte:head>
