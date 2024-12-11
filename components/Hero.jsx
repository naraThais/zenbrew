"use client";

import Separator from "./Separator";
import Badge from "./Badge";
import React from "react";

const Hero = () => {
  return (
    <section className="h-[80vh] xl:h-screen relative text-white ">
      {/* overlay */}
      <div>overlay</div>
      {/* video */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/assets/hero/video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;