import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, ChefHat } from "lucide-react";

interface CakeFillingProps {
  onFillingSelect?: (filling: string) => void;
  selectedFilling?: string;
}

const CakeFilling = ({ onFillingSelect, selectedFilling }: CakeFillingProps) => {
  const [selected, setSelected] = useState<string>(selectedFilling || "");

  const fillings = [
    {
      name: "Schoko",
      description: "Cremige Schokoladenfüllung mit dunkler oder Vollmilchschokolade",
      popular: true,
      allergens: ["Milch", "Soja"]
    },
    {
      name: "Erdbeer",
      description: "Frische Erdbeeren mit leichter Sahne oder Quark",
      popular: true,
      allergens: ["Milch"]
    },
    {
      name: "Frucht jeder Art",
      description: "Saisonale Früchte nach Wunsch (Himbeeren, Blaubeeren, Mango, etc.)",
      popular: false,
      allergens: ["Milch"]
    },
    {
      name: "Mascarpone-Frischkäse",
      description: "Cremige Mischung aus Mascarpone und Frischkäse",
      popular: true,
      allergens: ["Milch"]
    },
    {
      name: "Füllungen nach Wunsch",
      description: "Individuelle Füllungen nach Ihren Vorstellungen",
      popular: false,
      allergens: ["Variiert"]
    }
  ];

  const handleSelect = (filling: string) => {
    setSelected(filling);
    if (onFillingSelect) {
      onFillingSelect(filling);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <ChefHat className="h-6 w-6 text-primary" />
          Tortenfüllungen
        </CardTitle>
        <p className="text-muted-foreground">
          Wählen Sie Ihre Wunschfüllung für eine perfekte Torte
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {fillings.map((filling, index) => (
          <div key={index}>
            <div
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                selected === filling.name
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-primary/50"
              }`}
              onClick={() => handleSelect(filling.name)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{filling.name}</h3>
                    {filling.popular && (
                      <Badge variant="secondary" className="text-xs">
                        Beliebt
                      </Badge>
                    )}
                    {selected === filling.name && (
                      <Check className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    {filling.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs text-muted-foreground mr-2">Allergene:</span>
                    {filling.allergens.map((allergen, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {allergen}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {index < fillings.length - 1 && <Separator className="my-2" />}
          </div>
        ))}
        
        {selected && (
          <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <Check className="h-5 w-5 text-primary" />
              <span className="font-semibold">Ausgewählte Füllung:</span>
            </div>
            <p className="text-primary font-medium">{selected}</p>
            <p className="text-sm text-muted-foreground mt-1">
              Diese Füllung wird bei Ihrer Bestellung berücksichtigt.
            </p>
          </div>
        )}
        
        <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
          <h4 className="font-semibold text-amber-800 mb-2">💡 Hinweis</h4>
          <p className="text-sm text-amber-700">
            Alle Füllungen können individuell angepasst werden. Bei besonderen Wünschen oder 
            Allergien kontaktieren Sie uns gerne für eine persönliche Beratung.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CakeFilling;