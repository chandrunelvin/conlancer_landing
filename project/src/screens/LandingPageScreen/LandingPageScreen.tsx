import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
// import { DivWrapperByConlancer } from "../sections/DivWrapperByConlancer";

// import { FooterByConlancer } from "./sections/FooterByConlancer";
// import { FrameByConlancer } from "./sections/FrameByConlancer";
// import { FrameWrapperByConlancer } from "./sections/FrameWrapperByConlancer";
// import { HeroByConlancer } from "./sections/HeroByConlancer";
// import { LandingPageByConlancer } from "./sections/LandingPageByConlancer";
// import { LandingPageWrapperByConlancer } from "./sections/LandingPageWrapperByConlancer";
// import { TimerByConlancer } from "./sections/TimerByConlancer";
// import { TimerWrapperByConlancer } from "./sections/TimerWrapperByConlancer";
import { Toaster } from "react-hot-toast";
import { Menu, X } from "lucide-react";
import { HeroByConlancer } from "./sections/HeroByConlancer/HeroByConlancer";
import { FrameByConlancer } from "./sections/FrameByConlancer/FrameByConlancer";
import { FrameWrapperByConlancer } from "./sections/FrameWrapperByConlancer/FrameWrapperByConlancer";
import { TimerByConlancer } from "./sections/TimerByConlancer/TimerByConlancer";
import { TimerWrapperByConlancer } from "./sections/TimerWrapperByConlancer/TimerWrapperByConlancer";
import { LandingPageByConlancer } from "./sections/LandingPageByConlancer/LandingPageByConlancer";
import { DivWrapperByConlancer } from "./sections/DivWrapperByConlancer";
import { LandingPageWrapperByConlancer } from "./sections/LandingPageWrapperByConlancer/LandingPageWrapperByConlancer";
import { FooterByConlancer } from "./sections/FooterByConlancer/FooterByConlancer";

export const LandingPageScreen = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation menu items
  const navItems = [
    { label: "HOME", href: "#" },
    { label: "ABOUT US", href: "#aboutus" },
  ];

  return (
    <div
      className="flex flex-col items-center relative bg-[#ffffff] w-full"
      data-model-id="2945:5556"
    >
      {/* Desktop Navigation Menu (hidden on mobile) */}
      <NavigationMenu className="absolute top-[30px] z-10 hidden md:block">
        <NavigationMenuList className="flex gap-[70px]">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-ffffff text-lg hover:text-gray-300 transition-colors"
                href={item.href}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Menu Toggle Button - Only shows when mobile menu is closed */}
      {!mobileMenuOpen && (
        <button
          className="absolute top-[30px] right-[30px] z-20 md:hidden text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      )}

      {/* Mobile Menu (visible when open) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-90 md:hidden flex flex-col items-center justify-center">
          <div className="flex flex-col gap-8 text-center">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-xl hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          {/* Close button - Only shows when mobile menu is open */}
          <button
            className="absolute top-8 right-8 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
      )}

      {/* Rest of your content */}
      <div className="flex flex-col w-full max-w-[100%] items-center justify-center gap-[100px]">
        {/* <HeroByConlancer />
        <FrameByConlancer />
        <FrameWrapperByConlancer />
        <TimerByConlancer />
        <TimerWrapperByConlancer />
        <LandingPageByConlancer />
        <LandingPageWrapperByConlancer />
        <DivWrapperByConlancer />
        <FooterByConlancer /> */}
        <HeroByConlancer />
        <FrameByConlancer />
        <FrameWrapperByConlancer />
        <TimerByConlancer />
        <TimerWrapperByConlancer />
        <LandingPageByConlancer />
        <LandingPageWrapperByConlancer />
        <DivWrapperByConlancer />
        <FooterByConlancer />
        <Toaster position="top-center" />
      </div>

      <div className="relative w-28 h-28 self-start ml-[353px] mt-[-5518px] rotate-[-15deg] hidden sm:block">
        <img
          className="absolute w-[111px] h-[111px] top-[13rem] left-[-3rem] rotate-[15deg]"
          src="./up-arrow-icon.png"
          alt="Group"
        />
      </div>
    </div>
  );
};
