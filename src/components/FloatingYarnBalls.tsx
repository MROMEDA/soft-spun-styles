const FloatingYarnBalls = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating yarn balls */}
      <div className="absolute top-20 left-10 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-soft-peach animate-yarn-float opacity-30"></div>
      <div className="absolute top-40 right-20 w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-mint-fresh animate-float-gentle opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-60 left-1/3 w-10 h-10 rounded-full bg-gradient-to-br from-soft-peach to-primary animate-yarn-float opacity-20" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 right-10 w-7 h-7 rounded-full bg-gradient-to-br from-mint-fresh to-secondary animate-float-gentle opacity-35" style={{animationDelay: '0.5s'}}></div>
      
      {/* Yarn strands */}
      <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20 animate-yarn-wave"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-15 animate-yarn-wave" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default FloatingYarnBalls;