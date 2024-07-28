import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Tech Innovators Inc.",
    testimonial: "CaterEase has transformed our company events. The food is always delicious and the service is impeccable."
  },
  {
    name: "Michael Chen",
    company: "Global Solutions LLC",
    testimonial: "We've been using CaterEase for all our client meetings. The variety and quality of food always impress our guests."
  },
  {
    name: "Emily Rodriguez",
    company: "Creative Minds Agency",
    testimonial: "The customization options and attention to dietary requirements sets CaterEase apart. Highly recommended!"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <img src="/placeholder.svg" alt={testimonial.name} className="w-20 h-20 rounded-full mb-4" />
                    <p className="italic mb-4">"{testimonial.testimonial}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;