import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import yarnCollection from "@/assets/yarn-collection.jpg";

const recommendedProducts = [
  {
    name: "ไหมพรม Cotton Soft",
    brand: "DMC",
    price: "฿450",
    originalPrice: "฿550",
    image: "/placeholder.svg"
  },
  {
    name: "Alpaca Classic DK",
    brand: "ROWAN",
    price: "฿680",
    originalPrice: "฿780",
    image: "/placeholder.svg"
  },
  {
    name: "Baby Cotton",
    brand: "Madam Tricote",
    price: "฿320",
    originalPrice: "฿380",
    image: "/placeholder.svg"
  }
];

const YarnRecommendSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-cozy-brown mb-6">
              ค้นหาไหมพรมที่คุณรัก
            </h2>
            <h3 className="text-xl font-semibold text-primary mb-4">
              พร้อมสำหรับโปรเจกต์ถัดไปหรือยัง?
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                มาสำรวจไหมพรมหลากหลายชนิด ทั้งสำหรับงานถักนิตติ้งและโครเชต์ ที่เราคัดสรรมาให้คุณอย่างจุใจ
              </p>
              <p>
                พบกับไหมพรมคุณภาพเยี่ยม จากแบรนด์ที่คุณชื่นชอบ พร้อมสีสันและเนื้อสัมผัสที่ตอบโจทย์ทุกสไตล์งานฝีมือของคุณ
              </p>
            </div>
            <img 
              src={yarnCollection} 
              alt="คอลเลคชันไหมพรมสีสวยหลากหลาย" 
              className="w-full h-auto rounded-xl shadow-lg mt-8"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-cozy-brown mb-6">สินค้าแนะนำ</h3>
            <div className="space-y-4">
              {recommendedProducts.map((product, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-warm-cream rounded-lg flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-cozy-brown">{product.name}</h4>
                        <p className="text-sm text-muted-foreground">{product.brand}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-bold text-primary">{product.price}</span>
                          <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        ดูสินค้า
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button className="w-full mt-6 bg-gradient-to-r from-secondary to-mint-fresh text-secondary-foreground hover:from-mint-fresh hover:to-secondary">
              ดูสินค้าทั้งหมด
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YarnRecommendSection;