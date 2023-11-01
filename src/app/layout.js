import '../styles/reset.scss';
import '../styles/global.scss';

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
