import { Award, ExternalLink, Star, Newspaper, MessageSquare } from "lucide-react";
// Import website assets - add your award/feature images to /assets/images.ts
// Example: import { npsAwardImage1, affinityPhotoFeature } from '../assets/images';

export function Mentions() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl text-[#8b7355] mb-4">Mentions & Features</h2>
          <p className="text-lg text-[#6b6b6b]" style={{ fontFamily: "'Courier New', monospace" }}>
            Awards, publications, and recognition from around the world
          </p>
        </div>

        {/* NPS Awards Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Award className="w-8 h-8 text-[#8b7355] mr-3" />
            <h3 className="text-3xl text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
              The NPS - Highly Commended Awards
            </h3>
          </div>
          
          <div className="bg-[#f5f2ec] p-6 border-l-4 border-[#8b7355] mb-6">
            <p className="text-[#6b6b6b] mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
              The following images received Highly Commended Awards by the judges of The NPS - one of the UK's fastest growing photographic organizations. 
              The first picture on the month of September 2017 and the remaining three on August 2017.
            </p>
            <a 
              href="https://www.thenps.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8b7355] hover:underline inline-flex items-center"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Visit The NPS <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Placeholder for NPS Award Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="aspect-square bg-[#e8e4d8] border-2 border-dashed border-[#c4b8a4] flex items-center justify-center">
                <p className="text-[#8b7355] text-sm text-center" style={{ fontFamily: "'Courier New', monospace" }}>
                  NPS Award Image {num}<br />
                  {num === 1 ? '(Sept 2017)' : '(Aug 2017)'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Affinity Photo Feature */}
        <div className="mb-12 bg-white p-8 border-2 border-[#c4b8a4]">
          <div className="flex items-center mb-4">
            <Star className="w-6 h-6 text-[#8b7355] mr-3" />
            <h3 className="text-2xl text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
              Affinity Photo for iPad
            </h3>
          </div>
          <p className="text-[#6b6b6b] mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
            My work got featured in Affinity Photo for iPad.
          </p>
          <div className="aspect-video bg-[#e8e4d8] border-2 border-dashed border-[#c4b8a4] flex items-center justify-center mb-4">
            <p className="text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
              Affinity Photo Feature Image Placeholder
            </p>
          </div>
          <a 
            href="https://affinity.serif.com/en-us/photo/ipad/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#8b7355] hover:underline inline-flex items-center"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Visit Affinity Photo <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* DSLR Official Instagram Feature */}
        <div className="mb-12 bg-white p-8 border-2 border-[#c4b8a4]">
          <div className="flex items-center mb-4">
            <Star className="w-6 h-6 text-[#8b7355] mr-3" />
            <h3 className="text-2xl text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
              DSLR Official Instagram - Daily Feature
            </h3>
          </div>
          <p className="text-[#6b6b6b] mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
            This image got published in DSLR official on Instagram as Daily Feature on September 25, 2016.
          </p>
          <div className="aspect-square max-w-md mx-auto bg-[#e8e4d8] border-2 border-dashed border-[#c4b8a4] flex items-center justify-center mb-4">
            <p className="text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
              DSLR Official Feature Image Placeholder
            </p>
          </div>
          <a 
            href="https://www.instagram.com/dslrofficial/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#8b7355] hover:underline inline-flex items-center"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Visit @dslrofficial <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Jessica Drossin Feature */}
        <div className="mb-12 bg-white p-8 border-2 border-[#c4b8a4]">
          <div className="flex items-center mb-4">
            <Star className="w-6 h-6 text-[#8b7355] mr-3" />
            <h3 className="text-2xl text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
              Jessica Drossin's Site Feature
            </h3>
          </div>
          <p className="text-[#6b6b6b] mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
            The following image of mine is featured in super talented Jessica Drossin's site for showcasing 
            Evergreen - Before and After effect from JD Looking Glass: Cool Presets.
          </p>
          <div className="aspect-video bg-[#e8e4d8] border-2 border-dashed border-[#c4b8a4] flex items-center justify-center mb-4">
            <p className="text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
              Jessica Drossin Feature Image Placeholder
            </p>
          </div>
          <a 
            href="https://jessicadrossinstore.com/jd-looking-glass-cool-presets/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#8b7355] hover:underline inline-flex items-center"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Visit Jessica Drossin's Site <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Photo of the Day */}
        <div className="mb-12 bg-white p-8 border-2 border-[#c4b8a4]">
          <div className="flex items-center mb-4">
            <Award className="w-6 h-6 text-[#8b7355] mr-3" />
            <h3 className="text-2xl text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
              Photo of the Day
            </h3>
          </div>
          <p className="text-[#6b6b6b] mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
            Selected as photo of the day on October 5th, 2016.
          </p>
          <div className="aspect-video bg-[#e8e4d8] border-2 border-dashed border-[#c4b8a4] flex items-center justify-center mb-4">
            <p className="text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
              Photo of the Day Image Placeholder
            </p>
          </div>
          <a 
            href="https://www.facebook.com/thedslr/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#8b7355] hover:underline inline-flex items-center"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Visit The DSLR on Facebook <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Magic of Childhood Feature */}
        <div className="mb-12 bg-white p-8 border-2 border-[#c4b8a4]">
          <div className="flex items-center mb-4">
            <Star className="w-6 h-6 text-[#8b7355] mr-3" />
            <h3 className="text-2xl text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
              Featured by @MagicofChildhood
            </h3>
          </div>
          <div className="aspect-square max-w-md mx-auto bg-[#e8e4d8] border-2 border-dashed border-[#c4b8a4] flex items-center justify-center">
            <p className="text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
              Magic of Childhood Feature Image Placeholder
            </p>
          </div>
        </div>

        {/* Shubh Yatra - Air India Magazine */}
        <div className="mb-12 bg-white p-8 border-2 border-[#c4b8a4]">
          <div className="flex items-center mb-4">
            <Newspaper className="w-6 h-6 text-[#8b7355] mr-3" />
            <h3 className="text-2xl text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
              Shubh Yatra - Air India's Inflight Magazine
            </h3>
          </div>
          <p className="text-[#6b6b6b] mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
            My picture of Ethipothala waterfalls got featured in Shubh Yatra, Air India's inflight magazine.
          </p>
          <div className="aspect-video bg-[#e8e4d8] border-2 border-dashed border-[#c4b8a4] flex items-center justify-center mb-4">
            <p className="text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
              Shubh Yatra Feature Image Placeholder
            </p>
          </div>
          <a 
            href="http://shubh-yatra.in/rush-hour" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#8b7355] hover:underline inline-flex items-center"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Read the Article <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Media Coverage */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Newspaper className="w-8 h-8 text-[#8b7355] mr-3" />
            <h3 className="text-3xl text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
              Media Coverage
            </h3>
          </div>
          <p className="text-[#6b6b6b] mb-6" style={{ fontFamily: "'Courier New', monospace" }}>
            Featured in various newspapers and publications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="aspect-[3/4] bg-[#e8e4d8] border-2 border-dashed border-[#c4b8a4] flex items-center justify-center">
                <p className="text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
                  Newspaper Article {num}<br />Placeholder
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Kind Words Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <MessageSquare className="w-8 h-8 text-[#8b7355] mr-3" />
            <h3 className="text-3xl text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
              Kind Words
            </h3>
          </div>
          <p className="text-[#6b6b6b] mb-6" style={{ fontFamily: "'Courier New', monospace" }}>
            Reviews and testimonials from happy clients.
          </p>
          
          {/* Google Reviews Placeholder */}
          <div className="mb-6">
            <h4 className="text-xl text-[#8b7355] mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
              Google Reviews
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="bg-white p-4 border-2 border-dashed border-[#c4b8a4] flex items-center justify-center h-32">
                  <p className="text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
                    Google Review Screenshot {num}<br />Placeholder
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Messages Placeholder */}
          <div>
            <h4 className="text-xl text-[#8b7355] mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
              WhatsApp Messages
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((num) => (
                <div key={num} className="bg-white p-4 border-2 border-dashed border-[#c4b8a4] flex items-center justify-center h-48">
                  <p className="text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
                    WhatsApp Message {num}<br />Placeholder
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* IAPCP Article - Whimsical Portraits */}
        <div className="mb-12 bg-[#f5f2ec] p-8 border-2 border-[#8b7355]">
          <div className="flex items-center mb-6">
            <Newspaper className="w-8 h-8 text-[#8b7355] mr-3" />
            <h3 className="text-3xl text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
              IAPCP Article - Whimsical Portraits
            </h3>
          </div>
          
          <p className="text-[#6b6b6b] mb-6 italic" style={{ fontFamily: "'Courier New', monospace" }}>
            Sharing from an article for team - Indian Association of Professional Child Photographers (IAPCP) 
            with the topic - whimsical portraits.
          </p>

          {/* Article Images Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="aspect-square bg-white border-2 border-dashed border-[#c4b8a4] flex items-center justify-center">
                <p className="text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
                  IAPCP Article Image {num}<br />Placeholder
                </p>
              </div>
            ))}
          </div>

          {/* Q&A Content */}
          <div className="space-y-8">
            {/* Question 1 */}
            <div className="bg-white p-6 border-l-4 border-[#8b7355]">
              <h4 className="text-lg text-[#8b7355] mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
                How much time do you spend on the processing and any suggestion for the photographers who wish to do such work?
              </h4>
              <p className="text-[#6b6b6b] leading-relaxed mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
                My editing time per image ranges from 1 to 3 hours, although I find myself engaged in some pictures 
                for days to add a unique element in them that matches my vision. My suggestion to photographers who 
                want to do this genre is, be willing to do a lot of experiments with your pictures and have the courage 
                to be different.
              </p>
              <p className="text-[#6b6b6b] leading-relaxed" style={{ fontFamily: "'Courier New', monospace" }}>
                I would say, do not refrain yourself and create what you visualize in your mind, no matter how crazy 
                you think it is. I consider myself still in the learning process. And there is a vast world to explore.
              </p>
            </div>

            {/* Question 2 */}
            <div className="bg-white p-6 border-l-4 border-[#8b7355]">
              <h4 className="text-lg text-[#8b7355] mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
                Why you choose to do such photos?
              </h4>
              <p className="text-[#6b6b6b] leading-relaxed mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
                I create the images which appeal to my aesthetic sense and work for clients who appreciate the same. 
                I started off by everyday pictures, but wanted to do more and experiment. This led to an adventure 
                with some simple props and the imaginary world that could be created through my style of work.
              </p>
              <p className="text-[#6b6b6b] leading-relaxed mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
                I should say everything I have read and watched has influenced me in creating such pictures. In other 
                words, these pictures have an element of me in them. I have always loved to watch fairies and angel 
                movies and used to admire their paintings. I am equally attracted to movies with vintage elements.
              </p>
              <p className="text-[#6b6b6b] leading-relaxed" style={{ fontFamily: "'Courier New', monospace" }}>
                Through my pictures, I try to re-create whatever I wish I had experienced, a different world altogether. 
                Indeed, some of my own dreams and fantasies come to life through these pictures.
              </p>
            </div>

            {/* Question 3 */}
            <div className="bg-white p-6 border-l-4 border-[#8b7355]">
              <h4 className="text-lg text-[#8b7355] mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
                What lens do you generally use?
              </h4>
              <p className="text-[#6b6b6b] leading-relaxed" style={{ fontFamily: "'Courier New', monospace" }}>
                In terms of the lens, I mostly use Canon's 135mm and 50mm as I find it best for portraits. It helps 
                me in achieving lovely bokeh effect thus giving more attention to the subject.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}