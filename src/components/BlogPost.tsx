import { Calendar, ArrowLeft } from "lucide-react";
import { blogPosts, BlogPost as BlogPostType } from "./Blog";

interface BlogPostProps {
  postId: string;
  onBack: () => void;
}

export function BlogPost({ postId, onBack }: BlogPostProps) {
  // Find the blog post
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-16 bg-[#f5f2ec] border-2 border-dashed border-[#c4b8a4]">
            <p className="text-[#8b7355] text-lg mb-6" style={{ fontFamily: "'Courier New', monospace" }}>
              Blog post not found.
            </p>
            <button
              onClick={onBack}
              className="inline-flex items-center text-[#8b7355] hover:text-[#6b5842] transition-colors"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <article className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center text-[#8b7355] hover:text-[#6b5842] transition-colors mb-8 group"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </button>

        {/* Post Header */}
        <header className="mb-8">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl text-[#8b7355] mb-4">
            {post.title}
          </h1>

          {/* Date */}
          <div className="flex items-center text-sm text-[#6b6b6b]">
            <Calendar className="w-4 h-4 mr-2 text-[#8b7355]" />
            <span style={{ fontFamily: "'Courier New', monospace" }}>
              {post.date}
            </span>
          </div>
        </header>

        {/* Featured Image Placeholder */}
        <div className="mb-12">
          <div className="aspect-video bg-[#e8e4d8] border-2 border-dashed border-[#c4b8a4] flex items-center justify-center">
            <p className="text-[#8b7355] text-lg" style={{ fontFamily: "'Courier New', monospace" }}>
              Featured Image Placeholder
            </p>
          </div>
        </div>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-[#f5f2ec] p-8 border-l-4 border-[#8b7355] mb-8">
            <p className="text-[#6b6b6b] leading-relaxed mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
              {post.description}
            </p>
            <p className="text-[#6b6b6b] leading-relaxed" style={{ fontFamily: "'Courier New', monospace" }}>
              [Full blog post content will go here. This is a placeholder for the detailed article content, 
              which can include multiple paragraphs, images, tips, and stories.]
            </p>
          </div>

          {/* Content Sections Placeholders */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl text-[#8b7355] mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
                Section Heading 1
              </h2>
              <div className="bg-white p-6 border border-[#c4b8a4] mb-4">
                <p className="text-[#6b6b6b] leading-relaxed" style={{ fontFamily: "'Courier New', monospace" }}>
                  Lorem ipsum placeholder text for the first section of the blog post. This would contain 
                  detailed information, photography tips, or behind-the-scenes stories.
                </p>
              </div>
              
              {/* Image Placeholder */}
              <div className="aspect-video bg-[#e8e4d8] border-2 border-dashed border-[#c4b8a4] flex items-center justify-center">
                <p className="text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
                  Section Image Placeholder
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl text-[#8b7355] mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
                Section Heading 2
              </h2>
              <div className="bg-white p-6 border border-[#c4b8a4] mb-4">
                <p className="text-[#6b6b6b] leading-relaxed" style={{ fontFamily: "'Courier New', monospace" }}>
                  More placeholder content for the second section. This could include photography techniques, 
                  client stories, or creative inspiration.
                </p>
              </div>
              
              {/* Image Placeholder */}
              <div className="aspect-video bg-[#e8e4d8] border-2 border-dashed border-[#c4b8a4] flex items-center justify-center">
                <p className="text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
                  Section Image Placeholder
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl text-[#8b7355] mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
                Section Heading 3
              </h2>
              <div className="bg-white p-6 border border-[#c4b8a4]">
                <p className="text-[#6b6b6b] leading-relaxed" style={{ fontFamily: "'Courier New', monospace" }}>
                  Final section placeholder content. This area can be used for conclusions, tips, or 
                  calls-to-action for readers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-[#e8e4d8] border-2 border-[#8b7355] text-center">
          <h3 className="text-2xl text-[#8b7355] mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
            Interested in a Photography Session?
          </h3>
          <p className="text-[#6b6b6b] mb-6" style={{ fontFamily: "'Courier New', monospace" }}>
            Let's capture your special moments together. Contact me to book your session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:629-308-4828"
              className="bg-[#8b7355] text-white px-8 py-3 hover:bg-[#6b5842] transition-colors"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Call Now
            </a>
            <a 
              href="mailto:Jovy.thomas@gmail.com"
              className="bg-white text-[#8b7355] px-8 py-3 border-2 border-[#8b7355] hover:bg-[#f5f2ec] transition-colors"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Back to Blog Link */}
        <div className="mt-8 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center text-[#8b7355] hover:text-[#6b5842] transition-colors group"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Posts
          </button>
        </div>
      </div>
    </article>
  );
}
