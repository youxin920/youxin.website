
import React, { useEffect, useRef } from 'react';
import { Server, Book, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="service-card bg-white p-6 rounded-lg shadow-md hover-card">
      <div className="mb-4 text-youxin-purple">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="outline" className="border-youxin-purple text-youxin-purple hover:bg-youxin-purple/10 hover:text-youxin-purple">
        למידע נוסף
      </Button>
    </div>
  );
};

const Services: React.FC = () => {
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
    <section id="services" className="py-20 bg-youxin-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-section" ref={sectionRef}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">מה אנחנו מציעים?</h2>
          <div className="w-24 h-1 bg-youxin-purple mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Book size={48} />}
            title="בניית אתרים"
            description="אתרים מותאמים אישית, רספונסיביים ומהירים שמותאמים לצרכים שלך."
          />
          
          <ServiceCard 
            icon={<Server size={48} />}
            title="אחסון אתרים"
            description="שרתים מאובטחים, מהירים וזמינים 24/7 עם תמיכה מלאה."
          />
          
          <ServiceCard 
            icon={<MessageSquare size={48} />}
            title="תחזוקה ותמיכה"
            description="שירותי עדכון, אבטחה וניהול אתרים שוטף."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
