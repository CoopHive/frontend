import Logo from "@/assets/coophive-logo-greyscale.png";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div
      className="navbar"
      style={{
        zIndex: "9999",
        padding: "1vh 1vw",
        position: "fixed",
        width: "98%",
      }}
    >
      <div
        className="flex-row-wrap"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "94.4px",
          height: "8vh",
        }}
      >
        <div className="flex-row-wrap" style={{ alignItems: "center" }}>
          <Link to="/">
            <img style={{ height: "61.8px" }} src={Logo} alt="logo" />
          </Link>
          <h2 style={{ padding: " 0 1vw" }}>CoopHive</h2>
        </div>
        <div className="flex-row-wrap" style={{ alignItems: "center" }}>
          <Link to="/about" className="navlink">
            About
          </Link>
          <a
            target="_blank"
            href="https://github.com/coophive"
            className="navlink"
          >
            GitHub
          </a>
          <a
            target="_blank"
            href="https://alkahest.coophive.network"
            className="navlink"
          >
            Docs
          </a>
          <a
            target="_blank"
            href="https://alkahest.coophive.network/Whitepaper.html"
            className="navlink"
          >
            Whitepaper
          </a>
          <a
            target="_blank"
            href="https://discord.gg/b4XpHz6N73"
            className="navlink"
          >
            Discord
          </a>
          <a target="_blank" href="https://x.com/CoopHive" className="navlink">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};
