import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #191717ff' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '10px',  textDecoration: 'none', justifyContent: 'space-evenly', fontSize: '30px' }}>
        <li><Link to="/" style={{textDecoration:'none', color:'blue', fontWeight:'bold'}}>Home</Link></li>
        <li><Link to="/about" style={{textDecoration:'none', color:'blue', fontWeight:'bold'}} >About</Link></li>
            <li><Link to="/services" style={{textDecoration:'none', color:'blue', fontWeight:'bold'}}>Services</Link></li>
        <li><Link to="/contact" style={{textDecoration:'none', color:'blue', fontWeight:'bold'}}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;