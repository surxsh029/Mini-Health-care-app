import { useState } from "react";

const faqs = [
  {
    question: "What should I do in a medical emergency?",
    answer:
      "In case of a medical emergency, please contact your nearest hospital or emergency services immediately."
  },
  {
    question: "How soon will I get a response after submitting the form?",
    answer:
      "Our support team usually responds within a few hours depending on the urgency level selected."
  },
  {
    question: "Is my medical information kept confidential?",
    answer:
      "Yes. All information shared through this platform is treated as confidential and used only for support purposes."
  },
  {
    question: "Can I submit the form for someone else?",
    answer:
      "Yes, you may submit the request on behalf of a family member or someone in need."
  }
];

function FAQ({ onClose }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white max-w-xl w-full mx-4 rounded-2xl shadow-2xl p-6 relative">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 text-2xl font-bold"
        >
          ×
        </button>

        <h3 className="text-2xl font-bold text-teal-700 mb-4">
          Frequently Asked Questions
        </h3>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-xl"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full text-left px-4 py-3 font-semibold text-gray-700 flex justify-between items-center"
              >
                {faq.question}
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-4 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
