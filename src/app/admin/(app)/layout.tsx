import React from 'react';

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AdminSidebar } from './sidebar';

function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <SidebarProvider>
        <AdminSidebar />

        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </React.Fragment>
  );
}

export default AdminRootLayout;
