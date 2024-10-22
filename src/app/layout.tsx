import "./globals.css";
import MainProvider from "./MainProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        <MainProvider>
          {children}
        </MainProvider>
      </body>
    </html>
  );
}
