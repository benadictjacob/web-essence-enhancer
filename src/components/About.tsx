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
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

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
              className="card-hover group border-primary/20 bg-card/50 backdrop-blur h-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 space-y-4 relative z-10">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{value.title}</h3>
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
          <Card className="card-hover bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border-primary/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-neon-purple/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-8 sm:p-12 text-center space-y-4 relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold">
                Why Choose Shade Energy?
              </h3>
              <div className="grid sm:grid-cols-3 gap-8 mt-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="text-4xl font-bold text-primary mb-2">500+</p>
                  <p className="text-sm text-muted-foreground">Vehicles Deployed</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="text-4xl font-bold text-secondary mb-2">99.8%</p>
                  <p className="text-sm text-muted-foreground">System Reliability</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <p className="text-4xl font-bold text-accent mb-2">24/7</p>
                  <p className="text-sm text-muted-foreground">Technical Support</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
