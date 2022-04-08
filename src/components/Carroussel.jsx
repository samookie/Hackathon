import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CardGroup, Carousel } from "react-bootstrap";
import Carte from "./Carte";
import imgPartner from "/src/images/partner.jpg";

export default function Carroussel() {
  return (
    <div className="row justify-content-around">
      <div className="col-6">
        <Carousel>
          <Carousel.Item>
            <CardGroup>
              <Carte
                nom="L'ETUDIANT"
                texte="L'Etudiant est un groupe média spécialisé dans l'information sur la formation, les études et les métiers à destination des 15-25 ans. Il conseille les lycéens, les étudiants et leurs parents sur les questions d'orientation scolaire et professionnelle et de formation initiale et continue."
              />
            </CardGroup>
          </Carousel.Item>
          <Carousel.Item>
            <CardGroup>
              <Carte
                nom="Next-U"
                texte="Le groupe Next-U est apparu sur le marché de l'enseignement supérieur en 2010 avec un premier campus ouvert à Bordeaux. Depuis, les Campus de Paris et Lyon ont ouvert leurs portes."
              />
              <Carte
                nom="ISIFA PLUS VALUE"
                texte="Depuis plus de 30 ans, l’école Isifa Plus Values a su développer son offre de formation en vous proposant un accompagnement personnalisé : que ce soit en formation initiale ou en alternance, les diplômes Bac+2 (BTS), Bac+3 (BACHELOR) et Bac+5."
              />
            </CardGroup>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="col-4 zonePartner">
        <div className="title-partner">
          <h1> Our </h1>
          <h1 className="box-partner"> Partners </h1>
        </div>
        <img href="/" src={imgPartner} className="partner-img" />
      </div>
    </div>
  );
}
