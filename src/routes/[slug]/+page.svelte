<script lang="ts">
	import type { PageData } from './$types';
	import { resolve } from '$app/paths';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="container">
	<nav class="sidebar">
		<div class="home-link">
			<a href={resolve('/')}>← All Pages</a>
		</div>
		<h3>Contents</h3>
		<ul>
			{#each data.headings as heading (heading.id)}
				<li class="heading-level-{heading.level}">
					<a href="#{heading.id}">{heading.text}</a>
				</li>
			{/each}
		</ul>
	</nav>
	
	<main class="content">
		<article>
			{@html data.html}
		</article>
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
		font-size: 12pt;
		background-color: #f5f5dc; /* beige */
	}

	.container {
		display: flex;
		min-height: 100vh;
	}

	.sidebar {
		position: fixed;
		left: 0;
		top: 0;
		width: 250px;
		height: 100vh;
		background-color: #e8e8d0;
		padding: 20px;
		overflow-y: auto;
		border-right: 1px solid #d0d0b8;
	}

	.sidebar h3 {
		margin-top: 0;
		font-size: 1.2em;
		color: #333;
	}

	.home-link {
		margin-bottom: 20px;
		padding-bottom: 15px;
		border-bottom: 1px solid #d0d0b8;
	}

	.home-link a {
		color: #0066cc;
		text-decoration: none;
		font-weight: 500;
	}

	.home-link a:hover {
		text-decoration: underline;
	}

	.sidebar ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.sidebar li {
		margin: 8px 0;
	}

	.sidebar a {
		color: #555;
		text-decoration: none;
		transition: color 0.2s;
	}

	.sidebar a:hover {
		color: #000;
		text-decoration: underline;
	}

	.heading-level-1 {
		font-weight: bold;
	}

	.heading-level-2 {
		padding-left: 15px;
	}

	.heading-level-3 {
		padding-left: 30px;
		font-size: 0.9em;
	}

	.heading-level-4 {
		padding-left: 45px;
		font-size: 0.85em;
	}

	.content {
		margin-left: 250px;
		padding: 40px 60px;
		max-width: 900px;
		flex: 1;
	}

	article {
		line-height: 1.6;
	}

	:global(article h1) {
		font-size: 2em;
		margin-top: 0;
		color: #222;
	}

	:global(article h2) {
		font-size: 1.5em;
		margin-top: 1.5em;
		color: #333;
		border-bottom: 1px solid #d0d0b8;
		padding-bottom: 0.3em;
	}

	:global(article h3) {
		font-size: 1.25em;
		margin-top: 1.3em;
		color: #444;
	}

	:global(article p) {
		margin: 1em 0;
	}

	:global(article a) {
		color: #0066cc;
		text-decoration: none;
	}

	:global(article a:hover) {
		text-decoration: underline;
	}

	:global(article code) {
		background-color: #ebe9d8;
		padding: 2px 6px;
		border-radius: 3px;
		font-family: 'Courier New', monospace;
	}

	:global(article pre) {
		background-color: #ebe9d8;
		padding: 15px;
		border-radius: 5px;
		overflow-x: auto;
	}

	:global(article pre code) {
		background-color: transparent;
		padding: 0;
	}

	/* Font demonstration styles */
	:global(.times-new-roman) {
		font-family: 'Times New Roman', Times, serif;
	}

	:global(.helvetica) {
		font-family: Helvetica, Arial, sans-serif;
	}

	:global(.arial) {
		font-family: Arial, sans-serif;
	}

	:global(.garamond) {
		font-family: 'EB Garamond', Garamond, serif;
	}

	:global(.georgia) {
		font-family: Georgia, serif;
	}

	:global(.courier) {
		font-family: 'Courier New', Courier, monospace;
	}

	:global(.gill-sans) {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, sans-serif;
	}

	:global(.kbh) {
		font-family: Arial, sans-serif;
		letter-spacing: 0.05em;
	}

	:global(.eb-garamond) {
		font-family: 'EB Garamond', Garamond, serif;
	}

	:global(.open-sans) {
		font-family: 'Open Sans', Arial, sans-serif;
	}

	:global(.calibri) {
		font-family: Calibri, Arial, sans-serif;
	}

	:global(.verdana) {
		font-family: Verdana, Geneva, sans-serif;
	}

	:global(.dyslexie) {
		font-family: 'OpenDyslexic', Arial, sans-serif;
	}

	:global(.ten-pt) {
		font-size: 10pt;
	}

	:global(.twelve-pt) {
		font-size: 12pt;
	}

	:global(.ten-pt-italic-arial) {
		font-family: Arial, sans-serif;
		font-size: 10pt;
		font-style: italic;
	}

	:global(.ten-pt-arial) {
		font-family: Arial, sans-serif;
		font-size: 10pt;
	}

	@media (max-width: 768px) {
		.sidebar {
			position: static;
			width: 100%;
			height: auto;
			border-right: none;
			border-bottom: 1px solid #d0d0b8;
		}

		.content {
			margin-left: 0;
			padding: 20px;
		}

		.container {
			flex-direction: column;
		}
	}
</style>
