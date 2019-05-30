import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import GlobalStyles from '../../utils/styles/global';
import theme from '../../utils/styles/theme';

import ScrollToTop from '../UI/scrollToTop/scrollToTop';
import Navbar from '../navigation/navbar/navbar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: var(--background);
  color: var(--text);
  transition: color 0.2s ease-out, background 0.2s ease-out;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Layout = ({ children }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Navbar
          showScrollUp={() => setShowScrollTop(true)}
          hideScrollTop={() => setShowScrollTop(false)}
        />
        <StyledMain>{children}</StyledMain>
        {showScrollTop && <ScrollToTop />}
        <GlobalStyles />
      </Wrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
