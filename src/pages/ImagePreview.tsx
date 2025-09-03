const ImagePreview = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-card rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Yarn Stitch Border PNG</h1>
        <div className="flex justify-center">
          <img 
            src="/yarn-stitch-border.png" 
            alt="Yarn stitch border pattern in pink and coral colors"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="mt-6 text-center">
          <p className="text-muted-foreground mb-4">
            รูป PNG ลายเย็บผ้าสีชมพูและคอรัล
          </p>
          <a 
            href="/yarn-stitch-border.png" 
            download="yarn-stitch-border.png"
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            ดาวน์โหลดรูป PNG
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;