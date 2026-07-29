import {
  Dumbbell,
  Flame,
  Salad,
  UserRound,
} from "lucide-react";

const programs = [
  {
    title: "Muscle Gain",
    description:
      "Customized workout plans focused on building lean muscle and increasing strength.",
    icon: Dumbbell,
  },
  {
    title: "Fat Loss",
    description:
      "Effective training and nutrition strategies to help you burn fat and stay fit.",
    icon: Flame,
  },
  {
    title: "Diet Plans",
    description:
      "Personalized meal plans designed according to your fitness goals.",
    icon: Salad,
  },
  {
    title: "Personal Training",
    description:
      "One-on-one coaching with continuous support and progress tracking.",
    icon: UserRound,
  },
];

const Programs = () => {
  return (
    <section id="programs" className="bg-[#111111] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">
            Our <span className="text-yellow-400">Programs</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-[#1b1b1b] rounded-2xl p-8 hover:border-yellow-400 border border-transparent transition"
            >
              <div className="mb-6">
                <program.icon
                  size={48}
                  className="text-yellow-400"
                />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {program.title}
              </h3>

              <p className="text-gray-400">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;