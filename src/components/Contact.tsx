import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { StarBorder } from "@/components/ui/star-border";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kontakt
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie eine individuelle Torte bestellen? 
            Wir freuen uns auf Ihre Nachricht!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <StarBorder 
            as="div" 
            color="rgb(236, 72, 153)" 
            speed="8s" 
            thickness={2}
            className="rounded-lg"
          >
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Kontaktformular
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Vorname</Label>
                    <Input id="firstName" placeholder="Ihr Vorname" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nachname</Label>
                    <Input id="lastName" placeholder="Ihr Nachname" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">E-Mail</Label>
                  <Input id="email" type="email" placeholder="ihre.email@beispiel.de" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Telefon (optional)</Label>
                  <Input id="phone" type="tel" placeholder="Ihre Telefonnummer" />
                </div>
                
                <div>
                  <Label htmlFor="message">Nachricht</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Beschreiben Sie Ihre Tortenwünsche..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button variant="hero" className="w-full">
                  Nachricht senden
                </Button>
              </CardContent>
            </Card>
          </StarBorder>

          <div className="space-y-6">
            <StarBorder 
              as="div" 
              color="rgb(168, 85, 247)" 
              speed="10s" 
              thickness={2}
              className="rounded-lg"
            >
              <Card className="shadow-soft border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Folgen Sie uns
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      asChild
                      variant="outline"
                      className="h-12 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                    >
                      <a 
                        href="https://facebook.com/tortenwelt" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Facebook className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-medium">Facebook</span>
                      </a>
                    </Button>
                    
                    <Button
                      asChild
                      variant="outline"
                      className="h-12 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                    >
                      <a 
                        href="https://wa.me/49123456789" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium">WhatsApp</span>
                      </a>
                    </Button>
                    
                    <Button
                      asChild
                      variant="outline"
                      className="h-12 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                    >
                      <a 
                        href="https://instagram.com/torten_welt_r_und_z" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Instagram className="h-5 w-5 text-pink-600" />
                        <span className="text-sm font-medium">Instagram</span>
                      </a>
                    </Button>
                    
                    <Button
                      asChild
                      variant="outline"
                      className="h-12 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                    >
                      <a 
                        href="https://x.com/tortenwelt" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <svg className="h-5 w-5 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        <span className="text-sm font-medium">X (Twitter)</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </StarBorder>

            <StarBorder 
              as="div" 
              color="rgb(34, 197, 94)" 
              speed="12s" 
              thickness={2}
              className="rounded-lg"
            >
              <Card className="shadow-soft border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Öffnungszeiten
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Montag - Freitag:</span>
                      <span>08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samstag:</span>
                      <span>08:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sonntag:</span>
                      <span>Geschlossen</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StarBorder>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;