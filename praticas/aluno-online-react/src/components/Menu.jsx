import './Menu.css'
import {Link, NavLink} from 'react-router'

function Menu() {
  

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
           <NavLink to="/">Boletos</NavLink>
        </li>
        <li>
           <NavLink to="/">Faltas</NavLink>
        </li>
        <li>
           <NavLink to="/">Notas</NavLink>
        </li>
        <li>
           <Link to="/">Requerimentos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;