import { Truck, Shield, Headphones, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "توصيل مجاني",
    description: "توصيل مجاني للطلبات فوق 200 جنيه",
    color: "bg-success-light text-success",
  },
  {
    icon: Shield,
    title: "جودة مضمونة",
    description: "جميع منتجاتنا عضوية 100%",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Headphones,
    title: "دعم 24/7",
    description: "فريق دعم متاح على مدار الساعة",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: RefreshCw,
    title: "إرجاع سهل",
    description: "إمكانية الإرجاع خلال 7 أيام",
    color: "bg-warning-light text-warning",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-background" dir="rtl">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-full ${feature.color} flex items-center justify-center flex-shrink-0`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
