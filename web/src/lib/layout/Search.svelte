<script>
	import { routeToPage } from '../core/navigation';

	let searchTerm = '';

	const search = () => {
		routeToPage(`search/${searchTerm}`);
	};
</script>

<div class="text-gray-500 absolute ml-3 inset-0 m-auto w-4 h-4">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="icon icon-tabler icon-tabler-search"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" />
		<circle cx="10" cy="10" r="7" />
		<line x1="21" y1="21" x2="15" y2="15" />
	</svg>
</div>
<input
	bind:value={searchTerm}
	on:keyup={(e) => e.key === 'Enter' && search()}
	class="border border-gray-100 focus:outline-none focus:border-indigo-700 w-56 rounded text-sm text-gray-500 bg-gray-100 pl-8 py-2"
	type="text"
	placeholder="Search stocks"
/>
