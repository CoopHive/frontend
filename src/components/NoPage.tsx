import { Link } from 'react-router-dom'

export const NoPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      }}>
      <h1>Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  )
}
