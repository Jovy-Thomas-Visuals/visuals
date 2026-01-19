import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Check } from "lucide-react";
import { getImagesBySection } from "../utils/imageUtils";

export function SmallEventPhotography() {
  // Load images from the JSON configuration
  const pastEventImages = getImagesBySection("SMALL EVENT");

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl text-[#8b7355] mb-6">Small Event Photography</h2>
          <p className="text-xl text-[#8b7355] italic mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
            Every gathering has a story to tell
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none mb-16" style={{ fontFamily: "'Courier New', monospace" }}>
          <p className="text-[#6b6b6b] mb-6 leading-relaxed">
            Every event—big or small, has a story.
          </p>
          <p className="text-[#6b6b6b] mb-6 leading-relaxed">
            Maybe it's a birthday toast, a quiet conversation between friends, a laugh shared across the room, 
            or the glow of candles on a special evening. My goal is to notice those moments and capture them 
            as beautiful memories to treasure.
          </p>
          <p className="text-[#6b6b6b] mb-8 leading-relaxed">
            With my Small Event Photography package, I document your gathering in a natural, unobtrusive way, 
            creating a collection of images that feel honest, warm, and true to your story.
          </p>

          {/* What You Receive Section */}
          <div className="mb-12 bg-[#f5f2ec] p-8 border-l-4 border-[#8b7355]">
            <h3 className="text-2xl text-[#8b7355] mb-6">What You Receive</h3>
            
            <p className="text-[#6b6b6b] mb-4">
              For <span className="text-[#8b7355]">$140 per hour</span>, you get complete, thoughtful coverage of your event.
            </p>
            <p className="text-[#6b6b6b] mb-6">
              For every hour I'm with you, I deliver a minimum of 50 edited images, each one enhanced to bring 
              out the best color, light, and emotion.
            </p>

            <p className="text-[#8b7355] mb-4">Your final collection includes:</p>
            <ul className="space-y-3 mb-0">
              {[
                'High-resolution digital images',
                'Standard enhancements: color and exposure correction, vibrance, contrast, saturation, sharpening and vignetting',
                'Images delivered on a USB drive for easy access and sharing',
                'Your choice of PNG or JPG formats',
                'A delivery window of 1–3 weeks, giving me enough time to polish each image with care'
              ].map((item, index) => (
                <li key={index} className="flex items-start text-[#6b6b6b]">
                  <Check className="w-5 h-5 text-[#8b7355] mr-3 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-[#6b6b6b] mt-6 italic text-sm">
              No albums or prints are included — this package is designed for clients who prefer the freedom 
              of digital images and want the flexibility to print or share them however they wish.
            </p>
          </div>

          {/* Transparent Billing Section */}
          <div className="mb-12 bg-white p-8 border border-[#c4b8a4]">
            <h3 className="text-2xl text-[#8b7355] mb-6">Transparent Billing</h3>
            
            <p className="text-[#6b6b6b] mb-4">
              Coverage is billed in 30-minute increments.
            </p>
            <p className="text-[#6b6b6b] mb-4">
              Each 30-minute block is <span className="text-[#8b7355]">$70</span> and includes 25 edited images.
            </p>
            <p className="text-[#6b6b6b] mb-6">
              The maximum coverage is 3 hours, so I can give your event my full attention and deliver the best 
              images possible.
            </p>
            
            <p className="text-[#6b6b6b] text-sm italic">
              To ensure a smooth process and timely delivery of your memories, payment is kindly requested 
              before the transfer of any digital images.
            </p>
          </div>

          {/* Additional Polish Section */}
          <div className="mb-16 bg-[#e8e4d8] p-8 border border-[#8b7355]">
            <h3 className="text-2xl text-[#8b7355] mb-4">A Little Extra Polish</h3>
            
            <p className="text-[#6b6b6b] mb-0">
              If you'd like additional retouching—beyond the standard enhancements—I offer that too for{' '}
              <span className="text-[#8b7355]">$8 per image</span>. This is perfect for close-up portraits.
            </p>
          </div>
        </div>

        {/* Past Events Gallery */}
        {pastEventImages.length > 0 && (
          <div className="mt-16">
            <h3 className="text-4xl text-[#8b7355] text-center mb-8">Past Events</h3>
            
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
              <Masonry gutter="0px">
                {pastEventImages.map((image) => (
                  <div key={image.id} className="overflow-hidden">
                    <img
                      src={`/images/small-event/${image.filename}`}
                      alt={image.title}
                      className="w-full h-auto block hover:opacity-90 transition-opacity cursor-pointer"
                    />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 text-center text-xs text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
          <p>All photographs in this site are copyright of Jovy Thomas  -  © Jovy Thomas Visuals 2025. All Rights Reserved</p>
        </footer>
      </div>
    </section>
  );
}
