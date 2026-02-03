import fruitsImg from "@/assets/categories/fruits.jpg";
import vegetablesImg from "@/assets/categories/vegetables.jpg";
import dairyImg from "@/assets/categories/dairy.jpg";
import meatImg from "@/assets/categories/meat.jpg";
import bakeryImg from "@/assets/categories/bakery.jpg";
import honeyImg from "@/assets/categories/honey.jpg";

const categories = [
  { name: "فواكه طازجة", image: fruitsImg, count: 134 },
  { name: "خضروات", image: vegetablesImg, count: 256 },
  { name: "منتجات الألبان", image: dairyImg, count: 89 },
  { name: "اللحوم", image: meatImg, count: 76 },
  { name: "المخبوزات", image: bakeryImg, count: 45 },
  { name: "العسل", image: honeyImg, count: 28 },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-background" dir="rtl">
      <div className="container">
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-semibold text-sm mb-2">الفئات</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            تصفح حسب الفئة
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعة واسعة من المنتجات العضوية الطازجة المصنفة لتسهيل تجربة التسوق
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#"
              className="group relative p-5 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-4 border-muted group-hover:border-primary/20 transition-colors duration-300 shadow-md">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-foreground text-center mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground text-center">
                  {category.count} منتج
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
