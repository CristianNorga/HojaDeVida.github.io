import React from "react";
import Document from './parts/Document';
import Error404 from "../components/Error404";

const NotFound = () =>
(
<>
    <Document title="Error 404">
        <Error404/>
    </Document>
</>
);

export default NotFound;