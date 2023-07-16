import React, {Component}  from "react"
import Navbar from "./Navbar";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Cart from "./Cart";
import Customers from "./Customers";
import Product from "./Product";
import Page404 from "./Page404";
import { Route, Routes } from "react-router-dom";
export default class App extends Component {
render(){
    return (
        <React.Fragment>
            <Navbar/>
                <Routes>
                    <Route path="/" exact Component={Login} />
            
                    <Route path="/cart" exact Component={Cart} />
             
                    <Route path="/customers" exact Component={Customers} />
             
                    <Route path="/dashboard" exact Component={Dashboard} />
               
                    <Route path="/product" exact Component={Product} />
              
                    <Route path="*"  Component={Page404} />
                </Routes>
        </React.Fragment>
    ) 
}
}