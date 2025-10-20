import { Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              About Books & Bytes
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're a unique practice that bridges the gap between traditional accounting and modern technology. 
              Our dual expertise means you get comprehensive support for both your financial and digital needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-accent/10 text-accent mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower SMEs with integrated financial and technology solutions that drive growth and efficiency.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-accent/10 text-accent mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Team</h3>
              <p className="text-muted-foreground">
                Qualified accountants and certified IT professionals working together to serve your business needs.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-accent/10 text-accent mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Values</h3>
              <p className="text-muted-foreground">
                Trust, innovation, and excellence in everything we do. Your success is our success.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Why Choose Books & Bytes?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Unlike traditional firms, we understand that modern businesses need more than just accounting. 
                They need technology that works seamlessly with their financial operations.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Integrated Approach</h4>
                    <p className="text-sm opacity-90">One partner for your books and your tech stack</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Proactive Support</h4>
                    <p className="text-sm opacity-90">We anticipate needs before they become problems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Local Expertise</h4>
                    <p className="text-sm opacity-90">Deep understanding of UK business regulations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Scalable Solutions</h4>
                    <p className="text-sm opacity-90">Services that grow with your business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
