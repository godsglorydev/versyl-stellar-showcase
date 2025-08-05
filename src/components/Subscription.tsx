import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Star } from "lucide-react";

const Subscription = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    "Complete Branding Package",
    "Web Design & Development",
    "Advertising Campaigns Management",
    "Advanced SEO Optimization",
    "Marketing Automations Setup",
    "Priority Support (24/7)",
    "Monthly Strategy Sessions",
    "Performance Analytics & Reports",
    "Dedicated Account Manager",
    "Custom Integrations",
    "Unlimited Revisions",
    "Direct CEO Contact"
  ];

  return (
    <section id="subscription" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-accent/20 text-accent hover:bg-accent/30">
            <Star className="w-4 h-4 mr-1" />
            Most Popular
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            All-Inclusive <span className="bg-gradient-subscription bg-clip-text text-transparent">Premium Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Get everything you need to dominate your market with our comprehensive marketing solution.
          </p>
        </div>

        {/* Subscription Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="relative bg-gradient-subscription border-accent/20 shadow-subscription hover:shadow-subscription/80 transition-all duration-500 animate-scale-in">
            {/* Save 40% Ribbon */}
            <div className="absolute -top-4 -right-4 bg-destructive text-destructive-foreground px-6 py-2 rounded-full font-bold text-sm shadow-lg transform rotate-12 animate-glow-pulse z-20">
              Save 40%
            </div>

            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-background/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Crown className="w-10 h-10 text-accent-foreground" />
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
                Versyl Premium
              </CardTitle>
              <CardDescription className="text-accent-foreground/80 text-lg">
                Everything your business needs to scale and succeed
              </CardDescription>
              
              {/* Pricing */}
              <div className="mt-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-accent-foreground/60 text-xl line-through">$4,999</span>
                  <span className="text-5xl font-bold text-accent-foreground">$2,999</span>
                  <span className="text-accent-foreground/80">/month</span>
                </div>
                <p className="text-accent-foreground/70">
                  Save $2,000 monthly • Cancel anytime
                </p>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={feature} 
                    className="flex items-center space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-5 h-5 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent-foreground" />
                    </div>
                    <span className="text-accent-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Value Proposition */}
              <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <h3 className="font-bold text-accent-foreground mb-2">🎯 What You Get:</h3>
                <p className="text-accent-foreground/80 text-sm leading-relaxed">
                  A complete marketing ecosystem that typically costs $8,000+ when purchased separately. 
                  Our integrated approach ensures all your marketing efforts work together seamlessly.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="subscription" 
                  size="lg" 
                  className="flex-1 bg-background text-accent hover:bg-background/90 shadow-glow"
                  onClick={() => scrollToSection('contact')}
                >
                  Start Premium Plan
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1 border-accent-foreground/30 text-accent-foreground hover:bg-background/20"
                  onClick={() => scrollToSection('contact')}
                >
                  Schedule Demo
                </Button>
              </div>

              {/* Guarantee */}
              <div className="text-center mt-6 text-accent-foreground/70 text-sm">
                <span className="inline-flex items-center">
                  ✨ 30-day money-back guarantee • No setup fees
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Questions about our premium plan? We're here to help.
          </p>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('contact')}
            className="text-primary hover:text-primary/80"
          >
            Contact Our Team →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Subscription;