import React, { useState } from 'react';
import { StyledBanner, StyledBannerHeading, StyledHeader } from './style';

import Sidebar from './Sidebar';
import { useMediaQuery } from '../../helpers/customHooks';
import Navbar from './Navbar';

const Header: React.FC = () => {
  const { isTablet } = useMediaQuery();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  //asas
  return (
    <StyledHeader>
      <Navbar toggleSidebar={toggleSidebar} />
      {isTablet && isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
      <StyledBanner>
        <StyledBannerHeading>Soraya Oliveira CRP:05/22222</StyledBannerHeading>
      </StyledBanner>
    </StyledHeader>
  );
};

export default Header;
