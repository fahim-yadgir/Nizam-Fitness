const faqs = [
  {
    question: "Who can join this fitness webinar?",
    answer:
      "Anyone interested in improving their fitness, whether beginner or experienced.",
  },
  {
    question: "Will I get a diet plan?",
    answer:
      "Yes, you'll receive nutrition guidance and diet recommendations during the session.",
  },
  {
    question: "How long is the webinar?",
    answer:
      "Approximately 90 minutes, including a live Q&A session.",
  },
  {
    question: "Is there any support after the webinar?",
    answer:
      "Yes, participants can contact me for further guidance and support.",
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