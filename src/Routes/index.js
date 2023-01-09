import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";


const Layout = () => {
    return (
        <>
        <Header />
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        </>
    )
}

export default Layout;