import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Trophy, Target } from "lucide-react";

export function AboutUs() {
  const { theme } = useTheme();

  const milestones = [
    {
      year: 2010,
      title: "Founded",
      description:
        "Manocha Academy was established with a vision to revolutionize education.",
      icon: GraduationCap,
    },
    {
      year: 2015,
      title: "5000+ Students",
      description:
        "Reached a milestone of helping over 5000 students achieve their dreams.",
      icon: Users,
    },
    {
      year: 2020,
      title: "100% Success Rate",
      description: "Achieved 100% success rate in IIT JEE and NEET exams.",
      icon: Trophy,
    },
    {
      year: 2023,
      title: "Future Goals",
      description: "Expanding our reach to empower more students across India.",
      icon: Target,
    },
  ];

  return (
    <section
      className={`py-16 bg-${theme === "orange" ? "orange" : "blue"}-50`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge
            variant="secondary"
            className={`mb-4 bg-${
              theme === "orange" ? "orange" : "blue"
            }-100 text-${theme === "orange" ? "orange" : "blue"}-700 hover:bg-${
              theme === "orange" ? "orange" : "blue"
            }-200`}
          >
            Our Journey
          </Badge>
          <h2
            className={`text-4xl font-bold mb-4 text-${
              theme === "orange" ? "orange" : "blue"
            }-600`}
          >
            About Manocha Academy
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering students to achieve their dreams through innovative
            education and personalized guidance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="Students studying"
                layout="fill"
                objectFit="cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-tr from-${
                  theme === "orange" ? "orange" : "blue"
                }-500/20`}
              />
            </div>
          </motion.div>

          <div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="relative">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <Badge
                          variant="secondary"
                          className={`mr-2 bg-${
                            theme === "orange" ? "orange" : "blue"
                          }-100 text-${
                            theme === "orange" ? "orange" : "blue"
                          }-700`}
                        >
                          {milestone.year}
                        </Badge>
                        <h3
                          className={`text-lg font-semibold text-${
                            theme === "orange" ? "orange" : "blue"
                          }-600`}
                        >
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-${
                          theme === "orange" ? "orange" : "blue"
                        }-500 flex items-center justify-center text-white`}
                      >
                        <milestone.icon className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
