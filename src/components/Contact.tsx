import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@shadeenergy.in",
      href: "mailto:info@shadeenergy.in",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9876543210",
      href: "tel:+919876543210",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Kochi, Kerala, India",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(160_55%_45%)_0%,hsl(160_65%_35%)_100%)] -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Get in <span className="text-[hsl(160_50%_85%)]">Touch</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Ready to power your electric vehicle with cutting-edge BMS technology?
            Contact us today for a consultation or quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="card-hover border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="card-hover border-0">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-start gap-4 group p-4 -m-4 rounded-lg transition-all duration-500 bg-gradient-to-r from-transparent via-transparent to-transparent hover:from-primary/10 hover:via-secondary/10 hover:to-accent/10 hover:shadow-[0_0_25px_hsl(var(--primary)/0.3)]"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center transition-all duration-500 flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 group-hover:from-accent group-hover:via-primary group-hover:to-secondary shadow-lg group-hover:shadow-[0_0_30px_hsl(var(--secondary)/0.5)]">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors duration-300">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            <Card className="card-hover border-0">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-xl font-bold">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <motion.div 
                    className="flex justify-between p-2 rounded hover:bg-primary/5 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </motion.div>
                  <motion.div 
                    className="flex justify-between p-2 rounded hover:bg-primary/5 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </motion.div>
                  <motion.div 
                    className="flex justify-between p-2 rounded hover:bg-primary/5 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
