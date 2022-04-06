import React from "react";
import Formulaire from "./Formulaire";
import Carroussel from "./Carroussel";
import FormPartner from "./FormPartner";
import image from "../images/santorini.jpg";
export default function Partners() {
  return (
    <div>
      <div className="partieThomas">
        <Carroussel />
      </div>
      <div className="partieShenda" style={{ backgroundImage: `url(${image}` }}>
        <FormPartner />
      </div>
    </div>
  );
}
