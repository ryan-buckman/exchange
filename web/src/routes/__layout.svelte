<script>
	import Nav from '$lib/layout/Nav.svelte';
	import PageHeading from '$lib/layout/PageHeading.svelte';
	import '../app.css';
</script>

<div class="h-full w-full absolute">
	<Nav />
	<PageHeading />
	<div class="container mx-auto px-6">
		<!-- Remove class [ h-64 ] when adding a card block -->
		<!-- Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border -->
		<div class="w-full h-64 rounded">
			<slot />
		</div>
	</div>
</div>
