import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '병찬의 포트폴리오',
  description: '병찬의 포트폴리오',
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
