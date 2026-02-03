import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground" dir="rtl">
      {/* Newsletter Section */}
      <div className="bg-muted py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">اشترك في نشرتنا البريدية</h3>
              <p className="text-muted-foreground">احصل على آخر العروض والتخفيضات مباشرة في بريدك</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full md:w-80 h-12 rounded-full bg-background"
              />
              <Button variant="hero" size="lg">
                اشترك
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xl">🥬</span>
                </div>
                <span className="text-2xl font-bold">Shopery</span>
              </div>
              <p className="text-primary-foreground/70 mb-6">
                نحن نقدم أفضل المنتجات العضوية الطازجة من المزارع مباشرة إلى بابك.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-primary-foreground/70">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>1234 شارع الحرية، القاهرة</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/70">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+20 123 456 7890</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/70">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>ahmedbadawix77x@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
              <ul className="space-y-3">
                {["من نحن", "المتجر", "المدونة", "تواصل معنا", "الأسئلة الشائعة"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* My Account */}
            <div>
              <h4 className="text-lg font-semibold mb-6">حسابي</h4>
              <ul className="space-y-3">
                {["حسابي", "سجل الطلبات", "سلة التسوق", "المفضلة", "تتبع الطلب"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download App */}
            <div>
              <h4 className="text-lg font-semibold mb-6">حمّل التطبيق</h4>
              <p className="text-primary-foreground/70 mb-4">
                تسوق بسهولة من هاتفك
              </p>
              <div className="space-y-3">
                <a href="#" className="block">
                  <div className="bg-primary-foreground/10 rounded-lg p-3 flex items-center gap-3 hover:bg-primary-foreground/20 transition-colors">
                    <div className="text-2xl">📱</div>
                    <div>
                      <div className="text-xs text-primary-foreground/70">حمّل من</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="block">
                  <div className="bg-primary-foreground/10 rounded-lg p-3 flex items-center gap-3 hover:bg-primary-foreground/20 transition-colors">
                    <div className="text-2xl">🤖</div>
                    <div>
                      <div className="text-xs text-primary-foreground/70">حمّل من</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © 2024 Shopery. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/ahmed-badawy-45060431b"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                title="LinkedIn"
              >
                <div className="text-xl font-bold">in</div>
              </a>
              <a
                href="https://www.instagram.com/barazely_x77x"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://ahmedbadawix77x-gif.github.io/portfolio/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                title="Portfolio"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
