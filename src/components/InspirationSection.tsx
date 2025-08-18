import knittingInspiration from "@/assets/knitting-inspiration.jpg";

const InspirationSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={knittingInspiration} 
              alt="มือที่กำลังถักไหมพรมด้วยความใส่ใจ" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-cozy-brown mb-6">
              แรงบันดาลใจ…<br />
              <span className="text-primary">เริ่มจากเส้นไหมพรม</span>
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                สำหรับหลายคน งานถักอาจเป็นเพียงงานอดิเรกเล็ก ๆ แต่สำหรับเรา… <strong>มันคือเรื่องราวของหัวใจ</strong>
              </p>
              <p>
                แค่มีไหมพรมหนึ่งกลุ่มกับเข็มถักในมือ คุณก็สามารถสร้างสรรค์สิ่งที่มากกว่าผ้าห่มหรือหมวก มันอาจกลายเป็นผ้าพันคอที่แม่ถักให้ลูกในวันหนาวแรกของปี หรือเป็นผ้าห่มที่อยู่ข้างกายครอบครัวมาหลายสิบปี
              </p>
              <p>
                ของเหล่านี้ไม่ใช่แค่สิ่งของ แต่คือ<span className="text-primary font-semibold">ความทรงจำและความรักที่ถักทออยู่ในทุกห่วงไหม</span>
              </p>
              <p>
                งานถักคือมรดกทางใจที่ส่งต่อกันมาจากรุ่นสู่รุ่น เป็นวิถีที่อยู่ในชีวิตคนไทยมานาน ทั้งในงานบุญ งานบ้าน และช่วงเวลาที่อยากมอบสิ่งพิเศษให้ใครสักคน
              </p>
              <p className="text-cozy-brown font-semibold">
                เพราะทุกเส้นไหมพรมที่ผ่านมือเรา ไม่ได้แค่สร้างความอบอุ่นให้ร่างกาย แต่ยังอบอุ่นหัวใจของคนที่ได้รับ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;