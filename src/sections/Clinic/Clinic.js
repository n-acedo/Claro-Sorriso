import React from "react";
import {
  ClinicWrapper,
  Title,
  TextClinic,
  TriangleImg,
  Carousel,
} from "./style";
import "react-awesome-slider/dist/styles.css";

import Triangle from "../../assets/triangle.png";
import Clinic1 from "../../assets/photos/clinic1.png";
import Clinic2 from "../../assets/photos/clinic2.png";
import Clinic3 from "../../assets/photos/clinic3.png";
import Clinic4 from "../../assets/photos/clinic4.png";
import Clinic5 from "../../assets/photos/clinic5.png";
import Clinic6 from "../../assets/photos/clinic6.png";
import Clinic7 from "../../assets/photos/clinic7.png";

function Clinic() {
  return (
    <ClinicWrapper>
      <Title>
        Conheça a clínica
        <TriangleImg src={Triangle} />
      </Title>
      <TextClinic>
        Ambiente acolhedor e moderno, com equipamentos de alta qualidade e
        tecnologia.
      </TextClinic>

      <Carousel>
        <div data-src={Clinic2} />
        <div data-src={Clinic1} />
        <div data-src={Clinic3} />
        <div data-src={Clinic4} />
        <div data-src={Clinic5} />
        <div data-src={Clinic6} />
        <div data-src={Clinic7} />
      </Carousel>
    </ClinicWrapper>
  );
}

export default Clinic;
