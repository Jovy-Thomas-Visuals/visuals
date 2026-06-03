import type { PageLoad } from './$types';
import { blogPosts } from '$lib/blogPosts';

export const load: PageLoad = () => ({
  posts: blogPosts,
  seo: {
    title:
      'Photography Blog | Jovy Thomas Visuals - Tips & Stories from Nashville, TN',
    description:
      'Explore photography tips, behind-the-scenes stories, and creative inspiration from an award-winning photographer.',
    keywords: [
      'photography blog Nashville',
      'photography blog Tennessee',
      'photography tips',
      'behind the scenes photography',
      'portrait photography tips',
      'family photography tips'
    ]
  }
});
