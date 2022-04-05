import React from "react";
import Formulaire from "./Formulaire";
import Carroussel from "./Carroussel";
import FormPartner from "./FormPartner";

export default function Partners() {
  return (
    <div>
      <div className="partieThomas">
        <Carroussel />
      </div>
      <div className="partieShenda">
        <FormPartner />
      </div>
    </div>
  );
}
