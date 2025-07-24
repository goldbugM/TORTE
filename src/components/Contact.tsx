import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          <Card className="shadow-soft">
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

          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Besuchen Sie uns
                </h3>
                <p className="text-muted-foreground mb-2">
                  Tortenwelt R&Z
                </p>
                <p className="text-muted-foreground mb-2">
                  Musterstraße 123
                </p>
                <p className="text-muted-foreground mb-4">
                  12345 Musterstadt
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
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

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Folgen Sie uns
                </h3>
                <p className="text-muted-foreground mb-4">
                  Entdecken Sie täglich neue Kreationen auf unserem Instagram:
                </p>
                <Button variant="outline" className="w-full">
                  @torten_welt_r_und_z
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;