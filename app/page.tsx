import { BookLayout } from "@/components/proposal/book-layout";
import { CoverPage } from "@/components/proposal/cover-page";
import { InsideCover } from "@/components/proposal/inside-cover";
import { ObjectivesPage } from '@/components/proposal/objectives-page';
import { StructurePage } from '@/components/proposal/structure-page';
import { UxUiPage } from '@/components/proposal/ux-ui-page';
import { TechApproachPage } from '@/components/proposal/tech-approach-page';
import { MigrationPage } from '@/components/proposal/migration-page';
import { TimelinePage } from '@/components/proposal/timeline-page';
import { SupportPage } from '@/components/proposal/support-page';
import { InvestmentPage } from '@/components/proposal/investment-page';
import { FinalPage } from '@/components/proposal/final-page';
import { ProposalContent } from "@/components/blocks/proposal-content";

export default function Home() {
  return (
    // Force main to take full viewport height and width, removing default browser margins/scroll if any
    <main className="h-screen w-screen overflow-hidden bg-zinc-950">
      <BookLayout pageTitles={[
        "Cover",
        "How This Proposal Is Organised",
        "Objectives & Success Criteria",
        "Proposed Site Structure (Information Architecture)",
        "UX/UI Direction & Content Approach",
        "Technical Approach (Build, Hosting, Security)",
        "Migration, QA Testing & Go-Live Plan",
        "Timeline & Milestones (to 31 July 2026)",
        "Support, Maintenance & Service Levels",
        "Investment Summary",
        "Team & Relevant Work"
      ]}>
        {/* Page 0: Cover */}
        <CoverPage />

        {/* Page 1: Inside Cover */}
        <InsideCover />

        {/* Page 2: Objectives & Success Criteria */}
        <ObjectivesPage />

        {/* Page 3: Site Structure */}
        <StructurePage />

        {/* Page 4: UX/UI Direction */}
        <UxUiPage />

        {/* Page 5: Technical Approach */}
        <TechApproachPage />

        {/* Page 6: Migration & Go-Live */}
        <MigrationPage />

        {/* Page 7: Timeline & Milestones */}
        <TimelinePage />

        {/* Page 8: Support & Maintenance */}
        <SupportPage />

        {/* Page 9: Investment Summary */}
        <InvestmentPage />

        {/* Page 11: Final Page */}
        <FinalPage />
      </BookLayout>
    </main>
  );
}
