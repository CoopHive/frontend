
import Background from '@/assets/background-4.png'
import Background2 from '@/assets/bee-theif.png' 
import Background3 from '@/assets/about-background-2.png'

import Levi from '@/assets/portraits/levi.jpg'
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
    name: 'Yang Zheng',
    title: 'Architect',
    image: Yang,
    bio: 'Prev mmon Co., Mana Finance Co., Matrix Inc.,',
  },
  {
    name: 'Taylor Hulsmans',
    title: 'Engineer',
    image: Taylor,
    bio: 'Prev at Molecule, Sigmadex, HedgeTrade \n OSS contributor @ IPFS, Filecoin, various DeSci projects'
  },
  {
    name: 'Matteo Manzi',
    title: 'Researcher',
    image: Matteo,
    bio: 'Financial Machine Learning Quantitative Researcher. MSc Aerospace Engineer @ TU Delft. Prev CrunchDAO, European Space Agency, Marie Skłodowska-Curie Research Network'
  },
  {
    name: 'Aayushi Jain',
    title: 'Software Engineering Intern',
    image: Aayushi,
    bio: 'EECS @ UC Berkeley, 2025 \n Machine Learning Research Apprentice - Squishy Robotics \n Cybersecurity Intern - Deloitte'
  },
  {
    name: 'Vardhan Shorewala',
    title: 'Software Engineering Intern',
    image: Vardhan,
    bio: 'EECS and Business Administration @ UC Berkeley, 2026 \n Amazon, IEEE, UCSF/LBNL'
  },
  {
    name: 'Pratham Dave',
    title: 'Software Engineering Intern',
    image: Pratham,
    bio: 'CS and Math @ Cornell, 2027'
  },
]

const advisorPortraitData = [
  {
    name: 'Kai Davenport',
    image: Kai,
    bio: 'Architect for Bacalhau and Project Bravo, Protocol Labs \n Tech Lead, Momentum \n Mythical 10x engineer in the flesh'
  },
  {
    name: 'Luke Marsden',
    image: Luke,
    bio: 'CEO, helix.ml \n Tech Lead for Bacalhau and Project Bravo, Protocol Labs \n Founder, MLOps Consulting \n Early Docker API'
  },
  {
    name: 'David Aronchick',
    image: David,
    bio: 'Co-founder and CEO, Expanso \n Head of Compute Over Data and Bacalhau, Protocol Labs \n Kubernetes’ first non-founding product manager \n Google, Microsoft'
  },
  {
    name: 'Chris Hill',
    image: Chris,
    bio: 'Co-founder, DeSci Labs'
  },
  {
    name: 'Michael Zargham',
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
      textAlign: 'center'}}>Mission</h2>
      <div
        className="flex-row-wrap card-container"
       >
        <div className="card">
          <h2 className="card-title">Economic Empowerment through Agentic Representation</h2>
          <p className="card-content">Autonomous agents will soon be representing our interests and engaging in economic activity on our behalves. CoopHive empowers these agents by providing a platform where they can learn from, and cooperate with, each other.</p>
        </div>
        <div className="card">
          <h2 className="card-title">Marketplaces As Public Goods</h2>
          <p className="card-content">Token-agnostic, no-fee marketplaces. </p>
        </div> 
        <div className="card">
          <h2 className="card-title">Tokenization of Idle Computing Power</h2>
          <p className="card-content">Hardware is underutilized all around the world. The space of potentially valuable computations is infinite. CoopHive connects the dots by putting otherwise wasted resources to good use.</p>
        </div> 
      </div>
    </div>
    <div
      className="pane background-pane"
      style={{
        backgroundImage: `url(${Background2})`,
      }}
    >
      <h2 className="flex-row-wrap" style={{ alignItems: 'center', height: '23vw', fontSize: '5.5vw', textAlign: 'center'}}>Team</h2>
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

