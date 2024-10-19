"use client";
import { NavOptions } from "@/constant/navbarOption";
import { Tooltip } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const FooterNav = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = NavOptions.map((option) =>
      document.querySelector(option.href)
    );

    // console.log(sections);

    const observer = new IntersectionObserver(
      (entries) => {
        console.log("entries-->", entries);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    // console.log(observer);
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const handleScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
      window.history.pushState(null, "", targetId);
    }
  };

  return (
    <div className="px-3 py-1 rounded-full border-2 backdrop-blur-sm bg-buttonBgColor/50 text-default-100 flex gap-5 text-2xl">
      {NavOptions.map((navOption) => (
        <a
          key={navOption.href}
          href={`/${navOption.href}`}
          onClick={(e) => handleScroll(e, navOption.href)}
        >
          <div>
            <Tooltip
              content={navOption.label}
              size="sm"
              radius="full"
              offset={1}
              className="bg-primaryColor border-1 text-default-100 text-sm px-2 py-0"
            >
              <span
                className={
                  activeSection === navOption.href.substring(1)
                    ? "text-primaryColor"
                    : "text-white"
                }
              >
                {navOption.icon}
              </span>
            </Tooltip>
          </div>
        </a>
      ))}
    </div>
  );
};

export default FooterNav;
