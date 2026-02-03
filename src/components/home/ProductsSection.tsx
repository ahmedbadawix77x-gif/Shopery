import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import appleImg from "@/assets/products/apple.jpg";
import broccoliImg from "@/assets/products/broccoli.jpg";
import milkImg from "@/assets/products/milk.jpg";
import breadImg from "@/assets/products/bread.jpg";
import honeyImg from "@/assets/products/honey.jpg";
import tomatoImg from "@/assets/products/tomato.jpg";
import carrotImg from "@/assets/products/carrot.jpg";
import lemonImg from "@/assets/products/lemon.jpg";

const products = [
  {
    id: 1,
    name: "تفاح أحمر عضوي",
    price: 45,
    originalPrice: 60,
    rating: 4.8,
    reviews: 124,
    image: appleImg,
    badge: "خصم 25%",
    badgeColor: "bg-destructive",
  },
  {
    id: 2,
    name: "بروكلي طازج",
    price: 25,
    originalPrice: null,
    rating: 4.6,
    reviews: 89,
    image: broccoliImg,
    badge: null,
    badgeColor: null,
  },
  {
    id: 3,
    name: "حليب عضوي كامل",
    price: 35,
    originalPrice: null,
    rating: 4.9,
    reviews: 256,
    image: milkImg,
    badge: "الأكثر مبيعاً",
    badgeColor: "bg-primary",
  },
  {
    id: 4,
    name: "خبز القمح الكامل",
    price: 20,
    originalPrice: 28,
    rating: 4.7,
    reviews: 67,
    image: breadImg,
    badge: "خصم",
    badgeColor: "bg-destructive",
  },
  {
    id: 5,
    name: "عسل طبيعي",
    price: 85,
    originalPrice: null,
    rating: 5.0,
    reviews: 312,
    image: honeyImg,
    badge: "مميز",
    badgeColor: "bg-accent",
  },
  {
    id: 6,
    name: "طماطم كرزية",
    price: 30,
    originalPrice: 40,
    rating: 4.5,
    reviews: 98,
    image: tomatoImg,
    badge: "خصم",
    badgeColor: "bg-destructive",
  },
  {
    id: 7,
    name: "جزر عضوي",
    price: 15,
    originalPrice: null,
    rating: 4.4,
    reviews: 45,
    image: carrotImg,
    badge: null,
    badgeColor: null,
  },
  {
    id: 8,
    name: "ليمون طازج",
    price: 22,
    originalPrice: null,
    rating: 4.6,
    reviews: 78,
    image: lemonImg,
    badge: "جديد",
    badgeColor: "bg-primary",
  },
];

const ProductsSection = () => {
  return (
    <section className="py-20 bg-muted/50" dir="rtl">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block text-primary font-semibold text-sm mb-2">منتجاتنا</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              المنتجات المميزة
            </h2>
            <p className="text-muted-foreground max-w-md">
              اختيارنا من أفضل المنتجات العضوية الطازجة من المزارع المحلية
            </p>
          </div>
          <Button variant="outline-primary" className="self-start md:self-auto">
            عرض جميع المنتجات
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {product.badge && (
                  <Badge className={`absolute top-3 right-3 ${product.badgeColor} text-primary-foreground shadow-lg`}>
                    {product.badge}
                  </Badge>
                )}
                
                {/* Quick Actions Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                <div className="absolute top-3 left-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <Button variant="secondary" size="icon" className="h-9 w-9 rounded-full shadow-lg bg-white hover:bg-primary hover:text-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="icon" className="h-9 w-9 rounded-full shadow-lg bg-white hover:bg-primary hover:text-white">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3.5 w-3.5 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'fill-muted text-muted'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-primary">{product.price} جنيه</span>
                    {product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        {product.originalPrice} جنيه
                      </span>
                    )}
                  </div>
                  <Button variant="default" size="icon" className="h-10 w-10 rounded-full shadow-md hover:shadow-lg transition-shadow">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
