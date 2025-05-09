import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { FooterByAnima } from "./sections/FooterByAnima";
import { FrameByAnima } from "./sections/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima";
import { HeroByAnima } from "./sections/HeroByAnima";
import { LandingPageByAnima } from "./sections/LandingPageByAnima";
import { LandingPageWrapperByAnima } from "./sections/LandingPageWrapperByAnima";
import { TimerByAnima } from "./sections/TimerByAnima";
import { TimerWrapperByAnima } from "./sections/TimerWrapperByAnima";
import { Toaster } from "react-hot-toast";
import { Menu, X } from "lucide-react"; // Import hamburger and close icons

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

      {/* Mobile Hamburger Menu Button (visible on mobile) */}
      <button
        className="absolute top-[30px] right-[30px] z-20 md:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

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
          <button
            className="absolute top-8 right-8 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
      )}

      <div className="flex flex-col w-full max-w-[100%] items-center justify-center gap-[100px]">
        <HeroByAnima />
        <FrameByAnima />
        <FrameWrapperByAnima />
        <TimerByAnima />
        <TimerWrapperByAnima />
        <LandingPageByAnima />
        <LandingPageWrapperByAnima />
        <DivWrapperByAnima />
        <FooterByAnima />
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
