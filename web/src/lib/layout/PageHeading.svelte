<script>
	import { pageHeading } from '$lib/core/stores/page-heading-store';
	import { onMount } from 'svelte';

	let title;

	onMount(async () => {
		title = $pageHeading;
	});

	pageHeading.subscribe((result) => {
		title = result;
	});
</script>

<div
	class="my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300"
>
	<div>
		<h5 class="text-2xl font-medium leading-tight text-gray-800">{title}</h5>
		<ul class="flex flex-col md:flex-row items-start md:items-center text-gray-600 text-sm mt-3">
			<li class="flex items-center mr-3 mt-3 md:mt-0">
				<span class="mr-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-paperclip"
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
						<path
							d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9 l6.5 -6.5"
						/>
					</svg>
				</span>
				<span>Active</span>
			</li>
			<li class="flex items-center mr-3 mt-3 md:mt-0">
				<span class="mr-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-trending-up"
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
						<polyline points="3 17 9 11 13 15 21 7" />
						<polyline points="14 7 21 7 21 14" />
					</svg>
				</span>
				<span> Trending</span>
			</li>
		</ul>
	</div>
	<div class="mt-6 lg:mt-0">
		<button
			class="mx-2 my-2 bg-white transition duration-150 ease-in-out focus:outline-none hover:bg-gray-100 rounded text-indigo-700 px-6 py-2 text-sm"
			>Back</button
		>
	</div>
</div>
