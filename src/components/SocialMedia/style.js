import styled from "styled-components";

const ContactWrapper = styled.div`
  display: flex;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactImg = styled.img`
  height: 30px;
  padding: 2px;

  :hover {
    transform: scale(1.1);
  }
`;

export { ContactWrapper, ContactImg };
