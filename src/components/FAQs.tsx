import { HelpCircle, Mail } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Will there be prints with the package?",
    answer: "No. We will be delivering high resolution digital images."
  },
  {
    id: 2,
    question: "What will be the approximate session duration?",
    answer: "Session duration usually varies between 40 minutes to a maximum of 1 hour."
  },
  {
    id: 3,
    question: "Are the shoots indoors or outdoors?",
    answer: "I shoot only outdoor, natural light portraits."
  },
  {
    id: 4,
    question: "Can we select the pictures for editing?",
    answer: "Yes."
  },
  {
    id: 5,
    question: "Will you cover events like birthday parties, wedding etc.?",
    answer: "No. I don't cover events."
  }
];

export function FAQs() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl text-[#8b7355] mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-[#6b6b6b]" style={{ fontFamily: "'Courier New', monospace" }}>
            Find answers to common questions about our photography services
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6 mb-12">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className="bg-white p-6 border-l-4 border-[#8b7355] hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <HelpCircle className="w-6 h-6 text-[#8b7355] mr-4 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 
                    className="text-lg text-[#8b7355] mb-3"
                    style={{ fontFamily: "'Courier New', monospace" }}
                  >
                    {faq.question}
                  </h3>
                  <p 
                    className="text-[#6b6b6b] leading-relaxed"
                    style={{ fontFamily: "'Courier New', monospace" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact for More Questions */}
        <div className="bg-[#f5f2ec] p-8 border-2 border-[#c4b8a4] text-center">
          <div className="flex justify-center mb-4">
            <Mail className="w-10 h-10 text-[#8b7355]" />
          </div>
          <h3 
            className="text-2xl text-[#8b7355] mb-4"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Still Have Questions?
          </h3>
          <p 
            className="text-[#6b6b6b] mb-6"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            If you have any other queries, feel free to contact me at
          </p>
          <a 
            href="mailto:Jovy.thomas@gmail.com"
            className="text-xl text-[#8b7355] hover:underline inline-block mb-4"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Jovy.thomas@gmail.com
          </a>
          <p 
            className="text-sm text-[#6b6b6b] mt-4"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Or call/text: <a href="tel:629-308-4828" className="text-[#8b7355] hover:underline">629-308-4828</a>
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-8 p-6 bg-white border border-[#c4b8a4]">
          <p 
            className="text-sm text-[#6b6b6b] text-center leading-relaxed"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            We typically respond to all inquiries within 24 hours during business days (Monday-Friday, 9 AM - 5 PM CT). 
            I look forward to hearing from you and discussing how we can capture your special moments!
          </p>
        </div>
      </div>
    </section>
  );
}
