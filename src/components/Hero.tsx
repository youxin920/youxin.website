
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden digital-pattern">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/20" />
        {/* Digital animation effect */}
        <div className="absolute h-full w-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-youxin-purple/10 text-white rounded-full py-1 px-4 text-sm inline-block mb-6 border border-youxin-purple/20">
          <span className="font-bold">חדש!</span> פגשו אותנו בכנס 'הייטק לכולם' במשרדי גוגל!
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl">
          הפוך את החלום הדיגיטלי שלך למציאות עם Youxin!
        </h1>
        
        <p className="text-xl text-white/80 mb-8 max-w-2xl">
          בניית אתרים מקצועיים ואחסון מהיר ואמין – הכל במקום אחד.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            className="bg-youxin-purple hover:bg-youxin-purple/90 text-white text-lg py-6 px-8"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            קבל הצעת מחיר עכשיו
            <ArrowRight className="mr-2 h-5 w-5 rtl:rotate-180" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
