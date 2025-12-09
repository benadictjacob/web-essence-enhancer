import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To accelerate the adoption of electric mobility by providing world-class, affordable Battery Management Systems that ensure safety, efficiency, and longevity",
    },
    {
      icon: Users,
      title: "Our Team",
      description:
        "A diverse group of engineers, researchers, and industry experts passionate about sustainable transportation and cutting-edge technology",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "ISO certified processes, rigorous testing protocols, and compliance with international automotive standards ensure the highest quality",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Continuous R&D in AI-powered battery analytics, advanced protection mechanisms, and next-generation battery technologies",
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold">
            About <span className="text-primary">Shade Energy</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded with a vision to revolutionize electric mobility, Shade Energy is at
            the forefront of Battery Management System technology. We combine deep
            technical expertise with innovative thinking to deliver solutions that power
            the future of transportation.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our BMS solutions are trusted by leading EV manufacturers and have been
            deployed in thousands of vehicles across India, ensuring safe and efficient
            operation in diverse conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
              className="group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] bg-card/50 backdrop-blur"
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 sm:p-12 text-center space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold">
                Why Choose Shade Energy?
              </h3>
              <div className="grid sm:grid-cols-3 gap-8 mt-8">
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">500+</p>
                  <p className="text-sm text-muted-foreground">Vehicles Deployed</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">99.8%</p>
                  <p className="text-sm text-muted-foreground">System Reliability</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">24/7</p>
                  <p className="text-sm text-muted-foreground">Technical Support</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
