import SectionLayout from '@/components/layouts/SectionLayout';
import React from 'react';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return <SectionLayout>{children}</SectionLayout>;
}
