import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import PageNavigation from '@/components/PageNavigation';
import GlobalLayout from '@/components/layouts/GlobalLayout';
import ArticleLayout from '@/components/layouts/ArticleLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Front-End Interview Prep',
  description: 'A place for me to share my front-end interview tips with my future self and others',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <PageNavigation />
        <GlobalLayout>
          <ArticleLayout>{children}</ArticleLayout>
        </GlobalLayout>
      </body>
    </html>
  );
}
