import React from 'react';
import styled from 'styled-components';
import SectionLayout from '../common/SectionLayout';
import { Section } from '../../consts';
import foto from './foto.jpg';

const AboutMeWrapper = styled.div`
  max-width: 700px;
  padding: 0 50px;
`;

const StyledText = styled.p`
  line-height: 24px;
`;
const StyledImage = styled.img`
  width: 18rem;
  height: 19rem;
  margin-top: 40px;
  border-radius: 50%;
`;

const AboutMe: React.FC = () => (
  <SectionLayout id={Section.AboutMe} title='Quem sou'>
    <AboutMeWrapper>
      <StyledText>
        Psicóloga graduada pela Faculdade Anhanguera de São Bernardo e pós
        graduanda do curso de Análise do Comportamento aplicada para Autismo e
        Deficiência Intelectual pelo{' '}
        <i>Child Behavior Institute (CBI) of Miami</i>, atuo como Acompanhante
        Terapêutica (AT) com crianças com desenvolvimento atípico em ambiente
        domiciliar, atuei também como AT em ambiente escolar por um período de
        dois anos, realizo atendimentos em psicoterapia infantil e de
        adolescentes na clínica sob supervisão em Análise do Comportamento, faço
        parte de um grupo que realiza treinamento de habilidades parentais para
        pais de crianças com desenvolvimento atípico, o qual temos um e-book
        lançado.{' '}
      </StyledText>
      <StyledImage src={foto} alt='foto'></StyledImage>
    </AboutMeWrapper>
  </SectionLayout>
);

export default AboutMe;
