import Image from "next/image";
import Link from "next/link";

const statistics = [
  { value: "75+", lines: ["Icertis Implementations", "by Accenture"] },
  { value: "350+", lines: ["Icertis Certified", "Professionals"] },
];

export function PartnerSection() {
  return (
    <>
      <section className="page-cont relative mx-auto grid max-w-[1440px] grid-cols-1 gap-9 pt-7 pb-12 sm:gap-x-8 sm:gap-y-12 sm:pt-10 sm:pb-20 lg:min-h-[740px] lg:grid-cols-[1.2fr_1fr] min-[1440px]:block min-[1440px]:h-[740px] min-[1440px]:py-0" aria-labelledby="partner-heading">
        <nav aria-label="Breadcrumb" className="col-span-full whitespace-nowrap text-sm leading-5 sm:text-base min-[1440px]:absolute min-[1440px]:top-10 min-[1440px]:left-[100px]">
          <ol className="flex items-center gap-3 [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-5 [&_a:focus-visible]:outline-[#874451]">
            <li><Link href="/">Home</Link></li>
            <li aria-hidden="true">&gt;</li>
            <li aria-current="page" className="font-semibold">Icertis Partner page</li>
          </ol>
        </nav>
        <div className="min-w-0 max-w-[592px] min-[1440px]:absolute min-[1440px]:top-[136px] min-[1440px]:left-[100px] min-[1440px]:w-[592px]">
          <p className="flex h-[38px] w-[220px] items-center justify-center rounded-[50px] border hover:bg-[#ebece7] border-[#874451] text-sm font-medium text-[#874451]">System Integrator Partner</p>
          <h1 id="partner-heading" className="mt-6 font-display text-4xl leading-[46px] font-medium sm:mt-[30px] sm:text-[40px] sm:leading-[52px] min-[1440px]:text-5xl min-[1440px]:leading-[60px] min-[1440px]:whitespace-nowrap">
            <span>Accenture + </span>
            <span className="text-[#874451]">Icertis</span>
          </h1>
          <p className="mt-5 text-base leading-7">
            Modernizing CLM in the age of AI through agents, advanced analytics and
            enterprise system integration.
          </p>
          <dl className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-5 min-[1440px]:mt-[60px] min-[1440px]:grid-cols-[195px_219px] min-[1440px]:gap-x-[65px]">
            {statistics.map(({ value, lines }) => (
              <div key={value}>
                <dt className="font-display text-[44px] leading-[48px] font-medium text-[#874451] italic">{value}</dt>
                <dd className="mt-2.5 text-base leading-6">{lines[0]}<br />{lines[1]}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-col items-stretch gap-5 sm:flex-row sm:flex-wrap min-[1440px]:mt-[60px] min-[1440px]:flex-nowrap">
            <a className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#24150f] text-base font-semibold whitespace-nowrap text-white transition-colors hover:bg-[#45302a] focus-visible:outline-2 focus-visible:outline-offset-5 focus-visible:outline-[#874451] sm:w-48" href="https://www.icertis.com/request-a-demo/">
              Request Demo
            </a>
            <a className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-[#d2d2d2] bg-white text-base font-semibold whitespace-nowrap text-[#874451] transition-colors hover:bg-[#ebece7] focus-visible:outline-2 focus-visible:outline-offset-5 focus-visible:outline-[#874451] sm:w-[180px]" href="https://www.icertis.com/solutions/">
              Explore Solutions
            </a>
          </div>
        </div>
        <Image
          src="/images/f1.svg"
          alt="Accenture and Icertis partnership: Powering Enterprise Reinvention Through AI-Driven Contract Intelligence"
          width={500}
          height={560}
          preload
          sizes="(min-width: 1440px) 500px, (min-width: 1024px) 40vw, (min-width: 640px) 500px, calc(100vw - 40px)"
          className="h-auto w-full max-w-[500px] self-center justify-self-center rounded-[40px] object-contain lg:max-w-none min-[1440px]:absolute min-[1440px]:top-[100px] min-[1440px]:right-[100px] min-[1440px]:h-[560px] min-[1440px]:w-[500px]"
        />
      </section>
      <section className="relative flex h-[110px] items-center overflow-hidden bg-[#ebece7] sm:h-40 lg:block lg:h-[200px]" aria-label="Our partners">
        <Image
          src="/images/logos.svg"
          alt="Icertis partner logos"
          width={1140}
          height={80}
          sizes="(min-width: 1280px) 1140px, 90vw"
          className="relative mx-auto h-auto w-[calc(100%-40px)] object-contain sm:w-[min(1140px,calc(100%-80px))] lg:top-[82px] min-[1440px]:h-20 min-[1440px]:w-[1140px]"
        />
      </section>
    </>
  );
}
