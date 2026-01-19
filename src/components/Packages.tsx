import { Clock, MapPin, DollarSign, Image as ImageIcon } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "Child - Photo Session",
    coverImage: "", // Add your image filename here
    rate: "$250",
    includes: [
      "25 basic edited digital images (png format)",
      "5 artistically edited digital images"
    ],
    location: "Local parks",
    timings: "4:30 to 5:30 pm (1 hour duration)",
    notes: "Kids can bring their favourite toys or books and can pose with it. (You can bring an extra jacket, hat, cap, sunglasses etc if interested to use in the session)",
    addOns: "Each extra edited picture outside the package: $25"
  },
  {
    id: 2,
    title: "Maternity Photosession",
    coverImage: "", // Add your image filename here
    rate: "$250",
    includes: [
      "25 basic edited digital images (png format)",
      "5 artistically edited digital images"
    ],
    location: "Local parks",
    timings: "4:30 to 5:30 pm (1 hour duration)",
    notes: "You can bring maternity props like a maternity journal, sash, ultrasound scan picture, floral bouquet if interested.",
    addOns: "Each extra edited picture outside the package: $25"
  },
  {
    id: 3,
    title: "Family Photo Session",
    coverImage: "", // Add your image filename here
    rate: "$250",
    includes: [
      "25 basic edited digital pictures (png format)",
      "5 artistically edited digital images"
    ],
    location: "Local parks",
    timings: "4:30 to 5:30 pm (1 hour duration)",
    notes: "Kids can bring their favourite toys or books and can pose with it.",
    addOns: "Each extra edited picture outside the package: $25"
  },
  {
    id: 4,
    title: "Portfolio Session",
    coverImage: "", // Add your image filename here
    rate: "$250",
    includes: [
      "25 basic edited digital pictures (png format)",
      "5 artistically edited digital images"
    ],
    location: "Local parks",
    timings: "4:30 to 5:30 pm (1 hour duration)",
    notes: "You can bring an extra jacket, hat, cap, sunglasses etc if interested to use in the session",
    addOns: "Each extra edited picture outside the package: $25"
  }
];

export function Packages() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl text-[#8b7355] mb-4">Packages</h2>
          <p className="text-lg text-[#6b6b6b]" style={{ fontFamily: "'Courier New', monospace" }}>
            Choose the perfect session for your photography needs
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="bg-white border-2 border-[#c4b8a4] overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Cover Image */}
              {pkg.coverImage && (
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={`/images/packages/${pkg.coverImage}`}
                    alt={pkg.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Placeholder when no image */}
              {!pkg.coverImage && (
                <div className="relative h-80 overflow-hidden bg-[#e8e4d8] flex items-center justify-center">
                  <p className="text-[#8b7355] text-sm px-4 text-center" style={{ fontFamily: "'Courier New', monospace" }}>
                    Add package cover image
                  </p>
                </div>
              )}

              {/* Package Content */}
              <div className="p-6" style={{ fontFamily: "'Courier New', monospace" }}>
                {/* Title */}
                <h3 className="text-2xl text-[#8b7355] mb-4 text-center">
                  {pkg.title}
                </h3>

                {/* Rate */}
                <div className="flex items-center justify-center mb-6 bg-[#e8e4d8] py-3 px-4">
                  <DollarSign className="w-5 h-5 text-[#8b7355] mr-2" />
                  <span className="text-xl text-[#8b7355]">
                    Rate: {pkg.rate}
                  </span>
                </div>

                {/* Includes */}
                <div className="mb-6">
                  <div className="flex items-start mb-3">
                    <ImageIcon className="w-5 h-5 text-[#8b7355] mr-2 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-[#6b6b6b]">
                      {pkg.includes.map((item, index) => (
                        <p key={index} className="mb-1">{item}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 text-[#8b7355] mr-2 flex-shrink-0" />
                  <p className="text-sm text-[#6b6b6b]">
                    <span className="text-[#8b7355]">Location:</span> {pkg.location}
                  </p>
                </div>

                {/* Timings */}
                <div className="flex items-start mb-4">
                  <Clock className="w-5 h-5 text-[#8b7355] mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#6b6b6b]">
                    <span className="text-[#8b7355]">Timings:</span> {pkg.timings}
                  </p>
                </div>

                {/* Notes */}
                <div className="mb-4 p-4 bg-[#f5f2ec] border-l-4 border-[#8b7355]">
                  <p className="text-xs text-[#6b6b6b] leading-relaxed">
                    {pkg.notes}
                  </p>
                </div>

                {/* Add-Ons */}
                <div className="pt-4 border-t border-[#c4b8a4]">
                  <p className="text-xs text-[#8b7355]">
                    <span>Add-Ons:</span>
                  </p>
                  <p className="text-xs text-[#6b6b6b] mt-1">
                    {pkg.addOns}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center p-6 bg-[#f5f2ec] border border-[#c4b8a4]" style={{ fontFamily: "'Courier New', monospace" }}>
          <p className="text-sm text-[#6b6b6b] mb-2">
            All packages include professional editing and digital delivery via USB drive
          </p>
          <p className="text-xs text-[#8b7355]">
            Contact us to book your session or for custom package inquiries
          </p>
        </div>
      </div>
    </section>
  );
}
