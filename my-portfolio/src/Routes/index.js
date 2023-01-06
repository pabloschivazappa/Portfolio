import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";


const Layout = () => {
    return (
        <>
        <Header />
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
        <Contact />
        <Footer />
        </>
    )
}

export default Layout;