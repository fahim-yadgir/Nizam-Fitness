import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `🏋️ New Registration

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Fitness Goal: ${formData.goal}

I want to join Nizam Fitness. Please contact me.`;

    const whatsappURL = `https://wa.me/917263042421?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      goal: "",
    });
  };

  return (
    <section id="contact" className="bg-[#111111] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="text-yellow-400 uppercase tracking-widest font-semibold">
            Contact Me
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Start Your
            <span className="text-yellow-400"> Fitness Journey</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Fill out the form below and I'll contact you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* Contact Form */}
          <div className="bg-[#1b1b1b] p-8 rounded-2xl">

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none"
                required
              />

              <select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none"
                required
              >
                <option value="">Select Fitness Goal</option>
                <option value="Muscle Gain">Muscle Gain</option>
                <option value="Fat Loss">Fat Loss</option>
                <option value="Weight Gain">Weight Gain</option>
                <option value="General Fitness">General Fitness</option>
                <option value="Online Personal Training">
                  Online Personal Training
                </option>
              </select>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-4 rounded-lg font-bold hover:bg-yellow-300 transition"
              >
                Register Now
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
                  +91 72630 42421
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400">
                  📧 Email
                </h3>

                <p className="text-gray-300 mt-2">
                  nizamyadgir1524@gmail.com
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400">
                  💬 WhatsApp
                </h3>

                <a
                  href="https://wa.me/917263042421"
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