import { CartWidget } from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link to='/'>
        <h3>Ecommerce</h3>
      </Link>

      <div>
        <NavLink to={'/category/celular'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
        <NavLink to={'/category/tablet'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tablets</NavLink>
        <NavLink to={'/category/notebook'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Notebooks</NavLink>
      </div>
      <CartWidget />
    </nav>
  )
}
