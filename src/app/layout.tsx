import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Thays - 15 anos</title>
        <link rel="icon" href="/envelope.png" sizes="any" />
      </head>
      <body
        className={`overflow-clip overscroll-none antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
