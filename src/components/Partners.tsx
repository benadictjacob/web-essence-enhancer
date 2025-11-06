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
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Our Proud Partners</h2>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-xl sm:text-2xl font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Supporters Section */}
        <div className="text-center pt-12 border-t border-border">
          <h3 className="text-2xl sm:text-3xl font-bold mb-12">Supported By</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
            {supporters.map((supporter, index) => (
              <div
                key={index}
                className="group text-center space-y-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <p className="text-xs text-primary font-semibold uppercase tracking-wider">
                  {supporter.tagline}
                </p>
                <p className="text-lg sm:text-xl font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                  {supporter.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
