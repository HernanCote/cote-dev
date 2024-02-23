import { Inter } from 'next/font/google';
import './globals.css';

import TransitionProvider from '@/components/TransitionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hernán Cote - Software Craftsman | .NET & React Expert | 9+ Years of Experience',
  description: 'Build high-impact applications with Hernán Cote, a seasoned Full-Stack Engineer specializing in .NET backend and React frontend development. Leverage his 9+ years of expertise to bring your ideas to life with efficiency, scalability, and user-centricity. Explore his portfolio to discover his diverse projects and exceptional problem-solving skills.',
  keywords: ['Full-Stack Engineer', '.NET', 'React', 'Azure', 'AWS', 'Cloud Computing', 'Portfolio', 'Software Development', 'Web Development', 'Backend', 'Frontend', 'Problem Solving', 'Scalability', 'User Experience'],
  author: 'Hernán Cote (@HernanCote)',
  image: '/hero.png',
  url: 'https://hernancote.com',
  type: 'website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
