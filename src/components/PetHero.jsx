import React from "react";
import { FaPaw } from "react-icons/fa";
import { Link } from "react-router";

const PetHero = () => {
  const petHeroes = [
    {
      id: 1,
      name: "Hablu Mia",
      petName: "Luna 🐈",
      story:
        "Adopted Luna, a shy rescue cat, in 2022. Today she's the queen of the house and even lets the kids dress her up!",
          sinceYear: "2024",
      image: 'https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: "Josmi Uddin",
      petName: "Buddy 🐶",
      story:
        "Gave Buddy a second chance after he was surrendered twice. Now they're inseparable hiking partners.",
        sinceYear: "2021",
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
      id: 3,
      name: "Rony",
      petName: "Coco & Milo 😺",
      story:
        "Adopted senior siblings Coco and Milo together so they wouldn't be separated. Best decision ever!",
        sinceYear: "2023",
            image: 'https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
      id: 4,
      name: "Ripon Mia",
      petName: "Whiskers 🦮",
      story:
        "Fostered Whiskers during a difficult time and couldn't let him go. Fostering turned into forever!",
        sinceYear: "2025",
            image: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
  ];

  return (
    <div>
      <section className="py-16 bg-base-100 rounded-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <FaPaw className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-primary">Pet Heroes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real families who opened their hearts and homes
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {petHeroes.map((hero) => (
              <div
                key={hero.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                  <div className="bg-gray-300 border-4 border-dashed rounded-full w-32 h-32">
                            <img
                                className="w-full h-full rounded-full object-center "
                      src={hero.image}
                      alt=""
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1">
                    <span>❤️</span> {hero.sinceYear}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    
                    <h3 className="text-lg font-bold text-gray-900">
                      {hero.name}
                    </h3>
                        </div>
                        
                  <p className="text-2xl font-semibold text-primary mb-3">
                    {hero.petName}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {hero.story}
                  </p>
                </div>

                {/* Hover accent ring */}
                <div className="absolute inset-0 rounded-2xl ring-4 ring-transparent group-hover:ring-accent/20 transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default PetHero;
