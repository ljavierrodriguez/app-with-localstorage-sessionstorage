import React, {useState, useEffect, useContext} from 'react';
import { Context } from './../store/appContext';
import { Link, withRouter, useHistory} from 'react-router-dom';

const Navbar = props => {
    const {store, actions} = useContext(Context);
    const history = useHistory();

    useEffect(() => {
        if(!store.isAuth) history.push("/login");

    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    
    { (!!store.currentUser && store.currentUser.user.role.name === "Admin") && (
      <li className="nav-item">
        <Link className="nav-link" to="/settings">Settings</Link>
      </li>
    )}
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          { store.currentUser !== null ? store.currentUser.user.username : "username" }
        </a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">

        { store.currentUser !== null ? 
        (
            <a className="dropdown-item" href="/#" onClick={(e) => {
                e.preventDefault();
                actions.logout(history);
            }}>Logout</a>
        ):(
            <Link className="dropdown-item" to="/login">Login</Link>
        )}
         
          
        </div>
      </li>
    </ul>
    
  </div>
</nav>
    )
}

export default withRouter(Navbar);