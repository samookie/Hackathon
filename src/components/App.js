import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Partners from "./Partners";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div id="app" className="landing-page">
      <Header />
      <Partners />
      <Footer />
    </div>
  );
}
