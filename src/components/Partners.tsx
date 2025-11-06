import { motion } from "framer-motion";

export const Partners = () => {
  const partners = [
    "The ePlane Company",
    "Lapa",
    "Valeo",
    "Konvolt",
    "IEC India",
  ];

  const supporters = [
    { name: "iCreate", tagline: "Supported by" },
    { name: "Startup India", tagline: "Recognized by" },
    { name: "Kerala Startup Mission", tagline: "Incubated at" },
  ];

  return (
    <section className="py-20 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partners Section */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Proud Partners
          </motion.h2>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="text-xl sm:text-2xl font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Supporters Section */}
        <div className="text-center pt-12 border-t border-border">
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Supported By
          </motion.h3>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
            {supporters.map((supporter, index) => (
              <motion.div
                key={index}
                className="text-center space-y-2 cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-xs text-primary font-semibold uppercase tracking-wider">
                  {supporter.tagline}
                </p>
                <p className="text-lg sm:text-xl font-bold text-muted-foreground hover:text-foreground transition-colors">
                  {supporter.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
