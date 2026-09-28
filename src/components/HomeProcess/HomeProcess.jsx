import React from "react";
import video15 from "../../assets/video-15.mp4";

const HomeProcess = () => {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden bg-[#0F172A]">

      {/* Video */}
      <video
        src={video15}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Light Dark Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Text on Video */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">

        <p className="text-blue-400 font-semibold uppercase tracking-[0.2em] text-sm sm:text-base">
          Complete Home Journey
        </p>

        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
          From Plan to Handover
        </h2>

        <p className="mt-4 max-w-2xl text-gray-200 text-base sm:text-lg leading-7">
          We take care of every step of your home journey,
          from the first plan to the final handover.
        </p>

      </div>

    </section>
  );
};

export default HomeProcess;