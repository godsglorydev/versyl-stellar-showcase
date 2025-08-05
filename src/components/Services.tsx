import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Code, Megaphone, Search, Zap } from "lucide-react";

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Palette,
      title: "Branding",
      description: "Create memorable brand identities that resonate with your target audience and establish market presence.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
    },
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Build stunning, responsive websites that convert visitors into customers with modern design and functionality.",
      features: ["Custom Design", "Responsive Development", "E-commerce", "CMS Integration"]
    },
    {
      icon: Megaphone,
      title: "Advertising Campaigns",
      description: "Launch targeted campaigns across multiple channels to maximize reach and drive qualified leads.",
      features: ["Social Media Ads", "Google Ads", "Display Advertising", "Video Marketing"]
    },
    {
      icon: Search,
      title: "SEO",
      description: "Boost your search engine rankings and organic traffic with data-driven SEO strategies and optimization.",
      features: ["Keyword Research", "Technical SEO", "Content Optimization", "Link Building"]
    },
    {
      icon: Zap,
      title: "Automations",
      description: "Streamline your marketing processes with intelligent automation tools that save time and increase efficiency.",
      features: ["Email Automation", "Lead Nurturing", "CRM Integration", "Workflow Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive marketing solutions designed to accelerate your business growth and maximize your digital potential.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => scrollToSection('contact')}
                  >
                    + Info
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? We create tailored strategies for your unique business needs.
          </p>
          <Button 
            variant="default" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="animate-glow-pulse"
          >
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;