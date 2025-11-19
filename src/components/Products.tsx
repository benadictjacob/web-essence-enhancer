import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bike, Car, Truck, Bus } from "lucide-react";
import { motion } from "framer-motion";

export const Products = () => {
  const products = [
    {
      icon: Bike,
      category: "Two-Wheeler BMS",
      title: "Electric Scooters & Motorcycles",
      voltage: "24V - 72V",
      cells: "7S - 20S",
      current: "Up to 150A",
      features: [
        "Compact design",
        "Cost-optimized",
        "Mobile app integration",
        "Regenerative braking support",
      ],
    },
    {
      icon: Car,
      category: "Passenger Vehicle BMS",
      title: "Electric Cars & SUVs",
      voltage: "300V - 450V",
      cells: "96S - 120S",
      current: "Up to 300A",
      features: [
        "Advanced thermal management",
        "Fast charging support",
        "Cloud connectivity",
        "Predictive maintenance",
      ],
    },
    {
      icon: Truck,
      category: "Commercial Vehicle BMS",
      title: "Electric Vans & Pickup Trucks",
      voltage: "300V - 600V",
      cells: "96S - 168S",
      current: "Up to 400A",
      features: [
        "Heavy-duty protection",
        "Extended range optimization",
        "Fleet management integration",
        "CAN/Modbus communication",
      ],
    },
    {
      icon: Bus,
      category: "Heavy Commercial BMS",
      title: "Electric Buses & Heavy Trucks",
      voltage: "450V - 800V",
      cells: "120S - 220S",
      current: "Up to 600A",
      features: [
        "High voltage capability",
        "Multi-pack management",
        "Industrial-grade reliability",
        "Advanced diagnostics",
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Products & <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored Battery Management Systems for every electric vehicle segment,
            from two-wheelers to heavy commercial vehicles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
              className="card-hover group border-0 h-full relative overflow-hidden"
            >
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:from-accent group-hover:via-electric-cyan group-hover:to-neon-purple shadow-lg group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)]">
                    <product.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                      {product.category}
                    </p>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-primary/30 group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-accent/10 rounded-lg transition-all duration-500 p-2 -m-2">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Voltage</p>
                    <p className="font-semibold text-foreground">{product.voltage}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Cells</p>
                    <p className="font-semibold text-foreground">{product.cells}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Current</p>
                    <p className="font-semibold text-foreground">{product.current}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <h4 className="font-semibold mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Key Features:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm group-hover:translate-x-2 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary group-hover:from-accent group-hover:to-electric-cyan transition-all duration-300 group-hover:scale-125 shadow-[0_0_10px_hsl(var(--primary)/0.5)]" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            variant="electric"
            className="px-12"
          >
            Request a Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
