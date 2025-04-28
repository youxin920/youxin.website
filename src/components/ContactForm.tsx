
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    site_requirements: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "פנייתך התקבלה!",
        description: "נציג יחזור אליך בהקדם.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        site_requirements: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "שגיאה",
        description: "אירעה שגיאה בשליחת הטופס. אנא נסה שוב.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-right mx-auto">
      <div>
        <Input 
          type="text" 
          placeholder="שם מלא" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-white/80 border-white/20 text-right" 
        />
      </div>
      <div>
        <Input 
          type="email" 
          placeholder="דוא״ל" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-white/80 border-white/20 text-right" 
        />
      </div>
      <div>
        <Input 
          type="tel" 
          placeholder="טלפון" 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          dir="rtl"
          className="bg-white/80 border-white/20 text-right" 
        />
      </div>
      <div>
        <Textarea 
          placeholder="אפיון האתר" 
          name="site_requirements"
          value={formData.site_requirements}
          onChange={handleChange}
          required
          className="bg-white/80 border-white/20 h-32 text-right" 
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-youxin-purple hover:bg-youxin-purple/90 text-white font-bold py-3 animate-pulse"
        disabled={isLoading}
      >
        {isLoading ? "שולח..." : "שלח פנייה"}
      </Button>
    </form>
  );
};

export default ContactForm;
