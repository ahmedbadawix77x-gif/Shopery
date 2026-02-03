import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "أحمد محمد",
    role: "عميل دائم",
    content: "أفضل متجر للمنتجات العضوية! الجودة ممتازة والتوصيل سريع. أنصح به بشدة لكل من يبحث عن منتجات صحية.",
    rating: 5,
    avatar: "👨",
  },
  {
    id: 2,
    name: "فاطمة علي",
    role: "أم وربة منزل",
    content: "منتجات طازجة وصحية لعائلتي. أحب التنوع الكبير في الخضروات والفواكه. الأسعار معقولة جداً.",
    rating: 5,
    avatar: "👩",
  },
  {
    id: 3,
    name: "محمود حسن",
    role: "طاهٍ محترف",
    content: "كطاهٍ، أحتاج لأفضل المكونات. Shopery يوفر لي منتجات عضوية عالية الجودة للمطعم.",
    rating: 5,
    avatar: "👨‍🍳",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-muted" dir="rtl">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            آراء حقيقية من عملائنا السعداء
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
