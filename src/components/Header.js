import { useEffect, useState } from 'react';
import logo from '../images/logo.png';
import '../styles/style.css';
import { Link } from "react-router-dom";

function Header({ active }) {

	const [showNavbar, setShowNavbar] = useState(false);

	const select = (el, all = false) => {
		el = el.trim()
		if (all) {
			return [...document.querySelectorAll(el)]
		} else {
			return document.querySelector(el)
		}
	}

	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
	}
	// useEffect(() => {
	// 	const select = (el, all = false) => {
	// 		el = el.trim()
	// 		if (all) {
	// 			return [...document.querySelectorAll(el)]
	// 		} else {
	// 			return document.querySelector(el)
	// 		}
	// 	}
	
	// 	/**
	// 	 * Easy event listener function
	// 	 */
	// 	const on = (type, el, listener, all = false) => {
	// 		let selectEl = select(el, all)
	// 		if (selectEl) {
	// 			if (all) {
	// 				selectEl.forEach(e => e.addEventListener(type, listener))
	// 			} else {
	// 				selectEl.addEventListener(type, listener)
	// 			}
	// 		}
	// 	}
	
	// 	/**
	// 	 * Mobile nav toggle
	// 	 */
	// 	on('click', '.mobile-nav-toggle', function (e) {
	// 		console.log('Clicked');
	// 		select('#navbar').classList.toggle('navbar-mobile')
	// 		this.classList.toggle('bi-list')
	// 		this.classList.toggle('bi-x')
	// 		console.log('Done');
	// 	})
	
	// 	/**
	// 	 * Mobile nav dropdowns activate
	// 	 */
	// 	// on('click', '.navbar .dropdown > a', function(e) {
	// 	//   if (select('#navbar').classList.contains('navbar-mobile')) {
	// 	//     e.preventDefault()
	// 	//     this.nextElementSibling.classList.toggle('dropdown-active')
	// 	//   }
	// 	// }, true)
	// })
	

	return (
		<header id="header" className="fixed-top d-flex align-items-center">
			<div className="container d-flex align-items-center">
				<div className="logo me-auto">
					{/* <!-- <h1><a href="index.html">Scaffold</a></h1> --> */}
					{/* <!-- Uncomment below if you prefer to use an image logo --> */}
					<div className="row justify-content-start">
						<div className='col-2'>
							<Link to="">
								<img src={logo} alt="" className="img-fluid" />

								{/* <!-- <h1><a href="index.html">Sumadhwa</a></h1> --> */}
							</Link>
						</div>
						<div className='col-10 logo-title'>
							<span>Sumadhwa Consultants</span>
						</div>

					</div>

				</div>

				<nav id="navbar" className={`navbar order-last order-lg-0 ${showNavbar && 'navbar-mobile'}`}>
					<ul>
						<li><Link className={"nav-link scrollto " + (active === "home" ? "active" : "")} to="">Home</Link></li>
						{/* <!-- <li><a className="nav-link scrollto" href="#about">About Us</a></li> --> */}
						<li><Link className={"nav-link scrollto " + (active === "about" ? "active" : "")} to="/about">About</Link></li>
						{/* <li className="dropdown">
            <a href="#" className={"nav-link scrollto " + ((active == "about" || active == "team") ? "active": "")}><span>About</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li>
                <a className={"nav-link scrollto " + (active === "about"? "active": "")} href="/about">Why Sumadhwa</a>
              </li>
              <li>
                <a className={"nav-link scrollto " + (active === "team"? "active": "")} href="/team">Core Team</a>
              </li>
            </ul>
          </li> */}
						<li>
							<Link className={"nav-link scrollto " + (active === "solutions" ? "active" : "")} href="/solutions">Solutions</Link>
						</li>
						<li>
							<Link className={"contact-link nav-link scrollto " + (active === "contact" ? "active" : "")} href="/contact">Contact Us</Link>
						</li>
					</ul>
					<i className={`bi ${showNavbar ? "bi-x": "bi-list"} mobile-nav-toggle`} onClick={handleShowNavbar}></i>
				</nav>
			</div>
		</header>
	);
}

export default Header;
