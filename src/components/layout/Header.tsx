import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "المتجر", href: "/shop" },
    { name: "الصفحات", href: "/pages" },
    { name: "المدونة", href: "/blog" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-muted py-2 hidden md:block">
        <div className="container flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>العنوان: 1234 شارع الحرية، القاهرة</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary transition-colors">العربية</a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-primary transition-colors">EGP</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-border bg-background">
        <div className="container py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">🥬</span>
              </div>
              <span className="text-2xl font-bold text-primary">Shopery</span>
            </a>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-xl mx-4">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="ابحث عن المنتجات..."
                  className="w-full pr-4 pl-12 h-12 rounded-full border-2 border-muted focus:border-primary"
                  dir="rtl"
                />
                <Button
                  variant="hero"
                  size="icon"
                  className="absolute left-1 top-1/2 -translate-y-1/2 h-10 w-10"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-1 text-sm mr-4">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">اتصل بنا:</span>
                <span className="font-semibold">+20 123 456 7890</span>
              </div>
              
              <Link to="/shop">
                <Button variant="ghost" size="icon" className="relative">
                  <Heart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                    4
                  </span>
                </Button>
              </Link>
              
              <Link to="/shop">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                    2
                  </span>
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-muted hidden md:block">
        <div className="container">
          <ul className="flex items-center gap-8 py-3" dir="rtl">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container py-4">
            <div className="mb-4">
              <Input
                type="text"
                placeholder="ابحث عن المنتجات..."
                className="w-full pr-4 pl-12 h-12 rounded-full border-2 border-muted"
                dir="rtl"
              />
            </div>
            <ul className="space-y-2" dir="rtl">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block py-2 font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
