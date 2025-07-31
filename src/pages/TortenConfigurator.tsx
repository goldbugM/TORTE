import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { StarBorder } from '@/components/ui/star-border';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useIsMobile } from '@/hooks/use-mobile';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { 
  ChefHat, 
  Cake, 
  Heart, 
  Star, 
  Users, 
  Calendar as CalendarIcon, 
  Palette, 
  Layers,
  Sparkles,
  ShoppingCart,
  Info,
  Plus,
  Minus,
  Eye,
  Download,
  Gift
} from 'lucide-react';

// Verfügbare Torten aus der Galerie
const availableCakes = [
  {
    id: 'schokoladen-torte',
    name: 'Schokoladen Torte',
    description: 'Saftige Schokoladentorte mit cremiger Füllung und dunklen Beeren',
    category: 'chocolate',
    defaultFilling: ['chocolate-cream'],
    defaultFrosting: 'chocolate'
  },
  {
    id: 'buttercreme-torte',
    name: 'Buttercreme Torte',
    description: 'Klassische Torte mit luftiger Buttercreme und zartem Biskuitboden',
    category: 'classic',
    defaultFilling: ['vanilla-cream'],
    defaultFrosting: 'buttercream'
  },
  {
    id: 'naked-torte',
    name: 'Naked Torte',
    description: 'Moderne Torte ohne Fondant mit sichtbaren Schichten und frischen Früchten',
    category: 'modern',
    defaultFilling: ['fresh-fruits'],
    defaultFrosting: 'cream-cheese'
  },
  {
    id: 'mascarpone-torte',
    name: 'Mascarpone-Frischkäse-Sahne Torte',
    description: 'Cremige Torte mit Mascarpone, Frischkäse und luftiger Sahne',
    category: 'cream',
    defaultFilling: ['mascarpone-cream'],
    defaultFrosting: 'cream-cheese'
  },
  {
    id: 'vintage-torte',
    name: 'Vintage Torte',
    description: 'Elegante Torte im Vintage-Stil mit klassischen Dekorationen',
    category: 'elegant',
    defaultFilling: ['vanilla-cream'],
    defaultFrosting: 'fondant'
  },
  {
    id: 'schoko-torte',
    name: 'Schoko Torte',
    description: 'Intensive Schokoladentorte für echte Schokoladenliebhaber',
    category: 'chocolate',
    defaultFilling: ['chocolate-cream'],
    defaultFrosting: 'chocolate'
  },
  {
    id: 'zitronen-tiramisu',
    name: 'Zitronen Tiramisu',
    description: 'Erfrischende Variation des klassischen Tiramisu mit Zitrone',
    category: 'fresh',
    defaultFilling: ['lemon-mascarpone'],
    defaultFrosting: 'mascarpone'
  },
  {
    id: 'wassermelonen-torte',
    name: 'Wassermelonen Torte',
    description: 'Gesunde Torte komplett aus frischen Früchten ohne Backen',
    category: 'healthy',
    defaultFilling: ['fresh-fruits'],
    defaultFrosting: 'whipped-cream'
  },
  {
    id: 'san-sebastian-cheesecake',
    name: 'San Sebastian Cheesecake',
    description: 'Baskischer Käsekuchen mit karamellisierter Oberfläche',
    category: 'cheesecake',
    defaultFilling: ['cream-cheese'],
    defaultFrosting: 'none'
  },
  {
    id: 'fruchtige-sahnetorte',
    name: 'Fruchtige Sahnetorte',
    description: 'Frische Beeren auf luftiger Sahne mit Biskuitboden',
    category: 'fruity',
    defaultFilling: ['fresh-fruits'],
    defaultFrosting: 'whipped-cream'
  },
  {
    id: 'hochzeitstorte',
    name: 'Hochzeitstorte',
    description: 'Elegante mehrstöckige Torte für Ihren besonderen Tag',
    category: 'wedding',
    defaultFilling: ['vanilla-cream'],
    defaultFrosting: 'fondant'
  },
  {
    id: 'schwarzwalder-kirschtorte',
    name: 'Schwarzwälder Kirschtorte',
    description: 'Klassische deutsche Torte mit Kirschen, Sahne und Schokolade',
    category: 'traditional',
    defaultFilling: ['cherry-cream'],
    defaultFrosting: 'whipped-cream'
  },
  {
    id: 'apfelstrudel',
    name: 'Apfelstrudel',
    description: 'Traditioneller Strudel mit Äpfeln, Zimt und Vanillesauce',
    category: 'traditional',
    defaultFilling: ['apple-cinnamon'],
    defaultFrosting: 'none'
  },
  {
    id: 'kasekuchen',
    name: 'Käsekuchen',
    description: 'Cremiger deutscher Käsekuchen mit frischen Beeren',
    category: 'cheesecake',
    defaultFilling: ['cream-cheese'],
    defaultFrosting: 'none'
  },
  {
    id: 'panna-cotta-torte',
    name: 'Panna Cotta Torte',
    description: 'Cremige italienische Panna Cotta auf zartem Biskuitboden mit frischen Beeren',
    category: 'cream',
    defaultFilling: ['vanilla-cream'],
    defaultFrosting: 'none'
  },
  {
    id: 'lotus-biscoff-cheesecake',
    name: 'Lotus Biscoff Cheesecake',
    description: 'Karamell-Käsekuchen mit Biscoff-Keksen und Streuseln',
    category: 'cheesecake',
    defaultFilling: ['caramel-cream'],
    defaultFrosting: 'none'
  },
  {
    id: 'einhorn-regenbogen-torte',
    name: 'Einhorn-Regenbogen-Torte',
    description: 'Bunte Kindertorte mit Einhorn, Regenbogen und Wolken',
    category: 'kids',
    defaultFilling: ['vanilla-cream'],
    defaultFrosting: 'fondant'
  },
  {
    id: 'schmetterlings-sahnetorte',
    name: 'Schmetterlings-Sahnetorte',
    description: 'Gelbe Buttercreme-Torte mit Schmetterlingen und rosa Blüten',
    category: 'elegant',
    defaultFilling: ['vanilla-cream'],
    defaultFrosting: 'buttercream'
  }
];

interface CakeConfig {
  selectedCake: string;
  size: string;
  layers: number;
  baseType: string;
  biscuitType: string;
  filling: string[];
  frosting: string;
  color: string;
  decoration: string[];
  occasion: string;
  message: string;
  delivery: string;
  deliveryDate: string;
  deliveryTime: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  specialRequests: string;
  glutenFree: boolean;
  lactoseFree: boolean;
  price: number;
}

const TortenConfigurator = () => {
  const isMobile = useIsMobile();
  const [config, setConfig] = useState<CakeConfig>({
    selectedCake: '',
    size: '',
    layers: 1,
    baseType: '',
    biscuitType: '',
    filling: [],
    frosting: '',
    color: '',
    decoration: [],
    occasion: '',
    message: '',
    delivery: '',
    deliveryDate: '',
    deliveryTime: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    customerAddress: '',
    specialRequests: '',
    glutenFree: false,
    lactoseFree: false
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Aktualisiere Konfiguration basierend auf ausgewählter Torte
  useEffect(() => {
    if (config.selectedCake) {
      const selectedCakeData = availableCakes.find(cake => cake.id === config.selectedCake);
      if (selectedCakeData) {
        setConfig(prev => ({
          ...prev,
          filling: selectedCakeData.defaultFilling,
          frosting: selectedCakeData.defaultFrosting
        }));
      }
    }
  }, [config.selectedCake]);

  useEffect(() => {
    setIsVisible(true);
  }, [config]);





  const steps = [
    { id: 0, title: 'Torte wählen', icon: Cake },
    { id: 1, title: 'Größe & Basis', icon: Layers },
    { id: 2, title: 'Geschmack', icon: Heart },
    { id: 3, title: 'Design', icon: Palette },
    { id: 4, title: 'Details', icon: Sparkles },
    { id: 5, title: 'Zusammenfassung', icon: Eye }
  ];

  const sizeOptions = [
    { id: 'small', name: 'Klein (15cm)', servings: '6-8 Personen' },
    { id: 'medium', name: 'Mittel (20cm)', servings: '10-12 Personen' },
    { id: 'large', name: 'Groß (25cm)', servings: '15-18 Personen' },
    { id: 'xl', name: 'Extra Groß (30cm)', servings: '20-25 Personen' },
    { id: 'custom', name: 'Individuell', servings: 'Nach Wunsch' }
  ];

  const baseTypes = [
    { id: 'vanilla', name: 'Vanille Biskuit', description: 'Klassisch und luftig' },
    { id: 'chocolate', name: 'Schokoladen Biskuit', description: 'Reich und saftig' },
    { id: 'red-velvet', name: 'Red Velvet', description: 'Samtig mit Kakao' },
    { id: 'lemon', name: 'Zitronen Biskuit', description: 'Frisch und leicht' },
    { id: 'carrot', name: 'Karotten Biskuit', description: 'Würzig und feucht' },
    { id: 'funfetti', name: 'Funfetti', description: 'Bunt und festlich' }
  ];

  const fillingOptions = [
    { id: 'vanilla-cream', name: 'Vanille Creme', allergens: ['Milch', 'Eier'] },
    { id: 'chocolate-ganache', name: 'Schokoladen Ganache', allergens: ['Milch'] },
    { id: 'strawberry', name: 'Erdbeere', allergens: [] },
    { id: 'raspberry', name: 'Himbeere', allergens: [] },
    { id: 'lemon-curd', name: 'Lemon Curd', allergens: ['Eier'] },
    { id: 'mascarpone', name: 'Mascarpone Creme', allergens: ['Milch'] },
    { id: 'nutella', name: 'Nutella', allergens: ['Nüsse', 'Milch'] },
    { id: 'caramel', name: 'Karamell', allergens: ['Milch'] }
  ];

  const frostingOptions = [
    { id: 'buttercream', name: 'Buttercreme', description: 'Klassisch cremig' },
    { id: 'buttercream-premium', name: 'Premium Buttercreme', description: 'Extra cremig' },
    { id: 'cream-cheese', name: 'Frischkäse Frosting', description: 'Leicht säuerlich' },
    { id: 'fondant', name: 'Fondant', description: 'Glatt und elegant' },
    { id: 'ganache', name: 'Ganache', description: 'Schokoladig glänzend' },
    { id: 'naked', name: 'Naked Style', description: 'Minimalistisch' }
  ];

  const decorationOptions = [
    { id: 'fresh-flowers', name: 'Frische Blumen' },
    { id: 'sugar-flowers', name: 'Zucker Blumen' },
    { id: 'macarons', name: 'Macarons' },
    { id: 'berries', name: 'Frische Beeren' },
    { id: 'chocolate-drip', name: 'Schokoladen Drip' },
    { id: 'gold-leaf', name: 'Blattgold' },
    { id: 'pearls', name: 'Zucker Perlen' },
    { id: 'sprinkles', name: 'Streusel' }
  ];

  const colorOptions = [
    { id: 'pink', name: 'Rosa', hex: '#FFB6C1' },
    { id: 'blue', name: 'Blau', hex: '#87CEEB' },
    { id: 'purple', name: 'Lila', hex: '#DDA0DD' },
    { id: 'green', name: 'Grün', hex: '#98FB98' },
    { id: 'yellow', name: 'Gelb', hex: '#FFFFE0' },
    { id: 'orange', name: 'Orange', hex: '#FFE4B5' },
    { id: 'red', name: 'Rot', hex: '#FFB6C1' },
    { id: 'white', name: 'Weiß', hex: '#FFFFFF' }
  ];

  const occasionOptions = [
    'Geburtstag', 'Hochzeit', 'Taufe', 'Kommunion', 'Konfirmation', 
    'Jubiläum', 'Valentinstag', 'Muttertag', 'Weihnachten', 'Ostern', 'Sonstiges'
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Wählen Sie eine Torte aus unserer Galerie</h3>
              {isMobile ? (
                <div className="space-y-4">
                  <Select onValueChange={(value) => setConfig(prev => ({ ...prev, selectedCake: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Torte auswählen" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableCakes.map((cake) => (
                        <SelectItem key={cake.id} value={cake.id}>
                          <span>{cake.name}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {config.selectedCake && (
                    <Card className="bg-pink-50 border-pink-200">
                      <CardContent className="p-3">
                        <h4 className="font-semibold">{availableCakes.find(c => c.id === config.selectedCake)?.name}</h4>
                        <p className="text-sm text-muted-foreground">{availableCakes.find(c => c.id === config.selectedCake)?.description}</p>
                        <div className="flex justify-center items-center mt-2">
                          <Badge variant="outline">{availableCakes.find(c => c.id === config.selectedCake)?.category}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {availableCakes.map((cake) => (
                    <Card 
                      key={cake.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                        config.selectedCake === cake.id ? 'ring-2 ring-pink-500 bg-pink-50' : ''
                      }`}
                      onClick={() => setConfig(prev => ({ ...prev, selectedCake: cake.id }))}
                    >
                      <CardContent className="p-4">
                        <h4 className="font-semibold">{cake.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{cake.description}</p>
                        <div className="flex justify-center items-center">
                          <Badge variant="outline">{cake.category}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Tortengröße wählen</h3>
              {isMobile ? (
                <div className="space-y-4">
                  <Select onValueChange={(value) => setConfig(prev => ({ ...prev, size: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Größe auswählen" />
                    </SelectTrigger>
                    <SelectContent>
                      {sizeOptions.map((size) => (
                        <SelectItem key={size.id} value={size.id}>
                          <div className="flex justify-between items-center w-full">
                            <div>
                              <span className="font-medium">{size.name}</span>
                              <span className="text-sm text-muted-foreground ml-2">({size.servings})</span>
                            </div>

                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {config.size && (
                    <Card className="bg-pink-50 border-pink-200">
                      <CardContent className="p-3 text-center">
                        <h4 className="font-semibold">{sizeOptions.find(s => s.id === config.size)?.name}</h4>
                        <p className="text-sm text-muted-foreground">{sizeOptions.find(s => s.id === config.size)?.servings}</p>

                      </CardContent>
                    </Card>
                  )}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sizeOptions.map((size) => (
                    <Card 
                      key={size.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                        config.size === size.id ? 'ring-2 ring-pink-500 bg-pink-50' : ''
                      }`}
                      onClick={() => setConfig(prev => ({ ...prev, size: size.id }))}
                    >
                      <CardContent className="p-4 text-center">
                        <h4 className="font-semibold">{size.name}</h4>
                        <p className="text-sm text-muted-foreground">{size.servings}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Anzahl Schichten</h3>
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setConfig(prev => ({ ...prev, layers: Math.max(1, prev.layers - 1) }))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-2xl font-bold w-12 text-center">{config.layers}</span>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setConfig(prev => ({ ...prev, layers: Math.min(5, prev.layers + 1) }))}
                >
                  <Plus className="h-4 w-4" />
                </Button>

              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Biskuit Basis</h3>
              {isMobile ? (
                <div className="space-y-4">
                  <Select onValueChange={(value) => setConfig(prev => ({ ...prev, baseType: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Biskuit Basis auswählen" />
                    </SelectTrigger>
                    <SelectContent>
                      {baseTypes.map((base) => (
                        <SelectItem key={base.id} value={base.id}>
                          {base.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {config.baseType && (
                    <Card className="bg-pink-50 border-pink-200">
                      <CardContent className="p-3">
                        <h4 className="font-semibold">{baseTypes.find(b => b.id === config.baseType)?.name}</h4>
                        <p className="text-sm text-muted-foreground">{baseTypes.find(b => b.id === config.baseType)?.description}</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-4">
                  {baseTypes.map((base) => (
                    <Card 
                      key={base.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                        config.baseType === base.id ? 'ring-2 ring-pink-500 bg-pink-50' : ''
                      }`}
                      onClick={() => setConfig(prev => ({ ...prev, baseType: base.id }))}
                    >
                      <CardContent className="p-4">
                        <h4 className="font-semibold">{base.name}</h4>
                        <p className="text-sm text-muted-foreground">{base.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Füllungen wählen (mehrere möglich)</h3>
              {isMobile ? (
                <div className="space-y-4">
                  <div className="space-y-3">
                    {fillingOptions.map((filling) => (
                      <div key={filling.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={`filling-${filling.id}`}
                          checked={config.filling.includes(filling.id)}
                          onCheckedChange={(checked) => {
                            setConfig(prev => ({
                              ...prev,
                              filling: checked
                                ? [...prev.filling, filling.id]
                                : prev.filling.filter(id => id !== filling.id)
                            }));
                          }}
                        />
                        <label 
                          htmlFor={`filling-${filling.id}`}
                          className="flex-1 cursor-pointer"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="font-medium">{filling.name}</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {filling.allergens.map((allergen) => (
                                  <Badge key={allergen} variant="destructive" className="text-xs">
                                    {allergen}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                  {config.filling.length > 0 && (
                    <Card>
                      <CardContent className="p-3">
                        <h4 className="font-medium mb-2">Ausgewählte Füllungen:</h4>
                        <div className="space-y-1">
                          {config.filling.map(fillingId => {
                            const filling = fillingOptions.find(f => f.id === fillingId);
                            return filling ? (
                              <div key={fillingId} className="text-sm">
                                {filling.name}
                              </div>
                            ) : null;
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  {fillingOptions.map((filling) => (
                    <Card 
                      key={filling.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                        config.filling.includes(filling.id) ? 'ring-2 ring-pink-500 bg-pink-50' : ''
                      }`}
                      onClick={() => {
                        setConfig(prev => ({
                          ...prev,
                          filling: prev.filling.includes(filling.id)
                            ? prev.filling.filter(f => f !== filling.id)
                            : [...prev.filling, filling.id]
                        }));
                      }}
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{filling.name}</h4>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {filling.allergens.map((allergen) => (
                                <Badge key={allergen} variant="destructive" className="text-xs">
                                  {allergen}
                                </Badge>
                              ))}
                            </div>
                          </div>

                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Frosting/Überzug</h3>
              {isMobile ? (
                <div className="space-y-4">
                  <Select value={config.frosting} onValueChange={(value) => setConfig(prev => ({ ...prev, frosting: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Frosting auswählen" />
                    </SelectTrigger>
                    <SelectContent>
                      {frostingOptions.map((frosting) => (
                        <SelectItem key={frosting.id} value={frosting.id}>
                          {frosting.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {config.frosting && (
                    <Card>
                      <CardContent className="p-3">
                        {(() => {
                          const selectedFrosting = frostingOptions.find(f => f.id === config.frosting);
                          return selectedFrosting ? (
                            <div>
                              <h4 className="font-medium">{selectedFrosting.name}</h4>
                              <p className="text-sm text-muted-foreground">{selectedFrosting.description}</p>
                            </div>
                          ) : null;
                        })()}
                      </CardContent>
                    </Card>
                  )}
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  {frostingOptions.map((frosting) => (
                    <Card 
                      key={frosting.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                        config.frosting === frosting.id ? 'ring-2 ring-pink-500 bg-pink-50' : ''
                      }`}
                      onClick={() => setConfig(prev => ({ ...prev, frosting: frosting.id }))}
                    >
                      <CardContent className="p-4">
                        <h4 className="font-semibold">{frosting.name}</h4>
                        <p className="text-sm text-muted-foreground">{frosting.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Farbe wählen</h3>
              {isMobile ? (
                <div className="space-y-4">
                  <Select value={config.color} onValueChange={(value) => setConfig(prev => ({ ...prev, color: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Farbe auswählen" />
                    </SelectTrigger>
                    <SelectContent>
                      {colorOptions.map((color) => (
                        <SelectItem key={color.id} value={color.id}>
                          {color.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {config.color && (
                    <Card>
                      <CardContent className="p-3">
                        {(() => {
                          const selectedColor = colorOptions.find(c => c.id === config.color);
                          return selectedColor ? (
                            <div className="flex items-center space-x-3">
                              <div
                                className="w-8 h-8 rounded-lg border-2 border-gray-300"
                                style={{ backgroundColor: selectedColor.hex }}
                              />
                              <span className="font-medium">{selectedColor.name}</span>
                            </div>
                          ) : null;
                        })()}
                      </CardContent>
                    </Card>
                  )}
                </div>
              ) : (
                <div className="grid gap-3 grid-cols-4 md:grid-cols-8">
                  {colorOptions.map((color) => (
                    <div
                      key={color.id}
                      className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-200 ${
                        config.color === color.id ? 'border-pink-500 scale-110' : 'border-gray-200'
                      }`}
                      onClick={() => {
                        setConfig(prev => ({
                          ...prev,
                          color: color.id
                        }));
                      }}
                    >
                      <div 
                        className="w-full h-8 rounded mb-2"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <p className="text-xs text-center">{color.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Dekorationen (mehrere möglich)</h3>
              {isMobile ? (
                <div className="space-y-4">
                  <div className="space-y-3">
                    {decorationOptions.map((decoration) => (
                      <div key={decoration.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={`decoration-${decoration.id}`}
                          checked={config.decoration.includes(decoration.id)}
                          onCheckedChange={(checked) => {
                            setConfig(prev => ({
                              ...prev,
                              decoration: checked
                                ? [...prev.decoration, decoration.id]
                                : prev.decoration.filter(id => id !== decoration.id)
                            }));
                          }}
                        />
                        <label 
                          htmlFor={`decoration-${decoration.id}`}
                          className="flex-1 cursor-pointer"
                        >
                          <span className="font-medium">{decoration.name}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                  {config.decoration.length > 0 && (
                    <Card>
                      <CardContent className="p-3">
                        <h4 className="font-medium mb-2">Ausgewählte Dekorationen:</h4>
                        <div className="space-y-1">
                          {config.decoration.map(decorationId => {
                            const decoration = decorationOptions.find(d => d.id === decorationId);
                            return decoration ? (
                              <div key={decorationId} className="text-sm">
                                {decoration.name}
                              </div>
                            ) : null;
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {decorationOptions.map((decoration) => (
                    <Card 
                      key={decoration.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                        config.decoration.includes(decoration.id) ? 'ring-2 ring-pink-500 bg-pink-50' : ''
                      }`}
                      onClick={() => {
                        setConfig(prev => ({
                          ...prev,
                          decoration: prev.decoration.includes(decoration.id)
                            ? prev.decoration.filter(d => d !== decoration.id)
                            : [...prev.decoration, decoration.id]
                        }));
                      }}
                    >
                      <CardContent className="p-4 text-center">
                        <h4 className="font-semibold">{decoration.name}</h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Besondere Anforderungen</h3>
              {isMobile ? (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="gluten-free"
                        checked={config.glutenFree}
                        onCheckedChange={(checked) => {
                          setConfig(prev => ({
                            ...prev,
                            glutenFree: checked
                          }));
                        }}
                      />
                      <label 
                        htmlFor="gluten-free"
                        className="flex-1 cursor-pointer"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-medium">Glutenfrei</span>
                            <p className="text-sm text-muted-foreground">Torte ohne Gluten</p>
                          </div>

                        </div>
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="lactose-free"
                        checked={config.lactoseFree}
                        onCheckedChange={(checked) => {
                          setConfig(prev => ({
                            ...prev,
                            lactoseFree: checked
                          }));
                        }}
                      />
                      <label 
                        htmlFor="lactose-free"
                        className="flex-1 cursor-pointer"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-medium">Laktosefrei</span>
                            <p className="text-sm text-muted-foreground">Torte ohne Laktose</p>
                          </div>

                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  <Card 
                    className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                      config.glutenFree ? 'ring-2 ring-green-500 bg-green-50' : ''
                    }`}
                    onClick={() => {
                      setConfig(prev => ({
                        ...prev,
                        glutenFree: !prev.glutenFree
                      }));
                    }}
                  >
                    <CardContent className="p-4 text-center">
                      <h4 className="font-semibold">Glutenfrei</h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        Torte ohne Gluten
                      </p>
                      <Badge variant={config.glutenFree ? "default" : "secondary"} className="mt-2">
                        {config.glutenFree ? "Ausgewählt" : "Verfügbar"}
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card 
                    className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                      config.lactoseFree ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                    }`}
                    onClick={() => {
                      setConfig(prev => ({
                        ...prev,
                        lactoseFree: !prev.lactoseFree
                      }));
                    }}
                  >
                    <CardContent className="p-4 text-center">
                      <h4 className="font-semibold">Laktosefrei</h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        Torte ohne Laktose
                      </p>
                      <Badge variant={config.lactoseFree ? "default" : "secondary"} className="mt-2">
                        {config.lactoseFree ? "Ausgewählt" : "Verfügbar"}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="occasion">Anlass</Label>
              <Select onValueChange={(value) => setConfig(prev => ({ ...prev, occasion: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Anlass wählen" />
                </SelectTrigger>
                <SelectContent>
                  {occasionOptions.map((occasion) => (
                    <SelectItem key={occasion} value={occasion}>{occasion}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message">Persönliche Nachricht auf der Torte</Label>
              <Input
                id="message"
                placeholder="z.B. Alles Gute zum Geburtstag!"
                value={config.message}
                onChange={(e) => setConfig(prev => ({ ...prev, message: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="delivery">Lieferung/Abholung</Label>
              <RadioGroup 
                value={config.delivery} 
                onValueChange={(value) => setConfig(prev => ({ ...prev, delivery: value }))}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pickup" id="pickup" />
                  <Label htmlFor="pickup">Abholung im Geschäft (kostenlos)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="delivery" id="delivery" />
                  <Label htmlFor="delivery">Lieferung</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="deliveryDate">Gewünschtes Lieferdatum</Label>
              <Input
                id="deliveryDate"
                type="date"
                value={config.deliveryDate}
                onChange={(e) => setConfig(prev => ({ ...prev, deliveryDate: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="deliveryTime">Gewünschte Lieferzeit</Label>
              <Select onValueChange={(value) => setConfig(prev => ({ ...prev, deliveryTime: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Uhrzeit wählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="09:00">09:00</SelectItem>
                  <SelectItem value="10:00">10:00</SelectItem>
                  <SelectItem value="11:00">11:00</SelectItem>
                  <SelectItem value="12:00">12:00</SelectItem>
                  <SelectItem value="13:00">13:00</SelectItem>
                  <SelectItem value="14:00">14:00</SelectItem>
                  <SelectItem value="15:00">15:00</SelectItem>
                  <SelectItem value="16:00">16:00</SelectItem>
                  <SelectItem value="17:00">17:00</SelectItem>
                  <SelectItem value="18:00">18:00</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Besondere Wünsche/Anmerkungen</Label>
              <Textarea 
                placeholder="Teilen Sie uns Ihre besonderen Wünsche mit..."
                className="mt-2"
                value={config.specialRequests}
                onChange={(e) => setConfig(prev => ({ ...prev, specialRequests: e.target.value }))}
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Ihre Torte im Überblick
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
                  <div>
                    <h4 className="font-semibold mb-2">Ausgewählte Torte</h4>
                    <p className="font-medium text-pink-600">{availableCakes.find(cake => cake.id === config.selectedCake)?.name || 'Keine Torte ausgewählt'}</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {availableCakes.find(cake => cake.id === config.selectedCake)?.description}
                    </p>
                    
                    <h4 className="font-semibold mb-2">Basis</h4>
                    <p>Größe: {sizeOptions.find(s => s.id === config.size)?.name}</p>
                    <p>Schichten: {config.layers}</p>
                    <p>Biskuit: {baseTypes.find(b => b.id === config.baseType)?.name}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Geschmack</h4>
                    <p>Füllungen: {config.filling.map(f => fillingOptions.find(fo => fo.id === f)?.name).join(', ') || 'Keine'}</p>
                    <p>Glasur: {frostingOptions.find(f => f.id === config.frosting)?.name}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Design</h4>
                    <p>Farbe: <span className="inline-block w-4 h-4 rounded ml-2" style={{backgroundColor: colorOptions.find(c => c.id === config.color)?.hex}}></span> {colorOptions.find(c => c.id === config.color)?.name}</p>
                    <p>Dekorationen: {config.decoration.map(d => decorationOptions.find(deco => deco.id === d)?.name).join(', ') || 'Keine'}</p>
                    {(config.glutenFree || config.lactoseFree) && (
                      <p>Besondere Anforderungen: {[
                        config.glutenFree ? 'Glutenfrei' : '',
                        config.lactoseFree ? 'Laktosefrei' : ''
                      ].filter(Boolean).join(', ')}</p>
                    )}
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Details</h4>
                    <p>Anlass: {config.occasion}</p>
                    <p>Nachricht: {config.message || 'Keine'}</p>
                    <p>Lieferung: {config.delivery === 'pickup' ? 'Abholung' : 'Lieferung'}</p>
                    {config.deliveryDate && <p>Datum: {config.deliveryDate}</p>}
                    {config.deliveryTime && <p>Uhrzeit: {config.deliveryTime}</p>}
                    {config.specialRequests && <p>Besondere Wünsche: {config.specialRequests}</p>}
                  </div>
                </div>
                
                <Separator />
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Der finale Preis wird bei der Bestellung bestätigt.
                  </p>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Kontaktinformationen</h4>
                  <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
                    <div>
                      <Label htmlFor="customerName">Name *</Label>
                      <Input
                        id="customerName"
                        placeholder="Ihr vollständiger Name"
                        value={config.customerName}
                        onChange={(e) => setConfig(prev => ({ ...prev, customerName: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="customerEmail">E-Mail *</Label>
                      <Input
                        id="customerEmail"
                        type="email"
                        placeholder="ihre.email@beispiel.de"
                        value={config.customerEmail}
                        onChange={(e) => setConfig(prev => ({ ...prev, customerEmail: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="customerPhone">Telefon *</Label>
                      <Input
                        id="customerPhone"
                        type="tel"
                        placeholder="+49 69 123 456789"
                        value={config.customerPhone}
                        onChange={(e) => setConfig(prev => ({ ...prev, customerPhone: e.target.value }))}
                        required
                      />
                    </div>
                    {config.delivery === 'delivery' && (
                      <div>
                        <Label htmlFor="customerAddress">Lieferadresse *</Label>
                        <Textarea
                          id="customerAddress"
                          placeholder="Straße, Hausnummer, PLZ, Ort"
                          value={config.customerAddress}
                          onChange={(e) => setConfig(prev => ({ ...prev, customerAddress: e.target.value }))}
                          required
                        />
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  const scrollToContact = () => {
    // Scroll zum Kontaktbereich oder zeige Erfolgsmeldung
    alert(`Vielen Dank für Ihre Bestellung, ${config.customerName}! 
    
Ihre Torte: ${availableCakes.find(cake => cake.id === config.selectedCake)?.name}
Lieferung: ${config.deliveryDate} um ${config.deliveryTime}
Lieferart: ${config.delivery === 'delivery' ? 'Lieferung' : 'Abholung'}

Wir werden uns in Kürze bei Ihnen melden, um die Details zu besprechen.`);
  };

  const isOrderValid = () => {
    return config.customerName && 
           config.customerEmail && 
           config.customerPhone && 
           config.deliveryDate &&
           config.deliveryTime &&
           (config.delivery !== 'delivery' || config.customerAddress);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 md:mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className={`font-bold text-foreground mb-4 ${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'}`}>
            Torten Konfigurator
          </h1>
          <p className={`text-muted-foreground max-w-2xl mx-auto ${isMobile ? 'text-base px-4' : 'text-lg'}`}>
            Gestalten Sie Ihre Traumtorte nach Ihren Wünschen. Jede Torte wird individuell für Sie gefertigt.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-6 md:mb-8">
            {isMobile ? (
              // Mobile: Horizontal scrollable steps
              <div className="flex overflow-x-auto pb-4 space-x-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex flex-col items-center min-w-[80px]">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentStep >= index 
                        ? 'bg-pink-500 text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      <step.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs mt-2 text-center leading-tight">{step.title}</span>
                  </div>
                ))}
              </div>
            ) : (
              // Desktop: Original layout
              <div className="flex justify-between items-center">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentStep >= index 
                        ? 'bg-pink-500 text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm mt-2 text-center">{step.title}</span>
                    {index < steps.length - 1 && (
                      <div className={`h-1 w-full mt-4 transition-all duration-300 ${
                        currentStep > index ? 'bg-pink-500' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Main Content */}
          <StarBorder 
            as="div" 
            color="rgb(236, 72, 153)" 
            speed="6s" 
            thickness={3}
            className="rounded-lg mb-6 md:mb-8"
          >
            <Card className="border-0">
              <CardContent className={`${isMobile ? 'p-4' : 'p-8'}`}>
                {renderStepContent()}
              </CardContent>
            </Card>
          </StarBorder>

          {/* Navigation & Price */}
          <div className={`${isMobile ? 'flex flex-col space-y-4' : 'flex justify-between items-center'}`}>
            <div className={`flex ${isMobile ? 'justify-between' : 'space-x-4'}`}>
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className={isMobile ? 'flex-1 mr-2' : ''}
              >
                Zurück
              </Button>
              
              {currentStep < steps.length - 1 ? (
                <Button 
                  onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                  disabled={
                    (currentStep === 0 && !config.selectedCake) ||
                    (currentStep === 1 && (!config.size || !config.baseType)) ||
                    (currentStep === 2 && !config.frosting) ||
                    (currentStep === 3 && !config.color) ||
                    (currentStep === 4 && !config.delivery)
                  }
                  className={isMobile ? 'flex-1 ml-2' : ''}
                >
                  Weiter
                </Button>
              ) : (
                <Button 
                  onClick={scrollToContact}
                  className={`bg-pink-500 hover:bg-pink-600 ${isMobile ? 'flex-1 ml-2' : ''}`}
                  disabled={!isOrderValid()}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {isMobile ? 'Bestellen' : 'Jetzt bestellen'}
                </Button>
              )}
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default TortenConfigurator;