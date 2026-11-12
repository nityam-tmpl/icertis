
import Image from "next/image";

const stats = [
  { value: "25%", line1: "faster", line2: "contract cycles" },
  { value: "1.4M", line1: "contracts", line2: "managed" },
  { value: "90%", line1: "workflow", line2: "automation" },
  { value: "17K", line1: "users", line2: "across business" },
  { value: "360°", line1: "contract", line2: "visibility" },
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

          {/* Section Heading */}
          <h2 className="font-display mb-8 mt-4 max-w-3xl text-3xl leading-tight sm:mb-10 sm:text-4xl lg:mb-12 lg:mt-6 lg:text-5xl">
            Accenture is an{" "}
            <span className="text-[#994353]">
              Icertis Customer
            </span>
          </h2>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 lg:grid-cols-5 lg:gap-4">

            {stats.map((stat) => (
              <div
                key={stat.value}
                className="flex min-h-[140px] flex-col justify-center rounded-[18px] border border-[#e5e5df] bg-[#ecece8] p-5 sm:min-h-[150px] lg:p-5"
              >
                <h3 className="font-serif text-3xl leading-none text-[#994353] sm:text-4xl">
                  {stat.value}
                </h3>

                {/* Divider */}
                <div className="my-3 h-px w-8 shrink-0 bg-[#817b73]" />

                {/* Description */}
                <p className="text-xs leading-relaxed text-[#171714] sm:text-sm">
                  {stat.line1}
                  <br />
                  {stat.line2}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
