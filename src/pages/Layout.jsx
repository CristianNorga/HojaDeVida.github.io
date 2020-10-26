import React from "react";
import Nav from "./parts/Nav";
import Aside from "./parts/Aside";
import Footer from './parts/Footer';

const Layout = ({children}) =>
(
<>
    <Nav/>
    <Aside/>
    {children}
    <Footer/>
</>
);

export default Layout;