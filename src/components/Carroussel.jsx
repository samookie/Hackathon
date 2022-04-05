import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CardGroup, Carousel } from "react-bootstrap";
import Carte from "./Carte";

export default function Carroussel() {
  return (
    <div class="row justify-content-start">
      <div class="col-8">
        <Carousel>
          <Carousel.Item>
            <CardGroup>
              <Carte
                nom="Thomas"
                texte="Sed bibendum sapien ac dui porta viverra in quis nunc. Nunc ac justo at lorem consequat hendrerit ac vel arcu. Vivamus ultrices tellus hendrerit ante convallis feugiat. Cras eu sem arcu. Vestibulum venenatis a nunc sit amet luctus."
              />
              <Carte
                nom="Shenda"
                texte="Sed bibendum sapien ac dui porta viverra in quis nunc. Nunc ac justo at lorem consequat hendrerit ac vel arcu. Vivamus ultrices tellus hendrerit ante convallis feugiat. Cras eu sem arcu. Vestibulum venenatis a nunc sit amet luctus."
              />
              <Carte
                nom="Adrien"
                texte="Sed bibendum sapien ac dui porta viverra in quis nunc. Nunc ac justo at lorem consequat hendrerit ac vel arcu. Vivamus ultrices tellus hendrerit ante convallis feugiat. Cras eu sem arcu. Vestibulum venenatis a nunc sit amet luctus."
              />
            </CardGroup>
          </Carousel.Item>
          <Carousel.Item>
            <CardGroup>
              <Carte
                nom="Test"
                texte="Sed bibendum sapien ac dui porta viverra in quis nunc. Nunc ac justo at lorem consequat hendrerit ac vel arcu. Vivamus ultrices tellus hendrerit ante convallis feugiat. Cras eu sem arcu. Vestibulum venenatis a nunc sit amet luctus."
              />
              <Carte
                nom="Teest"
                texte="Sed bibendum sapien ac dui porta viverra in quis nunc. Nunc ac justo at lorem consequat hendrerit ac vel arcu. Vivamus ultrices tellus hendrerit ante convallis feugiat. Cras eu sem arcu. Vestibulum venenatis a nunc sit amet luctus."
              />
              <Carte
                nom="Teeest"
                texte="Sed bibendum sapien ac dui porta viverra in quis nunc. Nunc ac justo at lorem consequat hendrerit ac vel arcu. Vivamus ultrices tellus hendrerit ante convallis feugiat. Cras eu sem arcu. Vestibulum venenatis a nunc sit amet luctus."
              />
            </CardGroup>
          </Carousel.Item>
          <Carousel.Item>
            <CardGroup>
              <Carte
                nom="1"
                texte="Sed bibendum sapien ac dui porta viverra in quis nunc. Nunc ac justo at lorem consequat hendrerit ac vel arcu. Vivamus ultrices tellus hendrerit ante convallis feugiat. Cras eu sem arcu. Vestibulum venenatis a nunc sit amet luctus."
              />
              <Carte
                nom="2"
                texte="Sed bibendum sapien ac dui porta viverra in quis nunc. Nunc ac justo at lorem consequat hendrerit ac vel arcu. Vivamus ultrices tellus hendrerit ante convallis feugiat. Cras eu sem arcu. Vestibulum venenatis a nunc sit amet luctus."
              />
              <Carte
                nom="3"
                texte="Sed bibendum sapien ac dui porta viverra in quis nunc. Nunc ac justo at lorem consequat hendrerit ac vel arcu. Vivamus ultrices tellus hendrerit ante convallis feugiat. Cras eu sem arcu. Vestibulum venenatis a nunc sit amet luctus."
              />
            </CardGroup>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
