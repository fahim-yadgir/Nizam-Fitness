import hero from "../assets/images/Nizam2.png";
const About = () => {
  return (
    <section id="about" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <div className="flex justify-center">
          <div className="relative">
  {/* Yellow Glow */}
  <div className="absolute inset-0 bg-yellow-400 rounded-3xl blur-2xl opacity-25"></div>

  {/* Image */}
  <img
    src={hero}
    alt="Trainer"
    className="relative w-full max-w-md rounded-3xl border-4 border-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.6)]"
  />
</div>
        </div>

        {/* Right Content */}
        <div>

          <p className="text-yellow-400 uppercase font-semibold tracking-widest">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Your Personal
            <span className="text-yellow-400"> Fitness Coach</span>
          </h2>

          <p className="text-gray-300 mt-6 leading-8">
            My mission is to help people build muscle, lose fat,
            improve their health, and become the best version of
            themselves through proper training and nutrition.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-[#1a1a1a] p-6 rounded-xl text-center">
              <h3 className="text-4xl font-bold text-yellow-400">
                5+
              </h3>
              <p className="mt-2">Years Experience</p>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-xl text-center">
              <h3 className="text-4xl font-bold text-yellow-400">
                300+
              </h3>
              <p className="mt-2">Clients Trained</p>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-xl text-center">
              <h3 className="text-4xl font-bold text-yellow-400">
                100+
              </h3>
              <p className="mt-2">Transformations</p>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-xl text-center">
              <h3 className="text-4xl font-bold text-yellow-400">
                24/7
              </h3>
              <p className="mt-2">Support</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;