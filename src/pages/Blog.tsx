import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "١٠ فوائد للأكل العضوي يجب أن تعرفها",
    excerpt: "تعرف على الأسباب التي تجعل الطعام العضوي خياراً أفضل لصحتك وللبيئة...",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
    date: "١٥ يناير ٢٠٢٤",
    author: "أحمد محمد",
    category: "نصائح صحية",
  },
  {
    id: 2,
    title: "أفضل العصائر الطبيعية لتقوية المناعة",
    excerpt: "مجموعة من وصفات العصائر الطبيعية التي تساعد في تعزيز جهاز المناعة لديك...",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=800",
    date: "١٠ يناير ٢٠٢٤",
    author: "سارة علي",
    category: "وصفات",
  },
  {
    id: 3,
    title: "طريقة اختيار الخضروات الطازجة",
    excerpt: "دليلك الشامل لاختيار أفضل الخضروات الطازجة من السوق وكيفية تخزينها...",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800",
    date: "٥ يناير ٢٠٢٤",
    author: "خالد حسن",
    category: "نصائح تسوق",
  },
  {
    id: 4,
    title: "الزراعة العضوية في مصر",
    excerpt: "كيف تتطور الزراعة العضوية في مصر وما هي أهم المزارع التي تقدم منتجات عالية الجودة...",
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&q=80&w=800",
    date: "١ يناير ٢٠٢٤",
    author: "منى السيد",
    category: "زراعة",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans" dir="rtl">
      <Header />
      <main className="flex-1 bg-gray-50/50">
        {/* Page Header */}
        <div className="bg-primary/5 py-12 md:py-16">
          <div className="container text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">المدونة</h1>
            <div className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
              <a href="/" className="hover:text-primary transition-colors">الرئيسية</a>
              <span>/</span>
              <span className="text-foreground">المدونة</span>
            </div>
          </div>
        </div>

        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Sidebar could go here if layout was different, for now centered grid */}
             {posts.map((post) => (
               <article key={post.id} className="bg-background border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                 <div className="aspect-[16/10] overflow-hidden relative">
                   <img 
                     src={post.image} 
                     alt={post.title}
                     className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                   />
                   <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
                     {post.category}
                   </div>
                 </div>
                 <div className="p-6">
                   <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                     <div className="flex items-center gap-1">
                       <User className="h-3 w-3" />
                       {post.author}
                     </div>
                     <div className="flex items-center gap-1">
                       <Calendar className="h-3 w-3" />
                       {post.date}
                     </div>
                   </div>
                   <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                     <a href="#">{post.title}</a>
                   </h3>
                   <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                     {post.excerpt}
                   </p>
                   <Button variant="link" className="p-0 h-auto text-primary gap-2 hover:no-underline group/btn">
                     اقرأ المزيد
                     <ArrowLeft className="h-4 w-4 transform group-hover/btn:-translate-x-1 transition-transform" />
                   </Button>
                 </div>
               </article>
             ))}
          </div>

           {/* Pagination */}
           <div className="mt-16 flex justify-center gap-2">
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">1</Button>
              <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full">2</Button>
              <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full">3</Button>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
