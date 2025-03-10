import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

function Navbar() {
    const state = useSelector((state) => state.handleCart)
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ml-10 py-3 bg-white shadow-sm">
            <NavLink className="navbar-brand font-bold" to="/">
                LA COLLECTION
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse ml-20" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>                
            </div>
            <div className="buttons mr-5">
                <NavLink to="/login" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in me-1 ms-2 px-3 py-2"></i>Login</NavLink>
                <NavLink to="/register" className="btn btn-outline-dark ms-2 px-3 py-2">
                    <i className="fa fa-user-plus me-1"></i>Register</NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-3 py-2">
                    <i className="fa fa-shopping-cart me-1"></i>Cart({state.length})</NavLink>
            </div>
        </nav>
    </>
  );
}

export default Navbar;
