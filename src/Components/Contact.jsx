const Contact = () => {
  return (
    <section id="contact" className="bg-[#111111] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-yellow-400 uppercase tracking-widest font-semibold">
            Contact Me
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Start Your
            <span className="text-yellow-400"> Fitness Journey</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Fill out the form below or contact me directly on WhatsApp.
            I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* Contact Form */}
          <div className="bg-[#1b1b1b] p-8 rounded-2xl">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Tell me about your fitness goal..."
                className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-4 rounded-lg font-bold hover:bg-yellow-300 transition"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center">

            <div className="bg-[#1b1b1b] p-8 rounded-2xl space-y-6">

              <div>
                <h3 className="text-xl font-semibold text-yellow-400">
                  📞 Phone
                </h3>
                <p className="text-gray-300 mt-2">
                  +91 XXXXX XXXXX
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400">
                  📧 Email
                </h3>
                <p className="text-gray-300 mt-2">
                  your@email.com
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400">
                  💬 WhatsApp
                </h3>

                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 bg-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  Chat on WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;