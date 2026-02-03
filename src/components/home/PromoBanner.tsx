import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import vegetablesImg from "@/assets/categories/vegetables.jpg";
import fruitsImg from "@/assets/categories/fruits.jpg";

const PromoBanner = () => {
  return (
    <section className="py-20 bg-background" dir="rtl">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Banner 1 */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-l from-success-light via-green-50 to-green-100 p-8 lg:p-12 min-h-[320px] group">
            <div className="relative z-10 max-w-sm">
              <span className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4 shadow-lg">
                خصم 30%
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
                خضروات طازجة
                <br />
                من المزرعة
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                استمتع بأفضل الخضروات العضوية الطازجة بخصم خاص
              </p>
              <Button variant="hero" className="shadow-xl">
                تسوق الآن
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 w-48 h-48 lg:w-64 lg:h-64 opacity-20 group-hover:opacity-30 transition-opacity">
              <img src={vegetablesImg} alt="" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          </div>

          {/* Banner 2 */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-l from-warning-light via-orange-50 to-orange-100 p-8 lg:p-12 min-h-[320px] group">
            <div className="relative z-10 max-w-sm">
              <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4 shadow-lg">
                عرض خاص
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
                فواكه موسمية
                <br />
                طازجة يومياً
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                فواكه طازجة من أفضل المزارع المحلية
              </p>
              <Button variant="accent" className="rounded-full px-8 shadow-xl">
                اكتشف المزيد
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 w-48 h-48 lg:w-64 lg:h-64 opacity-20 group-hover:opacity-30 transition-opacity">
              <img src={fruitsImg} alt="" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
