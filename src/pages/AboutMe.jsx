import React from "react";
import Document from "../pages/parts/Document";
import HighlightOfMe from "../components/HighlightOfMe"
import StatsAboutMe from "../components/StatsAboutMe"

const AboutMe = () =>
(
<>
    <Document title="Sobre mi">
        <HighlightOfMe/>
        <StatsAboutMe/>
    </Document>
</>
);

export default AboutMe;