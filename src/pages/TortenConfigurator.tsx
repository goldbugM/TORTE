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
import { 
  ChefHat, 
  Cake, 
  Heart, 
  Star, 
  Users, 
  Calendar, 
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
    basePrice: 35,
    description: 'Saftige Schokoladentorte mit cremiger Füllung und dunklen Beeren',
    category: 'chocolate',
    defaultFilling: ['chocolate-cream'],
    defaultFrosting: 'chocolate'
  },
  {
    id: 'buttercreme-torte',
    name: 'Buttercreme Torte',
    basePrice: 32,
    description: 'Klassische Torte mit luftiger Buttercreme und zartem Biskuitboden',
    category: 'classic',
    defaultFilling: ['vanilla-cream'],
    defaultFrosting: 'buttercream'
  },
  {
    id: 'naked-torte',
    name: 'Naked Torte',
    basePrice: 38,
    description: 'Moderne Torte ohne Fondant mit sichtbaren Schichten und frischen Früchten',
    category: 'modern',
    defaultFilling: ['fresh-fruits'],
    defaultFrosting: 'cream-cheese'
  },
  {
    id: 'mascarpone-torte',
    name: 'Mascarpone-Frischkäse-Sahne Torte',
    basePrice: 36,
    description: 'Cremige Torte mit Mascarpone, Frischkäse und luftiger Sahne',
    category: 'cream',
    defaultFilling: ['mascarpone-cream'],
    defaultFrosting: 'cream-cheese'
  },
  {
    id: 'vintage-torte',
    name: 'Vintage Torte',
    basePrice: 45,
    description: 'Elegante Torte im Vintage-Stil mit klassischen Dekorationen',
    category: 'elegant',
    defaultFilling: ['vanilla-cream'],
    defaultFrosting: 'fondant'
  },
  {
    id: 'schoko-torte',
    name: 'Schoko Torte',
    basePrice: 34,
    description: 'Intensive Schokoladentorte für echte Schokoladenliebhaber',
    category: 'chocolate',
    defaultFilling: ['chocolate-cream'],
    defaultFrosting: 'chocolate'
  },
  {
    id: 'zitronen-tiramisu',
    name: 'Zitronen Tiramisu',
    basePrice: 30,
    description: 'Erfrischende Variation des klassischen Tiramisu mit Zitrone',
    category: 'fresh',
    defaultFilling: ['lemon-mascarpone'],
    defaultFrosting: 'mascarpone'
  },
  {
    id: 'wassermelonen-torte',
    name: 'Wassermelonen Torte',
    basePrice: 28,
    description: 'Gesunde Torte komplett aus frischen Früchten ohne Backen',
    category: 'healthy',
    defaultFilling: ['fresh-fruits'],
    defaultFrosting: 'whipped-cream'
  },
  {
    id: 'san-sebastian-cheesecake',
    name: 'San Sebastian Cheesecake',
    basePrice: 32,
    description: 'Baskischer Käsekuchen mit karamellisierter Oberfläche',
    category: 'cheesecake',
    defaultFilling: ['cream-cheese'],
    defaultFrosting: 'none'
  },
  {
    id: 'fruchtige-sahnetorte',
    name: 'Fruchtige Sahnetorte',
    basePrice: 32,
    description: 'Frische Beeren auf luftiger Sahne mit Biskuitboden',
    category: 'fruity',
    defaultFilling: ['fresh-fruits'],
    defaultFrosting: 'whipped-cream'
  },
  {
    id: 'hochzeitstorte',
    name: 'Hochzeitstorte',
    basePrice: 150,
    description: 'Elegante mehrstöckige Torte für Ihren besonderen Tag',
    category: 'wedding',
    defaultFilling: ['vanilla-cream'],
    defaultFrosting: 'fondant'
  },
  {
    id: 'schwarzwalder-kirschtorte',
    name: 'Schwarzwälder Kirschtorte',
    basePrice: 38,
    description: 'Klassische deutsche Torte mit Kirschen, Sahne und Schokolade',
    category: 'traditional',
    defaultFilling: ['cherry-cream'],
    defaultFrosting: 'whipped-cream'
  },
  {
    id: 'apfelstrudel',
    name: 'Apfelstrudel',
    basePrice: 18,
    description: 'Traditioneller Strudel mit Äpfeln, Zimt und Vanillesauce',
    category: 'traditional',
    defaultFilling: ['apple-cinnamon'],
    defaultFrosting: 'none'
  },
  {
    id: 'kasekuchen',
    name: 'Käsekuchen',
    basePrice: 28,
    description: 'Cremiger deutscher Käsekuchen mit frischen Beeren',
    category: 'cheesecake',
    defaultFilling: ['cream-cheese'],
    defaultFrosting: 'none'
  }
];

interface CakeConfig {
  selectedCake: string;
  size: string;
  servings: number;
  layers: number;
  baseType: string;
  filling: string[];
  frosting: string;
  decoration: string[];
  colors: string[];
  occasion: string;
  message: string;
  allergens: string[];
  delivery: string;
  price: number;
}

const TortenConfigurator = () => {
  const [config, setConfig] = useState<CakeConfig>({
    selectedCake: '',
    size: '',
    servings: 8,
    layers: 2,
    baseType: '',
    filling: [],
    frosting: '',
    decoration: [],
    colors: [],
    occasion: '',
    message: '',
    allergens: [],
    delivery: '',
    price: 0
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
    calculatePrice();
  }, [config]);

  const calculatePrice = () => {
    const selectedCakeData = availableCakes.find(cake => cake.id === config.selectedCake);
    let basePrice = selectedCakeData ? selectedCakeData.basePrice : 0;
    
    // Size pricing
    const sizePricing = {
      'small': 25,
      'medium': 45,
      'large': 65,
      'xl': 85,
      'custom': 100
    };
    
    basePrice += sizePricing[config.size as keyof typeof sizePricing] || 0;
    
    // Layer pricing
    basePrice += (config.layers - 1) * 15;
    
    // Filling pricing
    basePrice += config.filling.length * 8;
    
    // Decoration pricing
    basePrice += config.decoration.length * 12;
    
    // Premium frosting
    if (['buttercream-premium', 'fondant', 'ganache'].includes(config.frosting)) {
      basePrice += 20;
    }
    
    setConfig(prev => ({ ...prev, price: basePrice }));
  };

  const steps = [
    { id: 0, title: 'Torte wählen', icon: Cake },
    { id: 1, title: 'Größe & Basis', icon: Layers },
    { id: 2, title: 'Geschmack', icon: Heart },
    { id: 3, title: 'Design', icon: Palette },
    { id: 4, title: 'Details', icon: Sparkles },
    { id: 5, title: 'Zusammenfassung', icon: Eye }
  ];

  const sizeOptions = [
    { id: 'small', name: 'Klein (15cm)', servings: '6-8 Personen', price: '+25€' },
    { id: 'medium', name: 'Mittel (20cm)', servings: '10-12 Personen', price: '+45€' },
    { id: 'large', name: 'Groß (25cm)', servings: '15-18 Personen', price: '+65€' },
    { id: 'xl', name: 'Extra Groß (30cm)', servings: '20-25 Personen', price: '+85€' },
    { id: 'custom', name: 'Individuell', servings: 'Nach Wunsch', price: 'Auf Anfrage' }
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
    { id: 'buttercream-premium', name: 'Premium Buttercreme', description: 'Extra cremig (+20€)' },
    { id: 'cream-cheese', name: 'Frischkäse Frosting', description: 'Leicht säuerlich' },
    { id: 'fondant', name: 'Fondant', description: 'Glatt und elegant (+20€)' },
    { id: 'ganache', name: 'Ganache', description: 'Schokoladig glänzend (+20€)' },
    { id: 'naked', name: 'Naked Style', description: 'Minimalistisch' }
  ];

  const decorationOptions = [
    { id: 'fresh-flowers', name: 'Frische Blumen', price: '+15€' },
    { id: 'sugar-flowers', name: 'Zucker Blumen', price: '+25€' },
    { id: 'macarons', name: 'Macarons', price: '+20€' },
    { id: 'berries', name: 'Frische Beeren', price: '+12€' },
    { id: 'chocolate-drip', name: 'Schokoladen Drip', price: '+18€' },
    { id: 'gold-leaf', name: 'Blattgold', price: '+30€' },
    { id: 'pearls', name: 'Zucker Perlen', price: '+10€' },
    { id: 'sprinkles', name: 'Streusel', price: '+5€' }
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
                      <div className="flex justify-between items-center">
                        <Badge variant="outline">{cake.category}</Badge>
                        <span className="font-bold text-pink-600">ab {cake.basePrice}€</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Tortengröße wählen</h3>
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
                      <Badge variant="secondary" className="mt-2">{size.price}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
                <span className="text-sm text-muted-foreground">
                  (+{(config.layers - 1) * 15}€ für zusätzliche Schichten)
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Biskuit Basis</h3>
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
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Füllungen wählen (mehrere möglich)</h3>
              <div className="grid md:grid-cols-2 gap-4">
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
                        <Badge variant="secondary">+8€</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Frosting/Überzug</h3>
              <div className="grid md:grid-cols-2 gap-4">
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
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Farben wählen</h3>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                {colorOptions.map((color) => (
                  <div
                    key={color.id}
                    className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-200 ${
                      config.colors.includes(color.id) ? 'border-pink-500 scale-110' : 'border-gray-200'
                    }`}
                    onClick={() => {
                      setConfig(prev => ({
                        ...prev,
                        colors: prev.colors.includes(color.id)
                          ? prev.colors.filter(c => c !== color.id)
                          : [...prev.colors, color.id]
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
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Dekorationen (mehrere möglich)</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                      <Badge variant="secondary" className="mt-2">{decoration.price}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
                  <Label htmlFor="delivery">Lieferung (+15€)</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>Besondere Wünsche/Anmerkungen</Label>
              <Textarea 
                placeholder="Teilen Sie uns Ihre besonderen Wünsche mit..."
                className="mt-2"
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
                <div className="grid md:grid-cols-2 gap-6">
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
                    <p>Frosting: {frostingOptions.find(f => f.id === config.frosting)?.name}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Design</h4>
                    <p>Farben: {config.colors.map(c => colorOptions.find(co => co.id === c)?.name).join(', ') || 'Keine'}</p>
                    <p>Dekorationen: {config.decoration.map(d => decorationOptions.find(deco => deco.id === d)?.name).join(', ') || 'Keine'}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Details</h4>
                    <p>Anlass: {config.occasion || 'Nicht angegeben'}</p>
                    <p>Nachricht: {config.message || 'Keine'}</p>
                    <p>Lieferung: {config.delivery === 'pickup' ? 'Abholung' : 'Lieferung'}</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">
                    {config.price}€ {config.delivery === 'delivery' ? '+ 15€ Lieferung' : ''}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Alle Preise sind Richtwerte. Der finale Preis wird bei der Bestellung bestätigt.
                  </p>
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
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Torten Konfigurator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gestalten Sie Ihre Traumtorte nach Ihren Wünschen. Jede Torte wird individuell für Sie gefertigt.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
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
          </div>

          {/* Main Content */}
          <Card className="mb-8">
            <CardContent className="p-8">
              {renderStepContent()}
            </CardContent>
          </Card>

          {/* Navigation & Price */}
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
              >
                Zurück
              </Button>
              
              {currentStep < steps.length - 1 ? (
                <Button 
                  onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                  disabled={
                    (currentStep === 0 && !config.selectedCake) ||
                    (currentStep === 1 && (!config.size || !config.baseType)) ||
                    (currentStep === 2 && !config.frosting)
                  }
                >
                  Weiter
                </Button>
              ) : (
                <Button 
                  onClick={scrollToContact}
                  className="bg-pink-500 hover:bg-pink-600"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Jetzt bestellen
                </Button>
              )}
            </div>

            <div className="text-right">
              <div className="text-2xl font-bold text-pink-600">
                {config.price}€
              </div>
              <p className="text-sm text-muted-foreground">
                {config.delivery === 'delivery' && '+ 15€ Lieferung'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TortenConfigurator;