import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/software_engineer.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Aligneer</h1>
          <h4>Aligning what's important...</h4>
          <Button as={AnchorLink} href="#contact">
            Want to know more?
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="ALT1:Aligneer, aligning what's important..." />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
