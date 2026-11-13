
"use client";

import Image from "next/image";
import { useState } from "react";

const stats = [
  {
    value: "$1T+",
    description: "Contract value on Icertis platform",
    hoverDescription:
      "Manage and optimize contracts with a platform supporting significant contract value.",
  },
  {
    value: "50+",
    description: "Joint customers",
    hoverDescription:
      "Bringing Icertis and Accenture expertise together for enterprise customers.",
  },
  {
    value: "3,300+",
    description: "Accenture procurement specialists",
    hoverDescription:
      "A global team of specialists supporting procurement transformation.",
  },
  {
    value: "2,300+",
    description: "Documented best practices",
    hoverDescription:
      "Proven practices that help organizations improve contract management.",
  },
];

const tabs = [
  {
    title: "Industry Leadership",
    points: [
      "IDC MarketScape Leader – AI-Enabled Buy-Side CLM, 2025",
      "Leader in The Forrester Wave™: CLM Platforms, 2025",
      "Gartner Peer Insights Customers' Choice, 2026",
      "Accenture – HFS Intelligent Supply Chain Services Leader, 2025",
    ],
  },
  {
    title: "Co-Innovation Commitment",
    points: [
      "Joint development of AI-powered contract management solutions",
      "Continuous innovation through shared industry expertise",
      "Collaborative approach to solving complex business challenges",
      "Focus on delivering measurable business value",
    ],
  },
  {
    title: "Global Delivery",
    points: [
      "Global delivery capabilities across multiple regions",
      "Consistent implementation and deployment methodologies",
      "Access to a global network of certified professionals",
      "Scalable solutions for complex enterprise requirements",
    ],
  },
  {
    title: "Joint SAP Solution Innovation",
    points: [
      "Integration of contract intelligence with SAP ecosystems",
      "Streamlined procurement and business processes",
      "Connected enterprise data for better decision-making",
      "Improved visibility across the contract lifecycle",
    ],
  },
];

export default function WhyIcertisAccenture() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">

      {/* Decoration Outside Page Container */}
      <Image
        src="/images/b3.svg"
        alt=""
        width={377}
        height={400}
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[75%] z-0 hidden h-auto w-[180px] -translate-y-1/2 lg:block xl:w-[250px] 2xl:w-[300px]"
      />

      <div className="page-cont relative z-10">

        {/* Section Heading */}
        <h2 className="mb-10 font-display text-3xl font-medium leading-tight text-[#303030] sm:text-4xl lg:mb-[60px] lg:text-[48px] lg:leading-[60px]">
          Why{" "}
          <span className="text-[#874451]">
            Icertis + Accenture
          </span>
        </h2>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="group relative flex min-h-[190px] w-full max-w-[290px] flex-col justify-center overflow-hidden rounded-xl border border-[#bdbdbd] bg-[#E2E2E2] p-6 transition-transform duration-300 hover:scale-105"
            >
              {/* Statistic Value */}
              <h3 className="font-display text-[42px] font-medium leading-tight text-[#874451]">
                {stat.value}
              </h3>

              {/* Divider */}
              <div className="my-3 h-px w-8 shrink-0 bg-[#817b73]" />

              {/* Description */}
              <p className="text-[18px] leading-snug text-[#303030]">
                {stat.description}
              </p>

              {/* Hover Description */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/75 p-3 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm leading-relaxed">
                  {stat.hoverDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

        
{/* Interactive Tabs Section */}
<div className="relative mt-16 lg:mt-24">

  {/* Combined Control Panel and Information Panel */}
  <div className="w-full overflow-hidden rounded-2xl bg-[#F8F6F1]">

    {/* Tab Buttons */}
    <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
      {tabs.map((tab, index) => (
        <button
          key={tab.title}
          type="button"
          onClick={() => setActiveTab(index)}
          aria-pressed={activeTab === index}
          className={`relative flex min-h-[100px] items-center border-b border-[#874451]/20 p-4 pl-[70px] text-left transition-all duration-300 sm:min-h-[110px] sm:border-r-0 lg:border-b-0 ${
            activeTab === index
              ? "bg-[#874451] text-white"
              : "bg-[#F8F6F1] text-[#303030] hover:bg-[#eee9e3]"
          }`}
        >
          {/* Same Icon for All Tabs */}
          <Image
            src="/images/icon.svg"
            alt=""
            width={32}
            height={40}
            aria-hidden="true"
            className="absolute left-[25px] top-[25px] h-[40px] w-[32px]"
          />

          <span className="font-display text-base font-medium leading-snug sm:text-lg">
            {tab.title}
          </span>
        </button>
      ))}
    </div>

    {/* Dynamic Content Panel */}
    <div className="relative isolate min-h-[300px] overflow-hidden border-t border-[#874451]/20 px-6 py-8 sm:px-10 sm:py-10 lg:min-h-[340px] lg:px-12 lg:py-12">

      {/* Golden Decoration Inside Panel */}
      <Image
        src="/images/b2.svg"
        alt=""
        width={529}
        height={302}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[140px] opacity-90 sm:w-[200px] md:w-[260px] lg:-bottom-5 lg:-right-7 lg:w-[420px] xl:w-[500px]"
      />

      {/* Dynamic Heading */}
      <h3 className="relative z-10 mb-6 max-w-[650px] font-display text-2xl font-medium text-[#874451] sm:text-3xl lg:text-[36px]">
        {tabs[activeTab].title}
      </h3>

      {/* Dynamic Bullet Points */}
      <ul className="relative z-10 max-w-[700px] list-disc space-y-4 pl-5 text-base leading-relaxed text-[#303030] sm:text-lg">
        {tabs[activeTab].points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

    </div>
  </div>
</div>


      </div>
    </section>
  );
}
