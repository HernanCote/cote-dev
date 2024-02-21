import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/common';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hernán Cote - Full-Stack Engineer | .NET & React Expert | 9+ Years of Experience',
  description: 'Build high-impact applications with Hernán Cote, a seasoned Full-Stack Engineer specializing in .NET backend and React frontend development. Leverage his 9+ years of expertise to bring your ideas to life with efficiency, scalability, and user-centricity. Explore his portfolio to discover his diverse projects and exceptional problem-solving skills.',
  keywords: ['Full-Stack Engineer', '.NET', 'React', 'Portfolio', 'Software Development', 'Web Development', 'Backend', 'Frontend', 'Problem Solving', 'Scalability', 'User Experience'],
  author: 'Hernán Cote (@HernanCote)',
  image: '/hero-image.jpg',
  url: 'https://hernancote.com',
  type: 'website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100">
          <div className='h-24'>
            <Navbar />
          </div>
          <div className='h-[calc(100vh-6rem)]'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
