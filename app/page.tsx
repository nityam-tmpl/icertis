import CustomerSection from "@/components/partner/partner-impact";
import { PartnerSection } from "@/components/partner/partner-section";

export default function Home() {
  return (
    <main className="w-full">
      <PartnerSection />
      <CustomerSection />
    </main>
  );
}
