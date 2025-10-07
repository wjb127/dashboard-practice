'use client';

import { Sidebar } from './sidebar';
import { Header } from './header';
import { Breadcrumb, BreadcrumbItem } from './breadcrumb';

interface DashboardLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
}

export function DashboardLayout({ children, breadcrumbs }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden pl-64">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="mb-4">
              <Breadcrumb items={breadcrumbs} />
            </div>
          )}
          {children}
        </main>
      </div>
    </div>
  );
}
