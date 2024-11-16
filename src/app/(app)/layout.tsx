import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
