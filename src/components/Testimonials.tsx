
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "יוסי כהן",
    role: "בעל עסק",
    content: "Youxin בנו לי אתר מדהים תוך שבוע! השירות היה מעולה והצוות היה קשוב לכל הדרישות שלי. האתר מהיר, יפה ומביא לקוחות חדשים כל יום.",
    avatar: "https://i.pravatar.cc/150?img=33"
  },
  {
    id: 2,
    name: "שירה לוי",
    role: "יזמית",
    content: "האחסון שלהם מהיר ואמין, והתמיכה זמינה תמיד. אחרי שעברתי לאחסון של Youxin הרגשתי הבדל עצום במהירות האתר. ממליצה בחום!",
    avatar: "https://i.pravatar.cc/150?img=20"
  },
  {
    id: 3,
    name: "אלון דוד",
    role: "מנהל שיווק",
    content: "הצוות המקצועי של Youxin עזר לנו לבנות אתר שהגדיל את ההמרות שלנו ב-40%. השקיפות והמקצועיות שלהם היו ברמה גבוהה במיוחד.",
    avatar: "https://i.pravatar.cc/150?img=59"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-youxin-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">מה הלקוחות שלנו אומרים?</h2>
          <div className="w-24 h-1 bg-youxin-purple mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 relative">
            <svg className="absolute top-0 right-0 -mt-6 -mr-8 w-16 h-16 text-youxin-purple opacity-30 transform rotate-180" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            
            <div className="text-center">
              <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden mb-6">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <blockquote className="text-xl mb-6 relative z-10">
                {testimonials[activeIndex].content}
              </blockquote>
              
              <div className="mb-8">
                <p className="font-bold text-lg">{testimonials[activeIndex].name}</p>
                <p className="text-youxin-purple">{testimonials[activeIndex].role}</p>
              </div>
              
              <div className="flex justify-center space-x-4">
                <Button 
                  variant="outline" 
                  className="border-youxin-purple text-youxin-purple hover:bg-youxin-purple/10"
                  onClick={prevTestimonial}
                >
                  הקודם
                </Button>
                <Button 
                  variant="outline" 
                  className="border-youxin-purple text-youxin-purple hover:bg-youxin-purple/10"
                  onClick={nextTestimonial}
                >
                  הבא
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
