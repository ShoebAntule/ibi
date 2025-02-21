
import React from "react";

export const About: React.FC = () => {
  return (
    <section className="px-10 py-20">
      <div>
        <span className="text-[#3ED5DD] text-[21px] font-semibold mb-2.5 block">
          ABOUT US
        </span>
        <h2 className="text-[67px] font-semibold leading-[1.2] mb-5 max-md:text-5xl max-sm:text-[28px]">
          Leading the Way in Cyber Security Solutions
        </h2>
        <p className="text-base leading-[1.6] opacity-80 mb-10 max-w-[800px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          congue metus quis accumsan euismod. Maecenas sed est mollis, convallis
          nisi convallis, imperdiet massa.
        </p>
      </div>
    </section>
  );
};
