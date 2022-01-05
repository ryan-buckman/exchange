<script>
	import { page } from '$app/stores';
	import { afterUpdate } from 'svelte';
	import { pageHeading } from '$lib/core/stores/page-heading-store';

	let searchTerm;

	afterUpdate(() => {
		searchTerm = $page.params.term;
		pageHeading.set(`Search results for ${searchTerm}`);
	});
</script>

<h3 class="text-lg font-medium leading-6 text-indigo-700">
	{searchTerm}
</h3>
