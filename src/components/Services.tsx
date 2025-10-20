import { Calculator, Shield, Code2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Calculator,
    title: "Bookkeeping & Accounting",
    description: "Comprehensive financial management including bookkeeping, payroll, VAT returns, and year-end accounts. We ensure your finances are accurate, compliant, and optimized for growth.",
    features: ["Monthly bookkeeping", "Payroll services", "VAT returns", "Financial reports"]
  },
  {
    icon: Shield,
    title: "IT Support & Security",
    description: "Proactive IT support and cybersecurity solutions to keep your business running smoothly. From network management to data protection, we've got you covered.",
    features: ["24/7 support", "Network security", "Data backup", "System maintenance"]
  },
  {
    icon: Code2,
    title: "Website Design & Development",
    description: "Modern, responsive websites that drive results. We create professional websites tailored to your business needs, from simple landing pages to complex web applications.",
    features: ["Custom design", "Mobile responsive", "SEO optimized", "Ongoing support"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to support every aspect of your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
