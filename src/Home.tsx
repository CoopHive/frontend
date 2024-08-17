import Background from '@/assets/about-background.png'
import Background2 from '@/assets/about-background-2.png'
export const  Home  = () => {

  return (<>
    <div
      className="pane"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
      <h1>Coophive.network</h1>
      <h2 style={{paddingTop: '5vh'}}>Empowering DePin with EAS Composables</h2>
    </div>
    <div
      className="pane"
      style={{
        backgroundImage: `url(${Background2})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85.4vw'
        }}>
        <div className="card">
          <h3>Break Cloud Monopolist Vendor Lock in</h3>
          <p>Coophive tooling enables bringing your tech stack off the cloud and into the edge</p>
        </div>
        <div className="card">
          <h3>Focii for Compute Resources</h3>
          <p>Storage, Bandwith and Processing marketplaces are heterogenous and fragmented</p>
          <p>With EAS Attestation chaining, we can link them together pragmatically</p>
        </div>
        <div className="card">
          <h3>Enhancing Verifiability</h3>
          <p>There is no silver bullet for computational verification</p>
          <p>Though EAS Isomorphism, we gain access to an entire ecosystem of verification resources</p>
        </div>
        <div className="card">
          <h3>Offchain Speed, Onchain Provenance</h3>
          <p>Seemlessly bridge the trust gap between trusted and untrusted compute as needed with offchain message passing</p>
        </div>
      </div>
    </div>
  </>)
}

