import { Menu } from "@/components/Menu";
import { SectionRail } from "@/components/SectionRail";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Socials } from "@/components/Socials";
import { TechStack } from "@/components/TechStack";
import { Bookshelf } from "@/components/Bookshelf";
import { About } from "@/components/About";
import { GitHubActivity } from "@/components/GitHubActivity";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SectionRail />
      <Menu />
      <main id="top" className="mx-auto w-full max-w-3xl px-5 pt-8 pb-8 sm:pl-20 xl:pl-5">
        <div className="flex flex-col gap-10">
          <Hero />
          <Projects />
          <Socials />
          <TechStack />
          <Bookshelf />
          <About />
          <GitHubActivity />
        </div>
      </main>
      <Footer />
    </>
  );
}
