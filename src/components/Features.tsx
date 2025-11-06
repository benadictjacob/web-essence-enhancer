import { Battery, Shield, Zap, Gauge, Cpu, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Exploring the Power of Shade BMS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our Battery Management System combines cutting-edge technology with robust
            engineering to deliver unmatched performance and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] bg-card/50 backdrop-blur"
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
