import './reset.scss'
import './global.scss';

import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '500', '700', '900']
});

export const metadata = {
  title: 'NextJS-Sanity Blog',
  description: 'A simple blog using NextJS framework and Sanity for backend.'
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
