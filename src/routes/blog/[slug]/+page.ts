import { error } from '@sveltejs/kit';
import { blogPosts, findPost } from '$lib/blogPosts';
import type { PageLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = () => blogPosts.map((p) => ({ slug: p.id }));

export const load: PageLoad = ({ params }) => {
  const post = findPost(params.slug);
  if (!post) {
    throw error(404, 'Post not found');
  }

  return {
    post,
    seo: {
      title: `${post.title} | Jovy Thomas Visuals Blog`,
      description: post.description,
      keywords: [
        'photography blog Nashville',
        'photography tips',
        'behind the scenes photography',
        'Jovy Thomas Visuals blog'
      ]
    }
  };
};
