import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Subscription from "@/components/Subscription";
import Prizes from "@/components/Prizes";
import ClientLogos from "@/components/ClientLogos";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Subscription />
      <Prizes />
      <ClientLogos />
      <Contact />
      <Chatbot />
    </div>
  );
};

export default Index;
