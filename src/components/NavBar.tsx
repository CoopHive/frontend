import Logo from '@/assets/coophive-logo.png'
import { Link } from 'react-router-dom'
export const NavBar = () => {

  return  (
    <div style={{
      margin: '1vh 1vw',
      position: 'fixed',
      width: '98%'
      }}>
      <div
        style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          minHeight: '61.8px',
          height:'8vh',
        }}
      >
        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <Link to="/"><img style={{ height:'61.8px'}} src={Logo} alt="logo" /></Link>
          <h2 style={{padding: ' 0 1vw'}}>Coophive</h2>
        </div>
        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <Link to="/about" className="navlink">About</Link>
          <a target="_blank" href="https://github.com/coophive" className="navlink">Github</a>
          <a target="_blank" href="https://x.com/CoopHive" className="navlink">Twitter</a>
          <a target="_blank" href="https://discord.gg/MRMwcK7Uxy" className="navlink">Discord</a>
          <a target="_blank" href="https://docs.co-ophive.network" className="navlink">Docs</a>
        </div>
      </div>
    </div>
  )
}
