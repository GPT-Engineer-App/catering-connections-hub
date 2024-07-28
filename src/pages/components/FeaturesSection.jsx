import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Clock, Truck, Edit } from "lucide-react";

const features = [
  {
    icon: <Utensils className="h-8 w-8 text-purple-600" />,
    title: "Wide Variety of Menus",
    description: "Choose from a diverse range of cuisines to suit any event."
  },
  {
    icon: <Clock className="h-8 w-8 text-purple-600" />,
    title: "Easy Ordering Process",
    description: "Simple and quick online ordering system for your convenience."
  },
  {
    icon: <Truck className="h-8 w-8 text-purple-600" />,
    title: "Timely Delivery",
    description: "Punctual delivery to ensure your event runs smoothly."
  },
  {
    icon: <Edit className="h-8 w-8 text-purple-600" />,
    title: "Customizable Orders",
    description: "Tailor your order to meet specific dietary requirements and preferences."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto bg-purple-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;