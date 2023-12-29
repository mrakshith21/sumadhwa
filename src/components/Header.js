import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import '../styles/style.css';

function Header({active}) {

  console.log(active);

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center">
      <div className="logo me-auto">
        {/* <!-- <h1><a href="index.html">Scaffold</a></h1> --> */}
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
        <div className="row justify-content-start">
          <div className='col-2'>
            <a href="/sumadhwa">
              <img src={logo} alt="" className="img-fluid" />            
              
              {/* <!-- <h1><a href="index.html">Sumadhwa</a></h1> --> */}
            </a>
          </div>
          <div className='col-10 logo-title'>
            <span>Sumadhwa Consultants</span>
          </div>
         
        </div>
        
      </div>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className={"nav-link scrollto " + (active === "home"? "active": "")} href="/sumadhwa">Home</a></li>
          {/* <!-- <li><a className="nav-link scrollto" href="#about">About Us</a></li> --> */}
          <li><a className={"nav-link scrollto " + (active === "about"? "active": "")} href="/sumadhwa/about">About</a></li>
          {/* <li className="dropdown">
            <a href="#" className={"nav-link scrollto " + ((active == "about" || active == "team") ? "active": "")}><span>About</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li>
                <a className={"nav-link scrollto " + (active === "about"? "active": "")} href="/sumadhwa/about">Why Sumadhwa</a>
              </li>
              <li>
                <a className={"nav-link scrollto " + (active === "team"? "active": "")} href="/sumadhwa/team">Core Team</a>
              </li>
            </ul>
          </li> */}
          <li>
            <a className={"nav-link scrollto " + (active === "solutions"? "active": "")} href="/sumadhwa/solutions">Solutions</a>
          </li>
          <li>
            <a className={"contact-link nav-link scrollto " + (active === "contact"? "active": "")} href="/sumadhwa/contact">Contact Us</a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>
  );
}

export default Header;
