import React from "react";
import Carroussel from "./Carroussel";
import FormPartner from "./FormPartner";
import image from "../images/santorini.jpg";
export default function Partners() {
  return (
    <div>
      <h1>
        {" "}
        Les partenaires partagent les risques, les responsabilités et le
        travail. Ils investissent des sommes dans l'entreprise. Ils possèdent
        des compétences complémentaires. Ils ont un réseau de relations
        professionnelles dont bénéficie leur entreprise.{" "}
      </h1>
      <div className="partieThomas">
        <Carroussel />
      </div>
      <div className="partieShenda" style={{ backgroundImage: `url(${image}` }}>
        <h1>Be our </h1>
        <h1 className="partnerT">Partner</h1>

        <FormPartner />
      </div>
    </div>
  );
}
