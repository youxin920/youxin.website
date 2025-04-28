
import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Users } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pl-10">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="מחשב נייד עם קוד" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-youxin-purple rounded-full p-4 shadow-lg hidden md:block">
                <ShieldCheck size={40} className="text-white" />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 fade-in-section" ref={sectionRef}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">למה Youxin?</h2>
            <div className="w-24 h-1 bg-youxin-purple mb-8"></div>
            
            <ul className="space-y-6">
              <li className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-youxin-purple/10 text-youxin-purple">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="mr-4">
                  <h3 className="text-xl font-semibold mb-1">מהירות וביצועים ללא פשרות</h3>
                  <p className="text-gray-600">האתרים שלנו נבנים תוך התמקדות בזמני טעינה מהירים ואופטימיזציה מלאה.</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-youxin-purple/10 text-youxin-purple">
                  <Users className="h-6 w-6" />
                </div>
                <div className="mr-4">
                  <h3 className="text-xl font-semibold mb-1">עיצוב מותאם אישית</h3>
                  <p className="text-gray-600">עיצוב ייחודי וממוקד שמבליט את המותג שלך ומייצר חוויית משתמש מעולה.</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-youxin-purple/10 text-youxin-purple">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="mr-4">
                  <h3 className="text-xl font-semibold mb-1">תמיכה בעברית מלאה</h3>
                  <p className="text-gray-600">צוות מקומי שמבין את הצרכים הייחודיים לשוק הישראלי ומספק תמיכה בעברית.</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-youxin-purple/10 text-youxin-purple">
                  <Users className="h-6 w-6" />
                </div>
                <div className="mr-4">
                  <h3 className="text-xl font-semibold mb-1">מחירים תחרותיים</h3>
                  <p className="text-gray-600">פתרונות במחירים הוגנים לעסקים בכל גודל, עם דגש על יחס עלות-תועלת מעולה.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
