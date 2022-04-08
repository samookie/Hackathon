import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

import Partners from "./Partners";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <div id="app" className="landing-page">
      <Header />
      <Container>
        <Partners />
      </Container>
    </div>
  );
}
