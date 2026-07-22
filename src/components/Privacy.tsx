import React from 'react';
import { Shield, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';

interface PrivacyProps {
  onNavigate: (path: string, sectionId?: string) => void;
}

export default function Privacy({ onNavigate }: PrivacyProps) {
  return (
    <div id="privacy-policy-view" className="bg-[#F8FAFC] min-h-screen py-24 px-6 md:px-12 lg:px-20 text-left select-none font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Breadcrumb / Back Button */}
        <button
          onClick={() => onNavigate('/')}
          className="group inline-flex items-center gap-2 text-xs font-extrabold text-[#4F46E5] hover:text-[#3B32C1] transition-colors cursor-pointer uppercase tracking-widest focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Header Block */}
        <div className="space-y-4 border-b border-zinc-200 pb-8">
          <div className="flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 inline-flex text-indigo-600">
            <Shield className="w-3.5 h-3.5" />
            <span className="font-mono text-[9px] font-extrabold uppercase tracking-widest">Trust & Legal Compliance</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A]">
            Privacy Policy
          </h1>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 font-semibold leading-relaxed">
            Last Updated: June 29, 2026. This policy explains how Vantrex Media collects, uses, and safeguards your information.
          </p>
        </div>

        {/* Core Principles (3-Column Bento style highlights) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-zinc-200/60 rounded-2xl p-6 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-sans text-sm font-black text-[#0F172A] tracking-tight">Secure Handling</h3>
            <p className="font-sans text-xs text-zinc-500 leading-relaxed font-semibold">
              We encrypt and protect any personal credentials, business briefs, and contact info you share with us.
            </p>
          </div>

          <div className="bg-white border border-zinc-200/60 rounded-2xl p-6 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-sans text-sm font-black text-[#0F172A] tracking-tight">Zero Data Sharing</h3>
            <p className="font-sans text-xs text-zinc-500 leading-relaxed font-semibold">
              We never sell or rent your business data, contact email, or telephone numbers to third-party list brokers.
            </p>
          </div>

          <div className="bg-white border border-zinc-200/60 rounded-2xl p-6 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-sans text-sm font-black text-[#0F172A] tracking-tight">Absolute Clarity</h3>
            <p className="font-sans text-xs text-zinc-500 leading-relaxed font-semibold">
              You always retain absolute ownership and command over whatever personal files or analytics telemetry we gather.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8 bg-white border border-zinc-200/60 rounded-2xl p-8 sm:p-10 shadow-xs text-zinc-700 font-sans text-xs sm:text-[13px] leading-relaxed font-semibold">
          
          <div className="space-y-3">
            <h2 className="font-sans text-base font-black text-[#0F172A] tracking-tight border-b border-zinc-100 pb-2 uppercase">
              1. Information Collection
            </h2>
            <p>
              We collect information you explicitly offer us through our brief forms, direct email link exchanges, phone calls, or WhatsApp chats. This includes your name, email, phone number, and brief descriptions of your business model and growth plans.
            </p>
            <p>
              When you browse our page, general metadata (such as IP addresses, browser specs, and tracking tags) may be recorded to optimize performance and prevent network abuse.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-sans text-base font-black text-[#0F172A] tracking-tight border-b border-zinc-100 pb-2 uppercase">
              2. How We Use Information
            </h2>
            <p>
              We use your submitted data primarily to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-600">
              <li>Analyze your brand’s needs for our bespoke Digital Design and Ad Campaign processes.</li>
              <li>Provide quick replies to consultation request briefs or general inquiries.</li>
              <li>Send design status updates or campaign analytics breakdowns during projects.</li>
              <li>Maintain safe operations and shield our systems from security threats.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-sans text-base font-black text-[#0F172A] tracking-tight border-b border-zinc-100 pb-2 uppercase">
              3. Cookies & Tracking
            </h2>
            <p>
              This site utilizes basic tracking elements and localized storage keys to support URL-based routing transitions, preserve theme settings, and record general analytics parameters. You can disable cookies directly via your browser preferences if you wish.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-sans text-base font-black text-[#0F172A] tracking-tight border-b border-zinc-100 pb-2 uppercase">
              4. Data Retention & Erasure
            </h2>
            <p>
              We keep your data stored only for as long as is necessary to deliver our tailored marketing services. You may contact us at any time at <a href="mailto:contact@vantrexmedias.com" className="text-[#4F46E5] hover:underline">contact@vantrexmedias.com</a> to request absolute erasure of your logs or files.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-sans text-base font-black text-[#0F172A] tracking-tight border-b border-zinc-100 pb-2 uppercase">
              5. Security Protocols
            </h2>
            <p>
              We deploy industrial standard cloud shielding and validation checks to protect data transfers. However, no digital transmission channel can claim 100% invulnerability. We recommend using robust passwords and secure communication lines when sharing confidential assets.
            </p>
          </div>

        </div>

        {/* Back to top or home */}
        <div className="flex justify-center pt-4">
          <button
            onClick={() => onNavigate('/')}
            className="font-sans text-xs font-black tracking-widest uppercase bg-[#1E3A8A] hover:bg-[#1E40AF] text-white px-8 py-3.5 rounded-xl transition-all duration-300 cursor-pointer shadow-md"
          >
            Return to Homepage ➔
          </button>
        </div>

      </div>
    </div>
  );
}
