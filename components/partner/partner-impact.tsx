
import Image from "next/image";

const stats = [
  { value: "60K+", line1: "Accenture users on ", line2: "Icertis" },
  { value: "150K+", line1: "Contracts", line2: "managed per year" },
  { value: "45", line1: "Countries", line2: "worldwide" },
  { value: "95%", line1: "Non-Accenture ", line2: "contract templates" },
  { value: "100K+", line1: "Sales contracts ", line2: "managed per year" },
];

const experienceCards = [
  {
    src: "/images/c1.svg",
    alt: "Enhanced Compliance",
    description: "Improve compliance with smarter contract management.",
  },
  {
    src: "/images/c2.svg",
    alt: "Faster Cycle Times",
    description: "Accelerate contract processes and reduce turnaround time.",
  },
  {
    src: "/images/c3.svg",
    alt: "Unified Data",
    description: "Connect contract data for better visibility and insights.",
  },
  {
    src: "/images/c4.svg",
    alt: "Reduced Risk",
    description: "Identify risks early and make more informed decisions.",
  },
];

export default function CustomerSection() {
  return (
    <section className="w-full text-[#291e19]">
      <div className="relative isolate overflow-hidden page-cont bg-[#f7f7f2] py-10 sm:py-12 lg:py-16">

        {/* Decorative Background Image */}
        <Image
          src="/images/BG.png"
          alt=""
          width={395}
          height={224}
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-16 z-0 w-[150px] select-none sm:-right-8 sm:-top-24 sm:w-[250px] lg:-top-32 lg:w-[395px]"
        />

        {/* Main Content */}
        <div className="page-container relative z-10">

          {/* Existing Section Heading */}
          <h2 className="font-display font-medium mb-8 mt-4 max-w-3xl text-3xl leading-tight sm:mb-10 sm:text-4xl lg:mb-12 lg:mt-6 lg:text-5xl">
            Accenture is an{" "}
            <span className="text-[#994353]">
              Icertis Customer
            </span>
          </h2>

          {/* Existing Statistics Cards */}
          <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="flex min-h-[140px] flex-col justify-center rounded-[18px] border border-[#e5e5df] bg-[#ecece8] p-5 sm:min-h-[150px] lg:p-5"
              >
                <h3 className="font-serif text-3xl leading-none text-[#994353] sm:text-4xl">
                  {stat.value}
                </h3>

                <div className="my-3 h-px w-8 shrink-0 bg-[#817b73]" />

                <p className="text-xs leading-relaxed text-[#171714] sm:text-sm">
                  {stat.line1}
                  <br />
                  {stat.line2}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Existing Accenture's Journey Section */}
        <div className="relative z-10">
          <h2 className="font-display font-medium mb-4 mt-8 max-w-3xl text-3xl leading-tight sm:mb-10 sm:text-4xl lg:mb-12 lg:mt-20 lg:text-5xl">
            Accenture&apos;s {" "}
            <span className="text-[#994353]">
              Journey
            </span>
          </h2>

          <Image
            alt="Accenture and Icertis partnership: Powering Enterprise Reinvention Through AI-Driven Contract Intelligence"
            src="/images/f2.svg"
            width={1186}
            height={194}
            sizes="(min-width: 1280px) 1140px, 90vw"
            className="fill"
          />
        </div>

        {/* Experience Section */}
        <div className="relative z-10 mt-16 sm:mt-20 lg:mt-24">

          <h2 className="font-display mb-8 max-w-[870px] text-3xl font-medium leading-tight sm:mb-10 sm:text-4xl sm:leading-[50px] lg:mb-10 lg:text-[48px] lg:leading-[60px]">
            Experience brought to { " "}
            <span className="text-[#874451]">
              every customer
            </span>
          </h2>

          {/* Experience SVG Cards */}
          <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-3 lg:grid-cols-4">
  {experienceCards.map((card) => (
    <div
      key={card.src}
      className="group relative w-full max-w-[290px] overflow-hidden rounded-[18px] transition-transform duration-300 hover:scale-105"
    >
      <Image
        src={card.src}
        alt={card.alt}
        width={290}
        height={260}
        className="h-auto w-full"
      />

      {/* Hover Description */}
      <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/75 p-3 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-sm leading-relaxed">
          {card.description}
        </p>
      </div>
    </div>
  ))}
</div>
        </div>

        

      </div>
    </section>
  );
}
