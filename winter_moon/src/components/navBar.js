import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './navBar.css'
import ContactUs from './ContactUs';
import GetStarted from './getStarted';
import Login from './login';


function NavBar(props) {

    const [show, setShow] = useState(false);

    const handleShow = (e) => {
        e.preventDefault();
        setShow(true);}

    const handleLogout=(e) => {
        e.preventDefault();
        props.setIsLoggedIn(false);
        localStorage.clear();
    };
   
  return (
    <div>
        <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light nav-bg-color">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand nav-item" style={{color: '#6A2C70'}}>
                    Navbar 
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        <li className="nav-item">
                            <Link to='/contactus' className="nav-link active" aria-current="page" style={{color: '#6A2C70'}}>Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link" style={{color: '#6A2C70'}}>Link</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                        
                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {props.IsLoggedIn? <Link className="nav-link" href="/" style={{color: '#6A2C70'}} onClick={(e)=> handleLogout(e)}>Logout</Link>:
                            <Link className="nav-link" to="/login" style={{color: '#6A2C70'}}>Login</Link>}
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
            <Switch>
                <Route  path="/contactus">
                    <ContactUs />
                </Route>
                <Route exact path="/">
                    <GetStarted />
                </Route>
                <Route  path="/login">
                    <Login show={true}/>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>

  );
}

export default NavBar;