import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    company: "Mitchell & Co Solicitors",
    text: "Books & Bytes transformed our practice. Their bookkeeping is impeccable, and they also rebuilt our website and manage our IT infrastructure. It's incredibly convenient having one trusted partner.",
    rating: 5
  },
  {
    name: "David Thompson",
    company: "Thompson Construction Ltd",
    text: "We were struggling with outdated systems and messy accounts. Books & Bytes sorted both issues within weeks. Their dual expertise saved us time and money.",
    rating: 5
  },
  {
    name: "Emma Richardson",
    company: "The Green Café",
    text: "As a small business owner, I wear many hats. Having Books & Bytes handle my accounts, website, and IT support means I can focus on what I do best. Highly recommended!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped grow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
