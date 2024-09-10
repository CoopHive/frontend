import { useState } from "react";
import Logo from "@/assets/coophive-logo-greyscale.png";
import { Link } from "react-router-dom";
import  Select from 'react-dropdown-select';
import { useWindowSize } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const { width } =  useWindowSize();
  const navigate = useNavigate();
  const options =  [
    {
      value: '/about',
      label: 'About'
    },
    {
      value: 'https://github.com/coophive',
      label: 'GitHub'
    },
    {
      value: 'https://alkahest.coophive.network',
      label: 'Docs'
    },
    {
      value: 'https://alkahest.coophive.network/whitepaper.pdf',
      label: 'Whitepaper'
    },
    {
      value: 'https://discord.com/invite/b4XpHz6N73',
      label: 'Discord'
    },
    {
      value: 'https://x.com/coophive',
      label: 'Twitter'
    },
  ]

  const [ values, setValues ] = useState(options);



  return (
    <div
      className="navbar"
      style={{
        zIndex: "9999",
        padding: "1vh 1vw",
        position: "fixed",
        width: "100%",
      }}
    >
      <div
        className="flex-row-wrap"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          height: width > 720 ? "8vh" : "auto",  // Adjust height for smaller screens
          padding: width > 720 ? "0" : "1vh 0",  // Add padding for smaller screens
        }}
      >
        <div className="flex-row-wrap" style={{ alignItems: "center" }}>
          <Link to="/">
            <img
              style={{ height: width > 720 ? "61.8px" : "50px" }}  // Reduce logo size on small screens
              src={Logo}
              alt="logo"
            />
          </Link>
          <h2 style={{ padding: " 0 1vw" }}>CoopHive</h2>
        </div>
        <div className="flex-row-wrap" style={{ alignItems: "center" }}>
          { width > 720 ? (<>
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
              </>):(<div style={{paddingRight: "5vw"}}>
                <Select options={options} onChange={(values) => { 
                  setValues(values)
                  if ( values[0].label == "About" ) {
                    navigate('/about')
                  } else {
                    window.open(values[0].value)
                  }
                }} />
                </div>) 
          }
        </div>
      </div>
    </div>
  );
};
