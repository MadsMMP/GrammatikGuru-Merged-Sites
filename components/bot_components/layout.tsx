import React from 'react';
import AppNavbar from './navbar';

interface BotLayoutProps {
  children?: React.ReactNode; // Make children optional
}

const BotLayout: React.FC<BotLayoutProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <AppNavbar />
      <div style={{ flexGrow: 1, padding: '2rem' }}>{children}</div>
    </div>
  );
};

export default BotLayout;