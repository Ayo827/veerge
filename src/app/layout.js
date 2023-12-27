// app/layout.tsx
import { Providers } from './providers'
import "./style.css";
import Head from 'next/head';

export default function RootLayout({
  children,
}) {
  return (
    <html lang='en'>
      <Head>
        <title>Veege</title>
      </Head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}