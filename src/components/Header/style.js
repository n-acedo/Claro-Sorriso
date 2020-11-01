import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  background-color: #062c51;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const SiteContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;

  p {
    font-size: 1em;
    font-weight: lighter;
    text-transform: uppercase;
  }

  @media (max-width: 812px) {
    display: none;
  }
`;

const LogoImg = styled.img`
  height: 70px;
`;

const MenuContainer = styled.div`
  display: none;

  @media (max-width: 812px) {
    display: flex;
    align-items: center;

    img {
      margin: 0;
      height: 40px;
    }
  }
`;

export { HeaderWrapper, LogoImg, SiteContent, MenuContainer };
