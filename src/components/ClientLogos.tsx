import { Card } from "@/components/ui/card";

const ClientLogos = () => {
  // Mock client logos - in a real scenario, these would be actual client logo URLs
  const clients = [
    {
      name: "TechCorp",
      logo: "https://via.placeholder.com/120x60/2563eb/ffffff?text=TechCorp",
      industry: "Technology"
    },
    {
      name: "GreenLeaf",
      logo: "https://via.placeholder.com/120x60/059669/ffffff?text=GreenLeaf",
      industry: "Sustainability"
    },
    {
      name: "FinanceFlow",
      logo: "https://via.placeholder.com/120x60/dc2626/ffffff?text=FinanceFlow",
      industry: "Finance"
    },
    {
      name: "HealthPlus",
      logo: "https://via.placeholder.com/120x60/7c3aed/ffffff?text=HealthPlus",
      industry: "Healthcare"
    },
    {
      name: "EduMaster",
      logo: "https://via.placeholder.com/120x60/ea580c/ffffff?text=EduMaster",
      industry: "Education"
    },
    {
      name: "RetailPro",
      logo: "https://via.placeholder.com/120x60/0891b2/ffffff?text=RetailPro",
      industry: "Retail"
    },
    {
      name: "FoodieHub",
      logo: "https://via.placeholder.com/120x60/16a34a/ffffff?text=FoodieHub",
      industry: "Food & Beverage"
    },
    {
      name: "TravelWise",
      logo: "https://via.placeholder.com/120x60/c2410c/ffffff?text=TravelWise",
      industry: "Travel"
    },
    {
      name: "SportMax",
      logo: "https://via.placeholder.com/120x60/9333ea/ffffff?text=SportMax",
      industry: "Sports"
    },
    {
      name: "AutoDrive",
      logo: "https://via.placeholder.com/120x60/1d4ed8/ffffff?text=AutoDrive",
      industry: "Automotive"
    },
    {
      name: "RealEstate+",
      logo: "https://via.placeholder.com/120x60/be123c/ffffff?text=RealEstate%2B",
      industry: "Real Estate"
    },
    {
      name: "FashionForward",
      logo: "https://via.placeholder.com/120x60/7c2d12/ffffff?text=FashionForward",
      industry: "Fashion"
    }
  ];

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by <span className="bg-gradient-primary bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're proud to partner with innovative companies across diverse industries, 
            helping them achieve remarkable growth and success.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12">
          {clients.map((client, index) => (
            <Card 
              key={client.name}
              className="group p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center h-16">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="text-center mt-3">
                <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  {client.industry}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Delivering Results That Matter
            </h3>
            <p className="text-muted-foreground">
              Our clients see measurable growth and sustainable success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in" style={{ animationDelay: '1200ms' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">250%</div>
              <div className="text-muted-foreground">Average Revenue Growth</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '1300ms' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">6 Months</div>
              <div className="text-muted-foreground">Average ROI Timeline</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '1400ms' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Client Renewal Rate</div>
            </div>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="text-center mt-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '1500ms' }}>
          <blockquote className="text-lg md:text-xl text-muted-foreground italic mb-4">
            "Versyl transformed our digital presence completely. Their strategic approach and execution 
            helped us achieve 300% growth in just 8 months."
          </blockquote>
          <cite className="text-primary font-medium">
            — CEO, TechCorp Industries
          </cite>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;