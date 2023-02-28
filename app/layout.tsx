import './globals.css'

export const metadata = {
  title: 'Christopher Phiri',
  description: 'My personal website, learn about me',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
