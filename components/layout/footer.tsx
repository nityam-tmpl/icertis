import Image from "next/image";
 
const footerColumns = [
  {
    title: "Products",
    links: [
      { label: "Engage", href: "https://www.icertis.com/products/engage/" },
      { label: "Operate", href: "https://www.icertis.com/products/operate/" },
      { label: "Analyze", href: "https://www.icertis.com/products/analyze/" },
      { label: "Vera Copilot", href: "https://www.icertis.com/products/platform/copilot/" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Department", href: "https://www.icertis.com/solutions/" },
      { label: "Financial Services", href: "https://www.icertis.com/solutions/industry-solutions/" },
      { label: "Healthcare & Life Sciences", href: "https://www.icertis.com/solutions/industry-solutions/" },
      { label: "Industrial", href: "https://www.icertis.com/solutions/industry-solutions/" },
      { label: "Public Sector", href: "https://www.icertis.com/solutions/industry-solutions/" },
      { label: "Retail and Consumer Goods", href: "https://www.icertis.com/solutions/industry-solutions/" },
      { label: "TMT and Consulting", href: "https://www.icertis.com/solutions/industry-solutions/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Analyst Reports", href: "https://www.icertis.com/research/analyst-reports/" },
      { label: "Customer Stories", href: "https://www.icertis.com/customers/customer-stories/" },
      { label: "eBooks", href: "https://www.icertis.com/research/ebooks/" },
      { label: "Blog", href: "https://www.icertis.com/research/blog/" },
      { label: "Learn About CLM", href: "https://www.icertis.com/learn/what-is-contract-lifecycle-management" },
      { label: "Contracting Basics", href: "https://www.icertis.com/learn/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Company", href: "https://www.icertis.com/company/" },
      { label: "News", href: "https://www.icertis.com/company/news/" },
      { label: "Careers", href: "https://www.icertis.com/company/careers/" },
      { label: "Events", href: "https://www.icertis.com/company/events/" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "What is Contract Management?", href: "https://www.icertis.com/learn/what-is-contract-management/" },
      { label: "What is Contract Intelligence?", href: "https://www.icertis.com/learn/what-is-contract-intelligence/" },
      { label: "What is Contract Lifecycle Management?", href: "https://www.icertis.com/learn/what-is-contract-lifecycle-management" },
      { label: "What is a Contractual Obligation?", href: "https://www.icertis.com/contracting-basics/contractual-obligations" },
      { label: "What is Contract Performance?", href: "https://www.icertis.com/learn/what-is-contract-performance/" },
      { label: "What is Contract Compliance?", href: "https://www.icertis.com/contracting-basics/what-is-contract-compliance/" },
      { label: "Generative AI in Contract Management", href: "https://www.icertis.com/learn/how-generative-ai-is-changing-contract-management/" },
    ],
  },
];
 
const legalLinks = [
  { label: "Cookie Policy", href: "https://www.icertis.com/privacy-statement/cookie-policy/" },
  { label: "Privacy Statement", href: "https://www.icertis.com/information/icertis-privacy-statement/" },
  { label: "Disclaimer", href: "https://www.icertis.com/information/disclaimer/" },
  { label: "Trust Center", href: "https://www.icertis.com/information/trust-center/" },
];
 
function FooterLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="w-fit max-w-full text-sm font-normal leading-[1.45] text-[#a59c9d] transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      {children}
    </a>
  );
}
 
export default function Footer() {
  return (
    <footer className="bg-[#20161b] font-inter text-white">
      <div className="global-container">
      <div className="mx-auto grid max-w-[1760px] gap-x-10 gap-y-8 py-8 sm:py-10 lg:grid-cols-[1.3fr_repeat(5,minmax(0,1fr))] lg:py-12">
        <div className="flex flex-col items-start gap-3 border-b border-[#615457] pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
          <a href="https://www.icertis.com/" aria-label="Icertis home" className="inline-flex">
            <Image
              src="/images/IcertisLogo.svg"
              alt="Icertis"
              width={160}
              height={54}
              className="h-[50px] w-[150px] brightness-0 invert"
            />
          </a>
          <p className="text-sm font-normal text-[#a59c9d]">
            ©  Icertis. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex flex-col items-start gap-3">
            {legalLinks.map((link) => (
              <FooterLink key={link.label} href={link.href}>{link.label}</FooterLink>
            ))}
          </nav>
        </div>
 
        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={column.title} className="flex flex-col items-start gap-3">
            <h2 className="mb-0.5 text-base font-semibold text-[#f3f0ef]">
              {column.title}
            </h2>
            <div className="flex flex-col items-start gap-3">
              {column.links.map((link) => (
                <FooterLink key={link.label} href={link.href}>{link.label}</FooterLink>
              ))}
            </div>
          </nav>
        ))}
      </div>
      </div>
    </footer>
  );
}
 