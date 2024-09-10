import { LandingPrimaryTextCtaSection } from "@/components/landing/cta/LandingPrimaryCta";
import { Bot, Component, Github, Link } from "lucide-react";
import { LandingFeatureList } from "./components/landing/feature/LandingFeatureList";
import { LandingBandSection } from "./components/landing/LandingBand";
import { LandingFaqCollapsibleSection } from "./components/landing/LandingFaqCollapsible";

import bbxImage from "./assets/berkeley_blockchain_xcelerator.png";
import orangeDaoImage from "./assets/orange_dao.png";
import protocolLabsImage from "./assets/protocol_labs.png";
import { Button } from "./components/shared/ui/button";
import { IoLogoGithub } from "react-icons/io5";

import bg1 from "./assets/bg1.png";
import bg2 from "./assets/bg2.png";

export default function Home() {
  const featureItems = [
    {
      icon: <Component />,
      title: "Primitives",
      description:
        "Building blocks to create marketplaces that machines need to meet the demands of future economic activity.",
    },
    {
      icon: <Link />,
      title: "Composable Marketplaces",
      description:
        "With CoopHive, fragmented marketplaces like compute, storage, and bandwidth can be composed seamlessly. ",
    },
    {
      icon: <Bot />,
      title: "Multi-Agent Systems",
      description:
        "Autonomous agents are on the rise. The symphony of their interactions will usher in the next revolution in economics.",
    },
  ];

  const faqItems = [
    {
      question: "Why is this needed?",
      answer: (
        <p>
          Autonomous agents are just beginning to trade simple assets like
          stocks or ETH. In the future, everyone will have an AI agent
          negotiating on their behalf, trading with other agents, buying and
          selling data, compute, and everyday items to meet their personal
          financial goals. <br />
          <br />
          CoopHive is building the only platform that lets agents barter and
          exchange complex combinations of goods and services on behalf of their
          owners. <br />
          <br />
          We are starting with buying and selling compute in a distributed
          network. We will expand to storage, bandwidth, verifiable computing,
          off-chain compute jobs from smart contracts, RWA marketplaces,
          tokenization of latent computing power, bridging, energy, and more.{" "}
          <br />
          <br />
          In the future, CoopHive will be the new Amazon that lets any agent
          exchange goods and services to maximize the utility of the owners they
          represent.
        </p>
      ),
    },
    {
      question: "Why build on EAS?",
      answer: (
        <p>
          See{" "}
          <a
            className="hover:underline"
            href="https://alkahest.coophive.network/Asides.html#why-eas"
            target="_blank"
          >
            <strong>Why EAS?</strong>
          </a>
        </p>
      ),
    },
    {
      question: "Why not tokenize everything?",
      answer: (
        <p>
          See{" "}
          <a
            className="hover:underline"
            href="https://alkahest.coophive.network/Asides.html#why-not-tokens"
            target="_blank"
          >
            <strong>Why Not Tokens?</strong>
          </a>
        </p>
      ),
    },
    {
      question: "How do we improve upon existing DePIN protocols?",
      answer: (
        <p>
          See{" "}
          <a
            className="hover:underline"
            href="https://alkahest.coophive.network/Asides.html#why-not-specialized-networks"
            target="_blank"
          >
            <strong>Why Not Specialized Networks?</strong>
          </a>
        </p>
      ),
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
        <LandingPrimaryTextCtaSection
          titleComponent={<h1 className="text-4xl">Programmable Money Needs <br></br> Programmable Markets</h1>}
          description="CoopHive is building a way for agents to trade and negotiate over anything and everything"
        >
          <div className="flex flex-row gap-2">
            <Button asChild>
              <a
                href="https://alkahest.coophive.network/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium"
              >
                Read our docs
              </a>
            </Button>

            <Button asChild variant="outline">
              <a
                href="https://github.com/coophive"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium"
              >
                <IoLogoGithub size="1.5em" />
                &nbsp; See the code
              </a>
            </Button>
          </div>
        </LandingPrimaryTextCtaSection>
      </div>
      <LandingFeatureList title="What is It?" featureItems={featureItems} />
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
      <LandingPrimaryTextCtaSection title="Backed By" />
      <BackedBy />
    </>
  );
}

function BackedBy() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col lg:flex-row justify-between items-stretch w-full max-w-7xl gap-8">
        {[
          {
            name: "Protocol Labs",
            img: protocolLabsImage,
            desc: "Incubation",
          },
          {
            name: "Berkeley Blockchain Xcelerator",
            img: bbxImage,
            desc: "2024 Cohort",
          },
          {
            name: "OrangeDAO",
            img: orangeDaoImage,
            desc: "Summer 2024 Fellowship",
          },
        ].map((org, index) => (
          <div key={index} className="flex flex-col items-center lg:w-1/3">
            <div className="flex-grow flex items-center justify-center mb-4 lg:mb-8">
              <img src={org.img} alt={org.name} className="max-w-full h-auto" />
            </div>
            <div className="text-center">{org.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
