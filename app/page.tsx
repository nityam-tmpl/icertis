import CustomerSection from "@/components/partner/partner-impact";
import { PartnerSection } from "@/components/partner/partner-section";
import WhyIcertisAccenture from "@/components/why-icertis";

export default function Home() {
  return (
    <main className="w-full">
      <PartnerSection />
      <CustomerSection />
      <WhyIcertisAccenture />
    </main>
  );
}
