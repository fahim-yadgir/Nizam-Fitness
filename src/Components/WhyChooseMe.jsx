const features = [
  {
    title: "Certified Coach",
    description: "Professional guidance based on proven fitness principles.",
  },
  {
    title: "Personalized Diet Plans",
    description: "Customized nutrition plans according to your fitness goals.",
  },
  {
    title: "Workout Programs",
    description: "Easy-to-follow workout routines for beginners and advanced athletes.",
  },
  {
    title: "24/7 Support",
    description: "Get help and motivation whenever you need it.",
  },
  {
    title: "Progress Tracking",
    description: "Weekly check-ins to monitor your fitness journey.",
  },
  {
    title: "Online Coaching",
    description: "Train with me from anywhere in the world.",
  },
];

const WhyChooseMe = () => {
  return (
    <section id="why" className="bg-[#111111] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-yellow-400 uppercase tracking-widest font-semibold">
            Why Choose Me
          </p>

          <h2 className="text-5xl font-bold mt-4">
            More Than Just a
            <span className="text-yellow-400"> Trainer</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            I help people achieve sustainable fitness results through
            personalized coaching, proper nutrition, and continuous support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1b1b1b] rounded-2xl p-8 border border-transparent hover:border-yellow-400 transition duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-yellow-400 text-black flex items-center justify-center text-2xl font-bold">
                ✓
              </div>

              <h3 className="text-2xl font-semibold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseMe;