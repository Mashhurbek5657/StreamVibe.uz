import React from "react";

export default function Start() {
  return (
    <div className="mt-[70px] flex justify-center px-6">
      <div className="w-full max-w-[1400px] h-[280px] rounded-[15px] bg-[url('/src/Conponit/Container.jpg')] bg-cover bg-center flex items-center justify-between px-10 text-white">
        <div className="max-w-[700px]">
          <h1 className="text-[40px] font-bold leading-tight">
            Start your free trial today!
          </h1>
          <p className="text-[15px] text-[#ccc] mt-2">
            This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.
          </p>
        </div>

        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-[16px] font-medium transition">
          Start a Free Trial
        </button>
      </div>
    </div>
  );
}
