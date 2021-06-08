import React from 'react';
import styled from 'styled-components';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from '../common/Button';
import { CSS_MEDIA_QUERY } from '../../theme/consts';
import { useMediaQuery } from '../../helpers/customHooks';

const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.textWhite};
  height: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;

const StyledDescription = styled.p`
  font-size: 12px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ContactButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 270px;

  @media ${CSS_MEDIA_QUERY.MIN_MOBILE_L} {
    width: 350px;
  }
`;

const Footer: React.FC = () => {
  const { isMobile } = useMediaQuery();
  const buttonSize = isMobile ? 'normal' : 'large';
  return (
    <FooterWrapper>
      <ContactButtonsWrapper>
        <Button
          iconName={faWhatsapp}
          href='tel:+5511999999999'
          type='contact'
          ariaLabel='Whatsapp'
          size={buttonSize}
        />
        <Button
          iconName={faInstagram}
          href='insta da soraya'
          type='contact'
          ariaLabel='Instagram'
          size={buttonSize}
        />
        <Button
          iconName={faEnvelope}
          href='mailto:emaildasoraya'
          type='contact'
          ariaLabel='E-mail'
          size={buttonSize}
        />
      </ContactButtonsWrapper>
      <StyledDescription>Todos os direitos reservados © 2021</StyledDescription>
    </FooterWrapper>
  );
};

export default Footer;
