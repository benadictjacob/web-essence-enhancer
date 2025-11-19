import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBms from "@/assets/hero-bms.jpg";
import { motion } from "framer-motion";

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
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wide uppercase bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                We Do
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                Cutting-edge Battery Management System for{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">E-Mobility</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We are a technology company specializing in premium, cost-efficient Battery
              Management Systems (BMS) for electric two-wheelers, passenger cars, pickup
              vans, trucks, and buses. Our innovative solutions ensure optimal performance,
              safety, and efficiency for a wide range of Battery applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" variant="electric" onClick={() => scrollToSection("about")}>
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
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroBms}
                alt="Battery Management System Circuit Board"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              className="absolute -bottom-6 -left-6 rounded-xl p-6 shadow-2xl max-w-xs hidden lg:block border-0 card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">99.5%</p>
              <p className="text-sm text-muted-foreground">
                Battery efficiency with our advanced BMS technology
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
