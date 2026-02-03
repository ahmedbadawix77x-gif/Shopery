import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans" dir="rtl">
      <Header />
      <main className="flex-1 bg-gray-50/50">
        {/* Page Header */}
        <div className="bg-primary/5 py-12 md:py-16">
          <div className="container text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">تواصل معنا</h1>
            <div className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
              <a href="/" className="hover:text-primary transition-colors">الرئيسية</a>
              <span>/</span>
              <span className="text-foreground">تواصل معنا</span>
            </div>
          </div>
        </div>

        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-background rounded-3xl p-6 md:p-12 shadow-sm border border-border">
            {/* Contact Info */}
            <div className="space-y-8">
               <div>
                 <h2 className="text-2xl font-bold mb-4">نحن هنا للمساعدة</h2>
                 <p className="text-muted-foreground leading-relaxed">
                   إذا كان لديك أي أسئلة أو استفسارات حول منتجاتنا أو خدماتنا، فلا تتردد في التواصل معنا. فريقنا جاهز دائماً لمساعدتك.
                 </p>
               </div>

               <div className="grid gap-6">
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                     <MapPin className="h-6 w-6 text-primary" />
                   </div>
                   <div>
                     <h3 className="font-bold text-lg mb-1">العنوان</h3>
                     <p className="text-muted-foreground">١٢٣٤ شارع الحرية، القاهرة، مصر</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                     <Mail className="h-6 w-6 text-primary" />
                   </div>
                   <div>
                     <h3 className="font-bold text-lg mb-1">البريد الإلكتروني</h3>
                     <p className="text-muted-foreground">ahmedbadawix77x@gmail.com</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                     <Phone className="h-6 w-6 text-primary" />
                   </div>
                   <div>
                     <h3 className="font-bold text-lg mb-1">الهاتف</h3>
                     <p className="text-muted-foreground">+٢٠ ١٢٣ ٤٥٦ ٧٨٩٠</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                     <Clock className="h-6 w-6 text-primary" />
                   </div>
                   <div>
                     <h3 className="font-bold text-lg mb-1">ساعات العمل</h3>
                     <p className="text-muted-foreground">يومياً من ١٠ صباحاً حتى ١٠ مساءً</p>
                   </div>
                 </div>
               </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6">أرسل لنا رسالة</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">الاسم</label>
                    <Input id="name" placeholder="الاسم الكامل" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">البريد الإلكتروني</label>
                    <Input id="email" type="email" placeholder="example@mail.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">الموضوع</label>
                  <Input id="subject" placeholder="موضوع الرسالة" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">الرسالة</label>
                  <Textarea id="message" placeholder="اكتب رسالتك هنا..." className="min-h-[150px]" />
                </div>

                <Button type="submit" size="lg" className="w-full">إرسال الرسالة</Button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="h-[400px] w-full bg-muted relative">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.60379294276!2d31.1884234558231!3d30.05961846931215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1709848414445!5m2!1sen!2seg" 
             width="100%" 
             height="100%" 
             style={{border:0}} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
           ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
