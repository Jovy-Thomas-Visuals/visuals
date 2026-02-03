import { Calendar, ChevronRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  coverImage: string;
}

interface BlogProps {
  onSelectPost: (postId: string) => void;
}

// Placeholder blog posts - sorted in reverse chronological order
const blogPosts: BlogPost[] = [
  {
    id: "blog-post-5",
    title: "Blog Post Title 5",
    date: "December 10, 2024",
    description: "A brief description of this blog post. This gives readers a preview of what the article is about and entices them to read more.",
    coverImage: "placeholder"
  },
  {
    id: "blog-post-4",
    title: "Blog Post Title 4",
    date: "November 15, 2024",
    description: "A brief description of this blog post. This gives readers a preview of what the article is about and entices them to read more.",
    coverImage: "placeholder"
  },
  {
    id: "blog-post-3",
    title: "Blog Post Title 3",
    date: "October 22, 2024",
    description: "A brief description of this blog post. This gives readers a preview of what the article is about and entices them to read more.",
    coverImage: "placeholder"
  },
  {
    id: "blog-post-2",
    title: "Blog Post Title 2",
    date: "September 8, 2024",
    description: "A brief description of this blog post. This gives readers a preview of what the article is about and entices them to read more.",
    coverImage: "placeholder"
  },
  {
    id: "blog-post-1",
    title: "Blog Post Title 1",
    date: "August 5, 2024",
    description: "A brief description of this blog post. This gives readers a preview of what the article is about and entices them to read more.",
    coverImage: "placeholder"
  }
];

export function Blog({ onSelectPost }: BlogProps) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl text-[#8b7355] mb-4">Blog</h2>
          <p className="text-lg text-[#6b6b6b]" style={{ fontFamily: "'Courier New', monospace" }}>
            Photography tips, behind-the-scenes stories, and creative inspiration
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white border-2 border-[#c4b8a4] overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => onSelectPost(post.id)}
            >
              {/* Cover Image Placeholder */}
              <div className="aspect-video bg-[#e8e4d8] border-b-2 border-dashed border-[#c4b8a4] flex items-center justify-center group-hover:bg-[#d8d4c8] transition-colors">
                <p className="text-[#8b7355] text-sm" style={{ fontFamily: "'Courier New', monospace" }}>
                  Cover Image<br />Placeholder
                </p>
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center text-xs text-[#8b7355] mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span style={{ fontFamily: "'Courier New', monospace" }}>
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="text-xl text-[#8b7355] mb-3 group-hover:text-[#6b5842] transition-colors"
                  style={{ fontFamily: "'Courier New', monospace" }}
                >
                  {post.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-sm text-[#6b6b6b] leading-relaxed mb-4"
                  style={{ fontFamily: "'Courier New', monospace" }}
                >
                  {post.description}
                </p>

                {/* Read More Link */}
                <div className="flex items-center text-sm text-[#8b7355] group-hover:text-[#6b5842] transition-colors">
                  <span style={{ fontFamily: "'Courier New', monospace" }}>
                    Read More
                  </span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Posts Message (if needed in future) */}
        {blogPosts.length === 0 && (
          <div className="text-center py-16 bg-[#f5f2ec] border-2 border-dashed border-[#c4b8a4]">
            <p className="text-[#8b7355] text-lg" style={{ fontFamily: "'Courier New', monospace" }}>
              No blog posts yet. Check back soon for photography tips and stories!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// Export blog posts for use in BlogPost component
export { blogPosts };
export type { BlogPost };
