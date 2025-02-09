// app/layout.tsx (ou app/layout.js)
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>API IMG</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
