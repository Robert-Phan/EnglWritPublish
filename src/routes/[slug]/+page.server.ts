import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';
import type { PageServerLoad, EntryGenerator } from './$types';
import { base } from '$app/paths';

export const prerender = true;

export const load: PageServerLoad = ({ params }) => {
	const { slug } = params;
	const filePath = path.join(process.cwd(), 'content', `${slug}.md`);

	if (!fs.existsSync(filePath)) {
		throw error(404, 'Page not found');
	}

	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(fileContent);

	// Configure marked to add IDs to headings and fix image paths
	const renderer = new marked.Renderer();
	const headings: { level: number; text: string; id: string }[] = [];

	renderer.heading = ({ tokens, depth }) => {
		const text = tokens.map((token) => {
			if ('text' in token) return token.text;
			if ('raw' in token) return token.raw;
			return '';
		}).join('');
		const id = text.toLowerCase().replace(/[^\w]+/g, '-');
		headings.push({ level: depth, text, id });
		return `<h${depth} id="${id}">${text}</h${depth}>`;
	};

	// Fix image paths to include base path
	renderer.image = ({ href, title, text }) => {
		const imagePath = href.startsWith('/') ? `${base}${href}` : href;
		const titleAttr = title ? ` title="${title}"` : '';
		return `<img src="${imagePath}" alt="${text}"${titleAttr}>`;
	};

	marked.use({ renderer });
	const html = marked(content);

	return {
		slug,
		title: data.title || slug,
		html,
		headings
	};
};

// Generate static paths for all markdown files at build time
export const entries: EntryGenerator = () => {
	const contentDir = path.join(process.cwd(), 'content');
	
	if (!fs.existsSync(contentDir)) {
		return [];
	}

	const files = fs.readdirSync(contentDir);
	return files
		.filter((file) => file.endsWith('.md'))
		.map((file) => ({
			slug: file.replace('.md', '')
		}));
};
