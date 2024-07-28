import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const featuredItems = [
  {
    name: "Gourmet Sandwich Platter",
    description: "Assorted premium sandwiches with fresh ingredients",
    price: "$12.99 per person",
    image: "/placeholder.svg"
  },
  {
    name: "Mediterranean Mezze",
    description: "A selection of Middle Eastern appetizers and dips",
    price: "$15.99 per person",
    image: "/placeholder.svg"
  },
  {
    name: "Asian Fusion Bowl",
    description: "Customizable rice or noodle bowls with various toppings",
    price: "$14.99 per person",
    image: "/placeholder.svg"
  }
];

const MenuSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Menu Items</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
                <p className="font-semibold mt-2">{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;