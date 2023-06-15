import React, { ReactNode } from 'react';
// import Content from '../NavBar/Content';
import Box from '../NavBar/Box';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Box
    css={{
      maxW: '100%',
    }}
  >
    {children}
    {/* <Content /> */}
  </Box>
);

export default Layout;