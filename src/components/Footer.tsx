import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cozy-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              ไหมพรมดี
            </h3>
            <p className="text-gray-300 mb-4">
              ส่งมอบความอบอุ่นผ่านไหมพรมคุณภาพ พร้อมบริการที่ใส่ใจทุกรายละเอียด
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">หมวดสินค้า</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">ไหมพรม</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">เข็มโครเชต์</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">เข็มนิตติ้ง</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">สะดึงและขาตั้ง</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">แบรนด์</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">DMC</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">ROWAN</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">ไหมผ้า ยุโรป</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Madam Tricote Paris</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">ติดต่อเรา</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>02-123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@yarnshop.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>กรุงเทพมหานคร</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 ไหมพรมดี. สงวนลิขสิทธิ์ทุกรูปแบบ</p>
          <p className="mt-2 flex items-center justify-center gap-2">
            ทำด้วย <Heart className="w-4 h-4 text-primary" /> เพื่อคนรักงานถัก
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;