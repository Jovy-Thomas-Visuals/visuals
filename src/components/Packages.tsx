import { Clock, DollarSign, Image as ImageIcon } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "Express Photo Session",
    coverImage: "",
    rate: "$50",
    includes: ["2 carefully edited digital pictures"],
    duration: "10 minutes",
  },
  {
    id: 2,
    title: "Regular Photo Session",
    coverImage: "",
    rate: "$250",
    includes: ["15 basic edited digital images", "5 advanced edited images"],
    duration: "1 hour 30 minutes",
  },
];

export function Packages() {
  return (
    <section className="py-8 md:py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-5xl text-[#8b7355] mb-3 md:mb-4">Packages</h2>
          <p
            className="text-base md:text-lg text-[#6b6b6b] px-2"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Choose the perfect session for your photography needs
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white border-2 border-[#c4b8a4] overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Cover Image - only show if coverImage is specified */}
              {pkg.coverImage && (
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={`/images/packages/${pkg.coverImage}`}
                    alt={pkg.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Package Content */}
              <div className="p-4 md:p-6" style={{ fontFamily: "'Courier New', monospace" }}>
                {/* Title */}
                <h3 className="text-xl md:text-2xl text-[#8b7355] mb-3 md:mb-4 text-center">
                  {pkg.title}
                </h3>

                {/* Rate */}
                <div className="flex items-center justify-center mb-4 md:mb-6 bg-[#e8e4d8] py-2 md:py-3 px-3 md:px-4">
                  <DollarSign className="w-4 md:w-5 h-4 md:h-5 text-[#8b7355] mr-2" />
                  <span className="text-lg md:text-xl text-[#8b7355]">Rate: {pkg.rate}</span>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-center mb-4 md:mb-6">
                  <Clock className="w-4 md:w-5 h-4 md:h-5 text-[#8b7355] mr-2 flex-shrink-0" />
                  <p className="text-xs md:text-sm text-[#6b6b6b]">
                    <span className="text-[#8b7355]">Duration:</span> {pkg.duration}
                  </p>
                </div>

                {/* Includes */}
                <div className="mb-4 md:mb-6">
                  <div className="flex items-start justify-center">
                    <ImageIcon className="w-4 md:w-5 h-4 md:h-5 text-[#8b7355] mr-2 flex-shrink-0 mt-0.5" />
                    <div className="text-xs md:text-sm text-[#6b6b6b]">
                      {pkg.includes.map((item, index) => (
                        <p key={index} className="mb-1">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-Ons Section */}
        <div
          className="mt-8 md:mt-12 text-center p-4 md:p-6 bg-[#f5f2ec] border border-[#c4b8a4]"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          <p className="text-sm text-[#8b7355] mb-2">Add-Ons</p>
          <p className="text-xs md:text-sm text-[#6b6b6b] mb-3 md:mb-4">
            Each extra edited picture: $18
          </p>
          <p className="text-xs text-[#8b7355]">
            Contact us to book your session or for custom package inquiries
          </p>
        </div>
      </div>
    </section>
  );
}
