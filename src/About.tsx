
import Background from '@/assets/background-4.png'
import Background2 from '@/assets/bee-theif.png' 
import Background3 from '@/assets/about-background-2.png'

import Levi from '@/assets/portraits/levi.jpg'
import Vlad from '@/assets/portraits/vlad_radu.jpeg'
import Yang from '@/assets/portraits/yang_zheng_cropped.jpg'
import Aayushi from '@/assets/portraits/aayushi_jain.jpeg'
import Taylor from '@/assets/portraits/taylor_hulsmans.jpg'
import Vardhan from '@/assets/portraits/vardhan_shorewala.jpeg'
import Pratham from '@/assets/portraits/pratham_dave.jpeg'
import Matteo from '@/assets/portraits/matteo.jpeg'

import Kai from '@/assets/portraits/kai_davenport.jpeg'
import Luke from '@/assets/portraits/luke_marsden.jpeg'
import David from '@/assets/portraits/aronchick.jpeg'
import Chris from '@/assets/portraits/chris-hill.jpeg'
import Michael from '@/assets/portraits/michael_zargham.jpg'

import { Link } from 'react-router-dom'

const teamPortraitData = [
  {
    name: 'Levi Rybalov',
    title: 'Founder',
    image: Levi,
    bio: 'Levi has been working in the intersection of mechanism design and distributed computing since 2017. Most recently he was at Protocol Labs, conducting research on game-theoretic verifiable computing, and autonomous agents for pricing and scheduling in distributed computing networks.'
  },
  {
    name: 'Vlad Radu',
    title: 'VP Engineering',
    image: Vlad,
    bio: 'PhD in Wireless Network Sensors @  University Politehnica of Bucharest, 2026 \n Prev at GoPro, Ethernity Cloud, Antler Interactive, Xperi Corporation, Human, Vartos, Luxoft, NXP Semiconductors'
  },
  {
    name: 'Yang Zheng',
    title: 'Software Architect',
    image: Yang,
    bio: 'Prev mmon Co., Mana Finance Co., Matrix Inc.,',
  },
  {
    name: 'Aayushi Jain',
    title: 'R&D',
    image: Aayushi,
    bio: 'EECS @ UC Berkeley, 2025 \n Machine Learning Research Apprentice - Squishy Robotics \n Cybersecurity Intern - Deloitte'
  },
  {
    name: 'Taylor Hulsmans',
    title: 'Senior Software Engineer',
    image: Taylor,
    bio: 'Prev at Molecule, Sigmadex, HedgeTrade \n OSS contributor @ IPFS, Filecoin, various DeSci projects'
  },
  {
    name: 'Vardhan Shorewala',
    title: 'R&D',
    image: Vardhan,
    bio: 'EECS and Business Administration @ UC Berkeley, 2026 \n Amazon, IEEE, UCSF/LBNL'
  },
  {
    name: 'Pratham Dave',
    title: 'R&D',
    image: Pratham,
    bio: 'CS and Math @ Cornell, 2027'
  },
  {
    name: 'Matteo Manzi',
    title: 'Senior Quantitative Researcher',
    image: Matteo,
    bio: 'Financial Machine Learning Quantitative Researcher. MSc Aerospace Engineer @ TU Delft. Prev CrunchDAO, European Space Agency, Marie Skłodowska-Curie Research Network'
  }
]

const advisorPortraitData = [
  {
    name: 'Kai Davenport',
    title: 'Advisor',
    image: Kai,
    bio: 'Architect for Bacalhau and Project Bravo, Protocol Labs \n Tech Lead, Momentum \n Mythical 10x engineer in the flesh'
  },
  {
    name: 'Luke Marsden',
    title: 'Advisor',
    image: Luke,
    bio: 'CEO, helix.ml \n Tech Lead for Bacalhau and Project Bravo, Protocol Labs \n Founder, MLOps Consulting \n Early Docker API'
  },
  {
    name: 'David Aronchick',
    title: 'Advisor',
    image: David,
    bio: 'Co-founder and CEO, Expanso \n Head of Compute Over Data and Bacalhau, Protocol Labs \n Kubernetes’ first non-founding product manager \n Google, Microsoft'
  },
  {
    name: 'Chris Hill',
    title: 'Advisor',
    image: Chris,
    bio: 'Co-founder, DeSci Labs'
  },
  {
    name: 'Michael Zargham',
    title: 'Advisor',
    image: Michael,
    bio: 'Founder and CEO, BlockScience'
  }

]

export const  About  = () => {

  return (<>
    <div
      className="pane background-pane"
      style={{
        backgroundImage: `url(${Background})`,
      }}>
      <h2 className="flex-row-wrap" style={{
      alignItems: 'center',
      fontSize: '5.5vw',
      textAlign: 'center'}}>Our Mission</h2>
      <div
        className="flex-row-wrap card-container"
       >
        <div className="card">
          <h2 className="card-title">Unlocking Latent Computing Resources</h2>
          <p className="card-content">The world is short on computing resources, yet much is underutilized.  Coophive is united in the vision of unlocking Latent Computing Resources</p>
        </div>
        <div className="card">
          <h2 className="card-title">Cryptographic incentivization of edge compute</h2>
          <p className="card-content">data and compute monopolies are price gouging projects for little reason other than the inability to economically coordinate edge resources </p>
        </div>
        <div className="card">
          <h2 className="card-title">FAIR data and economic attribution</h2>
          <p className="card-content">Today everyone is a knowledge worker, but without adequate compensation the line between servant and employee is blurry.  Coophive hopes to return fair wages to data economies through FAIR data and economic attribution</p>
        </div>
      </div>
    </div>
    <div
      className="pane background-pane"
      style={{
        backgroundImage: `url(${Background2})`,
      }}
    >
      <h2 className="flex-row-wrap" style={{ alignItems: 'center', height: '23vw', fontSize: '5.5vw', textAlign: 'center'}}>Our Team</h2>
      <div
        className="flex-row-wrap"
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >{
        teamPortraitData.map((portrait, i) => {
          return (
            <div key={i+"portrait"} className="portrait-card">
              <h2
                style={{
                  padding: '1vh 1vw'
                }}
              >{portrait.name}</h2>
              <img 
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
              src={portrait.image} alt={portrait.name} />
              <h2>{portrait.title}</h2>
              <p style={{width: '400px', padding:'2vh, 0vw' }}>{portrait.bio}</p>
            </div>
          )
        })
        }
        <h2 className="flex-row-wrap" style={{ justifyContent: 'center', alignItems: 'center', width: '100vw',  fontSize: '5.5vw', textAlign: 'center'}}>Advisors</h2>

      { advisorPortraitData.map((portrait, i) => {
        return (
          <div key={i+"portrait"} className="portrait-card">
            <h2
              style={{
                padding: '1vh 1vw'
              }}
            >{portrait.name}</h2>
            <img 
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
              }}
            src={portrait.image} alt={portrait.name} />
            <h2>{portrait.title}</h2>
            <p style={{width: '400px', padding:'2vh, 0vw' }}>{portrait.bio}</p>
          </div>
        )
      })}
      </div>
    </div>
    <div
      className="pane background-pane"
        style={{
          backgroundImage: `url(${Background3})`,
      }}>
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
  </>)
}

