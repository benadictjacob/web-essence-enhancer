import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bike, Car, Truck, Bus } from "lucide-react";

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
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Products & <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored Battery Management Systems for every electric vehicle segment,
            from two-wheelers to heavy commercial vehicles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] bg-card"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <product.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">
                      {product.category}
                    </p>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Voltage</p>
                    <p className="text-sm font-semibold">{product.voltage}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Configuration</p>
                    <p className="text-sm font-semibold">{product.cells}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Current</p>
                    <p className="text-sm font-semibold">{product.current}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground mb-3">
                    Key Features:
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={scrollToContact}>
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};
