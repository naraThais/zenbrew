"use client";
import Explore from "@/components/Explore";
import About from "@/components/About";
import Hero from "@/components/Hero";
import { useEffect } from "react";

const Home = () => {
  // add locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scrollContainer = document.querySelector("[data-scroll-container]");
      if (scrollContainer) {
        new LocomotiveScroll({
          el: scrollContainer,
          smooth: true,
        });
      }
    };
    loadLocomotiveScroll();
  }, []);
  return (
    <div className="h-full overflow-x-hidden" data-scroll-container>
      <Hero />
      <Explore />
      <About />
      {/* temporary div */}
      <div className="h-[4000px]"></div>
    </div>
  );
};

export default Home;
