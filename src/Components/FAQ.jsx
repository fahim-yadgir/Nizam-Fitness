const faqs = [
  {
    question: "Who can join your online personal training?",
    answer:
      "Anyone can join, whether you're a beginner, intermediate, or advanced. Your training plan will be customized to your fitness level and goals.",
  },
  {
    question: "Will I receive a personalized diet plan?",
    answer:
      "Yes. Every client receives a personalized diet plan based on their body type, fitness goals, and lifestyle.",
  },
  {
    question: "How does online personal training work?",
    answer:
      "After registration, you'll receive a customized workout plan, diet guidance, regular progress tracking, and continuous support through WhatsApp.",
  },
  {
    question: "Will I get support during my fitness journey?",
    answer:
      "Absolutely! You'll receive ongoing guidance, weekly progress reviews, and direct WhatsApp support to help you stay on track.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-yellow-400 uppercase tracking-widest font-semibold">
            FAQ
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h2>
        </div>

        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1b1b1b] rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-yellow-400">
                {faq.question}
              </h3>

              <p className="text-gray-300 mt-3">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;