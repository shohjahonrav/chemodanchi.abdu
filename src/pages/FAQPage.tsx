import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What materials are your bags made from?",
    answer: "Our premium luggage is crafted from aerospace-grade polycarbonate shells and full-grain Italian leather trim. We use Swiss-made YKK zippers and solid brass hardware for maximum durability and a refined aesthetic.",
  },
  {
    question: "What is your return and exchange policy?",
    answer: "We offer a hassle-free 30-day return policy. If you are not completely satisfied with your purchase, return it in its original condition for a full refund or exchange. Items must be unused and in original packaging.",
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 5–7 business days. Express shipping (2–3 business days) and overnight options are also available. International orders ship to over 30 countries with delivery times of 7–14 business days.",
  },
  {
    question: "Do your bags have a warranty?",
    answer: "Yes. All Chemadonchi Abdu bags come with a comprehensive 2-year manufacturer warranty covering defects in materials and workmanship. This includes zipper failures, wheel damage, and shell defects under normal use conditions.",
  },
  {
    question: "Are your bags TSA-approved?",
    answer: "Yes, all of our rolling luggage features TSA-approved combination locks that allow airport security to open and re-lock your bag without damaging the lock mechanism.",
  },
  {
    question: "How do I care for my luggage?",
    answer: "For polycarbonate shells, wipe with a damp cloth and mild soap. Avoid abrasive cleaners. For leather trim, use a quality leather conditioner every few months. Store in a cool, dry place when not in use.",
  },
  {
    question: "Can I track my order?",
    answer: "Absolutely. Once your order is dispatched, you will receive a tracking number via email. You can also use our Track Order page to follow your shipment in real time.",
  },
  {
    question: "Do you offer customization or personalization?",
    answer: "We offer monogramming services for select products. Contact our team for more details and pricing. Lead times for personalized orders are typically 5–10 business days longer than standard.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div style={{ background: "#0B0B0B", paddingTop: "88px" }}>
      <div className="max-w-[800px] mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#D4A64A" }}>Help Center</p>
          <h1 className="text-white font-bold mb-3" style={{ fontSize: "clamp(28px,4vw,42px)", letterSpacing: "-0.02em" }}>
            Frequently Asked Questions
          </h1>
          <p className="text-sm" style={{ color: "#6B6B6B" }}>
            Everything you need to know about our products and services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                background: "#141414",
                border: open === i ? "1px solid rgba(212,166,74,0.35)" : "1px solid rgba(212,166,74,0.1)",
              }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-200"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm pr-4" style={{ color: open === i ? "#D4A64A" : "#FFFFFF" }}>
                  {faq.question}
                </span>
                <ChevronDown
                  size={16}
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: "#D4A64A",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#B8B8B8" }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className="mt-12 p-8 rounded-3xl text-center"
          style={{ background: "#141414", border: "1px solid rgba(212,166,74,0.15)" }}
        >
          <p className="text-white font-semibold mb-2">Still have questions?</p>
          <p className="text-sm mb-5" style={{ color: "#6B6B6B" }}>
            Our team is available 7 days a week to assist you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90"
            style={{ background: "#D4A64A", color: "#0B0B0B" }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
