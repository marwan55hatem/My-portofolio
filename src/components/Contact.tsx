import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center text-center">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                your.email@example.com
              </a>
            </div>
            <div className="flex flex-col items-center text-center">
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex flex-col items-center text-center">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">
                Your City, Country
              </p>
            </div>
          </div>
          <p className="text-center text-muted-foreground">
            Feel free to reach out for collaborations or just a friendly chat!
          </p>
        </div>
      </div>
    </section>
  );
}
