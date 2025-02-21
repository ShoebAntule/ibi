import React from "react";
import { Button } from "../ui/Button";

export const Hero: React.FC = () => {
  return (
    <section className="flex items-center justify-between relative overflow-hidden px-10 py-[120px] max-md:flex-col max-md:text-center">
      <div className="max-w-[600px] z-[1] max-md:mb-[50px]">
        <h1 className="text-[67px] font-semibold leading-[1.2] mb-5 max-md:text-5xl max-sm:text-[28px]">
          Empowering You in the Digital Age
        </h1>
        <p className="text-base leading-[1.6] opacity-80 mb-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          congue metus quis accumsan euismod.
        </p>
        <Button>Purchase</Button>
      </div>

      <div className="relative z-[1]">
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg id="0:196" width="1658" height="805" viewBox="0 0 1658 805" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero-shield">
            <path d="M1463.72 229.471L1460.45 231.873C1460.83 231.647 1461.21 231.431 1461.59 231.206C1462.82 230.358 1464.04 229.507 1465.27 228.647C1464.76 228.924 1464.24 229.194 1463.72 229.471Z" fill="url(#paint0_linear_0_196)"/>
            <!-- SVG path data continues... -->
          </svg>`,
          }}
        />
      </div>
    </section>
  );
};
