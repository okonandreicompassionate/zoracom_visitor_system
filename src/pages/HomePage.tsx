import Button from "antd/es/button";
import { ArrowRight } from "lucide-react";

export default function VisitorTrackerWelcome() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-100 p-4">
      {/* Phone frame */}
      <div className=" flex flex-col">
        {/* Status bar */}

        {/* Main content */}
        <div className="flex-1 flex flex-col items-center px-7 pt-6">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img
              src="https://i.imgur.com/uedBC6w.png"
              alt="VMS logo"
              className="h-5 w-auto"
            />
          </div>

          {/* Headline */}
          <div className="text-center mt-[50px]">
            <p className="text-slate-800 text-[15px]">Welcome to</p>
            <h1 className="!text-sky-700 text-[26px] font-bold mt-0.5">
              Visitor Tracker
            </h1>
            <p className="text-slate-500 text-[13px] leading-snug mt-2 px-2">
              Secure visitor check-in and approval made <br />
              simple
            </p>
          </div>

          {/* Image card */}
          <div className="relative w-[350px] mt-7 rounded-2xl bg-sky-50 p-2.5">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://i.imgur.com/Uf8LrZJ.png"
                alt="Gated residential estate"
                className="w-full h-[190px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Get Started button */}
        <div className="px-6 pb-8 pt-[118px]">
          <Button
            type="primary"
            size="large"
            block
            className="rounded-xl text-[15px] font-semibold"
            icon={<ArrowRight size={18} />}
            iconPosition="end"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
