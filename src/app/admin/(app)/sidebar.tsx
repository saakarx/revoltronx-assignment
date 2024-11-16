'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { HouseIcon, LayoutTemplateIcon, ShoppingBagIcon } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { NavUser } from './nav-user';

const links = [
  { title: 'Dashboard', url: '/admin', icon: HouseIcon },
  { title: 'Products', url: '/admin/products', icon: ShoppingBagIcon },
  { title: 'Blogs', url: '/admin/blogs', icon: LayoutTemplateIcon },
];

export function AdminSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const isActive = (url: string) => pathname === url;

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <NavUser
          user={{
            avatar:
              'https://images.unsplash.com/photo-1715615685666-882710b534f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
            email: 'saakarg615@gmail.com',
            name: 'Saakar Gogia',
          }}
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {links.map(link => (
                <SidebarMenuItem key={link.title}>
                  <SidebarMenuButton asChild isActive={isActive(link.url)}>
                    <a href={link.url}>
                      <link.icon />
                      {link.title}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
