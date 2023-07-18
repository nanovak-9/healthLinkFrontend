import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom"; 
import nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="http://localhost:5173/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Login" >Login</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Register">Register</Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" to="/Dashboard">Dashboard</a>
      </li>
    </ul>
  </div>
</nav>
    </>
  );
}

export default ColorSchemesExample;