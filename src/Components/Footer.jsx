const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-400">
              Nizam Fitness
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Helping people build muscle, lose fat, and live a healthier life
              through personalized coaching and nutrition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400">About</a></li>
              <li><a href="#programs" className="hover:text-yellow-400">Programs</a></li>
              <li><a href="#online-training" className="hover:text-yellow-400">OnlineTraining</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <p className="text-gray-400">
              📧 nizamyadgir1524@gmail.com
            </p>

            <p className="text-gray-400 mt-3">
              📞 +91 72630 42421
            </p>

            <p className="text-gray-400 mt-3">
              📍 Pune, Maharashtra
            </p>
          </div>

        </div>

        <hr className="border-gray-800 my-10" />

        <div className="text-center text-gray-500">
          © {new Date().getFullYear()} Nizam Fitness. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;