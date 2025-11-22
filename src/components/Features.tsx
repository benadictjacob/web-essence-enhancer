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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black">
            Exploring the Power of Shade BMS
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
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
              className="card-hover group border-0 h-full relative overflow-hidden"
            >
              <CardContent className="p-8 space-y-4 relative z-10">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:from-accent group-hover:via-primary group-hover:to-secondary shadow-lg group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground group-hover:from-primary group-hover:via-secondary group-hover:to-accent bg-clip-text group-hover:text-transparent transition-all duration-500">{feature.title}</h3>
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
