import React from 'react';
import styled from 'styled-components';
import SectionLayout from '../common/SectionLayout';
import { Section } from '../../consts';

const AboutMeWrapper = styled.div`
  max-width: 700px;
  padding: 0 50px;
`;

const StyledText = styled.p`
  line-height: 24px;
`;
const StyledImage = styled.img`
  width: 17rem;
  height: 17rem;
  margin-top: 40px;
  border-radius: 50%;
`;

const AboutMe: React.FC = () => (
  <SectionLayout id={Section.AboutMe} title='Sobre mim'>
    <AboutMeWrapper>
      <StyledText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
        doloremque. Dolorem doloribus perferendis cum velit maxime ut amet
        tenetur fugiat quaerat corporis, animi ipsa voluptatibus officia,
        praesentium dolor quasi consequuntur! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Illo ab odit sapiente, optio voluptatem
        nemo. Ipsa quo ea excepturi odit laudantium illum. Aperiam placeat
        mollitia nisi corrupti minima assumenda quasi!
      </StyledText>
      <StyledImage
        src='https://lh3.googleusercontent.com/3LPZeW5R9CBx44W5_NtIabsiHiQquEzHEdAfdLNtw_RFViqU2qrgdprIxfdX2F_vXetpsSHmyzi6RSUsiwM0JkgYEo9zK6VzeLDE_zaddu-Mj-8rEp_tUb3mWFyOkEvu7Af7dkGxlicN8Bh70uYpEo4_h54R9bM9Sas7JI3hvN7l16uY5UvARlTYaWofAeTxKSX_OasDj3my01G6slSNtG-r58UvRKMS0Hddoa1a58uJL5zn15vcUbLCDK6kW1rTYtWt2OwSPBapNEOyhZDJAZaHhksfPakGL0pDK5L3r_vjoCnbmMymQ7jku8Ig3ViBgsnORGn-Btk74ucTGdNq-WAJXLh3d1C2vm-XiS-vK1ktGvuDhSJqB1DJW02Ji4Xy29Ez3wdMgR17glfb8ytSCHWAhnx9p9mZD8fJsUj97z9AmmyP5V0_FHf_VZOVpCYp6JTvpGERZVsOPQ1zh1zkEz5Fy9EYhWmitta5wSwrcv5sg9ei3J10KRqTuZN71HnTV74ouWLvscl-YBdv5MhkTALDgqkFElyMvSEkfJDEhgJ1YVuwZA6cOhqzmSx340mqS_6k3bUqAk6vFSddNPeh0WERvpKXnFQ2jyt5hiPT8l_Oi6qm8Ie9-h43DW3vvEXl62dLqOzSLMJ2d89DXhQ914dzaL6z614uLZLNg6jGsqaLu6gNg_mNucFxAspeiUdoVGKMxEUy--nJ0Ia7drYpExQ=w729-h809-no?authuser=0'
        alt='foto'
      ></StyledImage>
    </AboutMeWrapper>
  </SectionLayout>
);

export default AboutMe;
