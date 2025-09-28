import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        {/* Contact Info */}
        <div className="space-y-10 text-center flex flex-col items-center">
          <h3 className="text-2xl font-semibold">Contact Information</h3>

          <div className="space-y-8">
            {/* Email */}
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-full bg-primary/10 mb-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium">Email</h4>
              <a
                href="mailto:hello@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                markydapadap@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-full bg-primary/10 mb-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium">Phone</h4>
              <a
                href="tel:+11234567890"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +63 9994699295
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-full bg-primary/10 mb-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium">Location</h4>
              <p className="text-muted-foreground hover:text-primary transition-colors">
                Antipolo, Rizal, Philippines
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-10">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a href="www.linkedin.com/in/mark-anthonny-dapadap-b82505214" target="_blank">
                <Linkedin />
              </a>
              <a href="https://www.instagram.com/markyyieo_/" target="_blank">
                <Instagram />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
