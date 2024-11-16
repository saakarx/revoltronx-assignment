import React from 'react';

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { AdminSidebar } from './sidebar';

function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <SidebarProvider>
        <AdminSidebar />

        <SidebarInset>
          <header className='flex h-16 shrink-0 items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
          </header>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </React.Fragment>
  );
}

export default AdminRootLayout;
