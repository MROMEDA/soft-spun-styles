import { Card, CardContent } from "@/components/ui/card";

const brands = [
  {
    name: "DMC",
    description: "แบรนด์ไหมพรมระดับโลกจากฝรั่งเศส",
    logo: "🧶"
  },
  {
    name: "ROWAN",
    description: "ไหมพรมคุณภาพสูงจากอังกฤษ",
    logo: "🎯"
  },
  {
    name: "ไหมผ้า ยุโรป",
    description: "ไหมผ้าคุณภาพเยี่ยมจากยุโรป",
    logo: "✨"
  },
  {
    name: "Madam Tricote Paris",
    description: "ไหมพรมสไตล์ปารีเซียง",
    logo: "🌟"
  }
];

const BrandLogos = () => {
  return (
    <section className="py-16 bg-warm-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cozy-brown mb-4">
            แบรนด์ที่เราจำหน่าย
          </h2>
          <p className="text-lg text-muted-foreground">
            คัดสรรแบรนด์ไหมพรมชั้นนำจากทั่วโลก
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white/80 backdrop-blur-sm hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {brand.logo}
                </div>
                <h3 className="font-bold text-cozy-brown mb-2 group-hover:text-primary transition-colors">
                  {brand.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {brand.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            คลิกที่แบรนด์เพื่อดูสินค้าทั้งหมด
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;