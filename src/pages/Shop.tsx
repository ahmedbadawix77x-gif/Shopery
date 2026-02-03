import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Filter, ChevronDown } from "lucide-react";

// Mock data for products (expanded from home page)
const products = [
  {
    id: 1,
    name: "تفاح أحمر عضوي",
    price: "٥٠ ج.م",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=800",
    category: "فواكه",
    rating: 5,
  },
  {
    id: 2,
    name: "خس طازج",
    price: "١٥ ج.م",
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&q=80&w=800",
    category: "خضروات",
    rating: 4,
  },
  {
    id: 3,
    name: "فلفل ألوان",
    price: "٣٠ ج.م",
    image: "https://images.unsplash.com/photo-1563563816263-020343a94824?auto=format&fit=crop&q=80&w=800",
    category: "خضروات",
    rating: 5,
  },
  {
    id: 4,
    name: "فراولة طازجة",
    price: "٤٥ ج.م",
    image: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&q=80&w=800",
    category: "فواكه",
    rating: 5,
  },
  {
    id: 5,
    name: "طماطم عضوية",
    price: "٢٠ ج.م",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800",
    category: "خضروات",
    rating: 4,
  },
  {
    id: 6,
    name: "عصير برتقال طبيعي",
    price: "٣٥ ج.م",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=800",
    category: "عصائر",
    rating: 5,
  },
];

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans" dir="rtl">
      <Header />
      <main className="flex-1 bg-gray-50/50">
        {/* Page Header */}
        <div className="bg-primary/5 py-12 md:py-16">
          <div className="container text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">المتجر</h1>
            <div className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
              <a href="/" className="hover:text-primary transition-colors">الرئيسية</a>
              <span>/</span>
              <span className="text-foreground">المتجر</span>
            </div>
          </div>
        </div>

        <div className="container py-8 md:py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar / Filters */}
            <aside className="w-full md:w-64 space-y-8 h-fit sticky top-24">
              <div className="bg-background rounded-2xl p-6 border border-border shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">التصنيفات</h3>
                  <Filter className="h-4 w-4 text-muted-foreground" />
                </div>
                <ul className="space-y-3 text-sm">
                  {["الكل", "خضروات", "فواكه", "عصائر", "لحوم", "منتجات ألبان"].map((category) => (
                    <li key={category}>
                      <button className="flex items-center justify-between w-full hover:text-primary transition-colors text-right">
                        <span>{category}</span>
                        <span className="bg-muted px-2 py-0.5 rounded-full text-xs text-muted-foreground">3</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background rounded-2xl p-6 border border-border shadow-sm">
                <h3 className="font-bold text-lg mb-4">السعر</h3>
                {/* Simple Price Range Placeholder */}
                <div className="space-y-4">
                  <input type="range" className="w-full accent-primary" />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>١٠ ج.م</span>
                    <span>٥٠٠ ج.م</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground text-sm">عراض {products.length} من ٥٠ منتج</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium hidden sm:inline">ترتيب حسب:</span>
                  <Button variant="outline" size="sm" className="gap-2">
                    الأكثر مبيعاً
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="group bg-background border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        جديد
                      </div>
                      {/* Hover Actions */}
                      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                         <Button size="sm" className="rounded-full shadow-lg">أضف للسلة</Button>
                      </div>
                    </div>
                    <div className="p-4 text-right">
                      <p className="text-xs text-primary font-medium mb-1">{product.category}</p>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors cursor-pointer">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-lg">{product.price}</span>
                        <div className="flex text-yellow-400 text-xs">
                           {"★".repeat(product.rating)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center gap-2">
                 <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">1</Button>
                 <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full">2</Button>
                 <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full">3</Button>
                 <span className="flex items-center justify-center w-10 h-10">...</span>
                 <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full">8</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
