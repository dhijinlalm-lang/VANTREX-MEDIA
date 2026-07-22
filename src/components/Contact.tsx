import React, { useState } from 'react';
import { 
  Send, 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  Phone, 
  MapPin, 
  PlayCircle,
  HelpCircle,
  Sparkles
} from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    targetService: 'website',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [touched, setTouched] = useState<{ name?: boolean; email?: boolean; message?: boolean }>({});

  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const validate = (field: 'name' | 'email' | 'message', value: string): string => {
    let errorMsg = '';
    const trimmedVal = value.trim();

    if (field === 'name') {
      if (!trimmedVal) {
        errorMsg = 'Full Name is required.';
      } else if (trimmedVal.length < 2) {
        errorMsg = 'Name must be at least 2 characters.';
      } else if (!/^[a-zA-Z\s.-]+$/.test(trimmedVal)) {
        errorMsg = 'Name can only contain letters, spaces, dots or hyphens.';
      }
    } else if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!trimmedVal) {
        errorMsg = 'Email Address is required.';
      } else if (!emailRegex.test(trimmedVal)) {
        errorMsg = 'Please enter a valid email address.';
      }
    } else if (field === 'message') {
      if (!trimmedVal) {
        errorMsg = 'A brief description of your business or goals is required.';
      } else if (trimmedVal.length < 10) {
        errorMsg = 'Please provide a more descriptive brief (minimum 10 characters).';
      }
    }

    setErrors(prev => ({ ...prev, [field]: errorMsg }));
    return errorMsg;
  };

  const handleChange = (field: 'name' | 'email' | 'message', value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      validate(field, value);
    }
  };

  const handleBlur = (field: 'name' | 'email' | 'message') => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validate(field, formState[field]);
  };

  const faqsList = [
    {
      id: 1,
      question: "What services does VANTREX MEDIA offer?",
      answer: "We specialize in Premium Website Design, Digital Advertising (Meta Ads & Google Ads), and Brand & Creative Design. Every solution is tailor-made to help your business look professional, attract better customers, and convert traffic into real enquiries."
    },
    {
      id: 2,
      question: "Do you use generic website templates?",
      answer: "No. We believe your brand deserves to look premium and memorable. We build customized, clean, and mobile-responsive website structures with clear messaging, strong call-to-action placements, and ad-ready landing pages."
    },
    {
      id: 3,
      question: "How long does a typical website or campaign launch take?",
      answer: "A premium website design and development cycle typically takes between 3 to 5 weeks from discovery to launch, while digital advertising campaigns can be strategized and active within 7 to 10 days."
    },
    {
      id: 4,
      question: "How can I book a free marketing consultation?",
      answer: "You can fill out the brief form below, call us directly at +91 6353539425, or email contact@vantrexmedias.com. We will schedule a 30-minute call to understand your business goals and suggest a clear path forward."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched to trigger full validation feedback instantly
    setTouched({ name: true, email: true, message: true });
    
    // Validate all fields
    const nameErr = validate('name', formState.name);
    const emailErr = validate('email', formState.email);
    const messageErr = validate('message', formState.message);

    if (nameErr || emailErr || messageErr) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceLabels: Record<string, string> = {
        website: 'Premium Website Design & Development',
        ads: 'Meta Ads & Google Ads Management',
        branding: 'Branding & Social Media Creatives',
      };

      const messageText = `*New Vantrex Media Enquiry*\n` +
        `---------------------------------\n` +
        `*Name:* ${formState.name.trim()}\n` +
        `*Email:* ${formState.email.trim()}\n` +
        `*Service:* ${serviceLabels[formState.targetService] || formState.targetService}\n` +
        `*Goals:* ${formState.message.trim()}`;

      const encodedText = encodeURIComponent(messageText);
      const waUrl = `https://wa.me/916353539425?text=${encodedText}`;
      
      setWhatsappUrl(waUrl);
      setSubmitStatus('success');

      // Attempt to open the WhatsApp window
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      // Clear the form fields after successful generation
      setFormState({
        name: '',
        email: '',
        targetService: 'website',
        message: '',
      });
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error("Error generating WhatsApp link:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="select-none py-16 bg-[#F8FAFC]">
      
      {/* INTEGRATED CONTACT & BRIEF FORM GRID */}
      <div className="px-6 md:px-12 lg:px-20 text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Contact Cards & CTA (Left Column - Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-[9px] tracking-[0.2em] text-indigo-600 font-extrabold uppercase bg-indigo-50 px-3 py-1 rounded inline-block">
                GET IN TOUCH
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                Ready to Build a <br />
                Better Digital Presence?
              </h2>
              <p className="font-sans text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-md font-semibold">
                Your website should explain your business clearly, build trust, and help customers take action. Fill out the brief form, or reach out to us directly.
              </p>
            </div>

            {/* Direct Channel Cards (Compact & High Contrast) */}
            <div className="space-y-3.5 pt-2">
              
              {/* Phone */}
              <a
                href="tel:+916353539425"
                className="bg-white border border-zinc-200/80 hover:border-indigo-600/30 rounded-xl p-4 flex items-center gap-4 transition-all duration-300 shadow-xs group"
              >
                <div className="p-2.5 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-mono text-[8px] text-zinc-400 uppercase tracking-widest font-black leading-none">Phone Contact</span>
                  <span className="block font-sans text-xs font-bold text-[#0F172A] mt-1">+91 63535 39425</span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contact@vantrexmedias.com"
                className="bg-white border border-zinc-200/80 hover:border-indigo-600/30 rounded-xl p-4 flex items-center gap-4 transition-all duration-300 shadow-xs group"
              >
                <div className="p-2.5 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-mono text-[8px] text-zinc-400 uppercase tracking-widest font-black leading-none">Email Address</span>
                  <span className="block font-sans text-xs font-bold text-[#0F172A] mt-1 break-all">contact@vantrexmedias.com</span>
                </div>
              </a>

              {/* Location */}
              <div className="bg-white border border-zinc-200/80 rounded-xl p-4 flex items-center gap-4 cursor-default shadow-xs">
                <div className="p-2.5 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-mono text-[8px] text-zinc-400 uppercase tracking-widest font-black leading-none">Location Hub</span>
                  <span className="block font-sans text-xs font-bold text-[#0F172A] mt-1">Kannur, Kerala, India</span>
                </div>
              </div>

            </div>
          </div>

          {/* BRIEF FORM INTERFACE (Right Column - Spans 7 cols) */}
          <div className="lg:col-span-7 bg-white border border-zinc-200/80 rounded-2xl p-6 sm:p-8 shadow-md flex flex-col gap-5">
            
            <div className="space-y-2 border-b border-zinc-100 pb-4 text-left">
              <span className="font-mono text-[8px] text-indigo-600 tracking-widest font-extrabold uppercase bg-indigo-50 px-2 py-0.5 rounded">
                BRIEF FORM INTERFACE
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                Let’s Build Your Digital Growth System
              </h3>
              <p className="font-sans text-xs text-zinc-500 leading-relaxed font-semibold">
                Whether you need a premium website, powerful ad campaign, or complete brand upgrade, VANTREX MEDIA helps you create a professional presence.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 text-left">
                  <label className="font-sans text-[10px] font-extrabold text-[#0F172A] uppercase tracking-wider block">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    className={`w-full bg-[#F8FAFC] border rounded-lg px-4 py-3 text-xs text-zinc-800 font-semibold focus:outline-none transition-all ${
                      errors.name && touched.name 
                        ? 'border-rose-400 focus:border-rose-500 focus:bg-white bg-rose-50/10' 
                        : 'border-zinc-200 focus:border-indigo-600 focus:bg-white'
                    }`}
                  />
                  {errors.name && touched.name && (
                    <span className="font-sans text-[10px] text-rose-500 font-bold mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className="space-y-1 text-left">
                  <label className="font-sans text-[10px] font-extrabold text-[#0F172A] uppercase tracking-wider block">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formState.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    className={`w-full bg-[#F8FAFC] border rounded-lg px-4 py-3 text-xs text-zinc-800 font-semibold focus:outline-none transition-all ${
                      errors.email && touched.email 
                        ? 'border-rose-400 focus:border-rose-500 focus:bg-white bg-rose-50/10' 
                        : 'border-zinc-200 focus:border-indigo-600 focus:bg-white'
                    }`}
                  />
                  {errors.email && touched.email && (
                    <span className="font-sans text-[10px] text-rose-500 font-bold mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-1 text-left">
                <label className="font-sans text-[10px] font-extrabold text-[#0F172A] uppercase tracking-wider block">Required Service Package</label>
                <select
                  value={formState.targetService}
                  onChange={(e) => setFormState({ ...formState, targetService: e.target.value })}
                  className="w-full bg-[#F8FAFC] border border-zinc-200 rounded-lg px-4 py-3 text-xs text-zinc-800 font-semibold focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
                >
                  <option value="website">Premium Website Design & Development</option>
                  <option value="ads">Meta Ads & Google Ads Management</option>
                  <option value="branding">Branding & Social Media Creatives</option>
                </select>
              </div>

              <div className="space-y-1 text-left">
                <label className="font-sans text-[10px] font-extrabold text-[#0F172A] uppercase tracking-wider block">
                  Tell Us About Your Business & Goals <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your services, current website (if any), and what you hope to achieve..."
                  value={formState.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  className={`w-full bg-[#F8FAFC] border rounded-lg px-4 py-3 text-xs text-zinc-800 font-semibold focus:outline-none transition-all ${
                    errors.message && touched.message 
                      ? 'border-rose-400 focus:border-rose-500 focus:bg-white bg-rose-50/10' 
                      : 'border-zinc-200 focus:border-indigo-600 focus:bg-white'
                  }`}
                />
                {errors.message && touched.message && (
                  <span className="font-sans text-[10px] text-rose-500 font-bold mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-sans text-xs font-bold tracking-widest uppercase bg-[#25D366] hover:bg-[#20BA5A] text-white py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                {isSubmitting ? 'Preparing WhatsApp Brief...' : 'Send Enquiry via WhatsApp ➔'}
              </button>

              {submitStatus === 'success' && (
                <div className="space-y-3 bg-emerald-50 py-4 px-4 rounded-xl border border-emerald-200 text-center shadow-xs animate-fade-in">
                  <p className="font-sans text-xs font-bold text-emerald-700">
                    ✓ Enquiry Brief Prepared Successfully!
                  </p>
                  <p className="font-sans text-[11px] text-emerald-600 leading-relaxed font-semibold">
                    We are redirecting you to WhatsApp to send your enquiry. If it didn't open automatically, please click the button below to send it:
                  </p>
                  {whatsappUrl && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-sans text-xs font-bold uppercase tracking-wider py-2.5 px-5 rounded-lg transition-all duration-300 shadow-sm"
                    >
                      <span>Send to WhatsApp</span>
                    </a>
                  )}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="space-y-1.5 bg-rose-50 py-2.5 px-3.5 rounded border border-rose-100 text-center">
                  <p className="font-sans text-[11px] font-extrabold text-rose-600 tracking-wide">
                    ⚠️ Error preparing WhatsApp message.
                  </p>
                  <p className="font-sans text-[10px] text-rose-500 font-semibold leading-relaxed">
                    Please try again or reach us directly at <a href="tel:+916353539425" className="font-bold underline text-indigo-600">+91 63535 39425</a>.
                  </p>
                </div>
              )}
            </form>

          </div>

        </div>
      </div>

    </section>
  );
}
