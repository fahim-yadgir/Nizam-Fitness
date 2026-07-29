import { motion } from "framer-motion";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-yellow-400 uppercase tracking-[4px] font-semibold mb-4">
            Live Fitness Webinar
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            BUILD YOUR
            <br />
            <span className="text-yellow-400">DREAM BODY</span>
            <br />
            WITH ME
          </h1>

          <p className="text-gray-400 mt-6 text-lg leading-8 max-w-xl">
            Join my live fitness webinar and learn effective workouts,
            personalized nutrition strategies, and expert guidance to achieve
            your fitness goals faster.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mt-8">

            <div className="bg-[#1b1b1b] rounded-xl p-4">
              💪 Muscle Gain
            </div>

            <div className="bg-[#1b1b1b] rounded-xl p-4">
              🔥 Fat Loss
            </div>

            <div className="bg-[#1b1b1b] rounded-xl p-4">
              🥗 Diet Plans
            </div>

            <div className="bg-[#1b1b1b] rounded-xl p-4">
              🏋️ Personal Coaching
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition"
            >
              Register Now
            </a>

            <a
              href="#about"
              className="border border-yellow-400 px-8 py-4 rounded-lg text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
            >
              Learn More
            </a>

          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Yellow Glow */}
          <div className="absolute w-80 h-80 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>

          <img
            src={hero}
            alt="Fitness Trainer"
            className="relative w-full max-w-md rounded-3xl hover:scale-105 transition duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;