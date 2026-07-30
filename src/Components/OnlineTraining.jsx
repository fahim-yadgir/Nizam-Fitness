import { Laptop, Clock, MessageCircle, Trophy } from "lucide-react";

const OnlineTraining = () => {
  return (
    <section id="online-training" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-widest font-semibold">
            Online Coaching
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Online Personal
            <span className="text-yellow-400"> Training</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Train from anywhere with personalized workout plans,
            diet guidance, weekly progress tracking, and direct coach support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-[#1b1b1b] rounded-2xl p-8 text-center">
            <Laptop size={48} className="text-yellow-400 mx-auto mb-5" />
            <h3 className="text-2xl font-bold mb-3">Workout Plans</h3>
            <p className="text-gray-400">
              Customized training plans designed specifically for your goals.
            </p>
          </div>

          <div className="bg-[#1b1b1b] rounded-2xl p-8 text-center">
            <MessageCircle size={48} className="text-yellow-400 mx-auto mb-5" />
            <h3 className="text-2xl font-bold mb-3">24/7 Support</h3>
            <p className="text-gray-400">
              Stay connected with your coach through WhatsApp and regular check-ins.
            </p>
          </div>

          <div className="bg-[#1b1b1b] rounded-2xl p-8 text-center">
            <Clock size={48} className="text-yellow-400 mx-auto mb-5" />
            <h3 className="text-2xl font-bold mb-3">Weekly Progress</h3>
            <p className="text-gray-400">
              Track your body transformation every week with expert feedback.
            </p>
          </div>

          <div className="bg-[#1b1b1b] rounded-2xl p-8 text-center">
            <Trophy size={48} className="text-yellow-400 mx-auto mb-5" />
            <h3 className="text-2xl font-bold mb-3">Guaranteed Results</h3>
            <p className="text-gray-400">
              Build muscle, lose fat, and become stronger with consistent coaching.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OnlineTraining;