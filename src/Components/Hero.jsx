import { motion } from "framer-motion";
import hero from "../assets/images/Nizam1.png";

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
            Welcome to NizamFitness
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            BUILD YOUR
            <br />
            <span className="text-yellow-400">DREAM BODY</span>
            <br />
            WITH US
          </h1>

          <p className="text-gray-400 mt-6 text-lg leading-8 max-w-xl">
            Achieve your fitness goals with expert coaching,
            personalized workout plans and nutrition guidance.
          </p>

          <div className="flex gap-4 mt-10">
            <a 
              href="#contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold"
            >
              Register Now
            </a>

            <a
              href="#about"
              className="border border-yellow-400 px-8 py-4 rounded-lg text-yellow-400"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
<motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="hidden md:flex justify-center"
>
  <div className="relative">
    {/* Yellow Glow */}
    <div className="absolute inset-0 bg-yellow-400 rounded-3xl blur-2xl opacity-25"></div>

    {/* Frame with padding (no bottom padding) */}
<div className="relative w-full max-w-md rounded-3xl border-4 border-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.6)] bg-black pt-4 pl-4 pr-4">
  <img
    src={hero}
    alt="Nizam Fitness"
    className="w-full h-full object-cover rounded-2xl"
  />
</div>
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default Hero;