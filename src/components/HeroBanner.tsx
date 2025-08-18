import { Button } from "@/components/ui/button";
import heroYarn from "@/assets/hero-yarn.jpg";

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-br from-background to-warm-cream py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold text-cozy-brown mb-6 leading-tight">
              ไหมพรมคุณภาพดี<br />
              <span className="text-primary">ราคาย่อมเยา</span><br />
              ส่งตรงถึงมือคุณ
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              เริ่มต้นการถักไหมพรมด้วยไหมพรมคุณภาพจากแบรนด์ชั้นนำ พร้อมส่งความอบอุ่นถึงคนที่คุณรัก
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-soft-peach hover:from-soft-peach hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              เลือกซื้อสินค้า
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src={heroYarn} 
              alt="ไหมพรมสีสวยหลากหลายพร้อมอุปกรณ์ถัก" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;