import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden hero-gradient" dir="rtl">
      <div className="container py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
              خصم يصل إلى 50%
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              منتجات عضوية
              <br />
              <span className="text-primary">طازجة وصحية</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              استمتع بأفضل المنتجات العضوية الطازجة من المزارع المحلية مباشرة إلى بابك. جودة مضمونة وأسعار منافسة.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop">
                <Button variant="hero" size="xl">
                  تسوق الآن
                  <ArrowLeft className="h-5 w-5 mr-2" />
                </Button>
              </Link>
              <Link to="/shop">
                <Button variant="outline-primary" size="xl">
                  تصفح العروض
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">10K+</div>
                <div className="text-muted-foreground text-sm">منتج متوفر</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">50K+</div>
                <div className="text-muted-foreground text-sm">عميل سعيد</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="text-muted-foreground text-sm">عضوي طبيعي</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="relative z-10 animate-float">
              <img
                src={heroBanner}
                alt="Fresh organic vegetables"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse-soft" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse-soft delay-1000" />
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" />
    </section>
  );
};

export default HeroSection;
