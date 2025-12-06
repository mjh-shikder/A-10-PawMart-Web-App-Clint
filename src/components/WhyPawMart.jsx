import React from "react";

const WhyPawMart = () => {
  return (
    <div className=" py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Why Adopt from <span className="text-accent">PawMart?</span>
        </h2>

        <p className="text-gray-600 text-lg mb-8">
          At PawMart, we believe every pet deserves a loving home. By choosing
          to adopt instead of buying, you're giving an innocent animal a second
          chance at life and helping reduce pet homelessness.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          {/* Card 1 */}
          <div className="bg-base-100 hover:bg-gray-200 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-2">
              ❤️ Make a Real Difference
            </h3>
            <p className="text-gray-600">
              Your adoption helps save lives and supports a more compassionate
              pet community.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-base-100 hover:bg-gray-200 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-2">
              🌱 Support Ethical Pet Ownership
            </h3>
            <p className="text-gray-600">
              Adopting helps discourage unethical breeding and encourages
              responsible pet care.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-base-100 hover:bg-gray-200 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-2">
              🤝 Verified & Community-Driven
            </h3>
            <p className="text-gray-600">
              PawMart listings are verified to ensure safe, trustworthy adoption
              experiences.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-base-100 hover:bg-gray-200 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-2">
              🏡 A Lifelong Companion
            </h3>
            <p className="text-gray-600">
              Rescued pets are loyal and loving — adopting builds a bond that
              lasts a lifetime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPawMart;
