<script>
	import { pageHeading } from '$lib/core/stores/page-heading-store';
	import { onMount } from 'svelte';

	onMount(async () => {
		pageHeading.set('Dashboard');
	});
</script>

<h3 class="text-lg font-medium leading-6 text-indigo-700">
	Welcome to Exchange built with SvelteKit - Search Stocks, Currencies and Crypto
</h3>
<p class="mt-1 text-sm text-gray-700">
	Visit <a class="text-indigo-600 hover:text-indigo-700" href="https://kit.svelte.dev"
		>kit.svelte.dev</a
	> to read the documentation
</p>
