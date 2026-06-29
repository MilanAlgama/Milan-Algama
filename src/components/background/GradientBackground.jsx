function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      <div className="absolute inset-0 bg-[#050816]" />

      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-purple-500/10 blur-[180px]" />

    </div>
  );
}

export default GradientBackground;