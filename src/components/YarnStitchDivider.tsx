const YarnStitchDivider = () => {
  return (
    <div className="relative py-8 flex justify-center items-center">
      {/* Main stitch line */}
      <div className="relative w-64 h-1">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent h-0.5 top-1/2 transform -translate-y-1/2 animate-stitch-draw"></div>
        
        {/* Stitching dots */}
        <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full">
          {Array.from({length: 9}).map((_, i) => (
            <div 
              key={i}
              className="w-2 h-2 rounded-full bg-primary animate-pulse opacity-60"
              style={{animationDelay: `${i * 0.1}s`}}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Knitting needles */}
      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-cozy-brown to-transparent rotate-12 animate-needle-knit origin-left"></div>
      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-l from-cozy-brown to-transparent -rotate-12 animate-needle-knit origin-right" style={{animationDelay: '0.7s'}}></div>
    </div>
  );
};

export default YarnStitchDivider;