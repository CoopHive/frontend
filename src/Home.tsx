import Background from '@/assets/about-background.png'
import Background2 from '@/assets/bee-theif.png' 
import Background3 from '@/assets/about-background-2.png'
export const  Home  = () => {

  return (<>
    <div
      className="pane background-pane"
      style={{
        backgroundImage: `url(${Background})`,
        justifyContent: 'center',

      }}>
      <h1 style={{fontSize: '5.5vw'}}>Coophive.network</h1>
      <h2 style={{fontSize: '3.4vw', textAlign: 'center'}}>Empowering DePin with EAS Composables</h2>
    </div>
    <div
      className="pane background-pane"
      style={{
        backgroundImage: `url(${Background2})`,
      }}
    >
      <h1 className="flex-row-wrap" style={{
      alignItems: 'center',
      fontSize: '5.5vw',
      textAlign: 'center'}}>About</h1>
      <div
        className="flex-row-wrap card-container"
       >
        <div className="card">
          <h2 className="card-title">End Cloud Monopolist Vendor Lock in</h2>
          <p className="card-content">Coophive tooling enables bringing your tech stack off the cloud and onto the edge</p>
        </div>
        <div className="card">
          <h2 className="card-title">Focii for Compute Resources</h2>
          <p className="card-content">Storage, Bandwith and Processing marketplaces are heterogenous and fragmented- with EAS Attestation chaining, we can link and exchange them together pragmatically</p>
        </div>
        <div className="card">
          <h2 className="card-title">Enhancing Verifiability</h2>
          <p className="card-content">There isno silver bullet for computational verification- through EAS Isomorphism, we gain access to an entire ecosystem of verification resources</p>
        </div>
      </div>
    </div>
    <div
      className="pane background-pane"
        style={{
          backgroundImage: `url(${Background3})`,
      }}>
        <h1 className="flex-row-wrap"
        style={{
          alignItems: 'center',
          fontSize: '5.5vw',
          textAlign: 'center'
      }}>Partnerships</h1>
        <div 
          className="flex-row-wrap card-container"
          >
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
    </div>
  </>)
}

