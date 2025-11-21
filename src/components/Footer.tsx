import { Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/20 bg-[hsl(0_0%_8%)] text-white relative">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(200_30%_15%)_0%,hsl(0_0%_8%)_100%)] -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Shade</span>{" "}
              <span className="text-foreground">Energy</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Powering the future of electric mobility with cutting-edge Battery Management
              Systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-muted-foreground hover:bg-gradient-to-r hover:from-primary hover:via-secondary hover:to-accent hover:bg-clip-text hover:text-transparent transition-all duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-muted-foreground hover:bg-gradient-to-r hover:from-primary hover:via-secondary hover:to-accent hover:bg-clip-text hover:text-transparent transition-all duration-300"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:bg-gradient-to-r hover:from-primary hover:via-secondary hover:to-accent hover:bg-clip-text hover:text-transparent transition-all duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:bg-gradient-to-r hover:from-primary hover:via-secondary hover:to-accent hover:bg-clip-text hover:text-transparent transition-all duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Two-Wheeler BMS</li>
              <li>Passenger Vehicle BMS</li>
              <li>Commercial Vehicle BMS</li>
              <li>Heavy Commercial BMS</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@shadeenergy.in</li>
              <li>+91 9876543210</li>
              <li>Kochi, Kerala, India</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center hover:from-primary hover:via-secondary hover:to-accent transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
              >
                <Linkedin className="w-5 h-5 text-primary hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center hover:from-secondary hover:via-accent hover:to-primary transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--secondary)/0.5)]"
              >
                <Twitter className="w-5 h-5 text-secondary hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="mailto:info@shadeenergy.in"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center hover:from-accent hover:via-primary hover:to-secondary transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)]"
              >
                <Mail className="w-5 h-5 text-accent hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Shade Energy. All rights reserved. | Designed for
            the Future of E-Mobility
          </p>
        </div>
      </div>
    </footer>
  );
};
