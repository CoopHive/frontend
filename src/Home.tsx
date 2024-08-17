import Background from '@/assets/about-background.png'
import Background2 from '@/assets/about-background-2.png'
import Background3 from '@/assets/bee-theif.png' 
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
      <h1 style={{fontSize: '9.0vw'}}>Coophive.network</h1>
      <h2 style={{fontSize: '3.4vw', textAlign: 'center'}}>Empowering DePin with EAS Composables</h2>
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
      <h2 className="flex-row-wrap" style={{ alignItems: 'center', height: '23vw', fontSize: '5.5vw', textAlign: 'center'}}>About</h2>
      <div
        className="flex-row-wrap"
      style={{
        justifyContent: 'space-around',
        width: '94.4vw',
        flexShrink: 0,
        }}>
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
      className="pane"
        style={{
          backgroundImage: `url(${Background3})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
      }}>
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
    </div>
  </>)
}

