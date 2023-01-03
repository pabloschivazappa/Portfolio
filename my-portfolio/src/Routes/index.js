import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        <>
        <Header />
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
        <Footer />
        </>
    )
}

export default Layout;