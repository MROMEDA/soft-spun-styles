import { Button } from "@/components/ui/button";
import knittingTutorial from "@/assets/knitting-tutorial.jpg";
import { BookOpen, Play, Award } from "lucide-react";

const KnittingTutorialSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-cozy-brown">
                งานถัก…<br />
                <span className="text-primary">ไม่ยากอย่างที่คิด</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p className="text-lg">
                แค่มีไหมพรมหนึ่งกลุ่มกับเข็มคู่ใจ คุณก็เริ่มสร้างสรรค์ชิ้นงานได้แล้ว
              </p>
              <p>
                เราเตรียมคู่มือถักไหมพรมขั้นพื้นฐานไว้ให้คุณ พร้อมภาพและคำอธิบายแบบเข้าใจง่าย 
                เพื่อให้คุณสนุกไปกับทุกห่วงไหมที่สร้างขึ้นด้วยมือคุณเอง
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-warm-cream rounded-lg">
                <Play className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-semibold text-cozy-brown">วิดีโอสอน</h4>
                  <p className="text-sm text-muted-foreground">ทีละขั้นตอน</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-warm-cream rounded-lg">
                <Award className="w-6 h-6 text-secondary" />
                <div>
                  <h4 className="font-semibold text-cozy-brown">เทคนิคพื้นฐาน</h4>
                  <p className="text-sm text-muted-foreground">เริ่มต้นได้ง่าย</p>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-secondary to-mint-fresh text-secondary-foreground hover:from-mint-fresh hover:to-secondary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              เรียนรู้วิธีถัก
            </Button>
          </div>
          
          <div className="order-first md:order-last">
            <img 
              src={knittingTutorial} 
              alt="คู่มือสอนถักไหมพรมสำหรับผู้เริ่มต้น" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnittingTutorialSection;