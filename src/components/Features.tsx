import { Battery, Shield, Zap, Gauge, Cpu, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const Features = () => {
  const features = [
    {
      icon: Battery,
      title: "Advanced Battery Estimation",
      description:
        "Precise State of Charge (SOC) and State of Health (SOH) calculations for optimal battery performance",
    },
    {
      icon: Shield,
      title: "Comprehensive Protection",
      description:
        "Multi-layer safety mechanisms protecting against overcharge, over-discharge, and thermal issues",
    },
    {
      icon: Zap,
      title: "Active Balancing",
      description:
        "Intelligent cell balancing technology ensures uniform charge distribution and extended battery life",
    },
    {
      icon: Gauge,
      title: "Real-time Monitoring",
      description:
        "Continuous tracking of voltage, current, temperature, and other critical parameters",
    },
    {
      icon: Cpu,
      title: "Smart Algorithms",
      description:
        "AI-powered algorithms optimize performance and predict maintenance needs",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description:
        "Modular architecture supporting 2-wheelers to heavy commercial vehicles",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Exploring the Power of Shade BMS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our Battery Management System combines cutting-edge technology with robust
            engineering to deliver unmatched performance and reliability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 space-y-4 relative z-10">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
