
import React from "react";

export const Testimonials: React.FC = () => {
  return (
    <section className="px-10 py-20">
      <div className="text-center mb-16">
        <span className="text-[#3ED5DD] text-[21px] font-semibold mb-2.5 block">
          TESTIMONIALS
        </span>
        <h2 className="text-[67px] font-semibold leading-[1.2] mb-5 max-md:text-5xl max-sm:text-[28px]">
          What Our Clients Say
        </h2>
        <p className="text-base leading-[1.6] opacity-80 mb-10 mx-auto max-w-[600px]">
          Hear from our satisfied customers about their experience with our security solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {[
          {
            name: "John Doe",
            role: "CEO, Tech Corp",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod.",
          },
          {
            name: "Jane Smith",
            role: "CTO, Digital Solutions",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod.",
          },
          {
            name: "Mike Johnson",
            role: "Director, Security Inc",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod.",
          },
        ].map((testimonial) => (
          <div
            key={testimonial.name}
            className="testimonial-card p-8 rounded-2xl"
          >
            <p className="text-base leading-[1.6] opacity-80 mb-6">
              "{testimonial.content}"
            </p>
            <div>
              <h4 className="text-lg font-semibold">{testimonial.name}</h4>
              <p className="text-sm opacity-60">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
