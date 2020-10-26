import React from "react";
import { BrowserRouter, Switch ,Route } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import Formation from "../pages/Formation";
import NotFount from "../pages/NotFound";
import Layout from "../pages/Layout";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={AboutMe}/>
                <Route exact path="/formacion" component={Formation}/>
                <Route component={NotFount}/>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;