import {Component} from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">eCommerce</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/customers">Customers</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/cart">Shopping cart</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}