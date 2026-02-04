import { Award, ExternalLink, Star, Newspaper, MessageSquare, Play } from "lucide-react";

export function Mentions() {
  const npsImages = [
    { src: "/assets/awards/nps_1.png.avif", alt: "NPS Award September 2017" },
    { src: "/assets/awards/nps_2.png.avif", alt: "NPS Award August 2017" },
    { src: "/assets/awards/nps_3.png.avif", alt: "NPS Award August 2017" },
    { src: "/assets/awards/nps_4.png.avif", alt: "NPS Award August 2017" },
  ];

  const magicOfChildhoodImages = [
    { src: "/assets/awards/magic_of_childhood.avif", alt: "Magic of Childhood Feature" },
    { src: "/assets/awards/magic_of_childhood_2.avif", alt: "Magic of Childhood Feature" },
  ];

  const mediaCoverageItems = [
    {
      src: "/assets/mentions/maternity_article.avif",
      alt: "Maternity Photo Session Article",
      title: "Maternity Photo Session",
      description: "Featured article about maternity photography",
    },
    {
      src: "/assets/mentions/new_indian_express.avif",
      alt: "The New Indian Express Article",
      title: "The New Indian Express",
      description: "Featured in The New Indian Express",
    },
    {
      src: "/assets/mentions/deccan_chronicle.avif",
      alt: "Deccan Chronicle Article",
      title: "Deccan Chronicle",
      description: "August 19, 2020",
    },
    {
      src: "/assets/mentions/resilience_exhibition.avif",
      alt: "Resilience Exhibition Hyderabad",
      title: "Exhibition - Resilience",
      description: "Hyderabad - March 2020",
    },
    {
      src: "/assets/mentions/resilience_exhibition_2.avif",
      alt: "Resilience Exhibition Hyderabad",
      title: "Exhibition - Resilience",
      description: "Hyderabad - March 2020",
    },
    {
      src: "/assets/mentions/hansindia_womenia.avif",
      alt: "The HansIndia Womenia Article",
      title: "The HansIndia - Womenia",
      description: "September 9, 2019",
      link: "https://epaper.thehansindia.com/m5/2320179/HYDERABAD-MAIN/HYDERABAD-MAIN#page/5/1",
    },
    {
      src: "/assets/mentions/world_photography.avif",
      alt: "World Photography - Capturing Memories of Lockdown",
      title: "World Photography",
      description: "Capturing the Memories of Lockdown",
    },
  ];

  return (
    <section className="py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-5xl text-[#8b7355] mb-3 md:mb-4">Mentions & Features</h2>
          <p
            className="text-base md:text-lg text-[#6b6b6b] px-2"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Awards, publications, and recognition from around the world
          </p>
        </div>

        {/* NPS Awards Section */}
        <div className="mb-10 md:mb-16">
          <div className="flex items-center mb-4 md:mb-6">
            <Award className="w-6 md:w-8 h-6 md:h-8 text-[#8b7355] mr-2 md:mr-3 flex-shrink-0" />
            <h3
              className="text-xl md:text-3xl text-[#8b7355]"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              The NPS - Highly Commended Awards
            </h3>
          </div>

          <div className="bg-[#f5f2ec] p-4 md:p-6 border-l-4 border-[#8b7355] mb-4 md:mb-6">
            <p
              className="text-sm md:text-base text-[#6b6b6b] mb-3 md:mb-4"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              The following images received Highly Commended Awards by the judges of The NPS - one
              of the UK's fastest growing photographic organizations. The first picture on the month
              of September 2017 and the remaining three on August 2017.
            </p>
            <a
              href="https://www.thenps.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-[#8b7355] hover:underline inline-flex items-center"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Visit The NPS <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* NPS Award Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-4">
            {npsImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-[#e8e4d8] border-2 border-[#c4b8a4] overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Affinity Photo Feature */}
        <div className="mb-8 md:mb-12 bg-white p-4 md:p-8 border-2 border-[#c4b8a4]">
          <div className="flex items-center mb-3 md:mb-4">
            <Star className="w-5 md:w-6 h-5 md:h-6 text-[#8b7355] mr-2 md:mr-3 flex-shrink-0" />
            <h3
              className="text-lg md:text-2xl text-[#8b7355]"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Affinity Photo for iPad
            </h3>
          </div>
          <p
            className="text-sm md:text-base text-[#6b6b6b] mb-3 md:mb-4"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            My work got featured in Affinity Photo for iPad.
          </p>
          <div className="aspect-video bg-[#e8e4d8] border-2 border-[#c4b8a4] overflow-hidden mb-4">
            <img
              src="/assets/awards/affinity.png.avif"
              alt="Affinity Photo Feature"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <a
            href="https://affinity.serif.com/en-us/photo/ipad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-[#8b7355] hover:underline inline-flex items-center"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Visit Affinity Photo <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* DSLR Official Instagram Feature */}
        <div className="mb-8 md:mb-12 bg-white p-4 md:p-8 border-2 border-[#c4b8a4]">
          <div className="flex items-center mb-3 md:mb-4">
            <Star className="w-5 md:w-6 h-5 md:h-6 text-[#8b7355] mr-2 md:mr-3 flex-shrink-0" />
            <h3
              className="text-lg md:text-2xl text-[#8b7355]"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              DSLR Official Instagram - Daily Feature
            </h3>
          </div>
          <p
            className="text-sm md:text-base text-[#6b6b6b] mb-3 md:mb-4"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            This image got published in DSLR official on Instagram as Daily Feature on September 25,
            2016.
          </p>
          <div className="aspect-square max-w-md mx-auto bg-[#e8e4d8] border-2 border-[#c4b8a4] overflow-hidden mb-4">
            <img
              src="/assets/awards/dslr_official.avif"
              alt="DSLR Official Feature"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <a
            href="https://www.instagram.com/dslrofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-[#8b7355] hover:underline inline-flex items-center"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Visit @dslrofficial <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Jessica Drossin Feature */}
        <div className="mb-8 md:mb-12 bg-white p-4 md:p-8 border-2 border-[#c4b8a4]">
          <div className="flex items-center mb-3 md:mb-4">
            <Star className="w-5 md:w-6 h-5 md:h-6 text-[#8b7355] mr-2 md:mr-3 flex-shrink-0" />
            <h3
              className="text-lg md:text-2xl text-[#8b7355]"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Jessica Drossin's Site Feature
            </h3>
          </div>
          <p
            className="text-sm md:text-base text-[#6b6b6b] mb-3 md:mb-4"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            The following image of mine is featured in super talented Jessica Drossin's site for
            showcasing Evergreen - Before and After effect from JD Looking Glass: Cool Presets.
          </p>
          <div className="aspect-video bg-[#e8e4d8] border-2 border-[#c4b8a4] overflow-hidden mb-4">
            <img
              src="/assets/awards/jessica_drossin.avif"
              alt="Jessica Drossin Feature"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <a
            href="https://jessicadrossinstore.com/jd-looking-glass-cool-presets/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-[#8b7355] hover:underline inline-flex items-center"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Visit Jessica Drossin's Site <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Photo of the Day */}
        <div className="mb-8 md:mb-12 bg-white p-4 md:p-8 border-2 border-[#c4b8a4]">
          <div className="flex items-center mb-3 md:mb-4">
            <Award className="w-5 md:w-6 h-5 md:h-6 text-[#8b7355] mr-2 md:mr-3 flex-shrink-0" />
            <h3
              className="text-lg md:text-2xl text-[#8b7355]"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Photo of the Day
            </h3>
          </div>
          <p
            className="text-sm md:text-base text-[#6b6b6b] mb-3 md:mb-4"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Selected as photo of the day on October 5th, 2016.
          </p>
          <div className="aspect-video bg-[#e8e4d8] border-2 border-[#c4b8a4] overflow-hidden mb-4">
            <img
              src="/assets/awards/photo_of_the_day.avif"
              alt="Photo of the Day"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <a
            href="https://www.facebook.com/thedslr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-[#8b7355] hover:underline inline-flex items-center"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Visit The DSLR on Facebook <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Magic of Childhood Feature */}
        <div className="mb-8 md:mb-12 bg-white p-4 md:p-8 border-2 border-[#c4b8a4]">
          <div className="flex items-center mb-3 md:mb-4">
            <Star className="w-5 md:w-6 h-5 md:h-6 text-[#8b7355] mr-2 md:mr-3 flex-shrink-0" />
            <h3
              className="text-lg md:text-2xl text-[#8b7355]"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Featured by @MagicofChildhood
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {magicOfChildhoodImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-[#e8e4d8] border-2 border-[#c4b8a4] overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Shubh Yatra - Air India Magazine */}
        <div className="mb-8 md:mb-12 bg-white p-4 md:p-8 border-2 border-[#c4b8a4]">
          <div className="flex items-center mb-3 md:mb-4">
            <Newspaper className="w-5 md:w-6 h-5 md:h-6 text-[#8b7355] mr-2 md:mr-3 flex-shrink-0" />
            <h3
              className="text-lg md:text-2xl text-[#8b7355]"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Shubh Yatra - Air India's Inflight Magazine
            </h3>
          </div>
          <p
            className="text-sm md:text-base text-[#6b6b6b] mb-3 md:mb-4"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            My picture of Ethipothala waterfalls got featured in Shubh Yatra, Air India's inflight
            magazine.
          </p>
          <div className="aspect-video bg-[#e8e4d8] border-2 border-[#c4b8a4] overflow-hidden mb-4">
            <img
              src="/assets/awards/shubh_yatra.avif"
              alt="Shubh Yatra Feature"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <a
            href="http://shubh-yatra.in/rush-hour"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-[#8b7355] hover:underline inline-flex items-center"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Read the Article <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Media Coverage */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center mb-4 md:mb-6">
            <Newspaper className="w-6 md:w-8 h-6 md:h-8 text-[#8b7355] mr-2 md:mr-3 flex-shrink-0" />
            <h3
              className="text-xl md:text-3xl text-[#8b7355]"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Media Coverage
            </h3>
          </div>
          <p
            className="text-sm md:text-base text-[#6b6b6b] mb-4 md:mb-6"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Featured in various newspapers and publications.
          </p>

          {/* Video Feature */}
          <div className="mb-6 md:mb-8 bg-white p-4 md:p-6 border-2 border-[#c4b8a4]">
            <h4
              className="text-lg md:text-xl text-[#8b7355] mb-3 md:mb-4"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              The HansIndia - Womenia Feature
            </h4>
            <p
              className="text-sm md:text-base text-[#6b6b6b] mb-3 md:mb-4"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Featured on The HansIndia newspaper - Womenia - September 9, 2019
            </p>
            <div className="aspect-video max-w-2xl mx-auto mb-4">
              <video
                controls
                className="w-full h-full rounded border-2 border-[#c4b8a4]"
                poster="/assets/mentions/hansindia_womenia.avif"
              >
                <source
                  src="https://video.wixstatic.com/video/8df3c2_45dff0aa5e5e4d15ab3250b44eadd0d5/720p/mp4/file.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <a
              href="https://epaper.thehansindia.com/m5/2320179/HYDERABAD-MAIN/HYDERABAD-MAIN#page/5/1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-[#8b7355] hover:underline inline-flex items-center"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              View ePaper Article <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Media Coverage Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {mediaCoverageItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#c4b8a4] overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[3/4] bg-[#e8e4d8] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <h4
                    className="text-base md:text-lg text-[#8b7355] mb-1"
                    style={{ fontFamily: "'Courier New', monospace" }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-xs md:text-sm text-[#6b6b6b]"
                    style={{ fontFamily: "'Courier New', monospace" }}
                  >
                    {item.description}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8b7355] hover:underline inline-flex items-center mt-2 text-xs md:text-sm"
                      style={{ fontFamily: "'Courier New', monospace" }}
                    >
                      Read Article <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kind Words Section */}
        <div className="mb-10 md:mb-16">
          <div className="flex items-center mb-4 md:mb-6">
            <MessageSquare className="w-6 md:w-8 h-6 md:h-8 text-[#8b7355] mr-2 md:mr-3 flex-shrink-0" />
            <h3
              className="text-xl md:text-3xl text-[#8b7355]"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Kind Words
            </h3>
          </div>
          <p
            className="text-sm md:text-base text-[#6b6b6b] mb-4 md:mb-6"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Reviews and testimonials from happy clients.
          </p>

          {/* Google Business Links */}
          <div className="mb-4 md:mb-6 bg-[#f5f2ec] p-3 md:p-4 border-l-4 border-[#8b7355]">
            <p
              className="text-sm md:text-base text-[#6b6b6b] mb-2 md:mb-3"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              View reviews on Google:
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://maps.app.goo.gl/b3mSmwNktG8uqfNMA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm text-[#8b7355] hover:underline inline-flex items-center"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                Jovy Thomas Visuals - Hendersonville, TN (Current){" "}
                <ExternalLink className="w-3 md:w-4 h-3 md:h-4 ml-1" />
              </a>
              <a
                href="https://maps.app.goo.gl/Ka1TqZkdXHMdugFB7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm text-[#8b7355] hover:underline inline-flex items-center"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                Jovy Thomas Visuals - Hyderabad, India{" "}
                <ExternalLink className="w-3 md:w-4 h-3 md:h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* Google Reviews */}
          <div className="mb-6 md:mb-8">
            <h4
              className="text-lg md:text-xl text-[#8b7355] mb-3 md:mb-4"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Google Reviews
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {[
                "/assets/reviews/Google review Sindhu.jpg.avif",
                "/assets/reviews/Pavan review 3.jpg.avif",
                "/assets/reviews/baby photoshoot in hyderabad.png.avif",
                "/assets/reviews/Screen Shot 2018-10-31 at 11_44_22 AM_pn.png.avif",
                "/assets/reviews/Screen Shot 2018-10-31 at 11_44_33 AM_pn.png.avif",
                "/assets/reviews/Screen Shot 2018-10-31 at 11_45_07 AM_pn.png.avif",
                "/assets/reviews/Screenshot 2019-02-15 at 10_52_36 AM.png.avif",
                "/assets/reviews/Screenshot 2019-02-15 at 10_52_46 AM.png.avif",
                "/assets/reviews/8df3c2_2677a602da9e4045b41ac6c640329b9e~mv2.png.avif",
                "/assets/reviews/8df3c2_2ce4913985714dff91365f4530cb0dcf~mv2.png.avif",
                "/assets/reviews/8df3c2_4b2eb3450a424fc09048a6323090ffde~mv2.png.avif",
                "/assets/reviews/8df3c2_67b20392b6664fa7897ea3fc16623fbc~mv2.jpg.avif",
                "/assets/reviews/8df3c2_6ed52d28aa164b04a155bc6c780d2ee1~mv2.png.avif",
              ].map((src, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-[#c4b8a4] overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={src}
                    alt={`Client Review ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* IAPCP Article - Whimsical Portraits */}
        <div className="mb-8 md:mb-12 bg-[#f5f2ec] p-4 md:p-8 border-2 border-[#8b7355]">
          <div className="flex items-center mb-4 md:mb-6">
            <Newspaper className="w-6 md:w-8 h-6 md:h-8 text-[#8b7355] mr-2 md:mr-3 flex-shrink-0" />
            <h3
              className="text-xl md:text-3xl text-[#8b7355]"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              IAPCP Article - Whimsical Portraits
            </h3>
          </div>

          <p
            className="text-sm md:text-base text-[#6b6b6b] mb-4 md:mb-6 italic"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Sharing from an article for team - Indian Association of Professional Child
            Photographers (IAPCP) with the topic - whimsical portraits.
          </p>

          {/* Article Images */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-6 md:mb-8">
            {[
              { src: "/assets/iapcp/iapcp_1.jpg", alt: "Best child photography Hyderabad, India" },
              { src: "/assets/iapcp/iapcp_2.jpg", alt: "Best kids photographer India, Hyderabad" },
              { src: "/assets/iapcp/iapcp_3.jpg", alt: "Kids photography India, Hyderabad" },
              { src: "/assets/iapcp/iapcp_4.jpg", alt: "Child photographer India, Hyderabad" },
              { src: "/assets/iapcp/iapcp_5.jpg", alt: "Whimsical portrait photography" },
              { src: "/assets/iapcp/iapcp_6.jpg", alt: "Creative child photography" },
            ].map((image, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#c4b8a4] overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Q&A Content */}
          <div className="space-y-4 md:space-y-8">
            {/* Question 1 */}
            <div className="bg-white p-4 md:p-6 border-l-4 border-[#8b7355]">
              <h4
                className="text-base md:text-lg text-[#8b7355] mb-3 md:mb-4"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                How much time do you spend on the processing and any suggestion for the
                photographers who wish to do such work?
              </h4>
              <p
                className="text-sm md:text-base text-[#6b6b6b] leading-relaxed mb-3 md:mb-4"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                My editing time per image ranges from 1 to 3 hours, although I find myself engaged
                in some pictures for days to add a unique element in them that matches my vision. My
                suggestion to photographers who want to do this genre is, be willing to do a lot of
                experiments with your pictures and have the courage to be different.
              </p>
              <p
                className="text-sm md:text-base text-[#6b6b6b] leading-relaxed"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                I would say, do not refrain yourself and create what you visualize in your mind, no
                matter how crazy you think it is. I consider myself still in the learning process.
                And there is a vast world to explore.
              </p>
            </div>

            {/* Question 2 */}
            <div className="bg-white p-4 md:p-6 border-l-4 border-[#8b7355]">
              <h4
                className="text-base md:text-lg text-[#8b7355] mb-3 md:mb-4"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                Why you choose to do such photos?
              </h4>
              <p
                className="text-sm md:text-base text-[#6b6b6b] leading-relaxed mb-3 md:mb-4"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                I create the images which appeal to my aesthetic sense and work for clients who
                appreciate the same. I started off by everyday pictures, but wanted to do more and
                experiment. This led to an adventure with some simple props and the imaginary world
                that could be created through my style of work.
              </p>
              <p
                className="text-sm md:text-base text-[#6b6b6b] leading-relaxed mb-3 md:mb-4"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                I should say everything I have read and watched has influenced me in creating such
                pictures. In other words, these pictures have an element of me in them. I have
                always loved to watch fairies and angel movies and used to admire their paintings. I
                am equally attracted to movies with vintage elements.
              </p>
              <p
                className="text-sm md:text-base text-[#6b6b6b] leading-relaxed"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                Through my pictures, I try to re-create whatever I wish I had experienced, a
                different world altogether. Indeed, some of my own dreams and fantasies come to life
                through these pictures.
              </p>
            </div>

            {/* Question 3 */}
            <div className="bg-white p-4 md:p-6 border-l-4 border-[#8b7355]">
              <h4
                className="text-base md:text-lg text-[#8b7355] mb-3 md:mb-4"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                What lens do you generally use?
              </h4>
              <p
                className="text-sm md:text-base text-[#6b6b6b] leading-relaxed"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                In terms of the lens, I mostly use Canon's 135mm and 50mm as I find it best for
                portraits. It helps me in achieving lovely bokeh effect thus giving more attention
                to the subject.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
