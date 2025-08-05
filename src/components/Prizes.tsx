import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Medal, Star } from "lucide-react";

const Prizes = () => {
  const prizes = [
    {
      icon: Trophy,
      title: "Marketing Excellence Award 2024",
      organization: "Digital Marketing Institute",
      description: "Recognized for outstanding innovation in digital marketing strategies and client results.",
      year: "2024",
      type: "Gold"
    },
    {
      icon: Award,
      title: "Best Creative Agency",
      organization: "Creative Industry Awards",
      description: "Awarded for exceptional creativity and design excellence across multiple client campaigns.",
      year: "2023",
      type: "Platinum"
    },
    {
      icon: Medal,
      title: "SEO Agency of the Year",
      organization: "Search Marketing Awards",
      description: "Honored for delivering exceptional organic growth and search engine optimization results.",
      year: "2023",
      type: "Gold"
    },
    {
      icon: Star,
      title: "Innovation in Automation",
      organization: "MarTech Excellence Awards",
      description: "Recognized for pioneering marketing automation solutions that drive measurable business growth.",
      year: "2024",
      type: "Silver"
    },
    {
      icon: Trophy,
      title: "Client Satisfaction Leader",
      organization: "Business Excellence Institute",
      description: "Achieved highest client satisfaction ratings in the marketing services industry.",
      year: "2022-2024",
      type: "Consecutive"
    },
    {
      icon: Award,
      title: "Fastest Growing Agency",
      organization: "Business Growth Awards",
      description: "Recognized for exceptional business growth and expansion in the competitive marketing landscape.",
      year: "2023",
      type: "Diamond"
    }
  ];

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "Platinum":
      case "Diamond":
        return "bg-accent/20 text-accent hover:bg-accent/30";
      case "Gold":
        return "bg-yellow-500/20 text-yellow-700 hover:bg-yellow-500/30";
      case "Silver":
        return "bg-gray-500/20 text-gray-700 hover:bg-gray-500/30";
      case "Consecutive":
        return "bg-primary/20 text-primary hover:bg-primary/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="prizes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Prizes</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Industry recognition and awards that showcase our commitment to excellence and innovation in marketing.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prizes.map((prize, index) => {
            const IconComponent = prize.icon;
            return (
              <Card 
                key={prize.title} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <Badge className={`mb-3 ${getBadgeVariant(prize.type)}`}>
                    {prize.type} • {prize.year}
                  </Badge>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {prize.title}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {prize.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {prize.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground text-sm">Industry Awards</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '700ms' }}>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground text-sm">Years Running</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '800ms' }}>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground text-sm">Client Retention</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '900ms' }}>
              <div className="text-3xl font-bold text-primary mb-2">Top 1%</div>
              <div className="text-muted-foreground text-sm">Industry Ranking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;