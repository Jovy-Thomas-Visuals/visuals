export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  coverImage: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-post-5',
    title: 'Blog Post Title 5',
    date: 'December 10, 2024',
    description:
      'A brief description of this blog post. This gives readers a preview of what the article is about and entices them to read more.',
    coverImage: 'placeholder'
  },
  {
    id: 'blog-post-4',
    title: 'Blog Post Title 4',
    date: 'November 15, 2024',
    description:
      'A brief description of this blog post. This gives readers a preview of what the article is about and entices them to read more.',
    coverImage: 'placeholder'
  },
  {
    id: 'blog-post-3',
    title: 'Blog Post Title 3',
    date: 'October 22, 2024',
    description:
      'A brief description of this blog post. This gives readers a preview of what the article is about and entices them to read more.',
    coverImage: 'placeholder'
  },
  {
    id: 'blog-post-2',
    title: 'Blog Post Title 2',
    date: 'September 8, 2024',
    description:
      'A brief description of this blog post. This gives readers a preview of what the article is about and entices them to read more.',
    coverImage: 'placeholder'
  },
  {
    id: 'blog-post-1',
    title: 'Blog Post Title 1',
    date: 'August 5, 2024',
    description:
      'A brief description of this blog post. This gives readers a preview of what the article is about and entices them to read more.',
    coverImage: 'placeholder'
  }
];

export function findPost(id: string): BlogPost | undefined {
  return blogPosts.find((p) => p.id === id);
}
