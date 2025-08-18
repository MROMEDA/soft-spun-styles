import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Target, Zap } from "lucide-react";

const categories = [
  {
    title: "ไหมพรม",
    icon: Zap,
    description: "ไหมพรมคุณภาพจากแบรนด์ชั้นนำ หลากหลายสีสัน",
    gradient: "from-primary to-soft-peach"
  },
  {
    title: "สะดึง, ขาตั้ง",
    icon: Target,
    description: "อุปกรณ์สำหรับงานปักและงานฝีมือต่างๆ",
    gradient: "from-secondary to-mint-fresh"
  },
  {
    title: "โครเชต์ นิตติ้ง อุปกรณ์ถักต่างๆ",
    icon: Scissors,
    description: "เข็มโครเชต์ เข็มนิตติ้ง และอุปกรณ์ถักครบครัน",
    gradient: "from-soft-peach to-secondary"
  }
];

const ProductCategories = () => {
  return (
    <section className="py-16 bg-warm-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cozy-brown mb-4">
            เลือกซื้อสินค้าแต่ละชนิด
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ค้นหาสิ่งที่คุณต้องการสำหรับโปรเจกต์ถักไหมพรมของคุณ
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-cozy-brown mb-3">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-300"
                  >
                    ดูสินค้า
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;