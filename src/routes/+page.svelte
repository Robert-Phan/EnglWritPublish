<script lang="ts">
	import type { PageData } from './$types';
	import { resolve } from '$app/paths';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Markdown Pages</title>
</svelte:head>

<div class="container">
	<h1>Available Pages</h1>
	<ul>
		{#each data.pages as page (page.slug)}
			<li>
				<a href={resolve(`/${page.slug}`)}>{page.title}</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
		font-size: 12pt;
		background-color: #f5f5dc;
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 40px 20px;
	}

	h1 {
		color: #333;
		border-bottom: 2px solid #d0d0b8;
		padding-bottom: 0.5em;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li {
		margin: 15px 0;
		padding: 10px;
		background-color: #ebe9d8;
		border-radius: 5px;
		transition: background-color 0.2s;
	}

	li:hover {
		background-color: #e0ddc8;
	}

	a {
		color: #0066cc;
		text-decoration: none;
		font-size: 1.1em;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
