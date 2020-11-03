import { HeaderWrapper, LogoImg, SiteContent, MenuContainer } from "./style";

import LogoCS from "../../assets/logo1.jpeg";
import SocialMedia from "../SocialMedia";
import MenuIcon from "../../assets/icons/menu.png";

function Header() {
  return (
    <HeaderWrapper>
      <LogoImg src={LogoCS} alt="logo Claro Sorriso" />
      <SiteContent>
        <p>Clínica</p>
        <p>Tratamentos</p>
        <p>Equipe</p>
        <p>Contato</p>
        <SocialMedia />
      </SiteContent>
      <MenuContainer>
        <img src={MenuIcon} alt="ícone menu" />
      </MenuContainer>
    </HeaderWrapper>
  );
}

export default Header;
