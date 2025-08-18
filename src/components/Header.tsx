import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-primary">
            ไหมพรมดี
          </h1>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">หน้าแรก</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">ไหมพรม</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">อุปกรณ์ถัก</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">วิธีถัก</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;