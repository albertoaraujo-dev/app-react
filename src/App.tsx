import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';

import Footer from './components/Footer/Footer';

import GlobalStyle from './theme/GlobalStyle';
import { THEME_DARK_MODE, THEME_LIGHT_MODE } from './theme/consts';

import { ThemeType } from './types';

type StyledProps = {
  theme: ThemeType;
};

const StyledMain = styled.main`
  color: ${(props: StyledProps) => props.theme.textNormal};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundNormal};
`;

const App: React.FC = () => {
  const [isDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? THEME_DARK_MODE : THEME_LIGHT_MODE}>
      <>
        <GlobalStyle />
        <Header />
        <StyledMain>
          <AboutMe />
          <Skills />
        </StyledMain>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
