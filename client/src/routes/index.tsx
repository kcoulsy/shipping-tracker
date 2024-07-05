import { HomepageFooter } from "@/components/homepage/footer";
import { HomepageHero } from "@/components/homepage/hero";
import { HomepageSolutions } from "@/components/homepage/solutions";
import { HomepageTestamonials } from "@/components/homepage/testamonials";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <HomepageHero />
      <HomepageSolutions />
      <HomepageTestamonials />
      <HomepageFooter />
    </div>
  );
}
