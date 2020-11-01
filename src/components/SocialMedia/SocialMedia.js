import { useHoverIcon } from "../../hooks/useHoverIcon";

import { ContactWrapper, ContactImg } from "./style";

import WhatsappIcon from "../../assets/icons/whatsapp.png";
import WhatsappIconColor from "../../assets/icons/whatsapp-color.png";
import InstagramIcon from "../../assets/icons/instagram.png";
import InstagramIconColor from "../../assets/icons/instagram-color.png";
import FacebookIcon from "../../assets/icons/facebook.png";
import FacebookIconColor from "../../assets/icons/facebook-color.png";

function SocialMedia() {
  const [whatsapp, setWhatsapp] = useHoverIcon(false);
  const [instagram, setInstagram] = useHoverIcon(false);
  const [facebook, setFacebook] = useHoverIcon(false);

  const renderIcon = (hover, icon, iconColor, setBoolean) => {
    if (!hover) {
      return (
        <ContactImg
          src={icon}
          alt="ícone rede social"
          onMouseEnter={setBoolean}
          onMouseLeave={setBoolean}
        />
      );
    }

    return (
      <ContactImg
        src={iconColor}
        alt="ícone rede social"
        onMouseEnter={setBoolean}
        onMouseLeave={setBoolean}
      />
    );
  };

  return (
    <ContactWrapper>
      <a
        href="https://api.whatsapp.com/send?1=pt_BR&amp;phone=5511998787878"
        target="blank"
      >
        {renderIcon(whatsapp, WhatsappIcon, WhatsappIconColor, setWhatsapp)}
      </a>
      <a
        href="https://www.facebook.com/Claro-Sorriso-Odontologia-104499468048543"
        target="blank"
      >
        {renderIcon(facebook, FacebookIcon, FacebookIconColor, setFacebook)}
      </a>
      <a href="https://www.instagram.com/claro_sorriso/" target="blank">
        {renderIcon(instagram, InstagramIcon, InstagramIconColor, setInstagram)}
      </a>
    </ContactWrapper>
  );
}

export default SocialMedia;
