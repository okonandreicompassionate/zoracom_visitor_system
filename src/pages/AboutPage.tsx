import React, { useState } from "react";
import { ArrowRight, Lock } from "lucide-react";

export default function VerifyIdentity() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      {/* Phone frame */}
      <div className="relative w-full max-w-[360px] h-[720px]">
        {/* Status bar */}
       

        {/* Main content */}
        <div className="flex-1 flex flex-col px-7 pt-10 overflow-y-auto">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center">
              <div className="relative">
                <Lock size={26} className="text-sky-500" strokeWidth={2.2} />
                <div className="absolute -bottom-0.5 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-sky-50" />
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mt-5">
            <h1 className="text-slate-900 text-[20px] font-bold">Verify Identity</h1>
            <p className="text-slate-500 text-[13px] leading-snug mt-2 px-2">
              Enter your email address or phone number to continue with registration.
            </p>
          </div>

          {/* Email field */}
          <div className="mt-8">
            <label className="text-slate-700 text-[13px] font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g example.gmail.com"
              className="w-full mt-2 rounded-xl border border-slate-200 px-4 py-3 text-[14px] text-slate-800 placeholder:text-slate-300 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition"
            />
          </div>
        </div>

        {/* Continue button */}
        <div className="px-6 pb-8 pt-4">
          <button className="w-full bg-sky-500 hover:bg-sky-600 transition-colors text-white font-semibold text-[15px] rounded-xl py-3.5 flex items-center justify-center gap-2">
            Continue
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}