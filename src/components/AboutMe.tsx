import { npsAwardBadge, bumpBabyBeyondBadge, portraitMasterBadge, glowFinalistBadge } from '../assets/images';

export function AboutMe() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl text-[#8b7355] mb-6">About Me</h2>
        </div>

        {/* My Story Section */}
        <div className="mb-16">
          <h3 className="text-3xl text-[#8b7355] mb-8 text-center">MY STORY</h3>
          
          <div className="prose prose-lg max-w-none" style={{ fontFamily: "'Courier New', monospace" }}>
            <p className="text-[#6b6b6b] mb-6 leading-relaxed text-justify">
              After doing my Bachelors in Computer Applications, I wanted to learn Media and took Multimedia 
              for Masters. Photography was part of the course. Started my job as a video editor and worked 
              with a few tv channels and a British movie.
            </p>
            
            <p className="text-[#6b6b6b] mb-6 leading-relaxed text-justify">
              After having kids, I didn't want a full-time job. So once I got my Canon 6D, I started photography 
              professionally (part-time). I love to click faces and try to think how it will look if someone paints them. 
              When I started this, at 2013, I told my friend whose session I was doing, that through my work I want 
              to increase the self-confidence in people. After seeing the results she said she started loving herself more. 
              It really motivated me. Everyone looks beautiful. This is my tiny effort to bring smile and confidence in people. 
              When people are happy with themselves they will make people around them happy too.
            </p>
            
            <p className="text-[#6b6b6b] mb-6 leading-relaxed text-justify">
              For kids, I try to create a magical beauty surrounding them which in turn are part of my own dreams. 
              Mostly the things I wished I had experienced.
            </p>
            
            <p className="text-[#6b6b6b] mb-8 leading-relaxed text-justify">
              Some of my works were a part of exhibitions in India and France. My works were featured in - 
              Hans India, Deccan Chronicle, The New Indian Express and international magazines like 
              Bump baby and beyond, Beautiful World etc. Awards - Highly Commended Award by TheNPS, 
              Bronze Award from The Portrait Masters, Glow Finalist Award.
            </p>
          </div>
        </div>

        {/* Awards and Recognition Section */}
        <div className="mb-12">
          <h3 className="text-3xl text-[#8b7355] mb-8 text-center">Awards & Recognition</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {/* Glow Finalist Award */}
            <div className="text-center">
              <img 
                src={glowFinalistBadge} 
                alt="GLOW Finalist Award" 
                className="w-32 h-32 object-contain mx-auto mb-3"
              />
              <p className="text-xs text-[#6b6b6b]" style={{ fontFamily: "'Courier New', monospace" }}>
                GLOW Finalist Award
              </p>
            </div>

            {/* Portrait Masters Bronze 2021 */}
            <div className="text-center">
              <img 
                src={portraitMasterBadge} 
                alt="Portrait Masters Bronze 2021" 
                className="w-32 h-32 object-contain mx-auto mb-3"
              />
              <p className="text-xs text-[#6b6b6b]" style={{ fontFamily: "'Courier New', monospace" }}>
                Portrait Masters<br />Bronze Award 2021
              </p>
            </div>

            {/* NPS Highly Commended */}
            <div className="text-center">
              <img 
                src={npsAwardBadge} 
                alt="NPS Highly Commended Award" 
                className="w-32 h-32 object-contain mx-auto mb-3"
              />
              <p className="text-xs text-[#6b6b6b]" style={{ fontFamily: "'Courier New', monospace" }}>
                NPS Highly<br />Commended Award
              </p>
            </div>

            {/* Bump Baby Beyond */}
            <div className="text-center">
              <img 
                src={bumpBabyBeyondBadge} 
                alt="Featured in Bump Baby & Beyond" 
                className="w-32 h-32 object-contain mx-auto mb-3"
              />
              <p className="text-xs text-[#6b6b6b]" style={{ fontFamily: "'Courier New', monospace" }}>
                Featured in<br />Bump Baby & Beyond
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-[#f5f2ec] border-2 border-[#c4b8a4] p-8 mt-12">
          <p className="text-lg text-[#6b6b6b] mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
            Ready to create beautiful memories together?
          </p>
          <p className="text-sm text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
            Contact me to schedule your session
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-xs text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
          <p>All photographs in this site are copyright of Jovy Thomas  -  © Jovy Thomas Visuals 2025. All Rights Reserved</p>
        </footer>
      </div>
    </section>
  );
}