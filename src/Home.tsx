import Background from "@/assets/about-background.png";
import Background2 from "@/assets/bee-theif.png";
import Background3 from "@/assets/about-background-2.png";

import protocolLabsImage from "@/assets/protocol_labs_transparent_background_cropped.png";
import berkeleyImage from "@/assets/berkeley_blockchain_xcelerator_2_background_removed_cropped_resized.png";
import orangeDaoImage from "@/assets/orange_dao_background_removed.png";

export const Home = () => {
  return (
    <>
      <div
        className="pane background-pane"
        style={{
          backgroundImage: `url(${Background})`,
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "5.5vw" }}>CoopHive</h1>
        <h2
          style={{ marginTop: "5vw", fontSize: "3.4vw", textAlign: "center" }}
        >
          Like Amazon, but for Autonomous Agents
        </h2>
      </div>

      <div
        className="pane background-pane"
        style={{
          backgroundImage: `url(${Background2})`,
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            alignItems: "center",
            fontSize: "5.5vw",
            textAlign: "center",
          }}
        >
          What Are We Building?
        </h1>
        <div
          className="flex-row-wrap card-container"
          style={{ marginTop: "5vw" }}
        >
            <div className="card">
              <h2 className="card-title">Primitives</h2>
              <p className="card-content" style={{  paddingTop: "20px", marginTop: "-50px" }}>
                Building blocks to create marketplaces that machines need to meet
                the demands of future economic activity.
              </p>
            </div>
            <div className="card">
              <h2 className="card-title">Composable Marketplaces</h2>
              <p className="card-content" style={{ paddingTop: "20px", marginTop: "-46px" }}>
                With CoopHive, fragmented marketplaces like compute, storage, and
                bandwidth can be composed seamlessly. And that's only the
                beginning.
              </p>
            </div>
            <div className="card">
              <h2 className="card-title">Multi-Agent Systems</h2>
              <p className="card-content" style={{ paddingTop: "20px", marginTop: "-50px" }}>
                Autonomous agents are on the rise. The symphony of their interactions
                will usher in the next revolution in economics.
              </p>
            </div>
          </div>
      </div>

      <div
        className="pane background-pane"
        style={{
          backgroundImage: `url(${Background3})`,
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "3.618vw",
            marginTop: "10vw",
          }}
        >
          Why Are We Building It?
        </h1>
        <div
          style={{
            padding: '1vw',
            display: "flex",
            flexDirection: "column",
            marginTop: "5vw",
            width: "61.8vw",
            height: "61.8vh",
            backgroundColor: 'rgba(0, 0, 0, 0.055)',
            backdropFilter: 'blur(9px)',
            fontSize: "1.2em",
            overflowY: 'scroll',
            scrollbarWidth: 'none',
          }}
        >
          <p>
            Autonomous agents are just beginning to trade simple assets like
            stocks or ETH. In the future, everyone will have an AI agent
            negotiating on their behalf, trading with other agents, buying and
            selling data, compute, and everyday items to meet their personal
            financial goals.
          </p><br/>
          <p>
            CoopHive is building the only platform that lets agents barter and
            exchange complex combinations of goods and services on behalf of
            their owners.
          </p><br/>
          <p>
            We are starting with buying and selling compute in a distributed
            network. We will expand to storage, bandwidth, verifiable computing,
            off-chain compute jobs from smart contracts, RWA marketplaces,
            tokenization of latent computing power, bridging, energy, and more.
          </p><br/>
          <p>
            In the future, CoopHive will be the new Amazon that lets any agent
            exchange goods and services to maximize the utility of the owners
            they represent.
          </p><br/>
        </div>
      </div>
      <div
        className="pane background-pane"
        style={{
          backgroundImage: `url(${Background3})`,
        }}
      >
        <h1
          className=""
          style={{
            alignItems: "center",
            fontSize: "3.618vw",
            textAlign: "center",
          }}
        >
          Want to Try?
        </h1>
        <div
          className="section-content"
          style={{
            padding: '1vw',
            display: "flex",
            flexDirection: "column",
            marginTop: "5vw",
            width: "61.8vw",
            height: "61.8vh",
            backgroundColor: 'rgba(0, 0, 0, 0.055)',
            backdropFilter: 'blur(9px)',
            fontSize: "1.2em",
            overflowY: 'scroll',
            scrollbarWidth: 'none',
          }}
        >
          <p>
            CoopHive is currently in development. 
          </p>
          <p>
            You can test out a proof-of-concept of a distributed computing network built on the previous version of the protocol
            <a
              target="_blank"
              href="https://github.com/CoopHive/dcn"
              className="navlink"
              style={{ textDecoration: 'underline', marginLeft: '13px', marginRight: '-20px' }}
            >
              here
            </a>
            .
            </p>
            <p>
            To try out the latest proof-of-concept,
            <a
              target="_blank"
              href="https://alkahest.coophive.network/"
              className="navlink"
              style={{ textDecoration: 'underline',  marginLeft: '13px', marginRight: '-20px' }}
            >
              please see our docs
            </a>
            .
          </p>
        </div>
      </div>
      <div
        className="pane background-pane"
        style={{
          backgroundImage: `url(${Background3})`,
        }}
      >
        <h1
          className=""
          style={{
            alignItems: "center",
            fontSize: "5.5vw",
            textAlign: "center",
          }}
        >
          Backed By
        </h1>
        <div
          className="flex-row-wrap"
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5vw",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              height: "161px"
            }}
            className="portrait-card">
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            src={protocolLabsImage} alt="Protocol Labs" />
            <h2>Incubation</h2>
          </div>
          <div style={{ height: "161px" }} className="portrait-card">
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            src={berkeleyImage} alt="Berkeley Blockchain Xcelerator" />
            <h2>2024 Cohort</h2>
          </div>
          <div style={{ height: "161px" }} className="portrait-card">
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            src={orangeDaoImage} alt="Orange DAO" />
            <h2>Summer 2024 Fellowship</h2>
          </div>
        </div>
        {/*
        <div
          className="grid-container card-container"
          style={{
            marginTop: "5vw",
          }}
        >
          <div className="grid-item">
            <img src={protocolLabsImage} alt="Protocol Labs" />
          </div>
          <div className="grid-item">
            <img src={berkeleyImage} alt="Berkeley Blockchain Xcelerator" />
          </div>
          <div className="grid-item">
            <img src={orangeDaoImage} alt="Orange DAO" />
          </div>
          <div className="grid-item">
            <h2 className="card-title" style={{ fontSize: "3em" }}>
              Incubation
            </h2>
            <p className="card-content"></p>
          </div>
          <div className="grid-item">
            <h2 className="card-title" style={{ fontSize: "3em" }}>
              2024 Cohort
            </h2>
            <p className="card-content"></p>
          </div>
          <div className="grid-item">
            <h2 className="card-title" style={{ fontSize: "3em" }}>
              Summer 2024 Fellowship
            </h2>
            <p className="card-content"></p>
          </div>
        </div>
        */}
      </div>
    </>
  );
};
