import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Copy, HelpCircle, FileText, AlertCircle } from "lucide-react";

const pagesList = [
  {
    title: "من نحن",
    description: "تعرف على قصتنا ورؤيتنا وهدفنا في تقديم أفضل المنتجات العضوية.",
    icon: <Copy className="h-6 w-6 text-primary" />,
    href: "#"
  },
  {
    title: "الأسئلة الشائعة",
    description: "إجابات على الأسئلة الأكثر شيوعاً حول الشحن، الدفع، والمنتجات.",
    icon: <HelpCircle className="h-6 w-6 text-primary" />,
    href: "#"
  },
  {
    title: "سياسة الخصوصية",
    description: "كيف نقوم بجمع واستخدام وحماية بياناتك الشخصية.",
    icon: <FileText className="h-6 w-6 text-primary" />,
    href: "#"
  },
  {
    title: "الشروط والأحكام",
    description: "الشروط والأحكام التي تحكم استخدامك لموقعنا وخدماتنا.",
    icon: <AlertCircle className="h-6 w-6 text-primary" />,
    href: "#"
  },
];

const Pages = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans" dir="rtl">
      <Header />
      <main className="flex-1 bg-gray-50/50">
        {/* Page Header */}
        <div className="bg-primary/5 py-12 md:py-16">
          <div className="container text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">الصفحات</h1>
            <div className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
              <a href="/" className="hover:text-primary transition-colors">الرئيسية</a>
              <span>/</span>
              <span className="text-foreground">الصفحات</span>
            </div>
          </div>
        </div>

        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pagesList.map((page) => (
              <a 
                key={page.title} 
                href={page.href}
                className="bg-background p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {page.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{page.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{page.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pages;
