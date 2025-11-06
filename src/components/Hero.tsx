import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBms from "@/assets/hero-bms.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary text-sm font-semibold tracking-wide uppercase">
                We Do
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                Cutting-edge Battery Management System for{" "}
                <span className="text-primary">E-Mobility</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We are a technology company specializing in premium, cost-efficient Battery
              Management Systems (BMS) for electric two-wheelers, passenger cars, pickup
              vans, trucks, and buses. Our innovative solutions ensure optimal performance,
              safety, and efficiency for a wide range of Battery applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" onClick={() => scrollToSection("about")}>
                Know More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroBms}
                alt="Battery Management System Circuit Board"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-2xl max-w-xs hidden lg:block">
              <p className="text-4xl font-bold text-primary mb-2">99.5%</p>
              <p className="text-sm text-muted-foreground">
                Battery efficiency with our advanced BMS technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
