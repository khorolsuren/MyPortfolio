import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
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
      <section
        id="contact"
        className="py-24 px-4 relative"
      >
        <div className="container mx-auto max-w-5xl">
          {/* Heading */}
          <h2 className="text-center text-4xl font-extrabold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out
            — I’m always open to discussing new ideas and opportunities.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <ContactItem
                  icon={<Mail className="h-6 w-6 text-primary" />}
                  label="Email"
                  value="khorolsuren1111@gmail.com"
                  link="mailto:khorolsuren1111@gmail.com"
                />
                <ContactItem
                  icon={<Phone className="h-6 w-6 text-primary" />}
                  label="Phone"
                  value="+1 (619) 841-4477"
                  link="tel:+16198414477"
                />
                <ContactItem
                  icon={<MapPin className="h-6 w-6 text-primary" />}
                  label="Location"
                  value="Brooklyn, NY, USA"
                />
              </div>
  
              {/* Social Links */}
              <div className="pt-8">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-5">
                  <SocialLink
                    href="https://linkedin.com/in/khorolshuren-dashdavaa-2427581b8"
                    icon={<Linkedin className="h-5 w-5" />}
                  />
                  <SocialLink
                    href="https://twitter.com"
                    icon={<Twitter className="h-5 w-5" />}
                  />
                  <SocialLink
                    href="https://instagram.com"
                    icon={<Instagram className="h-5 w-5" />}
                  />
                </div>
              </div>
            </div>
  
            {/* Contact Form */}
            <div
              className="bg-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-indigo-500/20 transition-all"
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <InputField label="Your Name" name="name" placeholder="John Doe" />
                <InputField
                  label="Your Email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                />
                <TextAreaField
                  label="Your Message"
                  name="message"
                  placeholder="Hello, I'd like to talk about..."
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  /* --- Subcomponents --- */
  const ContactItem = ({ icon, label, value, link }) => (
    <div className="flex items-start space-x-4">
      <div className="p-3 rounded-full bg-primary/10">{icon}</div>
      <div>
        <h4 className="font-medium">{label}</h4>
        {link ? (
          <a
            href={link}
            className="text-gray-400 hover:text-primary transition-colors"
          >
            {value}
          </a>
        ) : (
          <span className="text-gray-400">{value}</span>
        )}
      </div>
    </div>
  );
  
  const SocialLink = ({ href, icon }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-gray-700 hover:bg-primary hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
  
  const InputField = ({ label, name, type = "text", placeholder }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-primary outline-none"
      />
    </div>
  );
  
  const TextAreaField = ({ label, name, placeholder }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        required
        rows={4}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-primary outline-none resize-none"
      />
    </div>
  );
  