
import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(23,23,23,0.9)] px-10 py-16">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <Link to="/" className="text-2xl font-bold text-[#3ED5DD] mb-6 block">
            CyberEz
          </Link>
          <p className="text-base leading-[1.6] opacity-80">
            Protecting your digital assets with cutting-edge security solutions.
          </p>
        </div>

        {[
          {
            title: "Company",
            links: ["About", "Services", "Team", "Contact"],
          },
          {
            title: "Resources",
            links: ["Blog", "Newsletter", "Events", "Help center"],
          },
          {
            title: "Legal",
            links: ["Terms", "Privacy", "Cookies", "Licenses"],
          },
        ].map((section) => (
          <div key={section.title}>
            <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
            <ul className="space-y-4">
              {section.links.map((link) => (
                <li key={link}>
                  <Link
                    to="#"
                    className="text-base opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto border-t border-[rgba(255,255,255,0.1)] mt-12 pt-8 text-center text-sm opacity-60">
        © {new Date().getFullYear()} CyberEz. All rights reserved.
      </div>
    </footer>
  );
};
