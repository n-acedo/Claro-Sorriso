import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";

const ClinicWrapper = styled.section`
  margin-top: 80px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  border-bottom: 1px #d99a2e solid;
  padding-bottom: 20px;
  color: #d99a2e;
  font-size: 50px;
  width: 65%;
  text-align: center;
  text-transform: uppercase;
  font-weight: lighter;
  position: relative;

  @media (max-width: 812px) {
    width: 70%;
    font-size: 40px;
  }

  @media (max-width: 720px) {
    width: 90%;
    font-size: 20px;
    padding-bottom: 10px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const TriangleImg = styled.img`
  height: 15px;
  position: absolute;
  bottom: -15px;
  left: 50%;

  @media (max-width: 720px) {
    height: 10px;
    bottom: -10px;
    left: 45%;
  }
`;

const TextClinic = styled.p`
  width: 70%;
  font-size: 18px;
  text-align: center;
  margin-top: 30px;
  color: #333333;

  @media (max-width: 812px) {
    font-size: 16px;
    width: 90%;
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

const Carousel = styled(AwesomeSlider)`
  z-index: 1;
  margin: 30px;
  height: 70%;
  width: 75%;

  --slider-transition-duration: 500ms;
  --organic-arrow-border-radius: 10px;
  --organic-arrow-color: #062c51;
  --control-bullet-color: #2d5182;
  --control-bullet-active-color: #062c51;
  --loader-bar-color: #d99a2e;

  @media (max-width: 812px) {
    width: 90%;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export { ClinicWrapper, Title, TextClinic, TriangleImg, Carousel };
