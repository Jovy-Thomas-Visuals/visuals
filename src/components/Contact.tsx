import { Phone, Clock, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl text-[#8b7355] mb-4">Contact</h2>
          <p className="text-lg text-[#6b6b6b]" style={{ fontFamily: "'Courier New', monospace" }}>
            Let's capture your special moments together
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Phone Contact */}
          <div className="bg-white p-8 border-2 border-[#c4b8a4] hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center mb-6">
              <Phone className="w-12 h-12 text-[#8b7355]" />
            </div>
            <h3 className="text-2xl text-[#8b7355] text-center mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
              Call or Text
            </h3>
            <a 
              href="tel:629-308-4828" 
              className="block text-xl text-center text-[#6b6b6b] hover:text-[#8b7355] transition-colors mb-4"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              629-308-4828
            </a>
            <p className="text-sm text-[#6b6b6b] text-center" style={{ fontFamily: "'Courier New', monospace" }}>
              Available for calls and messages
            </p>
          </div>

          {/* Email Contact */}
          <div className="bg-white p-8 border-2 border-[#c4b8a4] hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center mb-6">
              <Mail className="w-12 h-12 text-[#8b7355]" />
            </div>
            <h3 className="text-2xl text-[#8b7355] text-center mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
              Email
            </h3>
            <a 
              href="mailto:Jovy.thomas@gmail.com" 
              className="block text-xl text-center text-[#6b6b6b] hover:text-[#8b7355] transition-colors mb-4"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Jovy.thomas@gmail.com
            </a>
            <p className="text-sm text-[#6b6b6b] text-center" style={{ fontFamily: "'Courier New', monospace" }}>
              Send me your inquiries anytime
            </p>
          </div>
        </div>

        {/* Business Hours and Response Time */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Working Hours */}
          <div className="bg-[#f5f2ec] p-8 border-l-4 border-[#8b7355]">
            <div className="flex items-center mb-4">
              <Clock className="w-8 h-8 text-[#8b7355] mr-3" />
              <h3 className="text-xl text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
                Working Hours
              </h3>
            </div>
            <p className="text-lg text-[#6b6b6b] mb-2" style={{ fontFamily: "'Courier New', monospace" }}>
              Monday - Friday
            </p>
            <p className="text-2xl text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
              9:00 AM - 5:00 PM
            </p>
            <p className="text-sm text-[#6b6b6b] mt-3" style={{ fontFamily: "'Courier New', monospace" }}>
              Central Time (CT)
            </p>
          </div>

          {/* Response Time */}
          <div className="bg-[#f5f2ec] p-8 border-l-4 border-[#8b7355]">
            <div className="flex items-center mb-4">
              <MessageCircle className="w-8 h-8 text-[#8b7355] mr-3" />
              <h3 className="text-xl text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
                Response Time
              </h3>
            </div>
            <p className="text-lg text-[#6b6b6b] mb-2" style={{ fontFamily: "'Courier New', monospace" }}>
              We typically respond within
            </p>
            <p className="text-2xl text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
              24 Hours
            </p>
            <p className="text-sm text-[#6b6b6b] mt-3" style={{ fontFamily: "'Courier New', monospace" }}>
              on business days
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white p-8 border-2 border-[#8b7355] text-center">
          <h3 className="text-2xl text-[#8b7355] mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
            Ready to Book Your Session?
          </h3>
          <p className="text-[#6b6b6b] mb-6" style={{ fontFamily: "'Courier New', monospace" }}>
            Whether you're interested in family portraits, maternity photography, or capturing your child's precious moments, 
            I'd love to hear from you. Reach out via phone or email, and let's create beautiful memories together.
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

        {/* Location Info */}
        <div className="mt-12 text-center p-6 bg-[#e8e4d8] border border-[#c4b8a4]">
          <p className="text-sm text-[#6b6b6b]" style={{ fontFamily: "'Courier New', monospace" }}>
            Serving Hendersonville, Gallatin, and surrounding areas in Tennessee
          </p>
        </div>
      </div>
    </section>
  );
}
