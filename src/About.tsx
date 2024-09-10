import { BadgeCent, BrainCircuit, Store } from "lucide-react";
import { LandingFeatureList } from "./components/landing/feature/LandingFeatureList";
import { LandingBandSection } from "./components/landing/LandingBand";

import { LandingProductFeature } from "./components/landing/LandingProductFeature";
import { LandingProductFeaturesGrid } from "./components/landing/LandingProductFeaturesGrid";

import levi from "./assets/portraits/levi.jpg";
import yang from "./assets/portraits/yang.jpg";
import taylor from "./assets/portraits/taylor.jpg";
import matteo from "./assets/portraits/matteo.jpeg";
import aayushi from "./assets/portraits/aayushi.jpeg";
import vardhan from "./assets/portraits/vardhan.jpeg";
import pratham from "./assets/portraits/pratham.jpeg";

import kai from "./assets/portraits/kai_davenport.jpeg";
import luke from "./assets/portraits/luke_marsden.jpeg";
import david from "./assets/portraits/aronchick.jpeg";
import chris from "./assets/portraits/chris-hill.jpeg";
import michael from "./assets/portraits/michael_zargham.jpg";

import bg1 from "./assets/bg1.png";

export default function About() {
  const missionItems = [
    {
      icon: <BrainCircuit />,
      title: "Economic Empowerment via Agentic Representation",
      description:
        "Autonomous agents will soon be engaging in economic activity on your behalf. CoopHive empowers your agents by providing a platform where they can learn from, and cooperate with, other agents.",
    },

    {
      icon: <BadgeCent />,
      title: "Tokenization of Idle Computing Power",
      description:
        "Hardware is underutilized all around the world. The space of potentially valuable computations is infinite. CoopHive turns trash into treasure by putting otherwise wasted resources to good use.",
    },
    {
      icon: <Store />,
      title: "Neutral Marketplaces",
      description: "Token-agnostic, no-fee marketplaces.",
    },
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <LandingFeatureList title="Mission" featureItems={missionItems} />
      </div>
      <LandingProductFeaturesGrid title="Team" withBackground={false}>
        <LandingProductFeature
          title="Levi Rybalov - Founder"
          description="Levi works on mechanism design, distributed computing, verifiable computing, and multi-agent systems. Before founding CoopHive, he was at Protocol Labs researching the intersection of game theory and distributed computing networks."
          imageSrc={levi}
        />
        <LandingProductFeature
          title="Yang Zheng - Architect"
          description="Prev mmon Co., Mana Finance Co., Matrix Inc.,"
          imageSrc={yang}
        />
        <LandingProductFeature
          title="Taylor Hulsmans - Engineer"
          description="Prev at Molecule, Sigmadex, HedgeTrade. OSS contributor @ IPFS, Filecoin, various DeSci projects"
          imageSrc={taylor}
        />
        <LandingProductFeature
          title="Matteo Manzi - Researcher"
          description="Financial Machine Learning Quantitative Researcher. MSc Aerospace Engineer @ TU Delft. Prev CrunchDAO, European Space Agency, Marie Skłodowska-Curie Research Network"
          imageSrc={matteo}
        />
        <LandingProductFeature
          title="Aayushi Jain - SWE Intern"
          description="EECS @ UC Berkeley, 2024. Coinbase, Deloitte, Squishy Robotics"
          imageSrc={aayushi}
        />
        <LandingProductFeature
          title="Vardhan Shorewala - SWE Intern"
          description="EECS and Business Administration @ UC Berkeley, 2026. Amazon, IEEE, UCSF/LBNL"
          imageSrc={vardhan}
        />
        <LandingProductFeature
          title="Pratham Dave - SWE Intern"
          description="CS and Math @ Cornell, 2027"
          imageSrc={pratham}
        />
      </LandingProductFeaturesGrid>
      <LandingProductFeaturesGrid title="Advisors" withBackground={false}>
        <LandingProductFeature
          title="Kai Davenport"
          description="Architect for Bacalhau and Project Bravo @ Protocol Labs. Tech Lead, Momentum. Mythical 10x engineer in the flesh"
          imageSrc={kai}
        />
        <LandingProductFeature
          title="Luke Marsden"
          description="CEO, helix.ml. Tech Lead for Bacalhau and Project Bravo @ Protocol Labs. Founder, MLOps Consulting. Early Docker API"
          imageSrc={luke}
        />
        <LandingProductFeature
          title="David Aronchick"
          description="Co-founder and CEO, Expanso. Head of Compute Over Data and Bacalhau @ Protocol Labs. Kubernetes’ first non-founding product manager. Google, Microsoft"
          imageSrc={david}
        />
        <LandingProductFeature
          title="Chris Hill"
          description="Co-founder, DeSci Labs"
          imageSrc={chris}
        />
        <LandingProductFeature
          title="Michael Zargham"
          description="Founder and CEO, BlockScience"
          imageSrc={michael}
        />
      </LandingProductFeaturesGrid>
      <LandingBandSection
        title="Want to Try?"
        supportingComponent={
          <>
            <p>
              CoopHive is currently in development. <br />
              <br />
              You can test out a proof-of-concept of a distributed computing
              network built on the previous version of the protocol{" "}
              <a
                className="hover:underline "
                href="https://github.com/CoopHive/dcn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>here</strong>
              </a>
              . <br />
              <br />
              To try out the latest proof-of-concept,{" "}
              <a
                className="hover:underline"
                href="https://alkahest.coophive.network"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong> please see our docs</strong>
              </a>
              . <br />
            </p>
          </>
        }
      />
    </>
  );
}
