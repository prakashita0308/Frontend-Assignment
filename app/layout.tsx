import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Quiz - Frontend Assignment',
  description: 'Pixel-perfect quiz UI'
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
