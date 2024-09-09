import Background from "@/assets/background-4.png";
import Background2 from "@/assets/bee-theif.png";
import Background3 from "@/assets/about-background-2.png";

import Levi from "@/assets/portraits/levi.jpg";
import Yang from "@/assets/portraits/yang_zheng_cropped.jpg";
import Aayushi from "@/assets/portraits/aayushi_jain.jpeg";
import Taylor from "@/assets/portraits/taylor_hulsmans.jpg";
import Vardhan from "@/assets/portraits/vardhan_shorewala.jpeg";
import Pratham from "@/assets/portraits/pratham_dave.jpeg";
import Matteo from "@/assets/portraits/matteo.jpeg";

import Kai from "@/assets/portraits/kai_davenport.jpeg";
import Luke from "@/assets/portraits/luke_marsden.jpeg";
import David from "@/assets/portraits/aronchick.jpeg";
import Chris from "@/assets/portraits/chris-hill.jpeg";
import Michael from "@/assets/portraits/michael_zargham.jpg";

import { Link } from "react-router-dom";
import { useWindowSize } from "@uidotdev/usehooks";
const teamPortraitData = [
  {
    name: "Levi Rybalov",
    title: "Founder",
    image: Levi,
    bio: <>
      Levi works on mechanism design, distributed computing, verifiable computing, and multi-agent systems. Before founding CoopHive, he was at Protocol Labs researching the intersection of game theory and distributed computing networks.
    </>,
  },
  {
    name: "Yang Zheng",
    title: "Architect",
    image: Yang,
    bio: <>
      Prev mmon Co., Mana Finance Co., Matrix Inc.,
    </>,
  },
  {
    name: "Taylor Hulsmans",
    title: "Engineer",
    image: Taylor,
    bio: <>
      Prev at Molecule, Sigmadex, HedgeTrade <br /> 
      OSS contributor @ IPFS, Filecoin, various DeSci projects
    </>,
  },
  {
    name: "Matteo Manzi",
    title: "Researcher",
    image: Matteo,
    bio: <>
      Financial Machine Learning Quantitative Researcher. MSc Aerospace Engineer @ TU Delft. Prev CrunchDAO, European Space Agency, Marie Skłodowska-Curie Research Network
    </>,
  },
  {
    name: "Aayushi Jain",
    title: "Software Engineering Intern",
    image: Aayushi,
    bio: <>
      EECS @ UC Berkeley, 2024 <br />
      Coinbase, Deloitte, Squishy Robotics
    </>,
  },
  {
    name: "Vardhan Shorewala",
    title: "Software Engineering Intern",
    image: Vardhan,
    bio: <>
      EECS and Business Administration @ UC Berkeley, 2026 <br /> 
      Amazon, IEEE, UCSF/LBNL
    </>,
  },
  {
    name: "Pratham Dave",
    title: "Software Engineering Intern",
    image: Pratham,
    bio: <>
      CS and Math @ Cornell, 2027
    </>,
  },
];

const advisorPortraitData = [
  {
    name: "Kai Davenport",
    title: "Advisor",
    image: Kai,
    bio: <>
      Architect for Bacalhau and Project Bravo @ Protocol Labs <br />
      Tech Lead, Momentum <br />
      Mythical 10x engineer in the flesh
    </>,
  },
  {
    name: "Luke Marsden",
    title: "Advisor",
    image: Luke,
    bio: <>
      CEO, helix.ml <br />
      Tech Lead for Bacalhau and Project Bravo @ Protocol Labs <br />
      Founder, MLOps Consulting <br />
      Early Docker API
    </>,
  },
  {
    name: "David Aronchick",
    title: "Advisor",
    image: David,
    bio: <>
      Co-founder and CEO, Expanso <br />
      Head of Compute Over Data and Bacalhau @ Protocol Labs <br />
      Kubernetes’ first non-founding product manager <br />
      Google, Microsoft
    </>,
  },
  {
    name: "Chris Hill",
    title: "Advisor",
    image: Chris,
    bio: "Co-founder, DeSci Labs",
  },
  {
    name: "Michael Zargham",
    title: "Advisor",
    image: Michael,
    bio: "Founder and CEO, BlockScience",
  },
];

export const About = () => {
  const { width, height } = useWindowSize();
  return (
    <>
      <div
        className="pane background-pane"
        style={{
          paddingTop: width < 930 ? "30vh" :"0",
          height: width < 930 ? "130vh" : "100vh",
          backgroundImage: `url(${Background})`,
        }}
      >
        <h2
          className="flex-row-wrap"
          style={{
            alignItems: "center",
            fontSize: "5.5vw",
            textAlign: "center",
          }}
        >
          Mission
        </h2>
        <div className="flex-row-wrap card-container">
          <div className="card">
            <h2 style={{fontSize: "1.2em"}}className="card-title">
              Economic Empowerment via Agentic Representation
            </h2>
            <p className="card-content">
              Autonomous agents will soon be engaging in economic activity on your behalf. 
              CoopHive empowers your agents by providing a platform where they can learn from,
              and cooperate with, other agents.
            </p>
          </div>
          <div className="card">
            <h2 style={{fontSize: "1.2em"}} className="card-title">Neutral Marketplaces</h2>
            <p className="card-content" style={{ marginBottom: "64px", marginTop: "-50px" }}>
              Token-agnostic, no-fee marketplaces.{" "}
            </p>
          </div>
          <div className="card">
            <h2 style={{fontSize: "1.2em"}} className="card-title">Tokenization of Idle Computing Power</h2>
            <p className="card-content">
              Hardware is underutilized all around the world. The space of
              potentially valuable computations is infinite. CoopHive turns 
              trash into treasure by putting otherwise wasted resources to good use.
            </p>
          </div>
        </div>
      </div>
      <div
        className="pane background-pane"
        style={{
          paddingTop: width < 930 ? "30vh" :"0",
          backgroundImage: `url(${Background2})`,
        }}
      >
        <h2
          className="flex-row-wrap"
          style={{
            alignItems: "center",
            height: "23vw",
            fontSize: "5.5vw",
            textAlign: "center",
          }}
        >
          Team
        </h2>
        <div
          className="flex-row-wrap"
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          {teamPortraitData.map((portrait, i) => {
            return (
              <div key={i + "portrait"} className="portrait-card">
                <h2
                  style={{
                    padding: "1vh 1vw",
                  }}
                >
                  {portrait.name}
                </h2>
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                  src={portrait.image}
                  alt={portrait.name}
                />
                <h2>{portrait.title}</h2>
                <p style={{ width: "380px", paddingLeft: '30px' }}>
                  {portrait.bio}
                </p>
              </div>
            );
          })}
          <h2
            className="flex-row-wrap"
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100vw",
              fontSize: "5.5vw",
              textAlign: "center",
            }}
          >
            Advisors
          </h2>

          {advisorPortraitData.map((portrait, i) => {
            return (
              <div key={i + "portrait"} className="portrait-card">
                <h2
                  style={{
                    padding: "1vh 1vw",
                  }}
                >
                  {portrait.name}
                </h2>
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                  src={portrait.image}
                  alt={portrait.name}
                />
                <h2>{portrait.title}</h2>
                <p style={{ width: "380px", paddingLeft: '30px' }}>
                  {portrait.bio}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="pane background-pane"
        style={{
          backgroundImage: `url(${Background3})`,
        }}
      >
        {/*
        <h2 className="flex-row-wrap" style={{ alignItems: 'center', height: '23vw', fontSize: '5.5vw', textAlign: 'center'}}>Partnerships</h2>
        <div 
          className="flex-row-wrap"
          style={{
          justifyContent: 'space-around',
          width: '94.4vw',
          }}>
        <div className="card">
          <h2 className="card-title">Protocol Labs</h2>
          <p className="card-content">The future of computing is on the edge</p>
        </div>
        <div className="card">
          <h2 className="card-title">Berkeley Blockchain Accelerator</h2>
          <p className="card-content">The future of computing is on the edge</p>
        </div>
        <div className="card">
          <h2 className="card-title">Orange DAO</h2>
          <p className="card-content">The future of computing is on the edge</p>
        </div>
      </div>
      */}
      </div>
    </>
  );
};
