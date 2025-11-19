import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = () => {
	const contentDir = path.join(process.cwd(), 'content');
	
	if (!fs.existsSync(contentDir)) {
		return { pages: [] };
	}

	const files = fs.readdirSync(contentDir);
	const pages = files
		.filter((file) => file.endsWith('.md'))
		.map((file) => {
			const filePath = path.join(contentDir, file);
			const fileContent = fs.readFileSync(filePath, 'utf-8');
			const { data } = matter(fileContent);
			const slug = file.replace('.md', '');
			
			return {
				slug,
				title: data.title || slug
			};
		});

	return { pages };
};
